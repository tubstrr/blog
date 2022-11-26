<template>
	<aside id="side-bar">
		<loader v-if="!page" />
		<template v-else>
			<sidebar-page v-if="page.type !== 'post'" />
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

	const pageStore = usePageStore();
	const { page } = storeToRefs(pageStore);
</script>

<style lang="scss">
	#side-bar {
		position: sticky;
		top: 2em;
		transition: 330ms ease-in-out;
		h3 {
			margin-top: 0;
		}
	}

	.showing {
		#side-bar {
			top: calc(2em + 3.5em);
		}
	}

	@media (max-width: $desktop) {
		.archive-template {
			#side-bar {
				display: none;
			}
		}
	}
</style>
