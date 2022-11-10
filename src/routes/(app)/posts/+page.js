import { getSupabase } from '@supabase/auth-helpers-sveltekit';

export const load = async (event) => {
	const { supabaseClient } = await getSupabase(event);

	return {
		posts: await supabaseClient.from('posts').select('*')
	};
};