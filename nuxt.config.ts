import { defineNuxtConfig } from "nuxt/config";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	modules: ["@nuxt/content"],
	app: {
		head: {
			link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
		}
	},
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData:
						'@use "@/assets/styles/utilities/vars.scss" as *; @use "@/assets/styles/utilities/mixins.scss" as *;'
					// additionalData: '@import "@/assets/styles/main.scss";'
				}
			}
		}
	}
});
