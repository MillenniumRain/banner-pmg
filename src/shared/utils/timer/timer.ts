interface ITIMER {
	remainingTime: number;
	fn: (remainingTime: number) => void;
	fnEnd?: () => void;
	tick?: number;
}
export const timer = ({ remainingTime = 0, fn, fnEnd, tick = 1000 }: ITIMER) => {
	if (remainingTime <= 0) {
		return fnEnd?.();
	}
	remainingTime -= tick / 1000;
	fn?.(remainingTime);
	setTimeout(() => {
		timer({ remainingTime, fn, fnEnd, tick });
	}, tick);
};
