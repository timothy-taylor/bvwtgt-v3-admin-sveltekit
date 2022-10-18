<script>
	export let data;
</script>

{#each data.posts.data as post}
	<a class="block hover:underline" href={`/posts/${post.id}`} data-sveltekit-prefetch>
		{post.title}
	</a>
{/each}