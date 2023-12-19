import {
	Autocomplete,
	AutocompleteProps,
	Box,
	TextField,
	styled,
} from '@mui/material';
import React, { useCallback, type FC, useMemo } from 'react';
import InputError from '../InputError';
import { isValueIsObject } from 'utils';

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
		error = false,
		errorMessage = '',
		value = null,
		items = [],
		keyLabel = 'name',
		keyValue = 'id',
		label = '',
		onChange = undefined,
		useNullableItem = true,
		disabled = false,
		placeholder = 'Выберите значение',
		multiple = false,
		...rest
	} = props;

	const isValueIsCompound = useMemo(() => isValueIsObject(items?.[0]), [items]);

	const options = useMemo(() => {
		if (!items) return [];

		if (useNullableItem) {
			if (isValueIsCompound) {
				return [{ id: undefined, name: placeholder }, ...items];
			} else {
				return [undefined, ...items];
			}
		}

		return items;
	}, [useNullableItem, items, placeholder, isValueIsCompound]);

	const onSelect = (event: any, newValue: any, reason: any) => {
		const updateValue = Array.isArray(newValue)
			? newValue
			: typeof newValue === 'object'
			? newValue?.[keyValue]
			: newValue;
		if (onChange) {
			if (updateValue === undefined) {
				onChange(multiple ? [] : null);
			} else {
				onChange(updateValue);
			}
		}
	};

	const getOptionLabel = useCallback(
		(option: any) => {
			if (isValueIsObject(option)) return option?.[keyLabel]?.toString();
			return option ? option : placeholder;
		},
		[keyLabel, placeholder],
	);

	const getOptionKey = useCallback(
		(option: any) => {
			if (isValueIsObject(option)) return option?.[keyValue]?.toString();
			return option ? option : placeholder;
		},
		[keyLabel, placeholder],
	);

	const isOptionEqualToValue = useCallback(
		(option: any, value: any) => {
			const val = isValueIsObject(option) ? option?.[keyValue] : option;
			if (val === undefined) return true;
			return option === value;
		},
		[keyValue],
	);

	const getValue = useCallback(() => {
		if (multiple) {
			if (value === null) return [];

			return options?.filter(
				(item: any) =>
					value?.indexOf(typeof item === 'object' ? item?.[keyValue] : item) !==
					-1,
			);
		} else {
			if (value) {
				return options?.find(
					(item: any) =>
						(typeof item === 'object' ? item[keyValue] : item) === value,
				);
			} else {
				return placeholder;
			}
		}
	}, [value, options]);

	return (
		<Container>
			{error && errorMessage && <InputError message={errorMessage} />}
			<Autocomplete
				{...rest}
				value={getValue()}
				options={options}
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
					<TextField
						variant="filled"
						placeholder={placeholder}
						{...params}
						label={label}
					/>
				)}
			/>
		</Container>
	);
};
