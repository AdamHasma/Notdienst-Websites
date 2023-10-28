export function accordion(node, isOpen) {
	let initialHeight = node.offsetHeight + 16;
	node.style.height = isOpen ? 'auto' : 0;
	node.style.overflow = 'hidden';
	return {
		update(isOpen) {
			let animation = node.animate(
				[
					{
						height: initialHeight + 'px',
						overflow: 'hidden',
						paddingTop: '16px'
					},
					{
						height: 0,
						overflow: 'hidden',
						paddingTop: '0px'
					}
				],
				{ duration: 100, fill: 'both' }
			);
			animation.pause();
			if (!isOpen) {
				animation.play();
			} else {
				animation.reverse();
			}
		}
	};
}
