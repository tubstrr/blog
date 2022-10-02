<template>
	<nav id="toc-items">
		<li v-for="item in toc.links" :key="item.id" class="parent">
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
	const page = await usePage();
	const { toc } = page.body;
</script>

<style lang="scss">
	#toc {
		background: var(--white);
		padding: 1rem;
		background: var(--white);
		border: 1px solid var(--black);
		margin-top: 1rem;
		box-shadow: 1em 1em var(--box-shadow-color);
		position: relative;
		transition: var(--transition);
	}
	#toc-items {
		display: flex;
		flex-direction: column;
		align-items: flex-start;

		li {
			list-style: none;
			+ li {
				margin-top: 0.5rem;
			}
		}

		.child {
			margin-left: 0.5rem;
			margin-top: 0.35rem;
		}
	}
</style>
