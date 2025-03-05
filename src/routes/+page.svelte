<script lang="ts">
	import { enhance } from '$app/forms';
	import { Bike, Rocket, Shield, EarOff, ThumbsUp, AlertCircle, CheckCircle } from 'lucide-svelte';
	import type { PageData, ActionData } from './$types';
	import Modal from '$lib/components/Modal.svelte';
	import ProgressBar from '$lib/components/ProgressBar.svelte';
	import { onMount } from 'svelte';

	const scrollToSection = (elementId: string) => {
		const element = document.getElementById(elementId);
		element?.scrollIntoView({ behavior: 'smooth' });
	};

	let { form, data }: { form: ActionData; data: PageData } = $props();
</script>

<div class="border-b border-gray-800">
	<ProgressBar progress={data.progress} total={10000} />
</div>

<div class="flex min-h-screen flex-col bg-gray-900 text-gray-100">
	<header class="flex items-center border-b border-gray-800 p-4 px-4 lg:px-6">
		<div class="container mx-auto flex flex-col items-start md:flex-row md:items-center">
			<a class="flex items-center justify-center" href="/">
				<Bike class="mr-2 h-8 w-8 text-yellow-500" />
				<span class="text-xl font-bold">Pedal for Medal</span>
			</a>
			<nav class="flex w-full gap-4 overflow-x-scroll pt-4 sm:gap-6 md:ml-auto md:w-auto md:pt-0">
				<button
					onclick={() => scrollToSection('features')}
					class="whitespace-nowrap text-sm font-medium transition-colors hover:text-yellow-500"
				>
					Features
				</button>
				<button
					onclick={() => scrollToSection('petition')}
					class="whitespace-nowrap text-sm font-medium transition-colors hover:text-yellow-500"
				>
					Sign Petition
				</button>
				<button
					onclick={() => scrollToSection('endorsements')}
					class="whitespace-nowrap text-sm font-medium transition-colors hover:text-yellow-500"
				>
					Endorsements
				</button>

				<a
					href="https://discord.gg/xHhdAVRXvr"
					target="_blank"
					rel="noopener noreferrer"
					class="text-sm font-medium text-indigo-400 transition-colors hover:text-indigo-300"
					aria-label="Join the Discord"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						class="h-5 w-5"
						><path
							d="M19.3034 5.33716C17.9344 4.71103 16.4805 4.2547 14.9629 4C14.7719 4.32899 14.5596 4.77471 14.411 5.12492C12.7969 4.89144 11.1944 4.89144 9.60255 5.12492C9.45397 4.77471 9.2311 4.32899 9.05068 4C7.52251 4.2547 6.06861 4.71103 4.70915 5.33716C1.96053 9.39111 1.21766 13.3495 1.5891 17.2549C3.41443 18.5815 5.17612 19.388 6.90701 19.9187C7.33151 19.3456 7.71356 18.73 8.04255 18.0827C7.41641 17.8492 6.82211 17.5627 6.24904 17.2231C6.39762 17.117 6.5462 17.0003 6.68416 16.8835C10.1438 18.4648 13.8911 18.4648 17.3082 16.8835C17.4568 17.0003 17.5948 17.117 17.7434 17.2231C17.1703 17.5627 16.576 17.8492 15.9499 18.0827C16.2789 18.73 16.6609 19.3456 17.0854 19.9187C18.8152 19.388 20.5875 18.5815 22.4033 17.2549C22.8596 12.7341 21.6806 8.80747 19.3034 5.33716ZM8.5201 14.8459C7.48007 14.8459 6.63107 13.9014 6.63107 12.7447C6.63107 11.5879 7.45884 10.6434 8.5201 10.6434C9.57071 10.6434 10.4303 11.5879 10.4091 12.7447C10.4091 13.9014 9.57071 14.8459 8.5201 14.8459ZM15.4936 14.8459C14.4535 14.8459 13.6034 13.9014 13.6034 12.7447C13.6034 11.5879 14.4323 10.6434 15.4936 10.6434C16.5442 10.6434 17.4038 11.5879 17.3825 12.7447C17.3825 13.9014 16.5548 14.8459 15.4936 14.8459Z"
						></path></svg
					>
				</a>
			</nav>
		</div>
	</header>

	<main class="flex-1">
		<section
			class="relative w-full bg-[url('/bike-hero.jpeg')] bg-cover bg-center py-12 md:py-24 lg:py-32 xl:py-48"
		>
			<div class="absolute inset-0 bg-gray-900/60"></div>
			<div class="container relative mx-auto px-4 md:px-6">
				<div class="flex flex-col items-center space-y-4 text-center">
					<div class="space-y-2">
						<h1
							class="text-3xl font-bold tracking-tighter text-yellow-500 sm:text-4xl md:text-5xl lg:text-6xl/none"
						>
							Pedal for Democracy!
						</h1>
						<p
							class="mx-auto max-w-[700px] text-gray-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
						>
							Join the campaign to bring bicycles to Helldivers 2. Because nothing says "Super
							Earth" like a bike bell in the face of alien tyranny!
						</p>
					</div>
					<div class="space-x-4">
						<button
							onclick={() => scrollToSection('petition')}
							class="inline-flex h-9 items-center justify-center rounded-md bg-yellow-500 px-4 py-2 text-sm font-medium text-gray-900 shadow transition-colors hover:bg-yellow-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
						>
							Sign the Petition
						</button>
						<button
							onclick={() => scrollToSection('features')}
							class="inline-flex h-9 items-center justify-center rounded-md border border-gray-800 bg-gray-950 px-4 py-2 text-sm font-medium text-gray-50 shadow-sm transition-colors hover:bg-gray-800 hover:text-gray-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
						>
							Learn More
						</button>
					</div>
				</div>
			</div>
		</section>

		<section id="features" class="w-full bg-gray-800 py-12 md:py-24 lg:py-32">
			<div class="container mx-auto px-4 md:px-6">
				<h2
					class="mb-12 text-center text-3xl font-bold tracking-tighter text-yellow-500 sm:text-5xl"
				>
					Tactical Advantages
				</h2>
				<div class="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
					<div
						class="flex flex-col items-center space-y-2 rounded-lg border border-gray-700 bg-gray-900 p-6"
					>
						<Rocket class="mb-2 h-12 w-12 text-yellow-500" />
						<h3 class="text-xl font-bold">Eco-Friendly Destruction</h3>
						<p class="text-center text-gray-400">
							Reduce your carbon footprint while increasing your efficiency against alien scums!
						</p>
					</div>
					<div
						class="flex flex-col items-center space-y-2 rounded-lg border border-gray-700 bg-gray-900 p-6"
					>
						<EarOff class="mb-2 h-12 w-12 text-yellow-500" />
						<h3 class="text-xl font-bold">Superior Stealth</h3>
						<p class="text-center text-gray-400">
							Sneak past Devastators and Chargers with the silent swoosh of rubber tires!*
						</p>
					</div>
					<div
						class="flex flex-col items-center space-y-2 rounded-lg border border-gray-700 bg-gray-900 p-6"
					>
						<ThumbsUp class="mb-2 h-12 w-12 text-yellow-500" />
						<h3 class="text-xl font-bold">Powered by Democracy</h3>
						<p class="text-center text-gray-400">
							Harness the power of freedom with every pedal stroke against the forces of tyranny!
						</p>
					</div>
				</div>

				<p class="pt-6 text-center text-xs text-gray-400">
					* Individual results may vary. Study paid for by the Xeno-Resistant Tire Co.
				</p>
			</div>
		</section>

		<section id="petition" class="w-full bg-gray-900 py-12 md:py-24 lg:py-32">
			<div class="container mx-auto px-4 md:px-6">
				<div class="flex flex-col items-center space-y-4 text-center">
					<div class="space-y-2">
						<h2 class="text-3xl font-bold tracking-tighter text-yellow-500 sm:text-5xl">
							Sign the Petition
						</h2>
						<p
							class="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
						>
							Join thousands of Helldivers demanding their right to cycle through undemocratic
							planets!
						</p>
					</div>
					<div class="w-full max-w-sm">
						<form class="flex flex-col space-y-4" method="POST" use:enhance>
							<input
								name="gameId"
								class="max-w-lg flex-1 rounded-md border-gray-700 bg-gray-800 p-2 text-gray-100"
								placeholder="Enter your game ID (optional)"
								type="text"
							/>
							<div
								id="cf-turnstile"
								class="mx-auto"
								data-sitekey="0x4AAAAAAA_IaCuvl6Ar1umE1f9tGEoM53w"
								data-theme="dark"
							></div>
							<button
								type="submit"
								class="rounded-md bg-yellow-500 p-2 font-medium text-gray-900 hover:bg-yellow-400 disabled:pointer-events-none disabled:opacity-50"
								disabled={form?.success}
							>
								Support the Cause
							</button>
						</form>
						{#if form?.success === false}
							<Modal>
								<AlertCircle class="mx-auto mb-4 h-10 w-10 text-red-500" />
								<p class="text-red-500">{form.message}</p>
							</Modal>
						{:else if form?.success}
							<Modal>
								<CheckCircle class="mx-auto mb-4 h-10 w-10 text-green-500" />
								<p class="text-green-500">{form.message}</p>
							</Modal>
						{/if}
						<p class="mt-2 text-xs text-gray-400">
							By signing, you agree to potentially be drafted into the Helldivers Cycling Corps.
						</p>
					</div>
				</div>
			</div>
		</section>

		<section id="endorsements" class="w-full bg-gray-800 py-12 md:py-24 lg:py-32">
			<div class="container mx-auto px-4 md:px-6">
				<h2
					class="mb-12 text-center text-3xl font-bold tracking-tighter text-yellow-500 sm:text-5xl"
				>
					Endorsed By
				</h2>
				<div class="grid grid-cols-2 items-center gap-8 md:grid-cols-3">
					<div class="flex flex-col items-center space-y-2">
						<div class="flex h-24 w-24 items-center justify-center rounded-full bg-gray-700">
							<Bike class="h-12 w-12 text-yellow-500" />
						</div>
						<p class="text-center font-semibold">Super Earth Cycling Association</p>
					</div>
					<div class="flex flex-col items-center space-y-2">
						<div class="flex h-24 w-24 items-center justify-center rounded-full bg-gray-700">
							<Shield class="h-12 w-12 text-yellow-500" />
						</div>
						<p class="text-center font-semibold">Xeno-Resistant Tire Co.</p>
					</div>
					<div class="flex flex-col items-center space-y-2">
						<div class="flex h-24 w-24 items-center justify-center rounded-full bg-gray-700">
							<Rocket class="h-12 w-12 text-yellow-500" />
						</div>
						<p class="text-center font-semibold">Galactic Bike Rack Manufacturers</p>
					</div>
				</div>
			</div>
		</section>
	</main>

	<footer class="flex w-full gap-2 border-t border-gray-800 px-4 py-6 md:px-6">
		<div
			class="container mx-auto flex flex-col space-y-4 lg:flex-row lg:items-center lg:justify-between"
		>
			<p class="text-xs text-gray-400 lg:max-w-xl">
				<span class="gap-1 text-yellow-500">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						class="inline-block h-3 w-3 align-[-2px] text-yellow-500"
						><path
							d="M12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22ZM12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20ZM12 17C10.1805 17 8.58698 16.0265 7.71225 14.5723L9.42649 13.5432C9.95089 14.4162 10.9069 15 12 15C13.6575 15 15 13.6575 15 12C15 10.3425 13.6575 9 12 9C10.9074 9 9.95162 9.58339 9.42709 10.4558L7.71225 9.42771C8.58698 7.9735 10.1805 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17Z"
						></path></svg
					>
					Pedal for Medal Campaign. No rights reserved. Yup. This is a fun project.</span
				> Helldivers™ and Helldivers™ 2 are trademarks of Arrowhead Game Studios AB. This campaign
				is not affiliated with Arrowhead Game Studios.
			</p>
			<nav class="flex space-x-4">
				<a
					class="text-xs text-gray-400 underline-offset-4 transition-colors hover:text-gray-100 hover:underline"
					href="/privacy"
				>
					Privacy Policy
				</a>
			</nav>
		</div>
	</footer>
</div>
