<script>
	import DefaultImage from '../assets/icons/fast-64.svg';
	export let imageUrl = DefaultImage;
	export let highlightedText = '24/7';
	export let titleText = 'Verfügbar';
	export let paragraphContent =
		'Unser Service ist zu jeder Zeit verfügbar, sodass Sie immer Hilfe erhalten können.';
</script>

<div class="w-1/4 flex flex-col gap-4 tablet:w-[calc(50%_-_20px)] mobile:w-full mobile:gap-2">
	<div class="flex items-center flex-col gap-3">
		<img src={imageUrl} alt="Uhr" class="w-16 h-16" />
		<h5 class="h5 text-center">
			<span class="text-secondary"> {highlightedText} </span><br />{titleText}
		</h5>
	</div>
	<p class="base text-center opacity-70">
		{paragraphContent}
	</p>
</div>
