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
