<script setup lang="ts">
import { ref,watch } from 'vue'
import { useRouter,useRoute } from 'vue-router'
import { useAddressStore } from '@/stores/address';

interface Dtype {
  title:string,
  name:string
}

const router=useRouter()
const route=useRoute()
const show=ref(true)
const user= useAddressStore()
const url=ref('/home/zz')
const list=ref<Dtype[]>([])
const name=ref('')




function blck(){
  localStorage.removeItem("token");
  router.push("/login");
}

function remov(name :any){
  const index = list.value.findIndex(v=>v.name===name)

}

const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<template>
<div class="box">
  <div class="one">
      <el-row class="tac">
          <el-menu
            active-text-color="#ffd04b"
            background-color="#545c64"
            class="el-menu-vertical-demo"
            :default-active="url !=='/home/zl'?'/home/zz':'/home/zg'"
            text-color="#fff"
          >
            <el-sub-menu index='/home/zl'>
              <template #title>
                <el-icon><PieChart /></el-icon>
                <span>资金管理</span>
              </template>
            </el-sub-menu>
            
            <el-sub-menu index='/home/user'>
              <template #title>
                <el-icon><Reading /></el-icon>
                <span>系统管理</span>
              </template>
            </el-sub-menu>
          </el-menu>

    </el-row>
   </div>

   
   <div class="two">
      <el-row class="tac">
  
          <el-menu
            v-if='show'
            active-text-color="#ffd04b"
            background-color="#545c64"
            class="el-menu-vertical-demo"
            :default-active="url"
            text-color="#fff"
          >
          <h2>{{ name }}</h2>
            <el-sub-menu index="/home/zz">
              <template #title>
                <span>资金组成</span>
              </template>
            </el-sub-menu>
            <el-sub-menu index="/home/zl">
              <template #title>
                <span>资金流向</span>
              </template>
            </el-sub-menu>
            <el-sub-menu index="/home/zg">
              <template #title>
                <span>资金来源</span>
              </template>
            </el-sub-menu>
          </el-menu>
    </el-row>


    <el-row class="tac">
        <el-col :span="5">
            <el-menu
            v-if="!show"
              active-text-color="#ffd04b"
              background-color="#545c64"
              class="el-menu-vertical-demo"
              default-active="2"
              text-color="#fff"
            >
              <el-sub-menu index="/home/user">
                <template #title>
                  <span>用户管理</span>
                </template>
              </el-sub-menu>

            </el-menu>
          </el-col>
      </el-row>
    </div>


    <div class="main">
      <div class="top">
        <div class="user">
          {{ user.userinfo?.name }}
          <button @click="blck">退出</button>
        </div>
        <el-tabs  

          type="card"
          :closable="true"
          class="demo-tabs"
          @tab-remove="remov"
          @close="handleClose"
        >
          <el-tab-pane
          >
          </el-tab-pane>
        </el-tabs>
      </div>
      <div class="btm">
        <RouterView />
      </div>
    </div>

</div>
</template>

<style lang='scss' scoped>
.box{
  width: 100%;
  height: 100%;
  display: flex;
}

.main {
  height: 100%;
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
}
.top {
  height: 80px;
}
.btm {
  flex: 1;
}
.user {
  padding: 0 30px;
  text-align: end;
}
</style>
