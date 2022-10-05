import { defineStore } from "pinia";

export const usePageStore = defineStore("page", {
	state: () => {
		return {
			page: null
		};
	},

	actions: {
		async setPage(route) {
			this.page = await queryContent(route).findOne();
		}
	},

	getters: {
		getPage() {
			return this.page;
		}
	}
});
