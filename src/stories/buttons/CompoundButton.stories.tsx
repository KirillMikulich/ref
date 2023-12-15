import React from "react";
import { Meta, StoryObj} from "@storybook/react";
import CompoundButton from "components/Controls/CompoundButton";

const meta: Meta<typeof CompoundButton> = {
  title: 'Buttons',
  component: CompoundButton,
  argTypes: { 
    label: {
      type: 'string',
      description: 'Заголовок кнопки',
      defaultValue: '',
      control: {
        type: 'text',
      }
    },
    text: {
      type: 'string',
      description: 'Текст кнопки',
      defaultValue: '',
      control: {
        type: 'text',
      }
    },
    disabled: {
      type: 'boolean',
      description: 'Позволяет сделать кнопку не доступной',
      defaultValue: false,
      control: { type: 'boolean' }
    },
  },
}

export default meta;
type Story = StoryObj<typeof CompoundButton>;

export const Compound: Story = {
  args: {
    label: 'Открытый',
    text: 'Описать что значит открытый тип QR кода, для чего используется.'
  },
  render: (args) => <CompoundButton {...args} />
}
