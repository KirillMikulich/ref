import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { SearchableProps } from 'components/Controls/Select';
import { CustomSelectSearchable } from './Select.component';

const meta: Meta<SearchableProps> = {
	title: 'Select',
	component: CustomSelectSearchable,
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
		multiple: {
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
	},
};

export default meta;

type Story = StoryObj<SearchableProps>;

export const StandardSearchable: Story = {
	args: {
		label: 'Lorem ipsum',
		items: [
			{ id: 1, name: 'NAME-1' },
			{ id: 2, name: 'NAME-2' },
			{ id: 3, name: 'NAME-3' },
		],
		placeholder: 'Выберите значение',
		useNullableItem: true,
		keyValue: 'id',
		keyLabel: 'name',
		multiple: false,
	},
	render: (args: SearchableProps) => <CustomSelectSearchable {...args} />,
};

export const SimpleSearchable: Story = {
	args: {
		label: 'Lorem ipsum',
		items: ['1', '2', '3', '4'],
		placeholder: 'Выберите значение',
		useNullableItem: true,
		keyValue: 'id',
		multiple: false,
		keyLabel: 'name',
	},
	render: (args: SearchableProps) => <CustomSelectSearchable {...args} />,
};

export const StandardSearchableMulti: Story = {
	args: {
		label: 'Lorem ipsum',
		items: [
			{ id: 1, name: 'NAME-1' },
			{ id: 2, name: 'NAME-2' },
			{ id: 3, name: 'NAME-3' },
		],
		placeholder: 'Выберите значение',
		useNullableItem: true,
		keyValue: 'id',
		keyLabel: 'name',
		multiple: true,
	},
	render: (args: SearchableProps) => <CustomSelectSearchable {...args} />,
};

export const SimpleSearchableMulti: Story = {
	args: {
		label: 'Lorem ipsum',
		items: ['1', '2', '3', '4'],
		placeholder: 'Выберите значение',
		useNullableItem: true,
		keyValue: 'id',
		multiple: true,
		keyLabel: 'name',
	},
	render: (args: SearchableProps) => <CustomSelectSearchable {...args} />,
};
