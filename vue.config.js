const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // css: {
  //   loaderOptions: {
  //     sass: {
  //       // 传入全局共享样式
  //       prependData: `@import "@/assets/styles/variables.sass"`,
  //     },
  //   },
  // },
})
