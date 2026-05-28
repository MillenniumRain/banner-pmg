import {
	getLocalStorage,
	removeFullLocalStorage,
	removeParamFromLocalStorage,
	setLocalStorage,
} from '@/shared/utils/localStorage/localStorage';

export const lStorage = {
	get: getLocalStorage,
	set: setLocalStorage,
	remove: removeParamFromLocalStorage,
	removeFull: removeFullLocalStorage,
};
