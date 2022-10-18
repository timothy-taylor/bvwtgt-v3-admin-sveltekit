import { invalid, redirect } from '@sveltejs/kit';
import { buildPostEntity } from '$lib/data-structures.js';
import { db } from '$lib/db.js';

export const actions = {
	update: async ({ request }) => {
		const data = await request.formData();
		const title = data.get('title');
		const content = data.get('content');
		const tag_id = data.get('tag_id');
		const id = data.get('id');
		const created_at = data.get('created_at');
		const updated_at = data.get('updated_at');
		const postEntity = buildPostEntity({ title, content, tag_id, id, created_at, updated_at });

		const { error } = await db.from('posts').update(postEntity).eq('id', id);
		if (error) throw invalid('400');

		return {
			success: true,
		}
	},

	delete: async ({ request }) => {
		const data = await request.formData();
		const id = data.get('id');
		const title = data.get('title');
		const confirmTitle = data.get('confirmTitle');

		if (title !== confirmTitle)
			return invalid(400, { confirmTitle, incorrect: true })

		const { error } = await db.from('posts').delete().eq('id', id);
		if (error) throw invalid('400');

		throw redirect(200, '/posts');
	},
};