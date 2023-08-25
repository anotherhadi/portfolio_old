<script lang="ts">
	import { inview } from 'svelte-inview';
	import { Cookie, ExternalLink, Github } from 'lucide-svelte';

	let isInView: boolean;
</script>

<div
	use:inview={{ unobserveOnEnter: true }}
	on:inview_enter={() => {
		isInView = true;
	}}
/>
<div class="grid grid-cols-12 w-full margin-auto p-5 gap-7">
	<a href="https://github.com/anotherhadi" target="_blank" class="col-span-6 sm:col-span-4">
		<button
			class="btn btn-lg bg-[#9E97F8] text-black px-2 w-full h-full rounded-lg flex gap-2 transition-opacity duration-500 delay-[400ms]"
			class:opacity-0={!isInView}
		>
			<Github size="18" />
			Github
			<ExternalLink size="18" />
		</button>
	</a>

	<a href="https://x.com/anotherhadi" target="_blank" class="col-span-6 sm:col-span-4">
		<button
			class="btn btn-lg bg-[#9E97F8] text-black px-2 w-full h-full rounded-lg flex gap-2 transition-opacity duration-500 delay-[500ms]"
			class:opacity-0={!isInView}
		>
			𝕏 Twitter
			<ExternalLink size="18" />
		</button>
	</a>

	<a
		href="https://www.buymeacoffee.com/anotherhadi"
		target="_blank"
		class="col-span-12 sm:col-span-4"
	>
		<button
			class="btn btn-lg bg-[#E4E5E7] text-black px-2 w-full h-full rounded-lg flex gap-2 transition-opacity duration-500 delay-[600ms]"
			class:opacity-0={!isInView}
		>
			<Cookie />
			Buy me a cookie
			<ExternalLink size="18" />
		</button>
	</a>
</div>
