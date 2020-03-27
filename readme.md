### Development

Start React dev server:

```
$ yarn start

Compiled successfully!

You can now view mkit in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://10.4.20.169:3000

Note that the development build is not optimized.
To create a production build, use yarn build.
```

Build static frontend files:

```
$ yarn build

yarn run v1.22.1
$ react-scripts build
Creating an optimized production build...
Compiled successfully.

File sizes after gzip:

  74.96 KB        build/static/js/2.4d025a68.chunk.js
  36.63 KB        build/static/css/main.21a5b583.chunk.css
  22.46 KB        build/static/css/2.64a99b10.chunk.css
  7.58 KB (-2 B)  build/static/js/main.ece7eb3e.chunk.js
  772 B           build/static/js/runtime-main.1ed35a58.js

The project was built assuming it is hosted at /.
You can control this with the homepage field in your package.json.

The build folder is ready to be deployed.
You may serve it with a static server:

  yarn global add serve
  serve -s build

Find out more about deployment here:

  bit.ly/CRA-deploy

✨  Done in 14.96s.
```

### Build

Builds the Docker image running a minimal Node/Express.js server to serve the static frontend files.

From `docker` directory:

```
$ docker-compose build
```

### Run

From `docker` directory:

```
$ docker-compose up
```

### Push

From `docker` directory:

```
$ docker-compose push
```
