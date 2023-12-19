# Tifinagh converter

This is the frontend part for the tifinagh converter project built using React.js with typescript and vite.

# Commands

## Start the dev server :

```cmd
npm run dev
```

> If you are using a MacBook and you get an authorization error, use this command instead :

```cmd
sudo npm run dev
```
## Start the mock backend

```cmd
npm run serve-json
```
## Start both the front server and the mock backend 

```cmd
npm run dev-serve-json
```


## Docker container
If you want to run the app on a docker container, dont forget to expose the PORT using the following command :

```cmd
docker run -p 8080:8080 your-docker-image
```

## Run tests


```cmd
npm test
```


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## Patch notes

### 19.12.2023

- Added routes for mock backend.

### 18.12.2023

- Added [swagger file](./swagger.json) for the mocked API server endpoints. 
- Added json server to mock backend.
