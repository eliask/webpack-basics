# webpack-basics
Opinionated minimal webpack 3 config for JS/CSS stuff

# Features
- Enforce the use of the Webpack 2+ API through Typescript definitions.
  I.e. the use of the deprecated Webpack 1 API will throw errors.
- Automatic prettier-standard formatting for JSON, JS/JSX, TS/TSX, CSS/SASS/LESS
- Basic PostCSS support
- Basic production/dev configuration split:
```
  yarn run dev   # launch webpack-dev-server
  yarn run build # production build with minification, etc.
```
- Webpack HotModuleReplacement enabled for ```dev```
- Basic Babel ```env``` setup for modern browsers (>1% global usage and last 2 versions)
- Basic Babel performance tweaks: ```directoryCache``` and ```babel-runtime```
- No other dependencies beyond the "basics".
