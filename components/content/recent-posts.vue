<template>
	<section id="recent-posts">
		<h2>{{ title }}</h2>
		<article
			v-for="(post, index) in posts"
			:key="`${post.title}-${index}`"
			:id="`${post.category}-${post.post_number}`"
			title="post.title"
			:category="post.category"
		>
			<NuxtLink :to="post._path" class="no-line">
				<post-meta :post="post" />
				<h2 v-html="post.title" />
				<p class="description" v-html="post.description" />
				<read-more title="Read article" :link="post._path" />
			</NuxtLink>
		</article>
	</section>
</template>

<script setup>
	const { category, title } = defineProps({
		category: {
			type: [String, Boolean],
			default: false
		},
		title: {
			type: String,
			default: "Recent Posts"
		}
	});

	let categories = ["deep-dive", "solution", "tutorial"];
	if (category) categories = [category];

	const posts = await queryContent()
		.where({ type: "post", category: { $in: categories } })
		.sort({ post_number: -1, date: -1 })
		.limit(5)
		.only(["title", "description", "date", "updated", "category", "post_number", "_path"])
		.find();
</script>

<style lang="scss">
	#recent-posts {
		h2 {
			margin-top: 0;
		}
		article {
			--timing: 250ms;
			--function: var(--in-out);
			--transition: var(--timing) var(--function);

			background: var(--white);
			border: 1px solid var(--black);
			margin-top: 1em;
			margin-right: calc(2em + 1em);
			box-shadow: 1em 1em var(--box-shadow-color);
			position: relative;
			transition: var(--transition);

			+ article {
				margin-top: 3em;
			}

			&[category="tutorial"] {
				--box-shadow-color: var(--blue);
			}
			&[category="solution"] {
				--box-shadow-color: var(--pink);
			}
			&[category="deep-dive"] {
				--box-shadow-color: var(--green);
			}

			> a {
				&:hover,
				&:focus,
				&:active {
					opacity: 0.9;

					&:before {
						clip-path: polygon(0 0, 100% 0, 100% 100%, 100% 100%, 0 100%, 0 0);
					}
				}
				&:before {
					content: "";
					position: absolute;
					pointer-events: none;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					border: 2px dashed var(--black);
					clip-path: polygon(100% 0, 100% 0, 100% 0, 0 100%, 0 100%, 0 100%);

					transition: var(--transition);
					transition-delay: 200ms;
				}
				padding: 2em;
				display: block;

				.post-meta {
					margin-bottom: 0.2em;
					font-size: 0.75em;
					margin-bottom: 0.5em;
					text-transform: uppercase;
				}
				.description {
					margin-top: 1em;
				}
			}
		}
	}

	@media (max-width: $desktop) {
		#recent-posts {
			article {
				margin-right: 1em;
			}
		}
	}
</style>
