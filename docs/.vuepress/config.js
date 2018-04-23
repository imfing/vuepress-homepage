module.exports = {
  title: "Harry Potter",
  description: "The description of the site.",
  head: [["link", { rel: "icon", href: `/logo.png` }]],
  base: "/",
  host: "127.0.0.1",
  dest: "./dist",

  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Projects", link: "/projects/" },
      { text: "GitHub", link: "https://github.com/mtobeiyf/vuepress-homepage" }
    ]
  }
};
