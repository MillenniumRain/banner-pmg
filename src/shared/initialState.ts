export interface IGLOBALSTATE {
	visibilityRatio?: number;
	videoSlot: HTMLSourceElement | HTMLVideoElement | null;
	flags: {
		isInited?: boolean;
		isLoaded?: boolean;
		isStarted?: boolean;
		isLogs?: boolean;
		isMuted?: boolean;
	};
	totalDuration: number;
	currentDuration: number;
}
export const initialState: IGLOBALSTATE = {
	flags: {
		isInited: false,
		isLoaded: false,
		isStarted: false,
		isLogs: false, // pmlogs
		isMuted: false,
	},
	videoSlot: null,
	visibilityRatio: 0,
	totalDuration: 0,
	currentDuration: 0,
};
