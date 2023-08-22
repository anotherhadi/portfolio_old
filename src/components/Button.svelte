<script lang="ts">
	import { Loader2 } from 'lucide-svelte';
	import { mg } from '$lib/utils.js';

	export let icon: any = undefined;
	export let iconPosition: 'left' | 'right' = 'left';
	export let disabled: boolean = false;
	export let loading: boolean = false;
	export let buttonRef: any = null;
</script>

<button
	type="button"
	class={mg('btn inline-flex items-center justify-center gap-1 font-medium', $$props.class)}
	on:click
	on:mouseenter
	on:mousedown
	on:blur
	on:click
	on:contextmenu
	on:focus
	on:keydown
	on:keypress
	on:keyup
	on:mouseleave
	on:mouseover
	bind:this={buttonRef}
	disabled={disabled || loading}
>
	{#if iconPosition === 'right'}
		<slot />
	{/if}
	{#if loading}
		<Loader2 class="animate-spin w-4 h-4" />
	{:else}
		<svelte:component this={icon} class="w-4 h-4" />
	{/if}
	{#if iconPosition === 'left'}
		<slot />
	{/if}
</button>
