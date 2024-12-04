import type { PageServerLoad } from './$types';
import { confirmSignup } from '$lib/server/redis';

export const load = (async ({ url }) => {
	const token = url.searchParams.get('token');
	if (!token) {
		return { success: false, message: 'No token provided' };
	}

	const result = await confirmSignup(token);
	return result;
}) satisfies PageServerLoad;
