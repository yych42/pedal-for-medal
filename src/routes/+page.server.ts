import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import { Resend } from 'resend';
import { provisionToken, getTotalSignatures } from '$lib/server/redis';

export const load = async () => {
	const progress = await getTotalSignatures();
	return { progress };
};

async function verifyTurnstileToken(token: string) {
	const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			secret: env.TURNSTILE_SECRET_KEY,
			response: token
		})
	});

	const data = await response.json();
	return data.success;
}

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const gameId = data.get('gameId') as string;
		const turnstileToken = data.get('cf-turnstile-response') as string;

		if (!turnstileToken) {
			return fail(400, { success: false, message: 'Please complete the verification challenge' });
		}

		const isHuman = await verifyTurnstileToken(turnstileToken);
		if (!isHuman) {
			return fail(400, { success: false, message: 'Verification failed. Please try again.' });
		}

		try {
			const token = await provisionToken(gameId || 'anonymous');
			return { success: true, message: 'Thank you for supporting the cause!' };
		} catch (error) {
			return fail(500, { success: false, message: 'Failed to register your support' });
		}
	}
} satisfies Actions;

const validateEmail = (email: string) => {
	return email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
};
