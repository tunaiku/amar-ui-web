# Amar UI Web

Amar UI for Web (or simply Amar UI Web) is a CSS library built in Sass/SCSS that follows **Amar Design System** as its primary foundation. Amar UI Web primarily aims to enhance the UI/X workflow of web projects and applications within Amar Bank.

## Installation

### Via Package Managers

Amar UI Web is recommended to be installed via package managers such as npm or yarn.

```
npm install @amar-ui-web/core
// or
yarn add @amar-ui-web/core
```

## Usage

Upon installation, `@amar-ui-web/core` and all its child packages will live inside your project's `node_modules` directory, you can't consume it directly just yet. You will need to resolve `node_modules` directory first,since `@amar-ui-web/core` uses absolute import to depend on/import its packages using `@import`.

To do this, include the `node_modules` directory into your [include paths](https://github.com/sass/node-sass#includepaths) property in your preferred bundler (we recommend `webpack`).

Once this done, you can safely import the package like so:

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

Please refer to each package/module documentation to find out more.
