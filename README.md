<h1 align="center">Amar UI Web</h1>

[![GitHub license](https://img.shields.io/github/license/tunaiku/amar-ui-web)](https://github.com/tunaiku/amar-ui-web/blob/master/LICENSE)

Amar UI for Web (or simply Amar UI Web) is a CSS library built in Sass/SCSS that follows **Amar
Design System** as its primary foundation. Amar UI Web aims to enhance the UI/X development workflow
of web projects and applications within Amar Bank.

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

Make sure to resolve your `node_modules` path first in order to be able to use the library. You can
find instructions about this at our
[Getting Started](https://amar-ui.tunaiku.com/introduction/getting-started) page.

Resolving `node_modules` path would make it possible to import Amar UI Web like so:

```scss
@import '@amar-ui-web/core/index.scss';
```

And if you would like to import an individual package/module:

```scss
@import '@amar-ui-web/color/index.scss';
@import '@amar-ui-web/typography/index.scss';
```

Or if you'd like to import only some of a package's specific abstracts (variables, mixins, functions, etc.):

```scss
@import '@amar-ui-web/color/scss/variables';
@import '@amar-ui-web/color/scss/mixins';
@import '@amar-ui-web/color/scss/functions';
```

## Contribute

Interested in contributing in the project? Refer to our
[contribution guide](https://github.com/tunaiku/amar-ui-web/blob/master/.github/CONTRIBUTING.md)!
