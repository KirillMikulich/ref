import React from 'react';
import { ReactComponent as LogoIcon } from 'assets/svg/logo.svg';
import { Box, Button, SvgIcon } from '@mui/material';
import Title from 'ui/Typography/Title';
import TextField from 'ui/TextField';

const Login = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100dvh',
				width: '100%',
			}}
		>
			<Box
				sx={{
					width: '405px',
					minHeight: '577px',
					display: 'flex',
					flexDirection: 'column',
					padding: '32px',
					background: 'white',
					gap: '64px',
					borderRadius: '8px',
				}}
			>
				<SvgIcon
					component={LogoIcon}
					sx={{
						width: '107px',
						height: '46px',
					}}
					viewBox="0 0 107 46"
				/>

				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						gap: '40px',
					}}
				>
					<Title>Вход</Title>

					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							gap: '24px',
						}}
					>
						<TextField label={'Логин'} />
						<TextField label={'Пароль'} />
					</Box>

					<Button variant="primary">Войти</Button>
				</Box>

				<Box
					sx={{
						display: 'flex',
						flexDirection: 'row',
						paddingTop: '13px',
						gap: '16px',
					}}
				>
          
        </Box>
			</Box>
		</Box>
	);
};

export default Login;
