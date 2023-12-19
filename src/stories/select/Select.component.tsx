import {
	Searchable,
	SearchableProps,
	Select,
	SelectProps,
} from 'components/Controls/Select';
import React, { useState, type FC } from 'react';

export const CustomSelect: FC<SelectProps> = props => {
	const [value, setValue] = useState<any>(null);
	return (
		<div>
			<div>Selected item: {value ? value : 'null'}</div>
			<br />
			<Select {...props} value={value} onChange={setValue} />
		</div>
	);
};

export const CustomSelectSearchable: FC<SearchableProps> = props => {
	const [value, setValue] = useState<any>(props.multiple ? [] : null);
	return (
		<div>
			<div>Selected item: {value ? value : 'null'}</div>
			<br />
			<Searchable {...props} value={value} onChange={setValue} />
		</div>
	);
};
