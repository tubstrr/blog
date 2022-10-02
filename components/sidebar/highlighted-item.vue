<template>
	<li>
		<NuxtLink :to="_path" class="no-line" :style="`--color:var(--${colors[category]});`">
			<strong>{{ title }}</strong> <svgs-arrow></svgs-arrow>
		</NuxtLink>
	</li>
</template>

<script setup>
	const { item } = defineProps(["item"]);
	const { category, post_number, _path } = item;
	const title = `${category} #${post_number}`;
	const colors = {
		tutorial: "blue",
		solution: "pink",
		"deep-dive": "green"
	};
</script>

<style lang="scss">
	#highlighted-items {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		li {
			margin-top: 1.25rem;

			+ li {
				margin-top: 1em;
			}

			a {
				width: 100%;
				border: 1px solid var(--black);
				// box-shadow: 0.25em 0.25em 0 var(--color);
				background: var(--white);
				padding: 0.7em;
				overflow: hidden;

				display: flex;
				align-items: center;

				font-size: 1.2em;

				transition: 300ms var(--in-out);
				transition-delay: 100ms;

				strong {
					display: inline-block;
					z-index: 1;
				}

				svg {
					display: inline-block;
					z-index: 1;
					height: 0.75em;
					width: 0.75em;
					margin-left: 0.25em;
					fill: var(--black);
					transition: 500ms var(--in-out);
					transition-delay: 100ms;
				}

				&::before {
					content: "";
					display: block;
					width: 0.5em;
					height: 0.5em;
					border-radius: 50%;
					background: var(--color);
					margin-right: 0.5em;
					transition: 500ms var(--in-out);
					transition-delay: 100ms;
					z-index: 0;
				}

				&:hover,
				&:focus,
				&:active {
					opacity: 1;
					// box-shadow: 0px 0px 0 var(--color);
					border: 1px solid transparent;
					background: transparent;
					color: var(--white);

					&::before {
						transform: scale(35);
					}

					svg {
						fill: var(--white);
					}
				}
			}
		}
	}
</style>
