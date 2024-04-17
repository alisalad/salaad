import { defineConfig } from 'vitepress'


// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Dastuurka KMG",
  description: "Dastuurka Soomaaliya",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Dastuurka', link: '/markdown-examples' },
      { text: 'Laws', link: '/laws' },
      { text: 'English', link: '/provisional-cons'}

      
      
    ],

    sidebar: [
      {
        text: 'Cutubka 1aad',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Laws', link: '/laws' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
      
    ]
  }
})
