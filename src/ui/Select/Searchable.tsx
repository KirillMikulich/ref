import {
	Autocomplete,
	AutocompleteProps,
	Box,
	Checkbox,
	Chip,
	FormControlLabel,
	Popper,
	TextField,
	styled,
} from '@mui/material';
import React, { useCallback, type FC, useMemo, useRef } from 'react';
import InputError from '../InputError';
import { isValueIsObject } from 'utils';
import { DefaultSelectProps } from './models';
import HelperText from '../HelperText';
import { BLUE_400, GREY_100, GREY_200, GREY_500, GREY_900, RED_100 } from 'styles/constants';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';

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
	error: string;
	disabled: boolean;
}

const getColor = (props: AutoCompleteCSSProperties): string => {
	if (props.error === 'true') {
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
	position: 'relative',
	border: props.disabled ? `1px solid ${GREY_200}` : 'none',
	'&:has(.Mui-focused)': {
		background: props.error === 'true' ? RED_100 : GREY_200,
	},
	'& .MuiInputBase-root': {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		columnGap: '8px',
		rowGap: '4px',
		'&:before': {
			display: 'none',
		},
		'&:after': {
			display: 'none',
		},
	},
	'& .MuiInputLabel-root': {
		transform: 'none',
		padding: '8px',
		position: 'relative',
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
			transform: 'none',
			'&::placeholder': {
				color: GREY_900,
				opacity: '1',
				fontFamily: 'Inter',
				fontSize: '14px',
				fontStyle: 'normal',
				fontWeight: '400',
				lineHeight: 'normal',
			},
			'& .Mui-disabled': {
				WebkitTextFillColor: 'inherit',
				background: 'transparent',
			},
			'&:has(.Mui-focused)': {
				background: 'transparent !important',
				transform: 'none !important',
			},
		},
	},
	'& .MuiAutocomplete-endAdornment': {
		'&:has(.Mui-disabled)': {
			display: 'none',
		},
		'& .MuiIconButton-root': {
			color: GREY_500,
			padding: '0',
			marginRight: '-5px',
			marginTop: '-2px',
			'&:hover': {
				background: 'transparent',
			},
		},
		'& .MuiAutocomplete-clearIndicator': {
			opacity: '1',
			overflow: 'visible',
			visibility: 'visible',
			width: '24px',
			height: '24px',
			color: GREY_500,
			borderRadius: '50%',
			background: 'white',
			marginRight: '8px',
			fontSize: '24px',
		},
	},
}));

const Field = styled(TextField)({});

const CustomPopper = styled(Popper)({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'start',
	padding: '0px',
	margin: '0px',
	'& .MuiPaper-root': {
		padding: '8px 8px 8px 16px',
		background: GREY_100,
		border: `1px solid ${GREY_200}`,
		borderRadius: '0px 0px 8px 8px',
	},
	'& .MuiAutocomplete-listbox': {
		margin: '0px',
		padding: '0px',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'start',
		gap: '8px',
		'& .MuiFormControlLabel-root': {
			padding: `8px`,
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'start',
			alignItems: 'start',
			gap: '8px',
			'& .MuiButtonBase-root': {
				padding: '0px',
			},
		},
	},
});

const ListItem = styled(Box)({
	padding: '8px',
	margin: '0px',
	color: GREY_900,
	fontFamily: 'Inter',
	fontSize: '12px',
	fontStyle: 'normal',
	fontWeight: '400',
	lineHeight: 'normal',
	width: 'auto',
	transition: 'background 0.5s ease',
	cursor: 'pointer',
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'start',
	alignItems: 'start',
	'&:hover': {
		background: GREY_200,
	},
});

const CheckboxListItem = styled(FormControlLabel)<{ left: string }>(props => ({
	padding: '0px',
	margin: '0px',
	color: GREY_900,
	fontFamily: 'Inter',
	fontSize: '12px',
	fontStyle: 'normal',
	fontWeight: '400',
	lineHeight: 'normal',
	width: 'auto',
	transition: 'background 0.5s ease',
	cursor: 'pointer',
	'&:hover': {
		background: GREY_200,
	},
	'& .MuiButtonBase-root': {
		padding: props.left === 'true' ? '0px 0px 0px 28px !important' : '0px',
	},
}));

