/*
 * @Description:
 * @Author: 司马老贼
 * @Date: 2022-11-22 12:05:35
 * @LastEditTime: 2022-12-06 21:17:46
 * @LastEditors: 司马老贼
 */
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  experimental: {
    externalVue: true,
  },
  app: {
    head: {
      charset: "utf-16",
      viewport:
        "width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, viewport-fit=cover, user-scalable=no",

      meta: [
        {
          name: "description",
          content:
            "新蜂商城-专业的综合网上购物商城，为您提供正品低价的购物选择、优质便捷的服务体验。商品来自全球数十万品牌商家，囊括家电、手机、电脑、服装、居家、母婴、美妆、个护、食品、生鲜等丰富品类，满足各种购物需求。",
        },

        {
          name: "Keywords",
          content:
            "网上购物,网上商城,家电,手机,电脑,服装,居家,母婴,美妆,个护,食品,生鲜,新蜂",
        },
      ],
    },
  },
  css: ["@/assets/styles/base.css"],
  postcss: {
    plugins: {
      "postcss-px-to-viewport": {
        // options
        viewportWidth: "375",
      },
    },
  },
  modules: [
    "@pinia/nuxt",
    [
      "@pinia/nuxt",
      {
        autoImports: [
          // 自动引入 `usePinia()`
          "defineStore",
          // 自动引入 `usePinia()` 并重命名为 `usePiniaStore()`
          ["defineStore", "definePiniaStore"],
        ],
      },
    ],
   
  ],
  nitro: {
    devProxy: {
      "/api/v1": {
        target: "http://backend-api-01.newbee.ltd/api/v1",
        changeOrigin: true,
      },
    },
  },
 
});

