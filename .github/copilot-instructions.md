# [MemeWAll]

A brief description of your project, what it does, and its main purpose.

This project is a frontend web application built using React (with Vite), styled with Tailwind CSS (v4 assumed), and utilizing Shadcn/UI for React components.

## Table of Contents

- [\[MemeWAll\]](#memewall)
  - [Table of Contents](#table-of-contents)
  - [Tech Stack](#tech-stack)
  - [Features](#features)
  - [Setup](#setup)
  - [Running the Application](#running-the-application)
    - [Run Development Server](#run-development-server)
  - [Project Structure](#project-structure)
  - [Environment Variables (`client/.env`)](#environment-variables-clientenv)
  - [Available Scripts (`client/package.json`)](#available-scripts-clientpackagejson)
  - [UI Components (Shadcn/UI)](#ui-components-shadcnui)
    - [Adding Components:](#adding-components)
    - [Location:](#location)
    - [Customization:](#customization)
    - [Documentation:](#documentation)
  - [Styling (Tailwind CSS v4)](#styling-tailwind-css-v4)
    - [Configuration:](#configuration)
    - [Global Styles:](#global-styles)
    - [Applying Styles:](#applying-styles)
  - [React \& JSX Best Practices](#react--jsx-best-practices)
  - [License](#license)

## Tech Stack

**Frontend:**

*   **React:** JavaScript library for building user interfaces.
*   **Vite:** Next-generation frontend tooling (Fast HMR, optimized builds).
*   **Shadcn/UI:** Re-usable components built using Radix UI and Tailwind CSS.
*   **Tailwind CSS v4:** Utility-first CSS framework (Note: v4 might have specific setup differences, refer to official docs).
*   **Lucide React:** Beautiful & consistent icons.
*   **Axios / Fetch API:** For making HTTP requests (if interacting with external APIs).

## Features

List the key features of your application:

*   ✨ Feature 1 (e.g., Interactive UI components)
*   ✨ Feature 2 (e.g., Data display and filtering)
*   ✨ Feature 3 (e.g., Responsive Design using Tailwind & Shadcn)
*   ✨ ...add more features as applicable.

## Setup

Assuming you have created the project using `npm create vite@latest` (or similar) and selected React:

1.  **Navigate into your project directory:**
    ```bash
    cd your-project-name
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    # yarn install
    ```
3.  **Initialize Tailwind CSS:** Follow the official Tailwind CSS guide for Vite: [Install Tailwind CSS with Vite](https://tailwindcss.com/docs/guides/vite)
4.  **Initialize Shadcn/UI:** Run the following command from your project root:
    ```bash
    npx shadcn-ui@latest init
    ```
    Follow the prompts to configure `components.json`, `tailwind.config.js`, and global CSS.
5.  **Create `.env` file (if needed):** Create a `.env` file in the project root for environment variables. See the [Environment Variables](#environment-variables-clientenv) section.

## Running the Application

### Run Development Server

Open a terminal window:

```bash
# Make sure you are in the project directory
npm run dev # Usually starts the Vite dev server
```
The frontend development server (powered by Vite) should typically start on `http://localhost:5173` (or another port if 5173 is busy). Check the terminal output and open this URL in your browser.

## Project Structure

A typical Vite + React project structure. Adapt this if your structure differs.

```
your-project-name/ (or client/)
├── public/             # Static assets
├── src/
│   ├── assets/         # Images, fonts, etc.
│   ├── components/     # Reusable UI components
│   │   └── ui/         # Default location for shadcn generated components
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions, API helpers (e.g., axios instance)
│   ├── pages/          # Page-level components/views
│   ├── App.jsx         # Main application component (routing)
│   └── main.jsx        # React entry point
├── .env                # Client environment variables (prefixed with VITE_)
├── .gitignore          # Specifies intentionally untracked files
├── index.html          # HTML entry point for Vite
├── package.json
├── postcss.config.js   # PostCSS config (for Tailwind)
├── README.md           # You are here!
├── tailwind.config.js  # Tailwind v4 configuration
├── tsconfig.json       # (If using TypeScript)
└── vite.config.js      # Vite configuration
```

## Environment Variables (`client/.env`)

Securely manage configuration settings using environment variables. Create a `.env` file in the project root directory. **Do not commit `.env` files to Git.**

Environment variables for the Vite client **must** be prefixed with `VITE_` to be exposed to the browser.

```env
# Example client .env file
VITE_API_BASE_URL=http://api.example.com/v1 # Base URL for external API calls (if any)

# Add other VITE_ prefixed variables if needed (e.g., VITE_GOOGLE_MAPS_KEY)
```


## Available Scripts (`client/package.json`)

These are common scripts found in the `package.json` file. Your actual scripts might differ.

*   `npm run dev`: Starts the Vite development server with Hot Module Replacement (HMR).
*   `npm run build`: Creates an optimized production build of the frontend in the `dist` folder.
*   `npm run preview`: Serves the production build locally to test it before deployment.
*   `npm run lint`: Runs a code linter (like ESLint) for the frontend code.

*(Check the `scripts` section in `package.json` for the exact commands available in your project).*

## UI Components (Shadcn/UI)

This project leverages Shadcn/UI for building the user interface.

### Adding Components:

Use the Shadcn/UI CLI from within the `client` directory to add new components as needed:

```bash
# Navigate to client directory first if you aren't there
cd client
npx shadcn-ui@latest add [component-name]
```
Example: `npx shadcn-ui@latest add button card dialog input`

### Location:

Generated components are typically placed in `client/src/components/ui`. You own this code and can modify it directly.

### Customization:

Modify component styles using Tailwind utility classes directly in your JSX or by customizing Tailwind's theme in `tailwind.config.js`. Global styles can be added in `client/src/index.css` (or your main CSS file).

### Documentation:

Refer to the official [Shadcn/UI Documentation](https://ui.shadcn.com/docs) for component API, usage examples, and theming guides.

## Styling (Tailwind CSS v4)

Tailwind CSS v4 (or the version you are using) provides utility classes for styling.

### Configuration:

The main configuration file is `client/tailwind.config.js`. Tailwind v4 might introduce changes, especially around CSS variables and plugin architecture. Consult the [Tailwind CSS Documentation](https://tailwindcss.com/docs) for your specific version.

### Global Styles:

Base styles, custom CSS, and `@layer` directives are typically managed in `client/src/index.css` (or the CSS file imported in `client/src/main.jsx`).

### Applying Styles:

Add Tailwind utility classes directly to your HTML elements within your React (JSX) components.

## React & JSX Best Practices

*   **Component Naming:** Use PascalCase for component names (e.g., `MyComponent`). Use camelCase for instances (e.g., `<MyComponent />`).
*   **File Naming:** Use PascalCase for component filenames (e.g., `MyComponent.jsx` or `MyComponent.tsx`).
*   **Keep Components Small & Focused:** Each component should ideally do one thing well (Single Responsibility Principle). Break down complex components into smaller, reusable ones.
*   **Use Functional Components & Hooks:** Prefer functional components with Hooks (`useState`, `useEffect`, etc.) over class components for better readability and composability.
*   **Props:**
    *   Use descriptive prop names.
    *   Use prop destructuring for cleaner access: `function MyComponent({ userName, age }) { ... }`.
    *   Consider using TypeScript or `PropTypes` for type checking props, especially in larger projects.
*   **Keys in Lists:** Always provide a unique and stable `key` prop when rendering lists of elements (e.g., using `.map()`). Use unique IDs from your data if possible, avoid using the array index as a key if the list can change order or size.
    ```jsx
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
    ```
*   **Conditional Rendering:** Use clear and concise methods like ternary operators (`condition ? <A /> : <B />`), logical AND (`condition && <A />`), or dedicated variables for conditional rendering. Avoid overly complex inline logic.
*   **JSX Structure:**
    *   Use parentheses `()` for multi-line JSX expressions.
    *   Use fragments (`<>...</>`) when you need to return multiple elements without adding an extra node to the DOM.
*   **Avoid Direct DOM Manipulation:** Let React handle the DOM updates. Use state and props to control the UI. If absolutely necessary (e.g., integrating with third-party libraries), use `useRef`.
*   **Code Formatting & Linting:** Use tools like Prettier and ESLint to enforce consistent code style and catch potential errors early. Configure them according to project standards.

## License

Specify the license under which your project is shared.

Example: This project is licensed under the MIT License. See the `LICENSE.txt` file for more information (if you include a license file).
