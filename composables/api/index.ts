/*
 * @Description: 
 * @Author: 司马老贼
 * @Date: 2022-11-29 09:57:51
 * @LastEditTime: 2022-12-07 12:22:29
 * @LastEditors: 司马老贼
 */

import type {Data} from '@/type'
import request from '@/composables/request'
export function indexInfos( userOption: Data = {}){
    
    return request('/index-infos'  , {
        method: 'get',
    })
    
}