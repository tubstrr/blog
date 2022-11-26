<template>
	<div class="post-meta">
		<strong class="category">{{ post.category }} #{{ post.post_number }}</strong>
		<posted-on :posted="post.date" :updated="post.updated" />
	</div>
</template>

<script setup>
	const { post } = defineProps(["post"]);
</script>

<style lang="scss">
	.post-meta {
		margin-bottom: 0.2em;
		margin-bottom: 0.5em;
		* {
			text-transform: uppercase;
			font-size: 1em;
			// color: var(--black);
			opacity: 0.9;
		}

		.category {
			margin-right: 0.5em;
		}
	}
</style>
