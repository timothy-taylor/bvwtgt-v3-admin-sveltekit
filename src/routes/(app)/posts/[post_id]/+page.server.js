import { error, invalid } from '@sveltejs/kit';
import { buildPostEntity } from '$lib/data-structures.js';
import { getSupabase } from '@supabase/auth-helpers-sveltekit';

export const actions = {
	default: async (event) => {
		const { session, supabaseClient } = await getSupabase(event);
		if (!session) throw error(403, { message: 'Unauthorized' });

		const formData = await event.request.formData(),
			title = formData.get('title'),
			content = formData.get('content'),
			tag_id = formData.get('tag_id'),
			id = formData.get('id'),
			created_at = formData.get('created_at'),
			updated_at = formData.get('updated_at'),
			postEntity = buildPostEntity({ title, content, tag_id, id, created_at, updated_at });

		const { error: updateError } = await supabaseClient
			.from('posts')
			.upsert(postEntity);

		if (updateError) {
			console.error('error:', updateError.message);
			return invalid('400', { supabaseError: updateError.message });
		}

		return {
			success: true
		};
	}
};
