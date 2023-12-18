import React, { useMemo, type FC } from 'react';
import {
	FormControl,
	InputLabel,
	MenuItem,
	Select as MuiSelect,
	SelectProps as MuiSelectProps,
	SelectChangeEvent,
} from '@mui/material';

export interface SelectProps extends MuiSelectProps {
	items?: any[];
	placeholder?: string;
	useNullableItem?: boolean;
	keyLabel?: string;
	keyValue?: string;
	onChange?: (value: any) => void;
}

const Select: FC<SelectProps> = props => {
	const {
		items = [],
		label = '',
		useNullableItem = true,
		placeholder = 'Выберите значение',
		keyLabel = 'id',
		keyValue = 'name',
		onChange,
		value,
		...rest
	} = props;

	const RenderItems = useMemo(() => {
		if (items?.length > 0) {
			if (typeof items[0] === 'object') {
				return items.map((item: any, index: number) => (
					<MenuItem
						key={item?.[keyValue] || index}
						value={item?.[keyValue] ?? undefined}
					>
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

	const onSelect = ({ target: { value } }: SelectChangeEvent<any>) => {
		if (onChange) {
			onChange(value ? value : null);
		}
	};

	return (
		<FormControl fullWidth>
			<InputLabel shrink>{label}</InputLabel>
			<MuiSelect
				variant="filled"
				label={label}
				value={value ? value : undefined}
				displayEmpty
				{...rest}
				onChange={onSelect}
			>
				{useNullableItem && (
					<MenuItem value={undefined}>{placeholder}</MenuItem>
				)}
				{RenderItems}
			</MuiSelect>
		</FormControl>
	);
};

export default Select;
