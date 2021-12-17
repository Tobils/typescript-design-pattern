# Typescript

1. installation: npm i -g typescript ts-node

- syntax feature vs design pattern {how do we use interface to write reusable code}
- understanding ts
- functional typing + annotations
- type definition files
- arrays in ts
- modules system
- class + refresher on OOP
- project

## Project

1. fetchjson
2. features
3. rrts {react redux typescript} `npx create-react-app rrts --template typescript` => ` npm i redux react-redux axios redux-thunk` => `npm run eject` => `npm i sass-loader node-sass --save`
4. map first project => `npm i -g parcel-bundler`
5. sort

```bash
# create folder sort
mkdir sort
cd sort
mkdir src
mkdir build
touch src/index.ts
tsc --init

# set rootDir as /src and outDir ad build
"rootDir": "./src",
"outDir": "./build",

# run, and output will be automaticcaly in folder build
tsc

# run mode watch
npm init -y
npm i nodemon concurrently # is used for watch mode and run multiple npm

# watch nodejs
# modify package.json script
"start:build": "tsc -w",
"start:run": "nodemon build/index.js",
"start": "concurrently npm:start:*"

# run watch mode
npm run start
```

Type Annotoation => developer tell TS the type
Type inference => TS guesses the type
