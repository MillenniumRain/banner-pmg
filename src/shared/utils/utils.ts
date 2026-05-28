export const checkDimensions = (dim: string | number) => {
	dim = `${dim}`;
	if (dim?.search('%') > 0) return dim;
	if (dim?.search('px') > 0) return dim;
	return dim + 'px';
};
