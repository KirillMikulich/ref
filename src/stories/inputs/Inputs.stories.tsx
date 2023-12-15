import { Meta, StoryObj } from "@storybook/react";
import TextField from "components/Controls/TextField";
import React from "react";

const meta: Meta<typeof TextField> = {
  title: 'Inputs',
  component: TextField,
  argTypes: { 
    /* variant: {
      type: 'string',
      description: 'Input Style',
      defaultValue: 'Primary',
      options: ['Primary', 'Secondary'],
      control: { type: 'select' }
    }, */
    label: {
      type: 'string',
      description: 'Label for input',
      defaultValue: '',
      control: { type: 'text' }
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
    }
  }
}

export default meta;

type Story = StoryObj<typeof TextField>;

export const Standart: Story = {
  args: {
    label: 'Lorem ipsum',
    value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  render: (args) => <TextField {...args}/>
}

export const LongTitle: Story = {
  args: {
    label: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  render: (args) => <TextField {...args}/>
}