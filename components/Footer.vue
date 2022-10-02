<template>
	<footer id="footer" class="container">
		<NuxtLink to="/" class="no-line">the archive </NuxtLink>
		<NuxtLink to="https://jonknoll.dev" class="author">Jonathan Knoll &copy; 2022</NuxtLink>
	</footer>
</template>

<style lang="scss">
	#footer {
		margin-top: 2rem;
		padding: 2rem 160px;
		display: flex;
		flex-direction: column;
		align-items: flex-start;

		.author {
			// display: block;
			font-size: 0.8em;
			font-style: italic;
		}
	}
</style>
