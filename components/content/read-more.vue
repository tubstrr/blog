<template>
	<NuxtLink class="read-more" :to="link"><span v-html="title" /></NuxtLink>
</template>

<script setup>
	const { link, title } = defineProps(["link", "title"]);
</script>

<style lang="scss">
	.read-more {
		margin-top: 0.5rem;
		display: inline-block;
	}
</style>
