<script>
	export let text, disabled = false;
</script>

<button
	{disabled}
	type='submit'
	class=
		'w-1/3 p-4 mt-2 border rounded border-black hover:bg-black hover:text-white'
>
	{text}
</button>