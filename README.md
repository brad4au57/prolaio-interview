# Cypress TypeScript Interview Test Repository

This repository is a base setup for Cypress end-to-end (E2E) test automation using TypeScript. It is designed for testing web applications with Cypress while leveraging TypeScript for improved type safety and developer experience.

## 📂 Project Structure

```
cypress-ts-test/
├── cypress/
│   ├── integration/       # Contains Cypress test files (.spec.ts)
│   ├── support/           # Custom commands and utilities
│   │   ├── commands.ts    # Custom Cypress commands
│   │   ├── functions.ts   # Helper functions (e.g., date formatting)
│   │   ├── cypress.d.ts   # TypeScript type declarations for Cypress
│   ├── fixtures/          # Test data (JSON, other assets)
│   ├── plugins/           # Cypress plugin configuration
├── node_modules/          # Installed dependencies (ignored in Git)
├── tsconfig.json          # TypeScript configuration
├── cypress.config.ts      # Cypress configuration file
├── package.json           # Project dependencies and scripts
├── .gitignore             # Ignored files and folders
└── README.md              # This documentation file
```

## 🚀 Getting Started

### 1️⃣ Install Dependencies

Ensure you have Node.js and npm installed, then install the project dependencies:

```bash
npm install
```

### 2️⃣ Open Cypress Test Runner

To open the Cypress UI for interactive testing:

```bash
npm run cypress:open
```

### 3️⃣ Run Tests in Headless Mode

To execute tests in the command line without opening the UI:

```bash
npm run cypress:run
```

## 🛠️ Custom Commands and Utilities

This project includes custom commands and helper functions:

- **Custom Cypress Commands** (in `cypress/support/commands.ts`)
- **Helper Functions** (in `cypress/support/functions.ts`)
- **Type Declarations** (in `cypress/support/cypress.d.ts`) to extend Cypress types.

## 📜 License

This project is open-source and available for use and modification.

---

Happy testing! 🚀
