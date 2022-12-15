/*
 * @Description: 
 * @Author: 司马老贼
 * @Date: 2022-12-06 21:19:22
 * @LastEditTime: 2022-12-06 21:27:07
 * @LastEditors: 司马老贼
 */
const Token = 'Token'
export const setToken  = (token: string)=> localStorage.setItem(Token ,  token)
export  const removeToken = ()=> localStorage.removeItem(Token)
export const getToken = ()=> localStorage.getItem(Token)