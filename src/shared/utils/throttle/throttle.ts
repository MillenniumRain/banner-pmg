export function throttleFn(func: (...args: any[]) => void, delay: number) {
	let isWaiting = false;
	return (...args: any[]) => {
		if (!isWaiting) {
			func(...args);
			isWaiting = true;
			setTimeout(() => {
				isWaiting = false;
			}, delay);
		}
	};
}
