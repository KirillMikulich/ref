import styled from '@emotion/styled';
import { Box } from '@mui/material';
import React, { memo, type FC } from 'react';
import { GREY_500 } from 'styles/constants';

interface Props {
	helperText?: string;
}

const Helper = styled(Box)({
	padding: '4px 8px 0 8px',
	color: GREY_500,
	fontSize: '12px',
	fontStyle: 'normal',
	fontWeight: '300',
	lineHeight: 'normal',
	fontFamily: 'Inter',
});

const HelperText: FC<Props> = memo(props => {
	const { helperText } = props;

	if (helperText?.length === 0) {
		return null;
	}

	return <Helper>{helperText}</Helper>;
});

export default HelperText;
