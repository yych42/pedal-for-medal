<!-- routes/+page.svelte -->
<script lang="ts">
	import { Bike, Rocket, Shield, EarOff, ThumbsUp } from 'lucide-svelte';

	const scrollToSection = (elementId: string) => {
		const element = document.getElementById(elementId);
		element?.scrollIntoView({ behavior: 'smooth' });
	};
</script>

<div class="flex min-h-screen flex-col bg-gray-900 text-gray-100">
	<header class="flex h-16 items-center border-b border-gray-800 px-4 lg:px-6">
		<div class="container mx-auto flex items-center">
			<a class="flex items-center justify-center" href="/">
				<Bike class="mr-2 h-8 w-8 text-yellow-500" />
				<span class="text-xl font-bold">Pedal for Medal</span>
			</a>
			<nav class="ml-auto flex gap-4 sm:gap-6">
				<button
					on:click={() => scrollToSection('features')}
					class="text-sm font-medium transition-colors hover:text-yellow-500"
				>
					Features
				</button>
				<button
					on:click={() => scrollToSection('petition')}
					class="text-sm font-medium transition-colors hover:text-yellow-500"
				>
					Sign Petition
				</button>
				<button
					on:click={() => scrollToSection('endorsements')}
					class="text-sm font-medium transition-colors hover:text-yellow-500"
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
							on:click={() => scrollToSection('petition')}
							class="inline-flex h-9 items-center justify-center rounded-md bg-yellow-500 px-4 py-2 text-sm font-medium text-gray-900 shadow transition-colors hover:bg-yellow-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
						>
							Sign the Petition
						</button>
						<button
							on:click={() => scrollToSection('features')}
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
					<div class="w-full max-w-sm space-y-2">
						<form class="flex flex-col space-y-4">
							<input
								class="max-w-lg flex-1 rounded-md border-gray-700 bg-gray-800 p-2 text-gray-100"
								placeholder="Enter your email"
								type="email"
							/>
							<button
								type="submit"
								class="rounded-md bg-yellow-500 p-2 font-medium text-gray-900 hover:bg-yellow-400"
							>
								Support the Cause
							</button>
						</form>
						<p class="text-xs text-gray-400">
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

	<footer
		class="flex w-full shrink-0 flex-col items-center gap-2 border-t border-gray-800 px-4 py-6 sm:flex-row md:px-6"
	>
		<div class="container mx-auto flex flex-col items-center sm:flex-row">
			<p class="text-xs text-gray-400">
				© 2024 Pedal for Medal Campaign. All rights reserved. Helldivers™ and Helldivers™ 2 are
				trademarks of Arrowhead Game Studios AB. This campaign is not affiliated with Arrowhead Game
				Studios.
			</p>
			<nav class="flex gap-4 sm:ml-auto sm:gap-6">
				<a
					class="text-xs text-gray-400 underline-offset-4 transition-colors hover:text-gray-100 hover:underline"
					href="/"
				>
					Terms of Service
				</a>
				<a
					class="text-xs text-gray-400 underline-offset-4 transition-colors hover:text-gray-100 hover:underline"
					href="/"
				>
					Privacy
				</a>
			</nav>
		</div>
	</footer>
</div>
