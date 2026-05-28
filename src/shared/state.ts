import { initialState, type IGLOBALSTATE } from '@/shared/initialState';

export const state = {
	_state: initialState,

	get<T>(selector: (state: IGLOBALSTATE) => T): T {
		return selector({ ...this._state });
	},
	set<K extends keyof IGLOBALSTATE>(key: K, value: IGLOBALSTATE[K]) {
		if (value && typeof value === 'object' && typeof this._state[key] === 'object') {
			if (key === 'flags') {
				return (this._state[key] = { ...this._state[key], ...value });
			}
		}

		this._state[key] = value;
		return this._state;
	},
	subscribe() {},
	unsubscribe() {},
};
