<template>
	<main id="content-wrapper" class="container">
		<ContentDoc id="content" />
		<Sidebar />
	</main>
</template>

<style lang="scss">
	#content-wrapper {
		display: grid;
		grid-template-columns: 1fr 400px;
		grid-gap: 2rem;
		align-items: flex-start;
	}
</style>
