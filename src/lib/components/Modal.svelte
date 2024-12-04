<script lang="ts">
	import { onMount, type Snippet } from 'svelte';
	import { X } from 'lucide-svelte';
	import classes from 'svelte-transition-classes';

	let { children }: { children: Snippet } = $props();

	let isOpen = $state(false);

	onMount(() => {
		isOpen = true;
	});

	function close() {
		isOpen = false;
	}
</script>

{#if isOpen}
	<div
		class="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/60 px-4 backdrop-blur-sm"
		in:classes={{
			duration: 200,
			base: 'transition ease-out duration-200',
			from: 'opacity-0',
			to: 'opacity-100'
		}}
		out:classes={{
			duration: 150,
			base: 'transition ease-in duration-150',
			from: 'opacity-100',
			to: 'opacity-0'
		}}
	>
		<div
			class="relative w-full max-w-lg rounded-lg border border-gray-700 bg-gray-900 p-6 text-gray-100 shadow-xl"
			in:classes={{
				duration: 200,
				base: 'transition ease-out duration-200',
				from: 'transform opacity-0 scale-95',
				to: 'transform opacity-100 scale-100'
			}}
			out:classes={{
				duration: 150,
				base: 'transition ease-in duration-150',
				from: 'transform opacity-100 scale-100',
				to: 'transform opacity-0 scale-95'
			}}
		>
			<button
				onclick={close}
				class="absolute right-4 top-4 rounded-md p-1 text-gray-400 transition-colors hover:bg-gray-800 hover:text-gray-100"
				aria-label="Close modal"
			>
				<X class="h-5 w-5" />
			</button>
			<div class="mt-6">
				{@render children()}
			</div>
		</div>
	</div>
{/if}
