/*
 * @Description:
 * @Author: 司马老贼
 * @Date: 2022-12-01 13:07:03
 * @LastEditTime: 2022-12-09 10:43:55
 * @LastEditors: 司马老贼
 */

import { defineStore } from "pinia";
import { getToken, setToken } from "@/composables/auth";
import type { User } from "@/stores/type";
import { login, userInfor } from "@/composables/api/user";
import { store } from "@/stores/index";

export const useUserStore = defineStore("user", {
  state: () => ({
    token: process.client ? getToken() : "",
    userInfor: {},
  }),
  getters: {
    getUserInfor: (state) => state.userInfor,
  },
  actions: {
    login(user: User) {
      return new Promise<void>((resolve, reject) => {
        login(user)
          .then((res) => {
            const token: any = res.value;

            setToken(token);
            this.token = token;

            resolve();
          })
          .catch((err) => {
            reject(err);
          });
      });
    },

    getUserInforFn() {
      return new Promise<void>((resolve, reject) => {
        userInfor()
          .then((res) => {
            this.userInfor = res.value;
            resolve();
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
  },
});

export const useUserStoreHook = () => useUserStore(store);
