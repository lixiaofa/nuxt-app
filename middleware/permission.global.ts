/*
 * @Description:
 * @Author: 司马老贼
 * @Date: 2022-11-25 09:31:32
 * @LastEditTime: 2022-12-13 17:46:49
 * @LastEditors: 司马老贼
 */
import { getToken } from "@/composables/auth";
// import NProgress from "nprogress";
// import "nprogress/nprogress.css";
// NProgress.configure({ showSpinner: true });
import { useUserStoreHook } from "@/stores/modules/user";
import { Toast } from "vant";
const WhiteList = ["/", "/login"];
export default defineNuxtRouteMiddleware(async (to, from) => {
 
  if (process.client) {
    let hasToken = getToken();
    const userStore = useUserStoreHook()
    if (hasToken) {
     
     if(to.path !== "/login"){
        const hasUserInfo = userStore.getUserInfor?.nickName;
        // console.log('hasUserInfo' , userStore.getUserInfor)
        if (!hasUserInfo) {
          try {
            await userStore.getUserInforFn();
          } catch (err) {
            Toast(err);
            return navigateTo({ path: '/login' , query: {redirectTo: to.path}});
          }
        }
      }
    } else {
     
      if (!WhiteList.includes(to.path))
      return navigateTo({ path: '/login' , query: {redirectTo: to.path}});
    }
  }

  
});
