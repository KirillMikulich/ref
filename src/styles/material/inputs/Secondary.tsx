import styled from '@emotion/styled';
import { TextField, TextFieldProps, Box } from '@mui/material';
import React, { useState, type FC } from 'react';
import {
	BLUE_400,
	GREY_200,
	GREY_500,
	GREY_700,
	GREY_900,
	RED_100,
} from 'styles/constants';

const Field = styled(TextField)({
	flex: '1 1 50%',
	margin: '0',
	padding: '0',
	'.MuiFormLabel-root': {
		display: 'none',
	},
	'.MuiInputBase-root': {
		display: 'flex',
		padding: '16px 8px',
		margin: '0',
		flexDirection: 'column',
		justifyContent: 'end',
		borderRadius: '0px',
		backgroundColor: 'white',
		minHeight: '53px',
		caretColor: BLUE_400,
		transition: '0.3s linear',
		borderLeft: `1px solid transparent`,
		borderTop: `1px solid transparent`,
		borderRight: `1px solid transparent`,
		'&:before': {
			content: 'none',
		},
		'&:after': {
			content: 'none',
		},
		'&:hover': {
			borderRadius: '0px',
			backgroundColor: GREY_200,
		},
		'&.Mui-focused': {
			borderRadius: '0px',
			backgroundColor: GREY_200,
			borderLeft: `1px solid ${GREY_700}`,
			borderTop: `1px solid ${GREY_700}`,
			borderRight: `1px solid ${GREY_700}`,
		},
		'&.Mui-error': {
			backgroundColor: RED_100,
		},
		'&.Mui-disabled': {
			WebkitTextFillColor: 'none',
			backgroundColor: 'transparent',
		},
	},
	'.MuiInputBase-input': {
		color: GREY_900,
		padding: '0',
		height: '17px',
		fontSize: '14px',
		fontStyle: 'normal',
		fontWeight: '400',
		lineHeight: '120%',
	},
	'.MuiOutlinedInput-notchedOutline': {
		border: 'none',
	},
	'.MuiFormHelperText-root': {
		margin: '4px 0 0 0',
		padding: '0 8px',
		color: GREY_500,
		fontSize: '12px',
		fontStyle: 'normal',
		fontWeight: '300',
		lineHeight: 'normal',
	},
});

const Container = styled(Box)<{ focus?: boolean }>(({ focus }) => ({
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'start',
	transition: '0.3s linear',
	borderBottom: `1px solid ${focus ? GREY_700 : 'transparent'}`,
	'&:hover': {
		borderBottom: `1px solid ${GREY_700}`,
	},
}));

const Label = styled(Box)`
	max-width: 234px;
	flex: 1 1 50%;
	display: flex;
	align-items: center;
	font-family: Inter;
	color: ${GREY_900};
	font-size: 14px;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
	letter-spacing: 0.28px;
`;

export type Props = TextFieldProps;

export const Secondary: FC<Props> = props => {
	const { label, ...rest } = props;
	const [focus, setFocus] = useState<boolean>(false);

	return (
		<Container focus={focus}>
			<Label>{label}</Label>
			<Field
				onFocus={() => setFocus(true)}
				onBlur={() => setFocus(false)}
				{...rest}
			></Field>
		</Container>
	);
};
