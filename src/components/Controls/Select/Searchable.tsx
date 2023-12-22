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
	onChange?: (value: any) => void;
	helperText?: string;
}

const Container = styled(Box)`
	display: flex;
	flex-direction: row;
`;

export const Searchable: FC<SearchableProps> = props => {
	const {
		error = false,
		errorMessage = '',
		multiple = false,
		value = multiple ? [] : null,
		items = [],
		keyLabel = 'name',
		keyValue = 'id',
		label = '',
		onChange = undefined,
		useNullableItem = true,
		disabled = false,
		placeholder = 'Выберите значение',
		noOptionsText = 'Ничего не найдено',
		helperText = '',
		...rest
	} = props;

	const isCompoundItem = useMemo(() => isValueIsObject(items?.[0]), [items]);
	const options = useMemo(() => {
		if (!items) return [];

		if (useNullableItem) {
			return [undefined, ...items];
		}

		return items;
	}, [useNullableItem, items]);

	const onSelect = (_: any, newValue: any) => {
		const updateValue = Array.isArray(newValue)
			? newValue
			: isValueIsObject(newValue)
			? newValue?.[keyValue]
			: newValue;

		if (onChange) {
			if (Array.isArray(updateValue)) {
				if (updateValue.indexOf(undefined) !== -1) {
					onChange([]);
				} else {
					onChange(
						updateValue?.map((item: any) =>
							isValueIsObject(item) ? item?.[keyValue] : item
						) ?? []
					);
				}
			} else {
				if (updateValue === undefined) {
					onChange(multiple ? [] : null);
				} else {
					onChange(updateValue);
				}
			}
		}
	};

	const getOptionLabel = useCallback(
		(option: any) => {
			if (isValueIsObject(option)) return option?.[keyLabel];
			return option ? option : placeholder;
		},
		[keyLabel, placeholder]
	);

	const getOptionKey = useCallback(
		(option: any) => {
			if (isValueIsObject(option)) return option?.[keyValue];
			return option;
		},
		[keyValue]
	);

	const isOptionEqualToValue = useCallback(
		(option: any, value: any) => {
			const val = isValueIsObject(option) ? option?.[keyValue] : option;
			if (val === undefined) return false;
			return option === value;
		},
		[keyValue]
	);

	const getValue = useMemo(() => {
		if (multiple) {
			if (value === null) return [];
			if (Array.isArray(value)) {
				const sortedOptions =
					options?.filter(
						(item: any) =>
							value?.indexOf(
								isValueIsObject(item) ? item?.[keyValue] : item
							) !== -1
					) ?? [];
				return sortedOptions;
			}
			return [];
		} else {
			if (value) {
				const option = options?.find(
					(item: any) =>
						(isValueIsObject(item) ? item?.[keyValue] : item) === value
				);
				if (option?.[keyValue]) return option;
			}

			return undefined;
		}
	}, [value, options, multiple, keyValue]);

	return (
		<Container>
			{error && errorMessage && <InputError message={errorMessage} />}
			<Autocomplete
				{...rest}
				value={getValue}
				options={options}
				fullWidth
				disableClearable={true}
				freeSolo={true}
				multiple={multiple}
				disabled={disabled}
				filterOptions={(options: any, { inputValue }: any) => {
					if (!inputValue) return options;

					const search = inputValue?.toLowerCase() ?? '';
					const values = options.filter((item: any) =>
						(isValueIsObject(item) ? item?.[keyLabel] : item)
							?.toLowerCase()
							.includes(search)
					);

					if (values.length) return values;
					return isCompoundItem
						? [{ [keyLabel]: noOptionsText, [keyValue]: undefined }]
						: [noOptionsText];
				}}
				getOptionDisabled={(option: any) =>
					(isValueIsObject(option) ? option?.[keyLabel] : option) ===
					noOptionsText
				}
				getOptionLabel={getOptionLabel}
				getOptionKey={getOptionKey}
				onChange={onSelect}
				isOptionEqualToValue={isOptionEqualToValue}
				renderInput={params => (
					<TextField
						variant="filled"
						placeholder={
							multiple && getValue?.length > 0 ? undefined : placeholder
						}
						{...params}
						InputLabelProps={{
							shrink: true,
						}}
						label={label}
					/>
				)}
			/>
		</Container>
	);
};
