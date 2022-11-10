<script>
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	import { db } from '$lib/db.js';
	import { goto } from '$app/navigation';
	import DeleteButton from '$lib/components/DeleteButton.svelte';
	import SubmitButton from '$lib/components/SubmitButton.svelte';
	import Label from '$lib/components/Label.svelte';

	const { post, tags } = $page.data;
	let { title, content, tag_id, id, created_at, updated_at } = post.data;
	let status;

	const deletePost = async () => {
		if (window.confirm('Are you sure you want to delete this post?')) {
			const { error: deleteError } = await db.from('posts').delete().eq('id', id);
			if (deleteError) {
				console.error(deleteError);
				status = 'Something went wrong';
			} else {
				await goto('/');
			}
		}
	};
</script>

{#if $page.form?.success}
	<p>Post update successful!</p>
{/if}

{#if status}
	<p>{status}</p>
{/if}

<form use:enhance class='flex flex-col' method='POST'>
	<Label text='title'>
		<input name='title' type='text' bind:value={title} />
	</Label>
	<Label text='content'>
		<textarea name='content' class='h-96' bind:value={content}></textarea>
	</Label>
	<Label text='tag'>
		<select name='tag_id' bind:value={tag_id}>
			<option value=''>--choose a tag--</option>
			{#each tags.data as tag}
				<option value={tag.id}>
					{tag.name}
				</option>
			{/each}
		</select>
	</Label>

	{#if $page.data?.session}
		<input hidden name='id' value={id} />
		<input hidden name='created_at' value={created_at} />
		<input hidden name='updated_at' value={updated_at} />

		<DeleteButton handleClick={deletePost} />
		<SubmitButton text='Update post' disabled={false} />
	{:else}
		<SubmitButton text='Update post' disabled={true} />
	{/if}
</form>
