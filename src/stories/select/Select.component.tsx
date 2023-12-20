import {
	Searchable,
	SearchableProps,
	Select,
	SelectProps,
} from 'components/Controls/Select';
import React, { useState, type FC, useEffect } from 'react';

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
	const [value, setValue] = useState<any>();

	useEffect(() => {
		setValue(props.multiple ? [] : null);
	}, [props.multiple]);

	return (
		<div>
			<div>
				Selected item:{' '}
				{value ? (Array.isArray(value) ? value.join(', ') : value) : 'null'}
			</div>
			<br />
			<Searchable {...props} value={value} onChange={setValue} />
		</div>
	);
};
