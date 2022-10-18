<script>
	import { page } from '$app/stores';
	import Label from '$lib/components/Label.svelte';
	import SubmitButton from '$lib/components/SubmitButton.svelte';

	const { tags } = $page.data;
	let title, content, tag_id;
</script>

{#if $page.form?.success}
	<p>Post create successful!</p>
{/if}

<form class='flex flex-col' method='POST'>
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
	<SubmitButton text='Create post' />
</form>