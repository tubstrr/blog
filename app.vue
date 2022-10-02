<template>
	<section id="root">
		<Header />
		<NuxtPage />
		<Footer />
	</section>
</template>

<script setup>
	import { useWindowStore } from "@/stores/window";
	import { throttle } from "@/composables/throttle";

	const vWindow = useWindowStore();
	const isScrollThrottled = ref(false);

	window.addEventListener("scroll", () => {
		throttle(vWindow.setTop, 16, isScrollThrottled);
	});
</script>
<style lang="scss">
	@import "@/assets/styles/utilities/destyle.scss";
	@import "@/assets/styles/utilities/type.scss";
	@import "@/assets/styles/utilities/global.scss";
	@import "@/assets/styles/utilities/animations.scss";
</style>
