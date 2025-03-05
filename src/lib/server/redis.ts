import { env } from '$env/dynamic/private';
import { Redis } from '@upstash/redis';
import { nanoid } from 'nanoid';

const redis = new Redis({
	url: env.REDIS_URL,
	token: env.REDIS_TOKEN
});

export const provisionToken = async (gameId: string) => {
	const token = nanoid();
	await redis.set(token, gameId, { ex: 60 * 60 * 24 });
	return token;
};

interface ConfirmSignupResult {
	success: boolean;
	message?: string;
}

export const confirmSignup = async (token: string): Promise<ConfirmSignupResult> => {
	// Check if the token is valid
	const gameId = await redis.get(token);
	if (!gameId) {
		return { success: false, message: 'Invalid token' };
	}

	// Check if this game ID has already signed up (skip for anonymous users)
	if (gameId !== 'anonymous') {
		const signedUp = await redis.sismember('signedUp', gameId);
		if (signedUp) {
			return { success: false, message: 'You have already signed up' };
		}
	}

	// Add the game ID to the signed up set (skip for anonymous users)
	if (gameId !== 'anonymous') {
		await redis.sadd('signedUp', gameId);
	} else {
		// For anonymous users, add a unique identifier to the set
		await redis.sadd('signedUp', `anon_${nanoid()}`);
	}

	return { success: true };
};

export const getTotalSignatures = async (): Promise<number> => {
	return await redis.scard('signedUp');
};
