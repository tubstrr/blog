<template>
	<h3>Highlighted Articles</h3>
	<ul id="highlighted-items">
		<sidebar-highlighted-item v-for="(item, index) in highlightedArticles" :key="index" :item="item" />
	</ul>
</template>

<script setup>
	const highlightedArticles = await queryContent()
		.where({ type: "post", highlighted: true })
		.sort({ post_number: -1, date: -1 })
		.limit(5)
		.only(["title", "date", "updated", "category", "post_number", "_path"])
		.find();
</script>
