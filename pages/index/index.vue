<!--
 * @Description: 
 * @Author: 司马老贼
 * @Date: 2022-08-17 11:54:25
 * @LastEditTime: 2022-12-15 10:17:02
 * @LastEditors: 司马老贼
-->
<template>
  <div class="page">
    <TheHeader>
      <template #right>
        <router-link to="/user">
          <van-icon name="user-o" />
        </router-link>  
      </template>
    </TheHeader> 

    <GoodList  >
      <template v-slot="{good}">
        
        <lazy-component>
          <good direction="vertical"   :good="good"  v-lazy="good">
              <template  #tags>
                <van-tag plain type="primary" v-if="good.goodsId % 2">{{good.tag}}</van-tag>
              </template>

            </good>
 
        </lazy-component>
      </template>  
    </GoodList> 
 



   
    

   


  </div>
</template> 
<script setup lang="ts">



definePageMeta({
  layout: "default",
});




</script>
  
  
<style lang="less" scoped>

</style>
  