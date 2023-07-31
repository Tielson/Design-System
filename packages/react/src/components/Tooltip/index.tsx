/* eslint-disable prettier/prettier */
import { ComponentProps, useState } from 'react';
import {
  ButtonTooltip,
  TooltipArrow,
  TooltipContent,
  TooltipPortal,
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
} from './styles';

export function Tooltip({ date, number }: { date: string; number: number }) {
  const [open, setOpen] = useState(false)
  function onOpenChange() {
    if (open === false) {
      return setOpen(true)
    }
    setOpen(false)
  }

  return (
    <TooltipProvider>
      <TooltipRoot open={open}>
        <TooltipTrigger asChild>
          <ButtonTooltip 
          onMouseEnter={onOpenChange}
          onMouseLeave={onOpenChange}>
            {number}
            </ButtonTooltip>
        </TooltipTrigger>
        <TooltipPortal>
          <TooltipContent>
            {date}
            <TooltipArrow className="custom-tooltip-arrow" width={16} height={5}/>
          </TooltipContent>
        </TooltipPortal>
      </TooltipRoot>
    </TooltipProvider>
  )
}

export type TooltipProps = ComponentProps<typeof Tooltip>

Tooltip.displayName = 'Tooltip'
