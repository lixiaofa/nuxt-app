<!--
 * @Description: 
 * @Author: 司马老贼
 * @Date: 2022-08-17 11:54:25
 * @LastEditTime: 2022-12-05 09:49:19
 * @LastEditors: 司马老贼
-->
<template>
  <div class="page">
    <!-- <TheHeader>
      <template #right>
        <router-link to="/user">
          <van-icon name="user-o" />
        </router-link>  
      </template>
    </TheHeader>  -->

    <!-- <GoodList  >
      <template v-slot="{good}">
        <lazy-component>
          <good direction="vertical"   :good="good"  v-lazy="good">
              <template  #tags>
                <van-tag plain type="primary" v-if="good.goodsId % 2">{{good.tag}}</van-tag>
              </template>

            </good>
 
        </lazy-component>
      </template>  
    </GoodList>  -->
    <ul>
      <li v-for="item in list" :key="item.goodsId">
        {{item.goodsName}}
        
        
      </li>
    </ul>



   
    

   


  </div>
</template> 
<script setup lang="ts">
import type { Good } from "@/components/good/type";
import { indexInfos } from "@/composables/api/index";



definePageMeta({
  layout: "default",
});
const list = ref<Good[]>([])
indexInfos().then((res) => {
      const { hotGoodses, newGoodses, recommendGoodses } = res.value;
      list.value = hotGoodses.concat(newGoodses, recommendGoodses);
    
    });



</script>
  
  
<style lang="less" scoped>

</style>
  