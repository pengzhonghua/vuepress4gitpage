module.exports = {
  title: '个人主页',
  description: '彭中华的空间',
  themeConfig: {
    nav: [
      { text: '主页', link: '/'},
      { text: '博文', items: [
        { text: 'Vue', link: '/vue/'},
        { text: 'Angular', link: '/angular/'},
        { text: 'React', link: '/react/'}
      ]},
      { text: '关于', link: '/about/'}
    ],
    sidebar: {
      '/vue/': [ "", "vue-router", "vuex"],
      '/angular/': [ "", "angularJs", "angular"],
      '/react/': [ "", "redux", "react"]
    },
    sidebarDepth: 2,
    lastUpdated: 'Last Updated'
  }
}