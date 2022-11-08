# react-cyber-elements
+90 HUD cyberpunk elements. this is and will always be free.


We want to create the biggest cyberpunk open-source project for you to make cool things.

Thanks to all for caring!, seems you like the idea of our cyberpunk project, this are our future goals!

### Next steps:

- +1.000 futuristics svg icons components for React, Vue, Svelte and Angular.
- Add 200 more HUD elements to the currect 90 elements and make them also available to Vue, Svelte and Angular.
- Wrapper and online storybook to make them easy to search and use in your app.
- Create a fancy page where we show posibilities with our HUD elements, icons and others!
- Make fancy assets for everyone (audio/web backgrounds/characters/etc)



Demo: https://react-cyber-elements-demo.vercel.app/

<p align="center">
  <a href="https://www.npmjs.com/package/react-cyber-elements">
    <img src="https://img.shields.io/npm/v/react-cyber-elements.svg" alt="npm version" >
  </a>
  <a href="https://github.com/thiswallz/react-cyber-elements/blob/main/LICENSE">
    <img src="https://badgen.net/github/license/thiswallz/react-cyber-elements" alt="license">
  </a>
 <a href="https://badgen.net/github/checks/thiswallz/react-cyber-elements">
    <img src="https://badgen.net/github/checks/thiswallz/react-cyber-elements" />
  </a>
  <a href="https://badgen.net/bundlephobia/dependency-count/react-cyber-elements">
    <img src="https://badgen.net/bundlephobia/dependency-count/react-cyber-elements" />
  </a>
  <a href="https://badgen.net/npm/types/react-cyber-elements">
    <img src="https://badgen.net/npm/types/react-cyber-elements"  />
  </a>
    <a href="https://badgen.net/bundlephobia/tree-shaking/react-cyber-elements">
    <img src="https://badgen.net/bundlephobia/tree-shaking/react-cyber-elements"  />
  </a>
    <a href="https://badgen.net/bundlephobia/minzip/react-cyber-elements">
    <img src="https://badgen.net/bundlephobia/minzip/react-cyber-elements" />
  </a>

</p>

<image width="400px" src="ss1.png" />

Welcome to react-cyber-elements
You can change the color of the elements with just css.

Simple usage: <CyberEl1 /> to <CyberEl90 />
Checkout the docs and sandbox for more info.

## Install

npm

```
npm install react-cyber-elements 
```

yarn

```
yarn add react-cyber-elements 
```

## Usage

<img src="icon1.png" width="50px"/>

``` javascript
import { CyberEl1 } from 'react-cyber-elements'

export default function Home() {
  return (
    <CyberEl1 
      style={{
        width: '100px',
        height: '100px'
      }}
    className="cyber-icon" />
  )
}
```

## Changing colors

You can just get access to each path and change stroke and fill properties.

<img src="icon2.png" width="50px"/>

``` css

.cyber-icon path:nth-of-type(1) {
  fill: #d600ff !important;
  stroke: orange;
}

.cyber-icon path:nth-of-type(2) {
  fill: #00b8ff !important;
  stroke: orange;
}

.cyber-icon path:nth-of-type(3) {
  fill: yellow !important;
  stroke: orange;
}

.cyber-icon path:nth-of-type(4) {
  fill: #001eff !important;
  stroke: orange;
}

.cyber-icon path:nth-of-type(5) {
  fill: #bd00ff !important;
}
```
