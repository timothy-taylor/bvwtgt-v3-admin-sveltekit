import { getSupabase } from '@supabase/auth-helpers-sveltekit';

export const load = async (event) => {
	const { supabaseClient } = await getSupabase(event)
	const { post_id } = event.params;

	return {
		post: await supabaseClient.from('posts').select('*').eq('id', post_id).limit(1).single(),
		tags: await supabaseClient.from('tags').select('*')
	};
};