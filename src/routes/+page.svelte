<script lang="ts">
	import { onMount } from 'svelte';
	// import Button from '../components/Button.svelte';
	import Typography from '../components/Typography.svelte';
	import { draw } from 'svelte/transition';

	let ready: boolean = false;
	onMount(() => (ready = true));
</script>

<header class="relative w-full h-[85vh] flex flex-col gap-5 justify-center items-center">
	<hue
		class="absolute bg-purple-500 h-52 w-52 rounded-full top-[15%] left-[15%] blur-[100px] opacity-50 -z-10"
	/>
	<hue
		class="absolute bg-blue-500 h-52 w-52 rounded-full top-[70%] left-[70%] blur-[100px] opacity-60 -z-10"
	/>

	<svg
		width="238"
		height="198"
		viewBox="0 0 238 198"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		{#if ready}
			<path
				d="M195.059 186.73C187.134 188.307 178.92 187.498 171.455 184.406C163.99 181.314 157.609 176.077 153.12 169.359C148.631 162.641 146.235 154.742 146.235 146.662L146.41 123.029L146.235 64.9556C146.235 56.8756 148.631 48.9771 153.12 42.2588C157.609 35.5405 163.99 30.3042 171.455 27.2122C178.92 24.1201 187.134 23.311 195.059 24.8874C202.984 26.4637 210.263 30.3546 215.976 36.068C221.69 41.7815 225.581 49.0608 227.157 56.9856C228.733 64.9103 227.924 73.1246 224.832 80.5895C221.74 88.0545 216.504 94.4349 209.786 98.9239C203.067 103.413 195.169 105.809 187.089 105.809H50.9112C42.8311 105.809 34.9326 108.205 28.2143 112.694C21.496 117.183 16.2597 123.563 13.1676 131.028C10.0756 138.493 9.26653 146.708 10.8429 154.632C12.4192 162.557 16.3101 169.836 22.0235 175.55C27.737 181.263 35.0163 185.154 42.9411 186.73C50.8658 188.307 59.0801 187.498 66.545 184.406C74.01 181.314 80.3904 176.077 84.8794 169.359C89.3684 162.641 91.7644 154.742 91.7644 146.662V10.4846"
				transition:draw={{ duration: 2000, delay: 500 }}
				stroke="#8515F4"
				stroke-width="19.9329"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		{/if}
	</svg>

	<Typography variant="h1">Hadi</Typography>
	<Typography variant="h2" color="muted">Under development</Typography>
</header>

<div class="container" />
