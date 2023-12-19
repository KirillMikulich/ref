import {
	Autocomplete,
	AutocompleteProps,
	Box,
	TextField,
	styled,
} from '@mui/material';
import React, { type FC } from 'react';
import InputError from '../InputError';

export interface SearchableProps
	extends AutocompleteProps<any, any, any, any, any> {
	items?: any[];
	label?: string;
	placeholder?: string;
	useNullableItem?: boolean;
	keyLabel?: string;
	keyValue?: string;
	errorMessage?: string;
	error?: boolean;
	isMulti?: boolean;
	onChange?: (value: any) => void;
}

const Container = styled(Box)`
	display: flex;
	flex-direction: row;
`;

export const Searchable: FC<SearchableProps> = props => {
	const {
		error,
		errorMessage,
		value,
		items,
		keyLabel = 'name',
		keyValue = 'id',
		label = '',
		onChange,
		useNullableItem = true,
		disabled,
		placeholder,
		multiple,
		...rest
	} = props;

	const values = useNullableItem
		? [
				typeof items?.[0] === 'object'
					? { id: undefined, name: placeholder }
					: undefined,
				...(items ?? []),
		  ]
		: items;

	const onSelect = (event: any, newValue: any, reason: any) => {
		const updateValue =
			typeof newValue === 'object' ? newValue?.[keyValue] : newValue;
		if (onChange) {
			if (value === updateValue) return;

			if (updateValue === undefined) {
				onChange(null);
			} else {
				onChange(updateValue);
			}
		}
	};

	const getOptionLabel = (option: any) => {
		if (option === null || option === undefined) return placeholder;
		if (typeof option === 'object') return option?.[keyLabel]?.toString();
		return option?.toString();
	};

	const getOptionKey = (option: any) => {
		if (option === null || option === undefined) return placeholder;
		if (typeof option === 'object') return option?.[keyValue];
		return option;
	};

	const isOptionEqualToValue = (option: any, value: any) => {
		if (typeof option === 'object') {
			const optionValue = option?.[keyValue];
			if (
				optionValue === undefined ||
				(optionValue === null && value === placeholder)
			)
				return true;
			return false;
		} else if (
			option === undefined ||
			(option === null && value === placeholder)
		) {
			return true;
		}

		return option === value;
	};

	return (
		<Container>
			{error && errorMessage && <InputError message={errorMessage} />}
			<Autocomplete
				{...rest}
				defaultValue={multiple ? [undefined] : undefined}
				value={
					value
						? values?.find((item: any) =>
								typeof item === 'object'
									? item[keyValue] === value
									: item === value,
						  )
						: placeholder
				}
				options={values ?? []}
				fullWidth
				disableClearable={true}
				freeSolo={false}
				multiple={multiple}
				disabled={disabled}
				getOptionLabel={getOptionLabel}
				getOptionKey={getOptionKey}
				onChange={onSelect}
				isOptionEqualToValue={isOptionEqualToValue}
				renderInput={params => (
					<TextField variant="filled" {...params} label={label} />
				)}
			/>
		</Container>
	);
};
