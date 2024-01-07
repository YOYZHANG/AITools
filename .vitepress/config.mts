import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "自媒体 AI 神器",
  description: "AI 工具箱 —— 自媒体内容生产的效率利器",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '关于我们', link: '/doc/about.md' }
    ],

    sidebar: [
      {
        text: '通用 AI 对话模型',
        items: [
          { text: 'ChatGPT', link: '/docs/general/chatgpt.md' },
          { text: 'yiyan', link: '/docs/general/yiyan.md' }
        ]
      },
      {
        text: '小红书',
        items: [
          { text: '封面生成 —— 「稿定设计」', link: '/docs/redbook/title.md' },
          { text: '文案创作 —— 「晓语台」', link: '/docs/redbook/xiaoyutai.md' },
          { text: '文案创作 —— 「火山写作」', link: '/docs/redbook/huoshan.md' },
          { text: '图片生成 —— 「哩布 👷」', link: '/docs/redbook/libu.md' },
          { text: '图片生成 —— 「吐司 👷」', link: '/docs/redbook/tusi.md' },
        ]
      },
      {
        text: '抖音',
        items: [
          { text: '视频创作 —— 「即创」', link: '/docs/douyin/video.md' },
          { text: '数字人 —— 「对嘴王」', link: '/docs/douyin/duizui.md' },
          { text: '视频后期 —— 「建设中 👷」', link: '/docs/douyin/null.md' },
          { text: '音乐生成 —— 「建设中 👷」', link: '/docs/douyin/null.md' },
          { text: '字幕生成 —— 「建设中 👷」', link: '/docs/douyin/null.md' },
        ]
      },
      {
        text: 'blibli',
        items: [
          { text: 'Rap 生成 —— 「Uberduck」', link: '/docs/bilbili/uberduck.md' },
          { text: 'GC角色生成视频 —— 「Wonder Studio 👷」', link: '/docs/douyin/null.md' },
        ]
      },
      {
        text: '百家号',
        items: [
          { text: '视频创作 —— 「度加创作工具」', link: '/docs/baijiahao/dujia.md' },
        ]
      },
      {
        text: '播客',
        items: [
          { text: '文案总结 —— 「Podwise」', link: '/docs/podcast/podwise.md' }
        ]
      },
      {
        text: '薅羊毛专区',
        items: [
          { text: '🏗️ 如何免费使用 GPT4 2 个月', link: '/docs/douyin/null.md' },
        ]
      },
      {
        text: '教学专区',
        items: [
          { text: '🏗️ 如何使用 midjourney', link: '/docs/douyin/null.md' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/YOYZHANG/AITools' }
    ]
  }
})
