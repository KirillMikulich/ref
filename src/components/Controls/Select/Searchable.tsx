import {
	Autocomplete,
	AutocompleteProps,
	Box,
	InputAdornment,
	TextField,
	styled,
} from '@mui/material';
import React, { useCallback, type FC, useMemo, useState } from 'react';
import InputError from '../InputError';
import { isValueIsObject } from 'utils';
import { DefaultSelectProps } from './models';
import HelperText from '../HelperText';
import { BLUE_400, GREY_100, GREY_200, GREY_500, GREY_900, RED_100 } from 'styles/constants';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export interface SearchableProps
	extends DefaultSelectProps,
		AutocompleteProps<any, any, any, any, any> {
	onChange?: (value: any) => void;
}

const Container = styled(Box)`
	display: flex;
	flex-direction: column;
`;

interface AutoCompleteCSSProperties {
	error: boolean;
	disabled: boolean;
}

const getColor = (props: AutoCompleteCSSProperties): string => {
	if (props.error) {
		return RED_100;
	}

	if (props.disabled) {
		return 'white';
	}

	return GREY_100;
};

const AutoCompleteCustom = styled(Autocomplete)<AutoCompleteCSSProperties>(props => ({
	borderRadius: '8px',
	background: getColor(props),
	border: props.disabled ? `1px solid ${GREY_200}` : 'none',
	'&:has(.Mui-focused)': {
		background: props.error ? RED_100 : GREY_200,
	},
	'& .MuiInputBase-root': {
		'&:before': {
			display: 'none',
		},
		'&:after': {
			display: 'none',
		},
	},
	'& .MuiInputLabel-root': {
		left: '8.5px',
		transform: 'none',
		top: '8px',
		color: `${GREY_500} !important`,
		fontSize: '12px',

		fontStyle: 'normal',
		fontWeight: '300',
		lineHeight: 'normal',
	},
	'& .MuiFilledInput-root': {
		borderRadius: '8px',
		padding: '0 8px 8px 8px',
		alignItems: 'end',
		minHeight: '52px',
		background: 'transparent',
		'&:hover': {
			background: 'transparent',
		},
		'& .MuiFilledInput-input': {
			padding: '0px',
			caretColor: BLUE_400,
			fontFamily: 'Inter',
			fontSize: '14px',
			fontStyle: 'normal',
			fontWeight: '400',
			lineHeight: 'normal',
			color: GREY_900,
			'&::placeholder': {
				color: GREY_900,
				opacity: '1',
				fontFamily: 'Inter',
				fontSize: '14px',
				fontStyle: 'normal',
				fontWeight: '400',
				lineHeight: 'normal',
			},
		},
		'& .Mui-disabled': {
			'-webkit-text-fill-color': 'inherit',
			background: 'transparent',
		},
	},
	'& .MuiAutocomplete-endAdornment': {
		'&:has(.Mui-disabled)': {
			display: 'none',
		},
		'& .MuiIconButton-root': {
			padding: '0',
			marginRight: '-5px',
			marginTop: '-2px',
			'&:hover': {
				background: 'transparent',
			},
		},
	},
}));

const Field = styled(TextField)({});

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
						updateValue?.map((item: any) => (isValueIsObject(item) ? item?.[keyValue] : item)) ?? []
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
						(item: any) => value?.indexOf(isValueIsObject(item) ? item?.[keyValue] : item) !== -1
					) ?? [];
				return sortedOptions;
			}
			return [];
		} else {
			if (value) {
				const option = options?.find(
					(item: any) => (isValueIsObject(item) ? item?.[keyValue] : item) === value
				);
				if (option?.[keyValue]) return option;
			}

			return undefined;
		}
	}, [value, options, multiple, keyValue]);

	return (
		<Container>
			{error && errorMessage && <InputError message={errorMessage} />}
			<AutoCompleteCustom
				{...rest}
				value={getValue}
				error={error}
				options={options}
				fullWidth
				disableClearable={true}
				multiple={multiple}
				disabled={disabled}
				filterOptions={(options: any, { inputValue }: any) => {
					if (!inputValue) return options;

					const search = inputValue?.toLowerCase() ?? '';
					const values = options.filter((item: any) =>
						(isValueIsObject(item) ? item?.[keyLabel] : item)?.toLowerCase().includes(search)
					);

					if (values.length) return values;
					return isCompoundItem
						? [{ [keyLabel]: noOptionsText, [keyValue]: undefined }]
						: [noOptionsText];
				}}
				getOptionDisabled={(option: any) =>
					(isValueIsObject(option) ? option?.[keyLabel] : option) === noOptionsText
				}
				popupIcon={<ExpandMoreIcon fontSize="large" />}
				getOptionLabel={getOptionLabel}
				getOptionKey={getOptionKey}
				onChange={onSelect}
				isOptionEqualToValue={isOptionEqualToValue}
				renderInput={params => (
					<Field
						variant="filled"
						placeholder={multiple && getValue?.length > 0 ? undefined : placeholder}
						{...params}
						InputLabelProps={{
							shrink: true,
						}}
						label={label}
					/>
				)}
			/>
			<HelperText helperText={helperText} />
		</Container>
	);
};
