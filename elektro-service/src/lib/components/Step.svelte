<script>
	export let number = 0;
	export let title = '';
	export let content = '';
</script>

<div class="step w-80 big-tablet:w-full">
	<div class="text-8xl font-bold text-secondary border-b-2 border-secondary pb-4 mobile:pb-2">
		{number}
	</div>
	<div class="flex flex-col gap-4 mt-5 mobile:gap-2 mobile:mt-3">
		<h4 class="h4-bold">{title}</h4>
		<p class="">{content}</p>
	</div>
</div>
