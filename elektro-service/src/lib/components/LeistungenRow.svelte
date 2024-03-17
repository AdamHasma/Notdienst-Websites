<script>
	import Saos from 'saos';
	import Button from './Button.svelte';
	import DefaultImage from '../assets/icons/fast-64.svg';
	export let isLeft = 'true';
	export let image = '';
	export let title = '';
	export let content = '';
	export let icon1 = DefaultImage,
		icon2 = DefaultImage,
		icon3 = DefaultImage,
		icon4 = DefaultImage;
	export let point1 = '',
		point2 = '',
		point3 = '',
		point4 = '';
	$: activeClass = isLeft === 'true' ? 'flex-row' : 'flex-row-reverse';
</script>

<Saos
	css_animation=""
	top="100"
	once="true"
	animation={isLeft === 'true'
		? 'from-left 1.5s cubic-bezier(0.39, 0.575, 0.565, 1) 0s both'
		: 'from-right 1.5s cubic-bezier(0.39, 0.575, 0.565, 1) 0s both'}
>
	<div class="{activeClass} flex gap-10 big-tablet:flex-col">
		<img
			class="w-1/2 big-tablet:w-full object-cover rounded-3xl shadow-xl max-h-[450px]"
			src={image}
			alt={title}
		/>
		<div class="flex flex-col justify-center gap-10 w-1/2 big-tablet:w-full mobile:items-start">
			<div class="flex flex-col gap-5">
				<h3 class="h3-bold text-secondary">{title}</h3>
				<p class="base opacity-70">{@html content}</p>
				<div class="flex flex-wrap gap-x-10 gap-y-5 big-tablet:max-w-xl">
					<div class="flex gap-2 flex-none base-bold">
						<img src={icon1} alt={point1} />
						{point1}
					</div>
					<div class="flex gap-2 flex-none base-bold">
						<img src={icon2} alt={point2} />
						{point2}
					</div>
					<div class="flex gap-2 flex-none base-bold">
						<img src={icon3} alt={point3} />
						{point3}
					</div>
					<div class="flex gap-2 flex-none base-bold">
						<img src={icon4} alt={point4} />
						{point4}
					</div>
				</div>
			</div>

			<div
				class="flex gap-10 items-center mobile:flex-col mobile:gap-2 mobile:items-start mobile:justify-center mobile:w-full"
			>
				<Button type={2} />
				<a href="#Anfrage" class="small opacity-70 mobile:mx-auto"
					>Oder füllen Sie unseren Formular aus</a
				>
			</div>
		</div>
	</div>
</Saos>
