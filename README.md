# npm-workspace

Important notes:
 - On `@org/shared` lib, see that "main" points to the JS `dist/index.js` folder, and "types" points to `src/index.ts` to handle types on development.
 - On each package that uses `@org/shared` you have to keep it inside `package.json` "dependencies" array
 - `tsconfig.json` of `server` and `@org/shared` are identical. both complied to CommonJS (using "module" field) and target "ES6".
 - For the client: on `vite.config.ts`, we define the development path of `@org/shared`.
 - For the server: we use `tsconfig-paths/register` on development to make the "paths" field recognize our local shared library.

## Running the Project

You can run the project in different environments, depending on whether you want to work in development or production.

### Development

1. In development, you can run both the React frontend and Node.js backend simultaneously. To do so:

   ```bash
   npm run dev

This command will run:

- `npm run dev:client` – Starts the React application using **Vite**.
- `npm run dev:server` – Starts the Node.js backend with **Nodemon** for automatic reloading.

2. Access the applications:

- The React frontend will be available at http://localhost:5173
- The Node.js backend API will be available at http://localhost:3003

### Production

To run the project in production:

1. Build the client and server:

   ```bash
   npm run build

This will:

   - Build the `@org/shared` package that both client and server needs.
   - Build the React app into static files in the `client/dist` folder using Vite.
   - Build the Node.js server into `server/dist` folder.

2. Run the applications in production mode:

   ```bash
   npm run prod

This command will run:

- `npm run prod:client` – Launch the client in production mode using **Vite Preview** to serve the optimized production build of the React application.
- `npm run prod:server` – Start the server in production mode by executing **Node.js** to run the compiled backend from `dist/index.js`, providing the backend API.