const CustomChip = styled(Chip)({
	padding: '8px',
	margin: '0px',
	background: 'white',
	borderRadius: '8px',
	color: GREY_900,
	fontFamily: 'Inter',
	fontSize: '12px',
	fontStyle: 'normal',
	fontWeight: '400',
	lineHeight: 'normal',
	'& .MuiChip-root': {
		display: 'flex',
		flexDirection: 'row',
		margin: '0px',
		padding: '0px',
		gap: '4px',
	},
	'& .MuiChip-deleteIconMedium': {
		margin: '0px',
		background: 'transparent',
		fill: GREY_900,
		fontSize: '16px',
	},
});

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
		disabled = false,
		placeholder = 'Выберите значение',
		noOptionsText = 'Ничего не найдено',
		helperText = '',
		useSelectAll = false,
		selectAllText = 'Выбрать все',
		...rest
	} = props;
	const isCompoundItem = useMemo(() => isValueIsObject(items?.[0]), [items]);
	const autocompleteRef = useRef<any>(null);

	const options = useMemo(() => {
		if (!items) return [];

		if (useSelectAll) {
			return [
				isCompoundItem ? { [keyLabel]: selectAllText, [keyValue]: selectAllText } : selectAllText,
				...items,
			];
		}

		return items;
	}, [useSelectAll, items, isCompoundItem, keyLabel, keyValue, selectAllText]);

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

	const inputRenderer = (params: any) => (
		<Field
			variant="filled"
			placeholder={multiple && getValue?.length > 0 ? undefined : placeholder}
			{...params}
			InputLabelProps={{
				shrink: true,
			}}
			label={label}
		/>
	);

	const optionDisabled = useCallback(
		(option: any) => (isValueIsObject(option) ? option?.[keyLabel] : option) === noOptionsText,
		[keyLabel, noOptionsText]
	);

	const filteredOption = useCallback(
		(options: any, { inputValue }: any) => {
			if (!inputValue) return options;

			const search = inputValue?.toLowerCase() ?? '';
			const values = options.filter((item: any) =>
				(isValueIsObject(item) ? item?.[keyLabel] : item)?.toLowerCase().includes(search)
			);

			if (values.length) {
				if (useSelectAll) {
					return [
						isCompoundItem
							? { [keyLabel]: selectAllText, [keyValue]: selectAllText }
							: selectAllText,
						...values,
					];
				}

				return values;
			}
			return isCompoundItem
				? [{ [keyLabel]: noOptionsText, [keyValue]: undefined }]
				: [noOptionsText];
		},
		[keyLabel, noOptionsText, isCompoundItem, keyValue, selectAllText, useSelectAll]
	);

	const optionRenderer = (props: any, option: any, { selected }: any) => {
		const isSelectAllOption = useSelectAll
			? (isCompoundItem ? option?.[keyValue] : option) === selectAllText
			: false;

		if (multiple) {
			if (isSelectAllOption) return SelectAllOption(option, props);

			return (
				<CheckboxListItem
					left={useSelectAll.toString()}
					key={isCompoundItem ? option?.[keyValue] : option}
					label={isCompoundItem ? option?.[keyLabel] : option}
					{...props}
					control={
						<Checkbox key={option.label} checked={selected} onChange={(e: any) => undefined} />
					}
				/>
			);
		}

		return (
			<ListItem key={isCompoundItem ? option?.[keyValue] : option}>
				{isCompoundItem ? option?.[keyLabel] : option}
			</ListItem>
		);
	};

	const selectAllHandler = useCallback(() => {
		if (onChange) {
			if (items.length === getValue.length) {
				onChange([]);
			} else {
				if (isCompoundItem) {
					onChange(items.map((i: any) => i?.[keyValue]) ?? []);
				} else {
					onChange(items ?? []);
				}
			}
		}
	}, [items, isCompoundItem, onChange, getValue, keyValue, autocompleteRef]);

	const SelectAllOption = useCallback(
		(option: any, props: any) => (
			<CheckboxListItem
				{...props}
				left={'false'}
				key={isCompoundItem ? option?.[keyValue] : option}
				label={isCompoundItem ? option?.[keyLabel] : option}
				onClick={selectAllHandler}
				control={<Checkbox key={option.label} checked={items.length === getValue.length} />}
			/>
		),
		[keyLabel, keyValue, isCompoundItem, options, getValue]
	);

	return (
		<Container>
			{error && errorMessage && <InputError message={errorMessage} />}
			<AutoCompleteCustom
				{...rest}
				ref={autocompleteRef}
				value={getValue}
				error={error.toString()}
				options={options}
				fullWidth
				disableClearable={false}
				multiple={multiple}
				disabled={disabled}
				PopperComponent={props => <CustomPopper {...props} />}
				filterOptions={filteredOption}
				getOptionDisabled={optionDisabled}
				popupIcon={<ExpandMoreIcon fontSize="large" />}
				getOptionLabel={getOptionLabel}
				getOptionKey={getOptionKey}
				onChange={onSelect}
				isOptionEqualToValue={isOptionEqualToValue}
				renderInput={inputRenderer}
				renderOption={optionRenderer}
				renderTags={(value, getTagProps) =>
					value.map((option: any, index: number) => (
						<CustomChip
							deleteIcon={<CloseIcon />}
							label={`${isCompoundItem ? option?.[keyLabel] : option}`}
							{...getTagProps({ index })}
						/>
					))
				}
			/>
			<HelperText helperText={helperText} />
		</Container>
	);
};
