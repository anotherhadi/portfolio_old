<script lang="ts">
	import { ChevronsDown } from 'lucide-svelte';
	import Typography from '../components/Typography.svelte';
	import About from './about.svelte';
	import Social from './social.svelte';
	import Stickers from './stickers.svelte';
	import Projects from './projects.svelte';
</script>

<header
	class="relative w-full h-[80vh] flex justify-center items-center bg-center bg-contain bg-no-repeat bg-[url('/grid.png')]"
>
	<img
		src="/hadi.svg"
		alt="hadi"
		width="350"
		class="z-50 drop-shadow-lg hover:scale-110 transition-transform"
	/>
	<Stickers />
</header>

<div
	class="flex gap-5 overflow-hidden justify-center items-center animate-pulse opacity-30 mt-16 mb-16"
>
	{#each { length: 20 } as _}
		<Typography variant="base" color="muted">Scroll</Typography>
		<Typography variant="base" color="muted">Down</Typography>
		<Typography variant="base" color="muted"><ChevronsDown /></Typography>
	{/each}
</div>

<div class="container max-w-6xl m-auto my-16">
	<Typography variant="h1" component="h2" class="text-center my-5">About me</Typography>
	<About />
	<Social />
</div>

<div
	class="flex gap-5 overflow-hidden justify-center items-center animate-pulse opacity-30 mt-16 mb-16"
>
	{#each { length: 20 } as _}
		<Typography variant="base" color="muted">Projects</Typography>
		<Typography variant="base" color="muted"><ChevronsDown /></Typography>
	{/each}
</div>

<div class="container max-w-6xl m-auto my-16">
	<Typography variant="h1" component="h2" class="text-center my-5">Projects</Typography>
	<Projects />
</div>

<div class="mb-96 pb-96" />
<div class="mb-96 pb-96" />
