<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	let ready: boolean = false;
	onMount(() => (ready = true));
</script>

{#if ready}
	<img
		src="stickers/coding.svg"
		transition:scale={{ delay: 650, duration: 800, easing: quintOut }}
		alt="Sticker hadi"
		class="absolute translate-x-[20rem] translate-y-[-10rem] drop-shadow-lg hover:scale-125 transition-transform"
	/>
	<img
		src="stickers/underdev.svg"
		transition:scale={{ delay: 750, duration: 900, easing: quintOut }}
		alt="Sticker Under dev"
		class="absolute translate-x-[6rem] translate-y-[-12rem] drop-shadow-lg hover:scale-110 transition-transform"
	/>
	<img
		src="stickers/coin.svg"
		transition:scale={{ delay: 600, duration: 500, easing: quintOut }}
		alt="Sticker Coin"
		class="absolute translate-x-[-6rem] translate-y-[-10rem] drop-shadow-lg hover:scale-110 transition-transform"
	/>
	<img
		src="stickers/wasd.svg"
		transition:scale={{ delay: 700, duration: 500, easing: quintOut }}
		alt="Sticker WASD"
		class="absolute translate-x-[8rem] translate-y-[12rem] drop-shadow-lg hover:scale-110 transition-transform"
	/>
	<img
		src="stickers/golang.svg"
		transition:scale={{ delay: 800, duration: 600, easing: quintOut }}
		alt="Sticker Golang"
		class="absolute translate-x-[-8rem] translate-y-[12rem] drop-shadow-lg hover:scale-110 transition-transform"
	/>
	<img
		src="stickers/svelte.svg"
		transition:scale={{ delay: 680, duration: 800, easing: quintOut }}
		alt="Sticker Svelte"
		class="absolute translate-x-[-15rem] translate-y-[6rem] drop-shadow-lg hover:scale-110 transition-transform"
	/>
	<img
		src="stickers/rocket.svg"
		transition:scale={{ delay: 980, duration: 700, easing: quintOut }}
		alt="Sticker Rocket"
		class="absolute translate-x-[-22rem] translate-y-[-9rem] drop-shadow-lg hover:scale-110 transition-transform"
	/>
	<!-- Star -->
	<img
		src="stars/star1.svg"
		transition:fade={{ delay: 380, duration: 400, easing: quintOut }}
		alt="Star 1"
		class="absolute translate-x-[-15rem] translate-y-[-6rem] drop-shadow-lg hover:scale-90 transition-transform"
	/>
	<img
		src="stars/star2.svg"
		transition:fade={{ delay: 480, duration: 400, easing: quintOut }}
		alt="Star 2"
		class="absolute translate-x-[13rem] translate-y-[7rem] drop-shadow-lg hover:scale-90 transition-transform"
	/>
	<img
		src="stars/star3.svg"
		transition:fade={{ delay: 400, duration: 300, easing: quintOut }}
		alt="Star 3"
		class="absolute translate-x-[5rem] translate-y-[-5rem] drop-shadow-lg hover:scale-90 transition-transform"
	/>
	<img
		src="stars/star4.svg"
		transition:fade={{ delay: 250, duration: 300, easing: quintOut }}
		alt="Star 4"
		class="absolute translate-x-[-5rem] translate-y-[5rem] drop-shadow-lg hover:scale-90 transition-transform"
	/>
	<img
		src="stars/star5.svg"
		transition:fade={{ delay: 350, duration: 350, easing: quintOut }}
		alt="Star 5"
		class="absolute translate-x-[-2rem] translate-y-[14rem] drop-shadow-lg hover:scale-90 transition-transform"
	/>
{/if}
