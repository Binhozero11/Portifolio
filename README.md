# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the Biome configuration

- Install [biome](https://biomejs.dev/pt-br/guides/getting-started/) and update the config:

- Configure settings.json in .vscode like this:

```js
{
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "biomejs.biome" 
}
```

- create the biome.json file in the project root
- add these rules in the file:

```js
{
    "$schema": "./node_modules/@biomejs/biome/configuration_schema.json",
    "organizeImports": {
      "enabled": true
    },
    "formatter": {
      "indentStyle": "space",
      "indentWidth": 2,
      "lineWidth": 80
    },
    "javascript": {
      "formatter": {
        "arrowParentheses": "asNeeded",
        "jsxQuoteStyle": "double",
        "quoteStyle": "single",
        "semicolons": "asNeeded",
        "trailingCommas": "es5"
      }
    },
    "linter": {
      "enabled": true,
      "rules": {
        "recommended": true,
        "style": {
          "noNonNullAssertion": "off"
        }
      }
    },
    "files": {
      "ignore": [
        "node_modules"
      ]
    }
  }
```
