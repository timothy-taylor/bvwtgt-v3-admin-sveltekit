<script>
	import { db } from '$lib/db.js';
	import SubmitButton from '$lib/components/SubmitButton.svelte';

	let email;
	const handleSubmit = () => db.auth.signInWithOtp({ email })
</script>

<form class='flex flex-col' on:submit|preventDefault={handleSubmit}>
	<input
		type='email'
		placeholder='email@example.com'
		bind:value={email}
	/>
	<SubmitButton text='Log in' />
</form>