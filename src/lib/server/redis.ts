import { env } from '$env/dynamic/private';
import { Redis } from '@upstash/redis';
import { nanoid } from 'nanoid';

const redis = new Redis({
	url: env.REDIS_URL,
	token: env.REDIS_TOKEN
});

interface SignatureResult {
	success: boolean;
	message?: string;
}

export const addSignature = async (gameId: string): Promise<SignatureResult> => {
	// For non-anonymous users, check if they've already signed
	if (gameId !== 'anonymous') {
		const signedUp = await redis.sismember('signedUp', gameId);
		if (signedUp) {
			return { success: false, message: "You have already signed up with this Helldiver's ID" };
		}
		await redis.sadd('signedUp', gameId);
	} else {
		// For anonymous users, add with a unique identifier
		await redis.sadd('signedUp', `anon_${nanoid()}`);
	}

	return { success: true };
};

export const getTotalSignatures = async (): Promise<number> => {
	return await redis.scard('signedUp');
};
