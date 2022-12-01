<!--
 * @Description: 
 * @Author: 司马老贼
 * @Date: 2022-11-25 08:59:22
 * @LastEditTime: 2022-11-25 17:25:21
 * @LastEditors: 司马老贼
-->
<template>
    <div class="page">
        <van-form @submit="onLogin" >
            <van-cell-group inset>
                <!-- 通过 pattern 进行正则校验 -->
                <van-field v-model="user.loginName" name="loginName" placeholder="用户名"
                :rules="[{ required: true, message: '请填写用户名' }]"/>
                <!-- 通过 validator 进行函数校验 -->
                <van-field v-model="user.passwordMd5" type="password" name="passwordMd5" placeholder="密码"
                :rules="[{ required: true, message: '请填写密码'  }]" />
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


definePageMeta({
    layout: "the-page-layout",
});

const user = reactive({
    loginName: '15700778892',
    passwordMd5: 'e10adc3949ba59abbe56e057f20f883e'
})


const  onLogin =  async (user)=>{
    // console.log('user' , user)
    try{}catch(err){

    }

}



</script>
    
    
<style lang="less" scoped>

</style>