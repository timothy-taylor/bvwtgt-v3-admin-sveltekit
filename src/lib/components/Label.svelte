<script>
	export let text;
</script>

<label class='flex flex-col'>
	<span class='text-xs'>{text}</span>
	<slot />
</label>