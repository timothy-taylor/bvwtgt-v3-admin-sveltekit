import { getSupabase } from '@supabase/auth-helpers-sveltekit';

//
// check for auth session here to make available
// for client pages => $page.data.session
export const load = async (event) => {
	const { session } = await getSupabase(event);
	return {
		session
	}
}