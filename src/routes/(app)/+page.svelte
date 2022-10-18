<script>
	import { page } from '$app/stores';
	import Auth from '$lib/components/Auth.svelte';
</script>

{#if $page.data.session}
	Hi Tim
{:else}
	<Auth />
{/if}
