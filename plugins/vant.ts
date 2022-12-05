/*
 * @Description:
 * @Author: 司马老贼
 * @Date: 2022-11-23 18:08:31
 * @LastEditTime: 2022-12-02 12:28:38
 * @LastEditors: 司马老贼
 */
import { defineNuxtPlugin } from "#app";
import { Button ,  
         Tabbar, 
         TabbarItem, 
         NavBar , 
         Icon  ,
         Form, 
         Field, 
         CellGroup , 
         Toast,
         PullRefresh,
         List,
         Tag,
         Card,
         Lazyload
        } from "vant";

// 目前在 nuxt 中无法按需引入样式，因此采用手动引入的方式
// import "vant/es/button/style/index";

import 'vant/lib/index.css';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp
    .use(Button)
    .use(Tabbar)
    .use(TabbarItem)
    .use(NavBar)
    .use(Icon)
    .use(Form)
    .use(Field)
    .use(CellGroup)
    .use(Toast)
    .use(PullRefresh)
    .use(List)
    .use(Tag)
    .use(Card)
    .use(Lazyload, {
      lazyComponent: true,
    });
});
