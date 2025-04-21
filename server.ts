import * as http from 'http';
import { IncomingMessage, ServerResponse } from 'http';
import { parse } from 'url';
import * as fs from 'fs';
import * as path from 'path';

const hostname = '127.0.0.1';
const port = 3000;
const DATA_FILE = path.join(__dirname, 'tree.json');

// Load root node from file or initialize new one
let rootNode: { id: string; children: any[] } = { id: 'root', children: [] };
if (fs.existsSync(DATA_FILE)) {
  try {
    const data = fs.readFileSync(DATA_FILE, 'utf-8');
    rootNode = JSON.parse(data);
    console.log('Loaded tree from disk.');
  } catch (err) {
    console.error('Failed to read tree.json:', err);
  }
}

// Save the current root node to disk
function saveToDisk() {
  fs.writeFile(DATA_FILE, JSON.stringify(rootNode, null, 2), err => {
    if (err) {
      console.error('Error saving to disk:', err);
    }
  });
}

const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
  const method = req.method || '';
  const parsedUrl = parse(req.url || '', true);
  const pathname = parsedUrl.pathname;

  res.setHeader('Content-Type', 'application/json');

  // GET: Return the tree
  if (method === 'GET' && pathname === '/tree') {
    res.statusCode = 200;
    res.end(JSON.stringify(rootNode, null, 2));
  }

  // POST: Add a node to the tree
  else if (method === 'POST' && pathname === '/tree') {
    let body = '';

    req.on('data', chunk => {
      body += chunk;
    });

    req.on('end', () => {
      try {
        const parsedBody = JSON.parse(body);

        if (!parsedBody.id) {
          res.statusCode = 400;
          res.end(JSON.stringify({ error: 'Missing "id" in request body' }));
          return;
        }

        const newNode = {
          id: parsedBody.id,
          data: parsedBody.data || {}
        };

        rootNode.children.push(newNode);
        saveToDisk();

        res.statusCode = 201;
        res.end(JSON.stringify({ message: 'Node added', node: newNode }));
      } catch (err) {
        res.statusCode = 400;
        res.end(JSON.stringify({ error: 'Invalid JSON' }));
      }
    });
  }

  // Not Found
  else {
    res.statusCode = 404;
    res.end(JSON.stringify({ error: 'Not Found' }));
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
