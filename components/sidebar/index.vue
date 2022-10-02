<template>
	<aside id="side-bar">
		<sidebar-page v-if="isPage" />
		<template v-else>
			<h3>Table of Contents</h3>
			<section id="toc">
				<sidebar-post />
			</section>
		</template>
	</aside>
</template>

<script setup>
	const page = await usePage();
	const isPage = page.type === "page";
</script>

<style lang="scss">
	#side-bar {
		position: sticky;
		top: 2rem;
		transition: 330ms ease-in-out;
	}

	.showing {
		#side-bar {
			top: calc(2rem + 3.5rem);
		}
	}
</style>
