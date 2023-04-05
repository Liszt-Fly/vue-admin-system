<script lang="ts" setup>
import { reactive } from "vue";

const form = reactive<{ account: number | string; password: string }>({
  account: "coount@qq.com",
  password: "password",
});
</script>
<template>
  <div class="bg-slate-300 h-screen flex justify-center items-center">
    <div
      class="w-[720px] md:translate-y-0 bg-white grid grid-cols-2 rounded-md shadow-md"
    >
      <div class="p-10">
        <h2 class="text-center text-gray-700 text-lg">会员登录</h2>
        <div class="p-4 mt-6">
          <m-input v-model="form.account"></m-input>
          <m-input v-model="form.password" class="mt-3"></m-input>
          <m-button>登录</m-button>
          <div class="grid grid-flow-col mt-5 justify-center gap-2">
            <m-link>网站首页</m-link>
            <m-link>会员注册</m-link>
            <m-link>找回密码</m-link>
          </div>
        </div>
      </div>
      <div class="hidden md:block">
        <img src="/bg.jpg" class="h-96 w-full" />
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
