<script lang="ts">
	import Project from './project.svelte';

	let colors: string[] = ['#ECBFA8', '#B0E2EE', '#88CEA2', '#CE8888'];
	let projects: any = [
		{
			name: 'ANSI',
			description:
				'The "ansi" package provides a simple and user-friendly way to add color and formatting to terminal output in Go applications. Enhance your command-line interfaces with vibrant text, background colors, and text styles, making your output more readable and visually appealing.',
			githubLink: 'https://github.com/CloudyHadi/ansi',
			img: '/projects/ansi.svg'
		}
	];
</script>

<div class="w-full p-5 grid gap-10 margin-auto">
	{#each projects as project, i}
		<Project
			name={project.name}
			description={project.description}
			githubLink={project.githubLink}
			link={project.link}
			img={project.img}
			color={colors[i]}
			side={i % 2 === 0 ? 'right' : 'left'}
		/>
	{/each}
</div>
