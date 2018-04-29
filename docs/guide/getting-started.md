# Getting Started

Since this is a template built upon [VuePress](https://vuepress.vuejs.org/), everything is wrapped up and it takes only 10 minutes to start.

**As esasy as 1, 2, 3**

## Prerequisites

### Get the repo

Download on GitHub: `Clone or download` -> `Download ZIP`

or clone it

```bash
$ git clone https://github.com/mtobeiyf/vuepress-homepage
```

### Prepararation
- You should have [Node.js](https://nodejs.org)**>=8.0.0** installed at first.
- [Yarn](https://yarnpkg.com) is also needed for package management.

You can check by running commands: `node --version`, `npm --version` and `yarn --version`

## Configure and run

```bash
# Get into the directory
$ cd vuepress-homepage 

# Install dependencies
$ yarn # or npm install

# Run under developing
$ yarn run dev # or npm run dev
```

Now open your favorite browser and go to `127.0.0.1:8080`, the demo is all set :sunglasses:

![](https://user-images.githubusercontent.com/5097752/39126631-798faf4a-4735-11e8-993d-6f314d4f2b55.png)

## Deploy

To generate your homepage as a static site, run:

```bash
$ yarn run build
``` 

This will build your site under the `dist` directory. Now you can deploy the files under `dist` directory to any web hosts provider or your own server. If you got stuck, feel free to open an issue or search it on google.

There are several available free online hosts for you:

- [GitHub Pages](https://pages.github.com/)
- [Netlify](https://www.netlify.com/)

For more available instructions, have a look at the [Deploying](https://vuepress.vuejs.org/guide/deploy.html#deploying) section.

### GitHub Pages

Create a repository, clone it to your local machine. And copy files in `dist` to your local repository folder. 

Push it to GitHub with [GitHub Desktop](https://pages.github.com/) or command line and done.

### Netlify

Simply rename and drag and drop your `dist` directory to Netlify, follow the instruction and your site will all set up. Check the guide [here](https://vuepress.vuejs.org/guide/deploy.html#netlify).

Also, you can create your own repository and copy all the files except `.git` there. Therefore, your build command would be `yarn build` and your public directory be `dist`. Fast and easy.