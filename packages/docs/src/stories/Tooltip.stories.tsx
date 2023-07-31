import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip, TooltipProps } from '@tielson-ignite-ui/react'

export default {
  title: 'Form/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  args: {},
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {
  args: {
    date: '26 de Outubro - Disponível',
    number: 26,
  },
}

export const Secundary: StoryObj<TooltipProps> = {
  args: {
    date: '03 de Setembro - Indisponivel',
    number: 3,
  },
}
