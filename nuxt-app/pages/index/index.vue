<!--
 * @Description: 
 * @Author: 司马老贼
 * @Date: 2022-08-17 11:54:25
 * @LastEditTime: 2022-12-01 10:59:39
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

    <GoodList :goodList="goodList" >
      <template v-slot="{good}">
          <good direction="vertical"   :good="good" >
              <template  #tags>
                <van-tag plain type="primary" v-if="good.goodsId % 2">{{good.tag}}</van-tag>
              </template>

            </good>
       
           
      </template>  
    </GoodList> 
    

   


  </div>
</template> 


<script setup lang="ts">
import {indexInfos} from '@/composables/api/index'

definePageMeta({
  layout: "default",
});

let goodList = reactive([])
indexInfos().then(res=>{

  const {hotGoodses , newGoodses , recommendGoodses} = res.value
  goodList = hotGoodses.concat(newGoodses, recommendGoodses)
  
  
})





</script>
  
  
<style lang="less" scoped>

</style>
  