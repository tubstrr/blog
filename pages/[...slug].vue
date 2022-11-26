<template>
	<main id="content-wrapper" class="container">
		<ContentDoc id="content" />
		<Sidebar />
	</main>
</template>

<style lang="scss">
	#content-wrapper {
		display: grid;
		grid-template-columns: 3fr 1fr;
		grid-gap: 2em;
		align-items: flex-start;
	}

	@media (max-width: $desktop) {
		#content-wrapper {
			grid-template-columns: 100%;
			grid-gap: 2em;

			#content {
				order: 2;
			}
			aside {
				order: 1;
			}
		}
	}
</style>
