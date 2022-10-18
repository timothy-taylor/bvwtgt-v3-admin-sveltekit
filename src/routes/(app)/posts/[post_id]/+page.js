import { db } from '$lib/db.js';

export const load = async ({ params }) => {
	const { post_id } = params;

	return {
		post: await db.from('posts').select('*').eq('id', post_id).limit(1).single(),
		tags: await db.from('tags').select('*')
	};
};