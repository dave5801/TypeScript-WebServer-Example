# 🌳 TypeScript HTTP Tree Server

[![Node.js](https://img.shields.io/badge/Node.js-18.x-brightgreen.svg)](https://nodejs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A minimalist HTTP server built in **TypeScript + Node.js** that manages a simple tree structure with persistent storage to a `tree.json` file.

---

## 🚀 Features

- ✅ Add child nodes via `POST /tree`
- ✅ Retrieve the entire tree with `GET /tree`
- 💾 Auto-persist to disk (`tree.json`)
- ⚡️ No external dependencies — just core Node.js & TypeScript

---

## 📁 Project Structure
tree-server-ts/ 
├── server.ts # Core server logic 
├── tree.json # Persistent tree data (auto-created) 
├── package.json # Project scripts and metadata 
├── tsconfig.json # TypeScript config 
└── README.md

# Project documentation

---

## 🛠 Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/) / [yarn](https://yarnpkg.com/)
- [TypeScript](https://www.typescriptlang.org/) (installed locally or globally)

---

## 🧪 Quickstart

### 1. Clone the repo

```bash
git clone https://github.com/yourusername/tree-server-ts.git
cd tree-server-ts

2. Install dependencies
bash
Copy
Edit
npm install
3. Run the server
Using npm:

bash
Copy
Edit
npm start
Or with ts-node:

bash
Copy
Edit
npx ts-node server.ts
Server runs at http://127.0.0.1:3000

📡 API Reference
GET /tree
Returns the full tree, including all appended child nodes.

bash
Copy
Edit
curl http://localhost:3000/tree
Response:

json
Copy
Edit
{
  "id": "root",
  "children": [
    {
      "id": "node1",
      "data": { "foo": "bar" }
    }
  ]
}
POST /tree
Adds a new child node to the root.

bash
Copy
Edit
curl -X POST http://localhost:3000/tree \
  -H "Content-Type: application/json" \
  -d '{"id": "node2", "data": {"note": "hello world"}}'
Response:

json
Copy
Edit
{
  "message": "Node added",
  "node": {
    "id": "node2",
    "data": { "note": "hello world" }
  }
}
🔐 The id field is required. The data field is optional.

💾 Persistence
On every POST, the current tree is saved to tree.json. On startup, the server restores the latest state from this file.

🗂 File Structure
pgsql
Copy
Edit
tree-server-ts/
├── server.ts        # Main server logic
├── tree.json        # Persistent data store (auto-generated)
├── tsconfig.json    # TypeScript configuration
├── package.json     # Project metadata and scripts
└── README.md        # Project documentation
🔧 Scripts
Command	Description
npm start	Start the server
npx ts-node server.ts	Run directly with ts-node
npm run build (optional)	Compile TypeScript to JS
📌 Roadmap
 Add nested child insertion (under specific node)

 Support PUT, PATCH, and DELETE methods

 Implement query filtering or search

 Add Docker support

 Optional DB backend (e.g., MongoDB, SQLite)

🤝 Contributing
Pull requests welcome! Feel free to open issues or suggest improvements. If you fork this repo, credit is appreciated 🙌

📄 License
Licensed under the MIT License.

🧑‍💻 Author
by: David Franklin

yaml
Copy
Edit
