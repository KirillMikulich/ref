import { Typography } from '@mui/material';
import React, { type FC, type ReactNode } from 'react';

const Title: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<Typography
			sx={{
				fontFamily: 'Inter',
				fontSize: '30px',
				fontStyle: 'normal',
				fontWeight: '700',
				lineHeight: '120%',
			}}
		>
			{children}
		</Typography>
	);
};

export default Title;
