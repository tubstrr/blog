// import { defineNuxtConfig } from "nuxt";
// import { defineNuxtConfig } from "nuxt/config";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	ssr: false,
	nitro: {
		preset: "service-worker"
	},

	modules: [
		"@nuxt/content",
		[
			"@pinia/nuxt",
			{
				autoImports: [
					"defineStore", // import { defineStore } from 'pinia'
					["defineStore", "definePiniaStore"] // import { defineStore as definePiniaStore } from 'pinia'
				]
			}
		]
	],

	content: {
		documentDriven: true
	},

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
