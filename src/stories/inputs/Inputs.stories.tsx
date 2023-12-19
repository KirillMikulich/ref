import { Meta, StoryObj } from '@storybook/react';
import TextField, { TextFieldProps } from 'components/Controls/TextField';
import React from 'react';

const meta: Meta<TextFieldProps> = {
	title: 'Input',
	component: TextField,
	argTypes: {
		variant: {
			type: 'string',
			description: 'Input Style',
			defaultValue: 'primary',
			options: ['primary', 'secondary'],
			control: { type: 'select' },
		},
		label: {
			type: 'string',
			description: 'Label for input',
			defaultValue: '',
			control: { type: 'text' },
		},
		value: {
			type: 'string',
			description: 'Value in input',
			defaultValue: '',
			control: { type: 'text' },
		},
		disabled: {
			type: 'boolean',
			description: 'Disabled input',
			defaultValue: false,
			control: { type: 'boolean' },
			if: { arg: 'error', truthy: false },
		},
		error: {
			type: 'boolean',
			description: 'Error style input',
			defaultValue: false,
			control: { type: 'boolean' },
			if: { arg: 'disabled', truthy: false },
		},
		errorMessage: {
			type: 'string',
			description: 'Error message for input',
			defaultValue: 'Error',
			control: { type: 'text' },
			if: { arg: 'error', truthy: true },
		},
		helperMessage: {
			type: 'string',
			description: 'Helper text for input',
			defaultValue: 'Helper text',
			control: { type: 'text' },
		},
	},
};

export default meta;

type Story = StoryObj<TextFieldProps>;

export const Standard: Story = {
	args: {
		variant: 'primary',
		label: 'Lorem ipsum',
		value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
	},
	render: args => <TextField {...args} />,
};

export const LongTitle: Story = {
	args: {
		variant: 'primary',
		label: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
	},
	render: args => <TextField {...args} />,
};

export const Error: Story = {
	args: {
		variant: 'primary',
		label: 'Lorem ipsum',
		error: true,
		errorMessage: 'Test error text',
		value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
	},
	render: args => <TextField {...args} />,
};

export const HelperText: Story = {
	args: {
		variant: 'primary',
		label: 'Lorem ipsum',
		helperMessage: 'Lorem ipsum dolor sit',
		value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
	},
	render: args => <TextField {...args} />,
};

export const DisabledReadOnly: Story = {
	args: {
		variant: 'primary',
		label: 'Lorem ipsum',
		disabled: true,
		value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
	},
	render: args => <TextField {...args} />,
};
