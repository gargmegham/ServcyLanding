<h1 align="center">
  Servcy - one for all platform for all your freelance operations
</h1>
<p align="center">
  <a href="https://app.netlify.com/sites/servcy/deploys" target="_blank">
    <img src="https://api.netlify.com/api/v1/badges/9be579e4-51a6-4d89-bc2f-22fecba6b5a6/deploy-status" alt="Netlify Status" />
  </a>
</p>
<p align="center">
  Built with <a href="https://nuxtjs.org/" target="_blank">Nuxt</a> and hosted with <a href="https://www.netlify.com/" target="_blank">Netlify</a>
</p>

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

## Special Directories

### `assets`

The assets directory contains your uncompiled assets such as css, images, animations, svgs, and font files.

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your sections, forms and even other common components.

### `layouts`

Contains layout files like header, footer, mobile and desktop related components.

### `pages`

This directory contains your application views and routes for blogs and documents. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

### `plugins`

The plugins directory contains JavaScript plugins like snackbar that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

### `store`

This directory contains your Vuex store files like snackbar.js. Creating a file in this directory automatically activates Vuex.
