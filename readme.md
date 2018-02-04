eslint-config-geocoding
-----------------------
[Shared eslint config](https://eslint.org/docs/developer-guide/shareable-configs) for geocoding team. A very strict config including ES6 features.

### To use this in a project

1. Add the following to the `devDependencies` of your `package.json`:

    ```json
    {
      "devDependencies": {
        "@mapbox/eslint-config-geocoding": "^1.0.0",
        "eslint": "^4.17.0",
        "eslint-plugin-node": "^5.2.1"
      }
    }
    ```

2. Extend the `@mapbox/eslint-config-geocoding` config in your `.eslintrc` (or `eslintConfig` key in your `package.json`):

    ```json
    {
      "extends": "@mapbox/eslint-config-geocoding"
    }
    ```

3. Run `eslint` on your project as part of your `test` and `lint` scripts:

    ```json
    {
      "scripts": {
        "test": "tape test/*.test.js && eslint *.js test/*.js",
        "lint": "eslint *.js test/*.js"
      }
    }
    ```

