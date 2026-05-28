import { throttle } from '@/shared/utils/throttle';

export default function windowScrollEvent(
	fn: ({
		event,
		currentScrollPosition,
		scrollProgress,
		removeListner,
	}: {
		event: Event;
		currentScrollPosition: number;
		scrollProgress: number;
		removeListner: () => void;
	}) => void,
	delayMS: number = 200,
) {
	function removeListner() {
		window.removeEventListener('scroll', scrollHandler);
	}
	function scrollHandler(e: Event) {
		const scrollY = window.scrollY;
		const totalHeight = document.documentElement.scrollHeight;
		const scrollableHeight = totalHeight - window.innerHeight;
		const scrollProgress = Math.round((scrollY / scrollableHeight) * 100);

		fn({ event: e, currentScrollPosition: scrollY, scrollProgress, removeListner });
	}

	window.addEventListener('scroll', throttle(scrollHandler, delayMS));
}
