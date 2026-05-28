import { state } from '@/shared/state';
import { urlParams } from '@/shared/utils/urlParams';

export const logger = ({
	type = 'LOG',
	data,
	message = '',
	e,
}: {
	type?: 'ERROR' | 'WARN' | 'LOG';
	data?: any;
	message?: string;
	e?: any;
}): void => {
	const color = '#bb62f7ff';
	let documentTop;
	try {
		documentTop = window.top?.document;
	} catch (error) {
		documentTop = window.document;
	}
	const isLogs = state.get((state) => state.flags.isLogs);
	const debug = urlParams.get({ param: 'debug', url: documentTop?.location.href || '' });
	if (!isLogs && !debug) {
		return;
	}

	switch (type) {
		case 'ERROR':
			console.error(data || message);
			e && console.error(e);
			return;
		case 'WARN':
			console.warn(data);
			return;
		case 'LOG':
			console.log('%c VTP: ' + message.toString(), 'color: ' + color, data);
			return;
	}
};
