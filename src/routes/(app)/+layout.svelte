<script>
	import { page } from '$app/stores';
	import NavLink from '$lib/components/NavLink.svelte';
</script>

<nav class='max-w-prose mx-auto text-right'>
	{#if $page.data.session}
		<NavLink path='/posts/new' text='New post' />
	{/if}
	<NavLink path='/posts' text='Edit posts' />
</nav>

<main class='container pt-4 mx-auto max-w-prose'>
	<slot />
</main>