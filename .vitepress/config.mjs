import { defineConfig } from 'vitepress'
import { set_sidebar } from "./utils/auto_sidebar.mjs";	// 改成自己的路径

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "羊鱼串的文档站",
  description: "羊鱼串的文档站",
  base: "/yyz-kb/",
  head: [["link", { rel: "icon", href: "/yyz-kb/logo.jpg" }]],
  markdown:{
    math:true
  },
  themeConfig: {
    outlineTitle: "文章目录",
    outline: [2, 6],
    logo: "logo.jpg", // 配置logo位置，public目录
    nav: [
      { text: '首页', link: '/' },
      { text: '示例页', link: '/markdown-examples' },
      { text: '点云学习', link: '/point-cloud/' },
      { text: 'Python学习', items: [
        { text: '基础', link: '/python/base/' },
        { text: '进阶', link: '/python/advanced/' },
      ] },
    ],
    sidebar: { 
      '/point-cloud/': set_sidebar('/point-cloud'),
      '/python/base/': set_sidebar('/python/base/'),
      '/python/advanced/': set_sidebar('/python/advanced/'),
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/sheepfishzhuo' }
    ],
    footer: {
      copyright: "Copyright@ 2024 羊鱼串"
    },
    // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
  }
})
