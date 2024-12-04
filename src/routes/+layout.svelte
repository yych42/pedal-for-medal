<script lang="ts">
	import { dev } from '$app/environment';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';
	import '../app.css';
	let { children } = $props();
	injectAnalytics({ mode: dev ? 'development' : 'production' });
</script>

<svelte:head>
	<title>Pedal for Medal</title>
	<meta
		name="description"
		content="Join the petition campaign to bring bicycles to Helldivers 2. Because nothing says 'Super Earth' like a bike bell in the face of alien tyranny!"
	/>
	<meta property="og:image" content="/bike-hero.jpeg" />
</svelte:head>
{@render children()}
