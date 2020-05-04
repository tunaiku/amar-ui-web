<h1 align="center">Amar UI Web</h4>

Amar UI for Web (or simply Amar UI Web) is a CSS library built in Sass/SCSS that follows **Amar Design System** as its primary foundation. Amar UI Web aims to enhance the UI/X developemnt workflow of web projects and applications within Amar Bank.

## Installation

Amar UI Web is best installed via **package managers** like `yarn` or `npm`.

```bash
$ npm install @amar-ui-web/core
$ yarn add @amar-ui-web/core
```

## Resolve Sass Include Paths
Upon installation, `@amar-ui-web/core` and other `@amar-ui-web/*` package dependencies will be accessible from inside your project's `node_modules` directory, but you **cannot access them directly just yet**. You'll need to resolve `/node_modules` directory path first since `@amar-ui-web/core` uses *absolute import* to depend on its sub-packages using Sass' `@import`.

To do this, include the `/node_modules` directory into [include paths](https://github.com/sass/node-sass#includepaths) property in your preferred bundler (we recommend webpack). Otherwise, follow the below guidelines for more *framework-specific guides* to setup this part properly.

### Include Paths in Angular 6+
In `angular.json` file, make sure the `node_modules/` is listed as the `includePaths` under the `build.options` configuration to enable the Sass compiler run properly.
```json
{
  "build": {
    ...,
    "options": {
      ...,
      "styles": [
        "src/styles.scss"
      ], 
      // add this line, just below "styles"
      "stylePreprocessorOptions": {
        "includePaths": ["node_modules/"]
      },
    }
  }
}
```

## Usage
Once you're done with the include paths, you should then be able import the package like this:

```scss
@import '@amar-ui-web/core/index.scss';
```

If you would like to import individual packages/modules or its specific abstracts (variables, mixins, functions, etc.), you can do that as well.

```scss
@import '@amar-ui-web/color/index.scss';
@import '@amar-ui-web/typography/index.scss';
```

```scss
/* import specific abstracts like variables, functions, mixins. */
@import '@amar-ui-web/color/scss/variables';
@import '@amar-ui-web/color/scss/mixins';
@import '@amar-ui-web/color/scss/functions';
```

To know more about each package/module features and APIs, please refer to each package documentation.
