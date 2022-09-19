<template>
	<NuxtLink :to="link">{{ title }}</NuxtLink>
</template>

<script setup>
	const { link, title } = defineProps(["link", "title"]);
</script>
