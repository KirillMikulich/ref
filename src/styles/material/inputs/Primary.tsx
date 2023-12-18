import styled from '@emotion/styled';
import { TextField } from '@mui/material';
import {
	BLUE_400,
	GREY_100,
	GREY_200,
	GREY_500,
	GREY_900,
	RED_100,
} from 'styles/constants';

export const Primary = styled(TextField)({
	margin: '0',
	padding: '0',
	'.MuiFormLabel-root': {
		color: GREY_500,
		fontSize: '14px',
		fontStyle: 'normal',
		fontWeight: '400',
		lineHeight: '120%',
		maxWidth: 'calc(100% - 16px)',
		left: '8px',
		top: '50%',
		textWrap: 'wrap',
		transform: 'translate(0, -50%)',
		'&.Mui-focused, &.MuiFormLabel-filled': {
			fontSize: '12px',
			top: '7px',
			transform: 'translate(0, 0)',
			fontWeight: '300',
			color: GREY_500,
			textWrap: 'nowrap',
			lineHeight: 'normal',
		},
		'&.Mui-disabled': {
			color: GREY_500,
		},
	},
	'.MuiInputBase-root': {
		display: 'flex',
		padding: '8px',
		flexDirection: 'column',
		justifyContent: 'end',
		backgroundColor: GREY_100,
		borderRadius: '8px',
		minHeight: '52px',
		caretColor: BLUE_400,
		'&:before': {
			content: 'none',
		},
		'&:after': {
			content: 'none',
		},
		'&.Mui-focused': {
			backgroundColor: GREY_200,
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
		height: '16px',
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
