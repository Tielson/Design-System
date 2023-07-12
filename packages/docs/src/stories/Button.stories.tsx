import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@ignite-ui/react'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Enviar',
  },
} as Meta<ButtonProps>

export const primary: StoryObj<ButtonProps> = {}

export const secondary: StoryObj<ButtonProps> = {
  args: {
    size: 'big',
  },
}
