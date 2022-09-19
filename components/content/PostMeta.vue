<template>
	<div class="post-meta">
		<strong class="category">{{ post.category }} #{{ post.post_number }}</strong>
		<posted-on :posted="post.date" :updated="post.updated" />
	</div>
</template>

<script setup>
	const { post } = defineProps(["post"]);
</script>
