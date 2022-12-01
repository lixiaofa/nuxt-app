/*
 * @Description: 
 * @Author: 司马老贼
 * @Date: 2022-11-29 09:49:46
 * @LastEditTime: 2022-11-29 10:14:32
 * @LastEditors: 司马老贼
 */
//对象 不确定属性 
export type Data = Record<string , any> 

//用户配置
interface Config{
  
    method: string,
    query?: Data,
  
    body?: Data,
    
  
  
  }