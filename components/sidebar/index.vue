<template>
	<aside id="side-bar">
		<loader v-if="!page" />
		<template v-else>
			<sidebar-page v-if="page.type === 'page'" />
			<template v-else>
				<h3>Table of Contents</h3>
				<section id="toc">
					<sidebar-post />
				</section>
			</template>
		</template>
	</aside>
</template>

<script setup>
	import { usePageStore } from "@/stores/page";
	import { storeToRefs } from "pinia";

	const { page } = storeToRefs(usePageStore());
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
