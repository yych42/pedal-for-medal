import { env } from '$env/dynamic/private';
import { Redis } from '@upstash/redis';
import { nanoid } from 'nanoid';

const redis = new Redis({
	url: env.REDIS_URL,
	token: env.REDIS_TOKEN
});

export const provisionToken = async (email: string) => {
	const token = nanoid();
	await redis.set(token, email, { ex: 60 * 60 * 24 });
	return token;
};

interface ConfirmSignupResult {
	success: boolean;
	message?: string;
}

export const confirmSignup = async (token: string): Promise<ConfirmSignupResult> => {
	// Check if the token is valid
	const email = await redis.get(token);
	if (!email) {
		return { success: false, message: 'Invalid token' };
	}

	// Check if the email is already signed up
	const signedUp = await redis.sismember('signedUp', email);
	if (signedUp) {
		return { success: false, message: 'Email already signed up' };
	}

	// Add the email to the signed up set
	await redis.sadd('signedUp', email);
	return { success: true };
};

export const getTotalSignatures = async () => {
	return await redis.scard('signedUp');
};
