import { logger } from '@/shared/utils/logger';

export function getURLParams({ url, param }: { url: string; param: string }): string | null {
	if (!url) {
		logger({
			type: 'ERROR',
			data: 'Нет Url',
		});
		return null;
	}
	try {
		const urlObj = new URL(url);
		return urlObj.searchParams.get(param);
	} catch (error) {
		logger({
			type: 'ERROR',
			data: 'ошибка в парсинге url getURLParams',
			e: error,
		});
		return null;
	}
}

export function setURLParams({
	url,
	params,
}: {
	url: string;
	params: [{ key: string; value: string | number }];
}): string | null {
	if (!url) {
		logger({
			type: 'ERROR',
			data: 'Нет Url',
		});
		return null;
	}
	try {
		const urlObj = new URL(url);

		params.forEach((param) => {
			urlObj.searchParams.set(param.key, `${param.value}`);
		});
		return urlObj.toString();
	} catch (error) {
		logger({
			type: 'ERROR',
			data: 'ошибка в получении параметров getURLParams',
			e: error,
		});
		return null;
	}
}
