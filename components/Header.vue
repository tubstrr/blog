<template>
	<header id="header" class="container">
		<section class="top-bar" :class="[{ open: menuOpen }, { showing }]">
			<NuxtLink to="/" class="no-line home-link">the archive</NuxtLink>
			<button class="hamburger" ref="toggle" @click="toggleMenu">
				<span class="top" />
				<span class="mid" />
				<span class="bottom" />
			</button>
			<transition name="menu">
				<section class="menu" v-if="menuOpen">
					<nav>
						<NuxtLink
							@click="toggleMenu"
							v-for="item in items"
							:key="`item-${item.title}`"
							:to="item.link"
							class="no-line"
							:style="`--color: var(--${item.color});`"
						>
							{{ item.title }}
						</NuxtLink>
					</nav>
				</section>
			</transition>
		</section>
		<section id="mission" v-if="route.path === '/'">
			<h1>{{ page.title }}</h1>
			<p>{{ page.description }}</p>
			<pre></pre>
		</section>
	</header>
</template>

<script setup>
	import { useWindowStore } from "@/stores/window";
	import { uid } from "@/composables/uid";

	// Handle Mission Statement
	const route = useRoute();
	const page = await usePage();
	// const isHome = page._path === "/";
	// console.log(`🚀 ~ page`, page);

	const menuOpen = ref(false);

	const vWindow = useWindowStore();
	const lastTop = ref(0);
	const showing = ref(true);
	document.body.classList.add("showing");

	watch(vWindow, (val) => {
		if (val.top > lastTop.value) {
			showing.value = false;
			document.body.classList.remove("showing");
		} else {
			document.body.classList.add("showing");
			showing.value = true;
		}

		lastTop.value = val.top;
	});

	const toggleMenu = () => {
		menuOpen.value = !menuOpen.value;
		if (menuOpen.value) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	};

	const items = [
		{ title: "Tutorials", link: "/tutorials", color: "blue" },
		{ title: "Deep Dives", link: "/deep-dives", color: "green" },
		{ title: "Solutions", link: "/solutions", color: "pink" },
		{ title: "About", link: "/about", color: "yellow" }
	];
</script>

<style lang="scss">
	#header {
		padding: 3rem 160px;

		.top-bar {
			display: flex;
			justify-content: space-between;

			position: fixed;
			z-index: 10;
			top: -3.5rem;
			left: 0;
			width: 100vw;
			padding: 1rem 160px;
			background-color: var(--light-blue);

			transition: 350ms ease-in-out;

			.home-link {
				z-index: 9;
				color: var(--white);
			}

			.hamburger {
				position: relative;
				z-index: 9;
				height: 1.5rem;
				width: 1.5rem;

				span {
					position: absolute;
					display: block;
					top: calc((33% * var(--i)) - (0.125rem * var(--i)));
					right: 0;

					width: 1.25rem;
					height: 0.125rem;
					background-color: var(--white);
					border-radius: 0.1em;

					transition: 250ms var(--in-out);

					&.top {
						--i: 1;
						--transform: 0, 0.125rem, 0;
					}
					&.bottom {
						--i: 3;
						--transform: 0, -0.125rem, 0;
					}

					&.mid {
						--i: 2;
						width: 1rem;
					}
				}

				&:hover {
					span {
						width: 1.5rem;
						opacity: 0.7;
						// &.mid {
						// }
					}
				}
			}

			&.showing {
				top: 0;
			}

			&.open {
				.hamburger {
					position: relative;

					span {
						position: absolute;
						width: 1.5rem;
						margin-top: 0;
						transform-origin: center;

						&.top,
						&.bottom {
							--i: 2;
							transform: rotate(-45deg);
						}

						&.mid {
							transform: rotate(45deg);
						}
					}
				}
			}

			.menu {
				position: fixed;
				top: 0;
				right: 0;
				background: var(--light-blue);
				width: 100vw;
				height: 100vh;
				z-index: 8;

				nav {
					position: fixed;
					left: 50%;
					top: 50%;
					transform: translate3d(-50%, -50%, 0);
					display: flex;
					flex-direction: column;
					--color: var(--yellow);

					a {
						text-align: center;
						// text-transform: uppercase;
						color: var(--white);
						font-weight: 900;
						font-size: 3rem;
						-webkit-background-clip: text;
						-webkit-text-fill-color: transparent;
						background-image: linear-gradient(
							to right,
							var(--white),
							var(--white),
							var(--white),
							var(--color),
							var(--color),
							var(--color)
						);
						position: relative;
						background-size: 500% 100%;
						background-position: 0 0;

						transition: 500ms ease-in-out;
						transition-delay: 125ms;
						+ a {
							margin-top: 1rem;
						}

						&:hover {
							background-position: 100% 0;
							opacity: 1;
						}
					}
				}
			}
			.menu-enter-active,
			.menu-leave-active {
				transform: translate3d(0, calc(-100vw + (1rem * 2) + 1.5rem), 0);
				transition: 250ms var(--in-out);
			}
			.menu-enter-to,
			.menu-leave {
				transform: translate3d(0, 0, 0);
			}
		}

		#mission {
			padding-top: 3rem;
			* {
				max-width: 75ch;
			}
		}
	}
</style>
