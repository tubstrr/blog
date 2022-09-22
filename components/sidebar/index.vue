<template>
	<aside>
		<sidebar-page v-if="isPage" />
	</aside>
</template>

<script setup>
	const route = useRoute();
	const pages = ["/", "/about"];
	let isPage = pages.includes(route.path);
</script>
