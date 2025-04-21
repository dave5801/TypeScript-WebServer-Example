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