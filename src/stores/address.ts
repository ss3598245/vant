import { defineStore } from 'pinia'
import { ref, computed } from 'vue'


export const useAddressStore = defineStore('address',()=>{
    const userinfo=ref();
    const list=ref([
        {
            title: "资金组成",
            name:'/home/zz'
        },
        {
            title: "资金流向",
            name:'/home/zl'
        },
        {
            title: "资金来源",
            name:'/home/zg'
        },
        {
            title: "用户管理",
            name:'/home/user'
        },
    ])


    return {
        userinfo,
        list
    }
})