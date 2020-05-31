<h1 align="center">Amar UI Web</h1>

Amar UI for Web (or simply Amar UI Web) is a CSS library built in Sass/SCSS that follows **Amar Design System** as its primary foundation. Amar UI Web aims to enhance the UI/X development workflow of web projects and applications within Amar Bank.

## Important Links

- [Getting Started](https://amar-ui.tunaiku.com/introduction/getting-started)
- [Naming Convention](https://amar-ui.tunaiku.com/introduction/naming-convention)
- [Foundations](https://amar-ui.tunaiku.com/foundations)
- [Components](https://amar-ui.tunaiku.com/components)

## Installation

Amar UI Web is available via **package managers**.

```bash
$ npm install @amar-ui-web/core
$ yarn add @amar-ui-web/core
```

## Usage

Make sure to have resolve your `node_module` path first in order to be able to use the library. You can find instructions about this at our [Getting Started](https://amar-ui.tunaiku.com/introduction/getting-started) page.

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
