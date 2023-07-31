import * as Tooltip from '@radix-ui/react-tooltip'
import { styled } from '@stitches/react'

export const ButtonTooltip = styled('button', {
  all: 'unset',
  width: '69px',
  height: '58px',
  padding: '16px, 26px, 16px, 26px',
  background: '$gray600',
  borderRadius: '6px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  fontSize: '16px',
  font: 400,
  fontWeight: 'bold',
  color: '$white',
})
export const TooltipProvider = styled(Tooltip.Provider, {})

export const TooltipRoot = styled(Tooltip.Root, {})

export const TooltipTrigger = styled(Tooltip.Trigger, {})

export const TooltipPortal = styled(Tooltip.Portal, {})

export const TooltipContent = styled(Tooltip.Content, {
  width: '219px',
  height: '44px',
  padding: '12px, 16px, 12px, 16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  color: '$gray100',
  backgroundColor: '$gray900',
  gap: '8px',
  borderRadius: '5px',
  font: 'inter',
  weigth: 500,
  fontSize: '14px',

  top: '16px',
  position: 'relative',
})

export const TooltipArrow = styled(Tooltip.Arrow, {
  color: '$gray900 ',
  '&.custom-tooltip-arrow': {
    fill: '$gray900 !important',
  },
})
