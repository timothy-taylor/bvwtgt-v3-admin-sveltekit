<script>
	import '../app.css';
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';
	import { db } from '$lib/db.js';

	onMount(() => {
		const { data: { subscription } } = db.auth.onAuthStateChange(() => {
			invalidate('supabase:auth');
		});

		return () => {
			subscription.unsubscribe();
		}
	})
</script>

<div class='min-w-screen min-h-screen px-6 py-3 dark:bg-amber-200'>
	<slot />
</div>
