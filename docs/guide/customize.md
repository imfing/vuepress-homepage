# Customize

We'll take this repo as an example to show you how to make this site as you like.

Don't forget to refer to official [VuePress Guide](https://vuepress.vuejs.org/guide/) to find out more.

## Structure

Now, we care about the **docs** directory which includes:

```
docs
├── guide
├── projects
├── README.md
└── .vuepress
    ├── components
    │   ├── Homepage.vue
    │   ├── MContent.vue
    │   ├── Projects.vue
    │   └── styles
    │       └── config.styl
    ├── config.js
    ├── override.styl
    └── public
        ├── icons
        ├── profile.jpg
        └── projects
```

### The documents

The entry page is `README.md`, followed by sub-pages under the directories `guide` and `projects`.

You can modify, delete and create your own directory and `README.md` files according to your needs.

### config.js

The config files of this site are all placed under `.vuepress` directory. The only two you need to concern is `config.js` and `public` folder.

### public

You need to place your images under `docs/.vuepress/public` directory, so that you can access them using `/profile.jpg` in the yaml section of the `README.md` file.

## Modification

### Title

The title of the site and the navbar is in the `docs/.vuepress/config.js`

### Navbar links

Still in the `config.js`, under the `themeConfig` key.

### Homepage

If you don't like the homepage, simply modify the `docs/README.md` file to switch to another layout or just Markdown page.

### Sidebar

There are two different types of sidebars: routing between multiple Markdown files and TOC of a single page.

This **Guide** contains separate files under `docs/guide`. To enable sidebar, you have to manually set this in the `config.js`.