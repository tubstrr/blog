<template>
	<footer id="footer" class="container">
		<NuxtLink to="/" class="no-line">the archive</NuxtLink>
	</footer>
</template>

<script setup>
	const route = useRoute();
	let page = await queryContent().where({ _id: "content:index.md" }).limit(1).find();
	page = page[0];
</script>

<style lang="scss">
	#footer {
		margin-top: 2rem;
		padding: 2rem 160px;
	}
</style>
