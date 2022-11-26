<template>
	<nav id="toc-items">
		<li v-for="item in page.body.toc.links" :key="item.id" class="parent">
			<a :href="`#${item.id}`"> {{ item.text }}</a>
			<ul v-if="item.children">
				<li v-for="item in item.children" :key="item.id" class="child">
					<a :href="`#${item.id}`"> {{ item.text }}</a>
				</li>
			</ul>
		</li>
	</nav>
</template>

<script setup>
	import { usePageStore } from "@/stores/page";
	import { storeToRefs } from "pinia";

	const { page } = storeToRefs(usePageStore());
</script>

<style lang="scss">
	#toc {
		background: var(--white);
		padding: 1em;
		background: var(--white);
		border: 1px solid var(--black);
		margin-top: 1em;
		box-shadow: 1em 1em var(--box-shadow-color);
		position: relative;
		transition: var(--transition);
	}
	#toc-items {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		font-size: 0.9em;

		li {
			list-style: none;
			+ li {
				margin-top: 0.5em;
			}
		}

		.child {
			margin-left: 0.5em;
			margin-top: 0.35em;
		}
	}
</style>
