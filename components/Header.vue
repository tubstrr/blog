<template>
	<header id="header" class="container">
		<NuxtLink to="/">the archive</NuxtLink>
		<button class="hamburger">
			<span class="top" />
			<span class="mid" />
			<span class="bot" />
		</button>
		<section id="mission" v-if="route?.path === '/'">
			<h1>{{ page.title }}</h1>
			<p>{{ page.description }}</p>
			<pre></pre>
		</section>
	</header>
</template>

<script setup>
	const route = useRoute();
	let page = await queryContent().where({ _id: "content:index.md" }).limit(1).find();
	page = page[0];
</script>

<style lang="scss">
	#header {
		padding: 2rem 160px;

		#mission {
			padding-top: 2rem;
			* {
				max-width: 75ch;
			}
		}
	}
</style>
