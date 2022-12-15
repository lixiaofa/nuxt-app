/*
 * @Description: 
 * @Author: 司马老贼
 * @Date: 2022-12-07 12:08:39
 * @LastEditTime: 2022-12-07 12:14:17
 * @LastEditors: 司马老贼
 */
//对象 不确定属性 
export type Data = Record<string , any> 

//用户配置
export interface Config{
  
    method: string,
    query?: Data,
  
    body?: Data,
}