import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import { Resend } from 'resend';
import { provisionToken } from '$lib/server/redis';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const email = data.get('email') as string;

		if (!validateEmail(email)) {
			return fail(400, { success: false, message: 'Invalid email' });
		}

		try {
			const resend = new Resend(env.RESEND_API_KEY);
			const token = await provisionToken(email);
			await resend.emails.send({
				from: 'vote@pedalformedal.org',
				to: email,
				subject: 'Confirm your Pedal for Medal petition',
				text: `Sign the petition at https://pedalformedal.org/confirm?token=${token}`
			});
		} catch (error) {
			return fail(500, { success: false, message: 'Failed to send email' });
		}

		return { success: true, message: 'Check your email to confirm your support!' };
	}
} satisfies Actions;

const validateEmail = (email: string) => {
	return email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
};
