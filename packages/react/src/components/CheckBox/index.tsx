import { Check } from '@phosphor-icons/react'
import { ComponentProps } from 'react'
import { CheckBoxContainer, CheckBoxIndicator } from './styles'

export type CheckBoxProps = ComponentProps<typeof CheckBoxContainer>
export function CheckBox(props: CheckBoxProps) {
  return (
    <CheckBoxContainer {...props}>
      <CheckBoxIndicator>
        <Check weight="bold" />
      </CheckBoxIndicator>
    </CheckBoxContainer>
  )
}

CheckBox.displayName = 'CheckBox'
