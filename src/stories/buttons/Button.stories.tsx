import StyledButton, {StyledButtonProps} from "./Buttons.component";
import React from "react";
import { Meta, Story} from "@storybook/react";
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

export default { 
  title: 'Buttons',
  component: StyledButton,
  argTypes: { 
    label: {
      type: 'string',
      description: 'Текст кнопки',
      defaultValue: '',
      control: {
        type: 'text',
      }
    },
    variant: {
      type: 'string',
      description: 'Типы кнопок',
      defaultValue: 'Primary',
      options: ['Primary', 'Secondary', 'Text'],
      control: { type: 'select' },
    },
    disabled: {
      type: 'boolean',
      description: 'Позволяет сделать кнопку не доступной',
      defaultValue: false,
      control: { type: 'boolean' }
    },
    startIcon: {
      type: "boolean",
      description: 'Добавляет иконку перед текстом',
      defaultValue: false,
      control: { type: 'boolean' },
      if: { arg: 'endIcon', truthy: false },
    },
    endIcon: {
      type: "boolean",
      description: 'Добавляет иконку после текстом',
      defaultValue: false,
      control: { type: 'boolean' },
      if: { arg: 'startIcon', truthy: false },
    }
  },
} as Meta<StyledButtonProps>;

const Template: Story<StyledButtonProps> = (args) => {
  const {startIcon, endIcon, ...rest} = args;

  if (startIcon) {
    return <StyledButton {...rest} startIcon={<DeleteIcon />}/>
  }

  if (endIcon) {
    return <StyledButton {...rest} endIcon={<SendIcon />}/>
  }

  return <StyledButton {...rest} />
}

export const Standart: Story<StyledButtonProps>  = Template.bind({});

Standart.args = {
  variant: 'Primary',
  label: 'Default'
}