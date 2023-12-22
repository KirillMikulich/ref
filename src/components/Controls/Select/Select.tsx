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

export interface SelectProps extends MuiSelectProps {
	items?: any[];
	label?: string;
	placeholder?: string;
	useNullableItem?: boolean;
	keyLabel?: string;
	keyValue?: string;
	errorMessage?: string;
	error?: boolean;
	onChange?: (value: any) => void;
	isSearchable?: boolean;
}

const Container = styled(Box)`
	display: flex;
	flex-direction: row;
`;

export const Select: FC<SelectProps> = props => {
	const {
		error,
		errorMessage,
		items = [],
		label = '',
		useNullableItem = true,
		placeholder = 'Выберите значение',
		keyLabel = 'id',
		keyValue = 'name',
		multiple = false,
		onChange,
		value = multiple ? [] : null,
		...rest
	} = props;

	const [openList, setOpenList] = useState<boolean>(false);

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

	return (
		<Container>
			{error && errorMessage && <InputError message={errorMessage} />}
			<FormControl fullWidth>
				<InputLabel shrink>{label}</InputLabel>
				<MuiSelect
					variant="filled"
					label={label}
					value={value ?? null}
					displayEmpty
					multiple={multiple}
					{...rest}
					open={openList}
					onOpen={() => setOpenList(true)}
					renderValue={(value: any) =>
						value === undefined || value === null || value?.length === 0
							? placeholder
							: value
					}
					onChange={onSelect}
				>
					{useNullableItem && (
						<MenuItem value={undefined}>{placeholder}</MenuItem>
					)}
					{RenderItems}
				</MuiSelect>
			</FormControl>
		</Container>
	);
};
