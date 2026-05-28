const LOCAL_ITEM = 'pmg_pixel_data';
interface IScrollEvent {
	y: number;
}

interface ILocalStorage {
	pointsTimes: number[];
	scrollEvents: IScrollEvent[] | null;
	sessionTime: number;
	startSessionTime: number;
	rnd: number;
}
export function getLocalStorage(): ILocalStorage | null {
	const storage = window.localStorage.getItem(LOCAL_ITEM);
	let data = null;
	if (storage) {
		try {
			data = JSON.parse(storage);
		} catch (error) {}
	}
	return data;
}

export function setLocalStorage(data: Partial<ILocalStorage>) {
	const local = getLocalStorage();
	if (!local) {
		window.localStorage.setItem(LOCAL_ITEM, JSON.stringify(data));
	} else {
		window.localStorage.setItem(LOCAL_ITEM, JSON.stringify({ ...local, ...data }));
	}
}

export function removeParamFromLocalStorage(param: keyof ILocalStorage) {
	const local = getLocalStorage();
	if (!local) return;
	delete local[param];
	setLocalStorage(local);
}
export function removeFullLocalStorage() {
	window.localStorage.removeItem(LOCAL_ITEM);
}
