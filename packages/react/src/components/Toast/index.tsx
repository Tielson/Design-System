import { X } from 'phosphor-react'
import { ComponentProps, useState } from 'react'
import { Button } from '../Button'
import {
  ButtonToast,
  ToastAction,
  ToastContainer,
  ToastDescription,
  ToastRoot,
  ToastTitle,
  ToastViewport,
} from './styles'

export function Toast({ date }: { date: string }) {
  const [open, setOpen] = useState(false)
  function handleSaveDate() {
    setOpen(false)

    setTimeout(() => {
      setOpen(true)
    }, 100)
  }
  return (
    <ToastContainer swipeDirection="right">
      <Button onClick={() => handleSaveDate()}>Agendar</Button>
      <ToastRoot
        className="ToastRoot"
        open={open}
        onOpenChange={setOpen}
        duration={Infinity}
      >
        <ToastTitle className="ToastTitle">Agendamento realizado</ToastTitle>
        <ToastDescription>{date}</ToastDescription>
        <ToastAction
          className="ToastAction"
          asChild
          altText="Goto schedule to undo"
        >
          <ButtonToast onClick={() => setOpen(false)}>
            <X size={18} weight="bold" />
          </ButtonToast>
        </ToastAction>
      </ToastRoot>

      <ToastViewport hotkey={['F8']} className="ToastViewport" />
    </ToastContainer>
  )
}

export type ToastProps = ComponentProps<typeof Toast>

Toast.displayName = 'Toast'
