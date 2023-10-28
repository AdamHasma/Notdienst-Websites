<script>
	import Plus24 from '../assets/icons/plus-24.svg';
	import { accordion } from '../helpers/accordion';

	export let question = '';
	export let answer = '';

	let isOpened = false;

	function toggleAnswer() {
		isOpened = !isOpened;
	}

	function handleKeydown(event) {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			toggleAnswer();
		}
	}
</script>

<div
	class="border-2 border-primary p-5 bg-white shadow-xl rounded-3xl flex flex-col toggle {isOpened
		? 'border-secondary'
		: ''}"
>
	<div
		class="flex gap-2"
		on:click={toggleAnswer}
		on:keydown={handleKeydown}
		role="button"
		tabindex="0"
	>
		<img src={Plus24} alt="Öffnen/Schließen" class="rotate-icon {isOpened ? 'open' : ''}" />
		<h5 class="h5-bold">{question}</h5>
	</div>
	<p use:accordion={isOpened} class="answer base opacity-70">{answer}</p>
</div>

<style>
	.rotate-icon {
		transition: transform ease-in-out 0.3s;
		transform: rotate(0deg);
	}
	.rotate-icon.open {
		transform: rotate(45deg);
	}
	.toggle {
		transition: border-color ease-in-out 0.3s;
	}
	.answer {
		overflow: hidden;
	}
</style>
