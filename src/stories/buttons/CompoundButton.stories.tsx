import React from "react";
import { Meta, Story} from "@storybook/react";
import CompoundButton, { Props } from "components/Controls/CompoundButton";

export default { 
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
} as Meta<Props>;

const Template: Story<Props> = (args) => <CompoundButton {...args} />;

export const Compound: Story<Props>  = Template.bind({});

Compound.args = {
  label: 'Открытый',
  text: 'Описать что значит открытый тип QR кода, для чего используется.'
}
