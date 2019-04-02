# CWDS Design System

[![License: AGPL v3](https://img.shields.io/badge/license-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![slack](https://img.shields.io/badge/chat-slack-53b390.svg?logo=slack)](https://slack.com/app_redirect?channel=C34SC4BMF)
[![Maintainability](https://api.codeclimate.com/v1/badges/51d44c66c9996fea4d90/maintainability)](https://codeclimate.com/github/ca-cwds/design-system/maintainability)
[![Netlify Status](https://api.netlify.com/api/v1/badges/2cff6c13-0298-47d9-aaf3-8faded367f97/deploy-status)](https://app.netlify.com/sites/cws-cares/deploys)

Monorepo for CWDS design system

## Consuming CARES Components

This a multi-package repository. You are reading the `README` for the repository root.

🛑 **If you are looking for `@cwds/*` components** 🛑

Install from [npm](https://www.npmjs.com/package/@cwds/components):

```sh
yarn add @cwds/components
```

or if you want the latest RC:

```sh
yarn add @cwds/components@next
```

### Using components in your application:

```jsx
import React from 'react'
import { Button } from '@cwds/components'

const App = () => (
  <div>
    <Button>Hello World!</Button>
  </div>
)
```

### System Requirements

We assume that you're using a bundler (like [`webpack`](https://webpack.js.org/)) in your app. Our packages have a `cjs` and an `esm` build target. We ship `scss` source files so that you are in control (e.g.; with `browserlist`) of which polyfills/vender-prefixes/... are written at application bundling time.

To develop in this multi-package repository, you should have

- `yarn` > `1.13.x` (workspace support)
- `node` > `8.11.x`

## Quick Start

Clone the repository

```sh
git clone https://github.com/ca-cwds/design-system.git && cd $_
yarn
```

To precompile the libs and www do
```sh
yarn build
```

### Start Builders/Watchers

```sh
yarn dev
```

### The Guide Site

The [Guide Site](https://cws-cares.netlify.com/) has the following value proposition:

1. Reference implementation for App Developers
1. Living Documentation that is deployed with the libraries
1. Integrated developer experience

Start up the _Guide Site_:

```sh
yarn start
```

> The _Guide Site_ runs on `create-react-app@^2.x` with additional loaders for [mdx](https://mdxjs.com/). It's a great way to encourage writing documentation while developers are building components.

<!--
### Contributing

> Build a component under `libs/components/src` and export the component through index.js as

```js
export { Example } from './Example'
```

> For PO or designers to review the changes host it on storybook by adding Example story to components in modules under apps/www

```js
import Example from '!babel-loader!@mdx-js/loader!./modules/Example/Example.mdx'

const routes = {
  title: 'Component Library',
  path: '/components',
  component: Components,
  children: [
    {
      title: 'Example',
      path: '/Example',
      component: Example,
    },
  ]
}
```
-->

#### rails_app

> This is a good integration check for our Digital Service teams at CWDS because it runs on [`rails webpacker`](https://github.com/rails/webpacker#webpacker).

To run the _rails app_:

```sh
cd libs/rails_app
./bin/webpack-dev-server
```

then in another terminal start the rails server:

```sh
cd libs/rails_app
./bin/rails s -p 3001
```

## Questions

If you have any questions regarding the contents of this repository, please email the Office of Systems Integration at <FOSS@osi.ca.gov>.
