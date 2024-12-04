<script lang="ts">
	export let progress: number;
	export let total: number;

	const formatter = new Intl.NumberFormat('en-US');
</script>

<div class="w-full bg-gray-900">
	<div class="h-2.5 w-full bg-yellow-500">
		<div
			class="h-2.5 bg-indigo-400 transition-all duration-500"
			style="width: {progress > 0 ? Math.max(0.5, Math.min(100, (progress / total) * 100)) : 0}%"
		></div>
	</div>

	<div class="flex justify-between px-2 py-2 text-xs text-gray-400">
		<span>{formatter.format(progress)} signatures collected</span>
		<span>Goal: {formatter.format(total)}</span>
	</div>
</div>
