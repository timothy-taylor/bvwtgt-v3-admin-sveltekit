<script>
	import { page } from '$app/stores';
	import Label from '$lib/components/Label.svelte';
	import SubmitButton from '$lib/components/SubmitButton.svelte';

	const { post, tags } = $page.data;
	let { title, content, tag_id, id, created_at, updated_at } = post.data;
	let confirmTitle;
</script>

{#if $page.form?.success}
	<p>Post update successful!</p>
{/if}

<form class='flex flex-col' method='POST' action='?/update'>
	<Label text='title'>
		<input name='title' type='text' bind:value={title} />
	</Label>
	<Label text='content'>
		<textarea class='h-96' name='content' bind:value={content}></textarea>
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
		<input type='hidden' name='id' bind:value={id} />
		<input type='hidden' name='created_at' bind:value={created_at} />
		<input type='hidden' name='updated_at' bind:value={updated_at} />

		<SubmitButton text='Update post' />
		<button
			formaction='?/delete'
			class=
				'w-1/3 px-4 py-2 mt-8 border rounded border-black hover:bg-black hover:text-white'
		>
			Delete
		</button>
		<Label text='to delete, enter the post title and click delete'>
			<input type='text' placeholder='post title' class='italic' name='confirmTitle' bind:value={confirmTitle} />
		</Label>
	{/if}
</form>