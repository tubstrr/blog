<template>
	<section id="root" :class="template" :style="`--category-color:var(--${color});`">
		<Header />
		<NuxtLoading />
		<NuxtPage />
		<Footer />
	</section>
</template>

<script setup>
	import { usePageStore } from "@/stores/page";
	import { useWindowStore } from "@/stores/window";
	import { throttle } from "@/composables/throttle";
	import { storeToRefs } from "pinia";

	const vWindow = useWindowStore();
	const isScrollThrottled = ref(false);

	window.addEventListener("scroll", () => {
		throttle(vWindow.setTop, 16, isScrollThrottled);
	});

	// const route = useRoute();
	const pageStore = usePageStore();
	// pageStore.setPage(route.path);

	const { page, template, currentCategory } = storeToRefs(pageStore);

	const colors = {
		tutorial: "blue",
		solution: "pink",
		"deep-dive": "green",
		default: "light-blue"
	};

	// const color = () => {
	// 	if (currentCategory.value) return colors[currentCategory.value];
	// 	return false;
	// };

	const color = ref("light-blue");
	watch(
		() => currentCategory.value,
		(newValue) => {
			if (!newValue) newValue = "default";

			color.value = colors[newValue];
		}
	);
	console.log(`🚀 ~ color`, color.value);
</script>

<style lang="scss">
	@import "@/assets/styles/utilities/destyle.scss";
	@import "@/assets/styles/utilities/type.scss";
	@import "@/assets/styles/utilities/global.scss";
	@import "@/assets/styles/utilities/animations.scss";
</style>
