import { buildPostEntity } from '$lib/data-structures.js';
import { getSupabase } from '@supabase/auth-helpers-sveltekit';
import { error, invalid } from '@sveltejs/kit';

//
// update this with supabase on the server
export const actions = {
	default: async (event) => {
		const { session, supabaseClient } = await getSupabase(event);
		if (!session) throw error(403, { message: 'Unauthorized' });

		const data = await event.request.formData(),
			title = data.get('title'),
			content = data.get('content'),
			tag_id = data.get('tag_id'),
			postEntity = buildPostEntity({ title, content, tag_id });

		const { error: newPostError } = await supabaseClient.from('posts').insert(postEntity);

		if (newPostError) {
			console.error(newPostError);
			return invalid('400', { supabaseError: newPostError.message });
		}

		return {
			success: true
		};
	}
}