<template>
	<section id="recent-posts">
		<h2>Recent posts</h2>
		<article
			v-for="(post, index) in posts"
			:key="`${post.title}-${index}`"
			:id="`${post.category}-${post.post_number}`"
			:category="post.category"
		>
			<post-meta :post="post" />
			<h3 v-html="post.title" />
			<p class="description" v-html="post.description" />
			<!-- <read-more :title="Read more" :link="post._path" /> -->
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
			background: $white;
			padding: 2rem;
			border: 1px solid $black;
			margin-top: 1rem;

			+ article {
				margin-top: 3rem;
			}

			&[category="tutorial"] {
				@include box-shadow($blue);
			}
			&[category="solution"] {
				@include box-shadow($pink);
			}
			&[category="deep-dive"] {
				@include box-shadow($yellow);
			}

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
</style>
