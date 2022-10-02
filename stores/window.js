import { defineStore } from "pinia";

export const useWindowStore = defineStore("window", {
	state: () => {
		return {
			top: 0,
			mouse: {
				x: 0,
				y: 0
			}
		};
	},
	// could also be defined as
	// state: () => ({ count: 0 })
	actions: {
		setTop() {
			this.top = window.scrollY;
		},
		setMouse(event) {
			this.mouse.x = event.clientX;
			this.mouse.y = event.clientY;
		}
	}
});
