const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === "production" ? "/meet-landing-page/" : "/",
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @use "@/assets/styles/_reset.scss";
          @use "@/assets/styles/base.scss";
          @use "@/assets/styles/_variables.scss";
          @use "@/assets/styles/_utilities.scss";
          @use "@/assets/styles/_mixins.scss";
          @use "@/assets/styles/text-presets.scss";
          @use "@/assets/styles/common.scss";
        `
      }
    }
  }
})
