<!--
 * @Description: 
 * @Author: 司马老贼
 * @Date: 2022-08-17 12:05:04
 * @LastEditTime: 2022-12-13 17:52:16
 * @LastEditors: 司马老贼
-->

<template>
  <div class="container">
   
    <van-tabbar>
      
     
        <van-tabbar-item v-for="item in tabbars" :key="item.label"  :icon="item.icon">
          <NuxtLink  :to="item.to"> {{ item.label }}</NuxtLink>
       
      </van-tabbar-item>
      

      

    </van-tabbar>

  </div>
</template>

<script setup lang="ts">


// defineOptions({
//   name: "TheTabbar",
// });

const tabbars = reactive([
  {
    to: '/',
    label: '首页',
    icon: 'wap-home'
  },
  {
    to: '/classification',
    label: '分类',
    icon: 'wap-nav'
  },
  {
    to: '/shoppingcart',
    label: '购物车',
    icon: 'shopping-cart'
  },
  {
    to: '/user',
    label: '我的',
    icon: 'friends'
  }
])

</script>

<style lang="less" scoped>

</style>