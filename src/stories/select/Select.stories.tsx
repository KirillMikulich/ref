import { Meta, StoryObj } from '@storybook/react';
import Select, { SelectProps } from 'components/Controls/Select';
import React from 'react';
import { CustomSelect } from './Select.component';

const meta: Meta<SelectProps> = {
	title: 'Select',
	component: Select,
	argTypes: {
		label: {
			type: 'string',
			description: 'Label for input',
			defaultValue: '',
			control: { type: 'text' },
		},
		items: {
			control: 'array',
		},
		placeholder: {
			type: 'string',
			defaultValue: 'Выберите значение',
			control: 'text',
		},
		useNullableItem: {
			type: 'boolean',
			control: 'boolean',
			defaultValue: true,
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
	},
};

export default meta;

type Story = StoryObj<SelectProps>;

export const Standart: Story = {
	args: {
		label: 'Lorem ipsum',
		items: [
			{ id: 1, name: '1' },
			{ id: 2, name: '2' },
			{ id: 3, name: '3' },
		],
		placeholder: 'Выберите значение',
		useNullableItem: true,
		keyValue: 'id',
		keyLabel: 'name',
	},
	render: args => <CustomSelect {...args} />,
};
