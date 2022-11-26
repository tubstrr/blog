import { defineStore } from "pinia";

export const usePageStore = defineStore("page", () => {
	const page = ref(null);
	const template = ref("loading-template");
	const currentCategory = ref(false);
	const path = useRoute().path;

	const updatePage = async (path) => {
		const currentPage = await queryContent(path).findOne();
		const { type, category } = currentPage;
		currentCategory.value = category;
		template.value = `${type}-template`;
		page.value = currentPage;
	};

	updatePage(path);

	watch(
		() => useRoute().path,
		(newPath) => {
			updatePage(newPath);
		}
	);

	return {
		page,
		template,
		currentCategory,
		updatePage
	};
});

// export const usePageStore = defineStore("page", {
// 	state: () => {
// 		return {
// 			page: null
// 		};
// 	},

// 	actions: {
// 		async setPage(route) {
// 			this.page = await queryContent(route).findOne();
// 		}
// 	},

// 	getters: {
// 		getPage() {
// 			return this.page;
// 		}
// 	}
// });
