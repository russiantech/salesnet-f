# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})

//
/*
Okay, let me explain the difference between placing assets in the `public` folder versus the `src` folder in a React project:

**`public` folder**:
- The `public` folder is the root directory of your React application.
- Assets placed in the `public` folder, such as images, fonts, or other static files, are accessible directly via their relative path from the root.
- For example, if you have an image file `logo.png` in the `public` folder, you can reference it in your React components as `<img src="/logo.png" />`.
- The `public` folder is intended for static assets that don't require any processing or transformation by webpack (the bundler used by Create React App).

**`src` folder**:
- The `src` folder is where you place your React components, utility functions, and other dynamic application code.
- Assets placed in the `src` folder, such as images or other static files, need to be imported into your React components before they can be used.
- For example, if you have an image file `logo.png` in the `src/assets` folder, you would import it in your component like `import logo from './assets/logo.png';` and then use it as `<img src={logo} />`.
- The `src` folder is processed by webpack, which allows for transformations, optimizations, and other processing of the assets.

**When to use `public` vs `src`?**
- Use the `public` folder for static assets that don't require any processing, such as:
  - Favicon
  - Robots.txt
  - Global CSS/SCSS files
  - Font files
- Use the `src` folder for assets that are part of your application's logic, such as:
  - Component-specific images or icons
  - Assets that need to be processed or transformed (e.g., optimized images, SVG components)

The general guideline is to use the `public` folder for assets that should be accessible directly from the root of your application, and the `src` folder for assets that are part of your application's logic and need to be processed by webpack.
*/