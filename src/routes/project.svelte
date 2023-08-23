<script lang="ts">
	import { ExternalLink, Github } from 'lucide-svelte';
	import Typography from '../components/Typography.svelte';

	import { inview } from 'svelte-inview';

	let isInView: boolean;

	export let color: string;
	export let img: string;
	export let name: string;
	export let description: string;
	export let githubLink: string;
	export let link: string;
	export let side: 'left' | 'right';
</script>

<div
	use:inview={{ unobserveOnEnter: true }}
	on:inview_enter={() => {
		isInView = true;
	}}
/>

<div class="grid grid-cols-12">
	{#if side === 'right'}
		<div
			class="text-black col-span-12 sm:col-span-4 p-7 rounded-lg flex justify-center items-center transition-opacity duration-500 delay-[400ms]"
			style={'background-color:' + color + ';'}
			class:opacity-0={!isInView}
		>
			<img src={img} alt={name + ' Project Icon'} width="90%" />
		</div>
	{/if}
	<div
		class=" col-span-12 sm:col-span-8 p-7 rounded-lg flex flex-col items-start gap-5 transition-opacity duration-500 delay-[300ms]"
		class:opacity-0={!isInView}
	>
		<Typography variant="h3">{name}</Typography>
		<Typography variant="base">
			{description}
		</Typography>
		<div class="flex gap-5">
			{#if githubLink}
				<a href={githubLink} target="_blank">
					<button
						class="btn btn-sm text-black px-2 rounded-lg flex gap-2"
						style={'background-color:' + color + ';'}
					>
						<Github size="18" />
						Github
						<ExternalLink size="18" />
					</button>
				</a>
			{/if}
			{#if link}
				<a href={link} target="_blank">
					<button
						class="btn btn-sm text-black px-2 rounded-lg flex gap-2"
						style={'background-color:' + color + ';'}
					>
						Link
						<ExternalLink size="18" />
					</button>
				</a>
			{/if}
		</div>
	</div>
	{#if side === 'left'}
		<div
			class="text-black col-span-12 sm:col-span-4 p-7 rounded-lg flex justify-center items-center transition-opacity duration-500 delay-[400ms] sm:order-none order-first"
			style={'background-color:' + color + ';'}
			class:opacity-0={!isInView}
		>
			<img src={img} alt={name + ' Project Icon'} width="90%" />
		</div>
	{/if}
</div>
