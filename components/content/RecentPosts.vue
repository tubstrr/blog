<template>
	<section id="recent-posts">
		<h2>Recent posts</h2>
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
				<read-more title="Read more" :link="post._path" />
			</NuxtLink>
		</article>
	</section>
</template>

<script setup>
	const posts = await queryContent()
		.where({ type: "post" })
		.sort({ post_number: -1, date: -1 })
		.limit(5)
		.only(["title", "description", "date", "updated", "category", "post_number", "_path"])
		.find();
</script>

<style lang="scss">
	#recent-posts {
		h2 {
			margin-bottom: 0.25rem;
		}
		article {
			--timing: 330ms;
			--function: #{$in-out};
			--transition: var(--timing) var(--function);

			background: $white;
			border: 1px solid $black;
			margin-top: 1rem;
			margin-right: calc(2rem + 1em);
			box-shadow: 1em 1em var(--box-shadow-color);
			position: relative;
			transition: var(--transition);

			+ article {
				margin-top: 3rem;
			}

			&[category="tutorial"] {
				--box-shadow-color: #{$blue};
			}
			&[category="solution"] {
				--box-shadow-color: #{$pink};
			}
			&[category="deep-dive"] {
				--box-shadow-color: #{$yellow};
			}

			> a {
				&:hover,
				&:focus,
				&:active {
					// box-shadow: 0.75em 0.75em 0 0px var(--box-shadow-color);
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
					border: 2px dashed $black;
					clip-path: polygon(100% 0, 100% 0, 100% 0, 0 100%, 0 100%, 0 100%);

					transition: var(--transition);
				}
				padding: 2rem;
				display: block;

				.post-meta {
					margin-bottom: 0.2em;
					font-size: 0.75em;
					margin-bottom: 0.5rem;
					text-transform: uppercase;
				}
				.description {
					margin-top: 1em;
				}
			}
		}
	}
</style>
