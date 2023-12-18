import Select, { SelectProps } from 'components/Controls/Select';
import React, { useState, type FC } from 'react';

export const CustomSelect: FC<SelectProps> = props => {
	const [value, setValue] = useState<any>(null);
	console.log(value);
	return <Select {...props} value={value} onChange={setValue} />;
};
