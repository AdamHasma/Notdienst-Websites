<script>
	import Saos from 'saos';

	import Button from './Button.svelte';
	import Right32 from '../assets/icons/right-32.svg';
	export let type = '1';
</script>

<div class="flex mt-10 justify-between items-center big-tablet:gap-5 tablet:flex-col">
	{#if type === '1'}
		<Saos
			css_animation=""
			top="100"
			once="true"
			animation={'from-left 1.5s cubic-bezier(0.39, 0.575, 0.565, 1) 0s both'}
			><h3 class="h3-bold big-tablet:w-[360px] tablet:w-fit tablet:text-center">
				Jetzt <span class="text-secondary">unverbindlich und kostenlos</span> anrufen!
			</h3></Saos
		>
	{/if}

	{#if type === '2'}
		<h3 class="h3-bold tablet:text-center">
			Haben Sie noch <span class="text-secondary">Fragen oder Anregungen?</span>
		</h3>
	{/if}

	<Saos
		css_animation=""
		top="100"
		once="true"
		animation={'from-left 1.5s cubic-bezier(0.39, 0.575, 0.565, 1) 0.2s both'}
		><img src={Right32} alt="" class="tablet:hidden" /></Saos
	>
	<Saos
		css_animation=""
		top="100"
		once="true"
		animation={'from-left 1.5s cubic-bezier(0.39, 0.575, 0.565, 1) 0.4s both'}
		><Button type={2} /></Saos
	>
</div>
