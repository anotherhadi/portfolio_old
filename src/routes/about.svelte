<script lang="ts">
	import { inview } from 'svelte-inview';
	import Typography from '../components/Typography.svelte';

	let isInView: boolean;
</script>

<div
	use:inview={{ unobserveOnEnter: true }}
	on:inview_enter={() => {
		isInView = true;
	}}
/>
<div class="grid grid-cols-12 w-full margin-auto p-5 gap-7">
	<div
		class="bg-[#9E97F8] col-span-12 sm:col-span-8 p-7 rounded-lg text-black flex justify-center items-center transition-opacity duration-500 delay-[300ms]"
		class:opacity-0={!isInView}
	>
		<Typography variant="lg">
			French developer enthusiastic about bash, golang, webdev & blockchains ☁️
			<br />I deeply value open-source projects & actively seek ways to contribute to the community.
			<br /><br />I'm particularly interested in emerging technologies such as blockchains and
			cryptocurrency.
		</Typography>
	</div>
	<div
		class="bg-[#E4E5E7] col-span-12 sm:col-span-4 rounded-lg flex justify-center items-center transition-opacity duration-500 delay-[400ms]"
		class:opacity-0={!isInView}
	>
		<img src="logo.png" alt="hadi logo" class="w-4/5" />
	</div>
</div>
