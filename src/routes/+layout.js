import { getSupabase } from '@supabase/auth-helpers-sveltekit';

//
// check for auth session here
// made available on pages => $page.data.session
export const load = async (event) => {
	const { session } = await getSupabase(event);
	return {
		session
	}
}