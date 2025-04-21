# 🌳 TypeScript HTTP Tree Server

[![Node.js](https://img.shields.io/badge/Node.js-18.x-brightgreen.svg)](https://nodejs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A lightweight HTTP server built in **TypeScript** using native Node.js modules. It maintains a simple in-memory tree structure, supports basic `GET` and `POST` endpoints, and persists data to a local `tree.json` file.

## 📦 Features

- 📬 `POST /tree`: Add a new child node to the root
- 📥 `GET /tree`: Fetch the full tree structure
- 💾 Persistent storage to `tree.json`
- ⚡️ Zero external dependencies

## 🚀 Quickstart

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/tree-server-ts.git
cd tree-server-ts
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the server

Using npm:

```bash
npm start
```

Or with ts-node:

```bash
npx ts-node server.ts
```

Server runs at http://127.0.0.1:3000

## 📡 API Reference

### GET /tree

Returns the full tree, including all appended child nodes.

```bash
curl http://localhost:3000/tree
```

Response:

```json
{
  "id": "root",
  "children": [
    {
      "id": "node1",
      "data": { "foo": "bar" }
    }
  ]
}
```

### POST /tree

Adds a new child node to the root.

```bash
curl -X POST http://localhost:3000/tree \
  -H "Content-Type: application/json" \
  -d '{"id": "node2", "data": {"note": "hello world"}}'
```

Response:

```json
{
  "message": "Node added",
  "node": {
    "id": "node2",
    "data": { "note": "hello world" }
  }
}
```

> **Note:** The `id` field is required. The `data` field is optional.

## 💾 Persistence

On every POST, the current tree is saved to `tree.json`. On startup, the server restores the latest state from this file.

## 🗂 File Structure

```
tree-server-ts/
├── server.ts        # Main server logic
├── tree.json        # Persistent data store (auto-generated)
├── tsconfig.json    # TypeScript configuration
├── package.json     # Project metadata and scripts
└── README.md        # Project documentation
```

## 🔧 Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start the server |
| `npx ts-node server.ts` | Run directly with ts-node |
| `npm run build` (optional) | Compile TypeScript to JS |


## 📄 License

Licensed under the MIT License.

## 🧑‍💻 Author

Made by David Franklin
