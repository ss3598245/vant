<script setup lang="ts">
import { reactive, ref } from 'vue'

import {useRoute,useRouter } from 'vue-router'
import { useAddressStore } from '@/stores/address';

const route=useRoute()
const router = useRouter();
const user = useAddressStore();
const userInfo = ref({
  name: "",
  password: null,
});

function submitForm() {
  console.log(userInfo.value);
  if (userInfo.value.name === "qwe" && userInfo.value.password === 123) {
    user.userinfo = userInfo.value;
    localStorage.setItem("token", Math.random().toString());
    router.push('/')
  }
}

</script>

<template>
    <div class="login">
        <el-form
            style="max-width: 600px"
            label-width="auto"
            class="demo-ruleForm"
        >
            <el-form-item>
            <el-input v-model="userInfo.name"  placeholder="用户名" />
            </el-form-item>
            <el-form-item>
            <el-input
                v-model.number="userInfo.password"
                type="password"
                placeholder="密码"
            />
            </el-form-item>

            <el-form-item>
            <el-button type="primary" @click="submitForm"
                >登录</el-button
            >
            </el-form-item>
        </el-form>
    </div>
</template>

<style lang='scss' scoped>
.login{
    width: 100%;
    height: 100%;
    background: #57A1EA;
}
.demo-ruleForm{
    width: 300px;
    height: 200px;
    background: #fff;
    padding: 10px;
    position: fixed;
    top:50%;
    right: 300px;
    border-radius: 10px;
}
</style>
