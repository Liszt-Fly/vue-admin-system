<script lang="ts" setup>
let props = defineProps({
  modelValue: String,
});
</script>
<template>
  <input
    type="text"
    placeholder="请输入手机号或邮箱"
    class="mike-input"
    :value="modelValue"
    @input="
      $emit('update:modelValue', ($event.target as HTMLInputElement).value)
    "
  />
</template>
