import React, { type FC } from 'react';
import { SelectProps, Select as CustomSelect } from './Select';
import { Searchable, SearchableProps } from './Searchable';

type StandardSelectProps = { isSearchable?: boolean } & SelectProps & SearchableProps;

const Select: FC<StandardSelectProps> = props => {
	const { isSearchable, ...anyProps } = props;
	const selectProps: Omit<typeof anyProps, keyof SelectProps> = anyProps;
	const searchableProps: Omit<typeof anyProps, keyof SearchableProps> = anyProps;

	return isSearchable ? (
		<Searchable {...(searchableProps as SearchableProps)} />
	) : (
		<CustomSelect {...(selectProps as SelectProps)} />
	);
};

export default Select;
export * from './Searchable';
export * from './Select';
