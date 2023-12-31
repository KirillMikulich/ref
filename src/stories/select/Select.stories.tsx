import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { CustomSelect } from './Select.component';
import { SelectProps } from 'ui/Select';

const meta: Meta<SelectProps> = {
	title: 'Select',
	component: CustomSelect,
	argTypes: {
		label: {
			type: 'string',
			description: 'Label for input',
			defaultValue: '',
			control: { type: 'text' },
		},
		isSearchable: {
			type: 'boolean',
			control: 'boolean',
			defaultValue: false,
		},
		items: {
			control: 'array',
		},
		placeholder: {
			type: 'string',
			defaultValue: 'Выберите значение',
			control: 'text',
		},
		keyValue: {
			type: 'string',
			defaultValue: 'id',
			control: 'text',
		},
		keyLabel: {
			type: 'string',
			defaultValue: 'name',
			control: 'text',
		},
		disabled: {
			type: 'boolean',
			defaultValue: false,
			control: { type: 'boolean' },
			if: { arg: 'error', truthy: false },
		},
		error: {
			type: 'boolean',
			control: 'boolean',
			defaultValue: false,
		},
		errorMessage: {
			type: 'string',
			control: 'text',
			defaultValue: '',
			if: { arg: 'error', truthy: true },
		},
		multiple: {
			type: 'boolean',
			control: 'boolean',
			defaultValue: false,
		},
		helperText: {
			type: 'string',
			control: 'text',
			defaultValue: '',
		},
	},
};

export default meta;

type Story = StoryObj<SelectProps>;

export const Standard: Story = {
	args: {
		label: 'Lorem ipsum',
		items: [
			{ id: 1, name: 'NAME-1' },
			{ id: 2, name: 'NAME-2' },
			{ id: 3, name: 'NAME-3' },
		],
		placeholder: 'Выберите значение',
		keyValue: 'id',
		keyLabel: 'name',
		multiple: false,
		isSearchable: false,
	},
	render: (args: SelectProps) => <CustomSelect {...args} />,
};

export const Simple: Story = {
	args: {
		label: 'Lorem ipsum',
		items: ['1', '2', '3', '4'],
		placeholder: 'Выберите значение',
		multiple: false,
		isSearchable: false,
	},
	render: (args: SelectProps) => <CustomSelect {...args} />,
};

export const HelperText: Story = {
	args: {
		label: 'Lorem ipsum',
		items: ['1', '2', '3', '4'],
		placeholder: 'Выберите значение',
		multiple: false,
		isSearchable: false,
		helperText: 'Help message',
	},
	render: (args: SelectProps) => <CustomSelect {...args} />,
};

export const Error: Story = {
	args: {
		label: 'Lorem ipsum',
		items: ['1', '2', '3', '4'],
		placeholder: 'Выберите значение',
		multiple: false,
		isSearchable: false,
		error: true,
	},
	render: (args: SelectProps) => <CustomSelect {...args} />,
};

export const ErrorMessage: Story = {
	args: {
		label: 'Lorem ipsum',
		items: ['1', '2', '3', '4'],
		placeholder: 'Выберите значение',
		multiple: false,
		isSearchable: false,
		error: true,
		errorMessage: 'Error message',
	},
	render: (args: SelectProps) => <CustomSelect {...args} />,
};

export const DisabledReadonly: Story = {
	args: {
		label: 'Lorem ipsum',
		items: ['1', '2', '3', '4'],
		placeholder: 'Выберите значение',
		multiple: false,
		isSearchable: false,
		disabled: true,
	},
	render: (args: SelectProps) => <CustomSelect {...args} />,
};
