import { buildPostEntity } from '$lib/data-structures.js';
import { db } from '$lib/db';
import { invalid } from '@sveltejs/kit';

//
// update this with supabase on the server
export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const title = data.get('title');
		const content = data.get('content');
		const tag_id = data.get('tag_id');
		const postEntity = buildPostEntity({ title, content, tag_id });

		const { error } = await db.from('posts').insert([postEntity])
		if (error) throw invalid('400');

		return {
			success: true,
		}
	}
}