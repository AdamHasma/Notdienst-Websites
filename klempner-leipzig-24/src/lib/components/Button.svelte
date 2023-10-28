<script>
	export let type = 1;
	import Icon from '../assets/icons/phone-b-24.svg';
</script>

{#if type === 1}
	<a
		class="bg-accent shad rounded-lg gap-2 flex py-3 px-5 items-center h5-bold leading-none button mobile:text-base mobile:leading-none"
		href="tel:012345678"
	>
		<img src={Icon} alt="anrufen" class="mobile:hidden" />
		<span class="relative">Jetzt anrufen</span>
	</a>
{:else if type === 2}
	<a
		class="bg-accent shad rounded-lg gap-3 flex py-3 px-10 big-tablet:px-6 items-center accent-shadow big-tablet:min-w-[237px] mobile:w-full mobile:justify-center"
		href="tel:012345678"
	>
		<img class="w-6 h-6" src={Icon} alt="anrufen" />
		<div class="flex h5-bold leading-none flex-col">
			0123-45678910 <span class="small opacity-70">Kostenlos & Unverbindlich</span>
		</div>
	</a>
{/if}
