import type { Meta, StoryObj } from '@storybook/react'
import { Toast, ToastProps } from '@tielson-ignite-ui/react'

export default {
  title: 'Form/Toast',
  component: Toast,
  tags: ['autodocs'],
  args: {},
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {
  args: {
    date: 'Quarta-feira, 23 de Outubro às 16h',
  },
}
