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

You should have basic idea of [Markdown](https://guides.github.com/features/mastering-markdown/) and YAML Front Matter.

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

## Pages

### Homepage

As you can see in the `docs/README.md`, most of the contents are written in the YAML front matter. Just modify the corresponding section and you should get yours.

### Projects

Actually, it's a pure Markdown file. You can use the inline widget `<MarkdownCard>` to show your project, publication or portfolio. Check the example at `docs/projects/README.md`.

You can even add some more sections with Markdown to make this page a resume for you.

### Customize Page

Adding a page is simple, create `docs/Foo/README.md` and you can access it with link `/Foo/` in the context.

To automatically generate the sidebar of the current page, add `sidebar: auto` in the front matter section.

You can even tune the styles with `<style>` tag. Check [here](https://vuepress.vuejs.org/guide/using-vue.html#using-pre-processors) for more information.