<script lang="ts">
	import { Bike, ThumbsUp } from 'lucide-svelte';
	import { goto } from '$app/navigation';
</script>

<div class="flex min-h-screen flex-col bg-gray-900 text-gray-100">
	<header class="flex items-center border-b border-gray-800 p-4 px-4 lg:px-6">
		<div class="container mx-auto">
			<a class="flex items-center justify-center" href="/">
				<Bike class="mr-2 h-8 w-8 text-yellow-500" />
				<span class="text-xl font-bold">Pedal for Medal</span>
			</a>
		</div>
	</header>

	<main class="flex flex-1 items-center justify-center">
		<div class="container mx-auto px-4 py-16 text-center md:px-6">
			<div class="flex flex-col items-center space-y-4">
				<div class="flex h-24 w-24 items-center justify-center rounded-full bg-gray-800">
					<ThumbsUp class="h-12 w-12 text-yellow-500" />
				</div>
				<h1 class="text-3xl font-bold text-yellow-500 sm:text-4xl">Welcome to the Corps!</h1>
				<p class="max-w-[500px] text-gray-400">
					Your support has been registered with the Pedal for Medal campaign. Sponsored by Super
					Earth Cycling Association, Xeno-Resistant Tire Co., and Galactic Bike Rack
					Manufacturers—and <i>you</i>!
				</p>
				<button
					onclick={() => goto('/')}
					class="inline-flex h-9 items-center justify-center rounded-md bg-yellow-500 px-4 py-2 text-sm font-medium text-gray-900 shadow transition-colors hover:bg-yellow-400"
				>
					Return to Base
				</button>
			</div>
		</div>
	</main>
</div>
