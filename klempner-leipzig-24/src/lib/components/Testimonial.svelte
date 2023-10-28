<script>
	import Person24 from '../assets/icons/person-24.svg';
	export let name = '';
	export let content = '';
	export let reason = '';
	export let reasonIcon = '';
</script>

<div class="p-6 border-2 rounded-3xl border-primary relative overflow-visible shadow-xl">
	<div class="flex gap-2">
		<img src={Person24} alt="" />
		<h5 class="h5-bold">{name}</h5>
	</div>
	<p class="base opacity-70 mt-2">{content}</p>
	<div
		class="flex gap-2 border-2 absolute -top-4 right-6 border-primary px-3 py-1 rounded-full text-secondary leading-none w-fit bg-white"
	>
		<img src={reasonIcon} alt="" />
		{reason}
	</div>
</div>
