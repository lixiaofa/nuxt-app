/*
 * @Description:
 * @Author: 司马老贼
 * @Date: 2022-11-28 10:11:33
 * @LastEditTime: 2022-12-02 11:27:26
 * @LastEditors: 司马老贼
 */

import type { Data, Config } from "@/composables/type";
import { Ref } from "nuxt/dist/app/compat/capi";

import { Toast } from "vant";

type Res = Ref<Data>

//reqest interceptors
const onRequestHandler = (options: Data, userOption: Config) => {
  
  const token = undefined;
  if (token) {
    options.headers = {};
    options.headers.token = token;
  }
 
  options.baseURL = 'http://backend-api-01.newbee.ltd/api/v1';
 
 
  options = {
    ...options,
    ...userOption,
  };
 
};
//err interceptors
const onErrorHandler = (err: Error) => {
  Toast("网络错误！");
    
  Promise.reject(err);
};

//response interceptors

const onResponseHandler = (res:  Res) =>  {
 
  const data = ref<Data>({})
  if (res.value.resultCode !== 200) {
    
    Toast(res.value.message);
    return Promise.reject(new Error(res.value.message || "Error"));
   
  } else {
    
    data.value = res.value.data
   
    return data
  }
};

const request = async (url: string, userOption: Config) => {
  const { data, pending, error, refresh } = await useFetch(url, {
    onRequest({request, options }) {
      // Set the request headers
      
      onRequestHandler(options, userOption);
    },
    onRequestError({ request, options, error }) {
      // Handle the request errors
      onErrorHandler(error);
    },

    onResponseError({ request, response, options }) {
      // Handle the response errors
      const { error } = response._data;

      onErrorHandler(error);
    },
  });

  const res = onResponseHandler(data as Res) 

  return res
};

export default request;
