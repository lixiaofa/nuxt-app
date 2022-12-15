<!--
 * @Description: 
 * @Author: 司马老贼
 * @Date: 2022-11-25 08:59:22
 * @LastEditTime: 2022-12-13 17:49:50
 * @LastEditors: 司马老贼
-->
<template>
    <div class="page">
        <van-form @submit="onLoginHandler" >
            <van-cell-group inset>
                <!-- 通过 pattern 进行正则校验 -->
                <van-field v-model="user.loginName" name="loginName" placeholder="用户名"
                :rules="rules.loginName"/>
                <!-- 通过 validator 进行函数校验 -->
                <van-field v-model="user.passwordMd5" type="password" name="passwordMd5" placeholder="密码"
                :rules="rules.passwordMd5" />
            </van-cell-group>
            <div style="margin: 16px;">
                <van-button round block type="primary" native-type="submit">
                    登 录
                </van-button>
            </div>
        </van-form>
    </div>
</template> 
  
  
<script setup lang="ts">
import {useUserStore} from '@/stores/modules/user'

definePageMeta({
    layout: "the-page-layout",
});
interface User{
    loginName: string,
    passwordMd5: string
}

const user = reactive({
    loginName: '15700778892',
    passwordMd5: 'e10adc3949ba59abbe56e057f20f883e'
})

const rules = reactive({
    loginName: [{ required: true, message: '请填写用户名' }],
    passwordMd5: [{ required: true, message: '请填写密码'  }]

})

const userStore = useUserStore()

const route = useRoute()

const redirectTo = route.query.redirectTo as string




const  onLoginHandler = async (user:User)=>{
   
  
    
 
    try{

      await userStore.login(user)
      
      navigateTo(redirectTo)
       
    }catch(err){
        console.log('err' , err)

    }

}



</script>
    
    
<style lang="less" scoped>

</style>