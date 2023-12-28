import React, { useMemo, type FC, useCallback, useState } from 'react';
import {
	FormControl,
	InputLabel,
	MenuItem,
	SelectChangeEvent,
	Select as MuiSelect,
	SelectProps as MuiSelectProps,
	styled,
	Box,
} from '@mui/material';
import InputError from '../InputError';
import { isValueIsObject } from 'utils';
import { DefaultSelectProps } from './models';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { GREY_100, GREY_200, GREY_500, GREY_900, RED_100 } from 'styles/constants';
import HelperText from '../HelperText';

export interface SelectProps extends MuiSelectProps, DefaultSelectProps {
	onChange?: (value: any) => void;
	label?: string;
}

const Container = styled(Box)({
	display: 'flex',
	flexDirection: 'column',
});

const Control = styled(FormControl)({
	display: 'flex',
	flexDirection: 'column',
});
const Label = styled(InputLabel)({
	left: '8px',
	transform: 'none',
	top: '8px',
	color: `${GREY_500} !important`,
	fontSize: '12px',
	fontStyle: 'normal',
	fontWeight: '300',
	lineHeight: 'normal',
});

interface SelectCSSProps {
	focus: boolean;
	error: boolean;
	disabled: boolean;
}

const getColor = (props: SelectCSSProps): string => {
	if (props.error) {
		return RED_100;
	}

	if (props.focus) {
		return GREY_200;
	}

	if (props.disabled) {
		return 'white';
	}

	return GREY_100;
};

const CustomSelect = styled(MuiSelect)<SelectCSSProps>(props => ({
	borderRadius: '8px',
	minHeight: '52px',
	alignItems: 'end',
	background: `${getColor(props)} !important`,
	border: props.disabled ? `1px solid ${GREY_200}` : 'none',
	'&:before': {
		display: 'none',
	},
	'&:after': {
		display: 'none',
	},
	'& .MuiInputBase-input': {
		alignItems: 'end',
		padding: '8px',
		color: GREY_900,
		fontWeight: '400',
		fontStyle: 'normal',
		fontSize: '14px',
		lineHeight: 'normal',
		'&:focus': {
			background: 'transparent',
		},
	},
	'& .Mui-disabled': {
		'-webkit-text-fill-color': 'inherit',
		background: 'transparent',
	},
	'& .MuiSvgIcon-root': {
		padding: '0',
		marginRight: '-5px',
		marginTop: '-2px',
	},
	'&:has(.Mui-disabled) .MuiSvgIcon-root': {
		display: 'none',
	},
}));

export const Select: FC<SelectProps> = props => {
	const {
		error = false,
		errorMessage = '',
		items = [],
		label = '',
		useNullableItem = true,
		placeholder = 'Выберите значение',
		keyLabel = 'id',
		keyValue = 'name',
		multiple = false,
		onChange = undefined,
		value = multiple ? [] : null,
		helperText = '',
		disabled = false,
		...rest
	} = props;

	const isCompoundItem = useMemo(() => isValueIsObject(items?.[0]), [items]);
	const [openList, setOpenList] = useState<boolean>(false);
	const [focus, setFocus] = useState<boolean>(false);

	const RenderItems = useMemo(() => {
		if (items?.length > 0) {
			if (typeof items[0] === 'object') {
				return items.map((item: any, index: number) => (
					<MenuItem key={item?.[keyValue] || index} value={item?.[keyValue] ?? undefined}>
						{item?.[keyLabel] ?? ''}
					</MenuItem>
				));
			} else {
				return items.map((item: any, index: number) => (
					<MenuItem key={index} value={item ?? undefined}>
						{item ?? ''}
					</MenuItem>
				));
			}
		}
		return null;
	}, [items, keyLabel, keyValue]);

	const onSelect = useCallback(
		({ target: { value } }: SelectChangeEvent<any>) => {
			if (onChange) {
				if (multiple) {
					if (value.indexOf(undefined) !== -1) {
						onChange([]);
					} else {
						onChange(value);
					}
				} else {
					onChange(value ? value : null);
				}
			}

			setOpenList(false);
		},
		[onChange, multiple]
	);

	const values = useMemo(() => {
		if (isCompoundItem) {
			if (multiple) {
				return items
					.filter((item: any) => (value as Array<any>)?.indexOf(item[keyValue]) !== -1)
					.map((item: any) => item?.[keyLabel] ?? '')
					.join(', ');
			}

			return items.find((item: any) => item?.[keyValue] === value)?.[keyLabel] ?? '';
		}
		return multiple ? (value as Array<any>).join(', ') : value;
	}, [value, multiple, keyLabel, keyValue, isCompoundItem, items]);

	return (
		<Container>
			{error && errorMessage && <InputError message={errorMessage} />}
			<Control fullWidth>
				<Label shrink>{label}</Label>
				<CustomSelect
					disabled={disabled}
					focus={focus}
					error={error}
					variant="filled"
					label={label}
					onFocus={() => setFocus(true)}
					onBlur={() => setFocus(false)}
					value={value ?? null}
					displayEmpty
					onClose={() => setOpenList(false)}
					multiple={multiple}
					{...rest}
					IconComponent={props => <ExpandMoreIcon fontSize="large" {...props} />}
					open={openList}
					onOpen={() => setOpenList(true)}
					renderValue={(value: any) =>
						value === undefined || value === null || value?.length === 0 ? placeholder : values
					}
					onChange={onSelect}
				>
					{useNullableItem && placeholder?.length > 0 && (
						<MenuItem value={undefined}>{placeholder}</MenuItem>
					)}
					{RenderItems}
				</CustomSelect>
			</Control>
			<HelperText helperText={helperText} />
		</Container>
	);
};
