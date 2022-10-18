import { db } from '$lib/db.js';

export const load = async () => {
	return {
		posts: await db.from('posts').select('*'),
	}
}