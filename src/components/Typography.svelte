<script lang="ts">
	import { mg } from '$lib/utils.js';

	export let component: 'def' | 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' = 'def';
	export let variant: 'h1' | 'h2' | 'h3' | 'h4' | 'lg' | 'base' | 'sm' = 'base';
	export let color: 'muted' | 'default' = 'default';
	let variantStyles: string = '';
	let colorStyles: string = '';

	switch (variant) {
		case 'h1':
			variantStyles = 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl';
			if (component === 'def') component = 'h1';
			break;
		case 'h2':
			variantStyles =
				'scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0';
			if (component === 'def') component = 'h2';
			break;
		case 'h3':
			variantStyles = 'scroll-m-20 text-2xl font-semibold tracking-tight';
			if (component === 'def') component = 'h3';
			break;
		case 'h4':
			variantStyles = 'scroll-m-20 text-xl font-semibold tracking-tight';
			if (component === 'def') component = 'h4';
			break;
		case 'lg':
			variantStyles = 'text-lg font-semibold';
			if (component === 'def') component = 'p';
			break;
		case 'base': // default
			variantStyles = 'text-base leading-7';
			if (component === 'def') component = 'p';
			break;
		case 'sm':
			variantStyles = 'text-sm font-medium leading-none';
			if (component === 'def') component = 'p';
			break;
	}

	switch (color) {
		case 'muted':
			colorStyles = 'text-surface-300 dark:text-surface-400';
			break;
	}

	let styles: string = mg(variantStyles, colorStyles, $$props.class);
</script>

{#if component === 'h1'}
	<h1 class={styles}><slot /></h1>
{:else if component === 'h2'}
	<h2 class={styles}><slot /></h2>
{:else if component === 'h3'}
	<h3 class={styles}><slot /></h3>
{:else if component === 'h4'}
	<h4 class={styles}><slot /></h4>
{:else if component === 'p'}
	<p class={styles}><slot /></p>
{:else}
	<span class={styles}><slot /></span>
{/if}
