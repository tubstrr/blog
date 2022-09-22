<template>
	<span class="posted-on">
		<time v-if="updated" class="updated" datetime="updated" itemprop="dateModified">{{ human(updated) }}</time>
		<time class="entry-date published" datetime="posted" itemprop="datePublished"> {{ human(posted) }} </time>
	</span>
</template>

<script setup>
	const props = defineProps(["posted", "updated"]);
	const { posted, updated } = props;
	const human = (date) => {
		const options = { year: "numeric", month: "long", day: "numeric" };
		return new Date(date).toLocaleDateString("en-US", options);
	};
</script>

<style lang="scss">
	.posted-on {
		.updated {
			display: none;
		}
	}
</style>
