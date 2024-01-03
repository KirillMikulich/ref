import Select, { StandardSelectProps } from 'ui/Select';
import React, { useState, type FC } from 'react';

export const CustomSelect: FC<StandardSelectProps> = props => {
	const [value, setValue] = useState<any>();

	return (
		<div>
			<div>Selected item: {value ? value : 'null'}</div>
			<br />
			<Select {...props} value={value} onChange={setValue} />
		</div>
	);
};
