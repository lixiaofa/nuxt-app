/*
 * @Description: 
 * @Author: 司马老贼
 * @Date: 2022-12-05 10:38:50
 * @LastEditTime: 2022-12-09 10:15:15
 * @LastEditors: 司马老贼
 */
import type {Data} from '@/type'
import request from '@/composables/request'
export function login( userOption: Data = {}){
    
    return request('/user/login'  , {
        method: 'post',
        body: userOption
    })
    
}



export  function userInfor(){
    return request('/user/info' ,  {
        method: 'get',
    })
   
}

