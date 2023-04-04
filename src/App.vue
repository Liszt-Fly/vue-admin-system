<script setup lang="ts">
import userApi from "@/apis/userApi"

let response1 = await userApi.login()
console.log('response1', response1)
</script>

<template>
	<suspense>
		<router-view></router-view>
	</suspense>
</template>

<style scoped></style>