# rollup-react-starter-lib-ts
<p align="center">
  <a href="https://www.npmjs.com/package/rollup-react-starter-lib-ts">
    <img src="https://img.shields.io/npm/v/rollup-react-starter-lib-ts.svg" alt="npm version" >
  </a>
  <a href="https://packagephobia.now.sh/result?p=rollup-react-starter-lib-ts">
    <img src="https://packagephobia.now.sh/badge?p=rollup-react-starter-lib-ts" alt="install size" >
  </a>
  <a href="https://github.com/rollup/rollup/blob/master/LICENSE.md">
    <img src="https://img.shields.io/npm/l/rollup-react-starter-lib-ts.svg" alt="license">
  </a>
</p>
<image width="100px" src="https://rollupjs.org/logo.svg" />

Template to create your own Typescript React library with Rollup.

- Rollup v3 :tada:
- Compatible with  new and old React versions, generates ESM/CJS files.

## Build & Publish

You can use this template and
change the name under package.json.

Build

```
npm run build
```

Build & Watch

```
npm run build:watch
```

Publish (public library)

Be sure you are either logged in under `npm login` or you have a token (check https://docs.npmjs.com/creating-and-viewing-access-tokens).

```
npm run publish --access=public
```

## For local testing

cd your-lib-folder/

```
npm link 
```

cd your-app/

```
npm link name-of-your-lib
```

### Want to also minify bundle output?

You can install rollup-plugin-terser (still works with rollup v3, but since it has no updates, we need to install it with legacy peer options)

```
npm i rollup-plugin-terser --save-dev --legacy-peer-deps
```

#### Configure

rollup.config.mjs

``` javascript
import { terser } from 'rollup-plugin-terser';

...

 plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      terser(), // we add it here
 ]



```


[npm-badge]: https://img.shields.io/npm/v/rollup-react-starter-lib-ts.svg
[npm]: https://www.npmjs.org/package/rollup-react-starter-lib-ts
