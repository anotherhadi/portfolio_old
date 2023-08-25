<script lang="ts">
	import '../theme.postcss';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';
	import { AppShell, AppBar, LightSwitch } from '@skeletonlabs/skeleton';
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase">Hadi</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a
					class="btn btn-sm variant-soft-tertiary"
					href="https://twitter.com/anotherhadi"
					target="_blank"
					rel="noreferrer"
				>
					X
				</a>
				<a
					class="btn btn-sm variant-soft-tertiary"
					href="https://github.com/anotherhadi"
					target="_blank"
					rel="noreferrer"
				>
					Github
				</a>
				<LightSwitch />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<slot />
</AppShell>
