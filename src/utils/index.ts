export const createFontFamily = (fontFamily: string): any => {
	return {
		h1: { fontFamily },
		h2: { fontFamily },
		h3: { fontFamily },
		h4: { fontFamily },
		h5: { fontFamily },
		h6: { fontFamily },
		subtitle1: { fontFamily },
		subtitle2: { fontFamily },
		body1: { fontFamily },
		body2: { fontFamily },
		button: { fontFamily },
		caption: { fontFamily },
		overline: { fontFamily },
		fontFamily: fontFamily,
	};
};

export const isValueIsObject = (value: any): boolean => {
	if (value === null || value === undefined) return false;

	if (Array.isArray(value)) return false;

	return typeof value === 'object';
};
