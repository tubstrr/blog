<template>
	<section id="root">
		<Header />
		<NuxtPage />
		<Footer />
	</section>
</template>

<script setup>
	import { usePageStore } from "@/stores/page";
	import { useWindowStore } from "@/stores/window";
	import { throttle } from "@/composables/throttle";

	const vWindow = useWindowStore();
	const isScrollThrottled = ref(false);

	window.addEventListener("scroll", () => {
		throttle(vWindow.setTop, 16, isScrollThrottled);
	});

	const route = useRoute();
	const pageStore = usePageStore();
	pageStore.setPage(route.path);

	watch(route, (route) => {
		pageStore.setPage(route.path);
	});
</script>
<style lang="scss">
	@import "@/assets/styles/utilities/destyle.scss";
	@import "@/assets/styles/utilities/type.scss";
	@import "@/assets/styles/utilities/global.scss";
	@import "@/assets/styles/utilities/animations.scss";
</style>
