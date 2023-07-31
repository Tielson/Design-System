import * as Toast from '@radix-ui/react-toast'
import { keyframes, styled } from '../../styles'

export const ButtonToast = styled('button', {
  all: 'unset',
  cursor: 'pointer',

  variants: {
    variant: {
      close: {
        color: '$gray200',
        width: '20px',
        height: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      call: {
        color: '$white',
        border: '1px solid black',
        borderRadius: 5,
        padding: '1rem ',
      },
    },
  },
  defaultVariants: {
    variant: 'close',
  },
})

export const ToastContainer = styled(Toast.Provider, {})

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

const slideIn = keyframes({
  '0%': { transform: ' translateX(calc(100% + var(--viewport-padding)))' },
  '100%': { transform: 'translateX(0)' },
})

const swipeOut = keyframes({
  '0%': { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  '100%': { transform: 'translateX(calc(100% + var(--viewport-padding)))' },
})

export const ToastRoot = styled(Toast.Root, {
  backgroundColor: '$gray800',
  borderRadius: '6px',
  border: '1px solid $colors$gray600',

  padding: '15px',
  display: 'grid',
  gridTemplateAreas: '"title action" "description action"',
  gridTemplateColumns: 'auto max-content',
  columnGap: '15px',
  alignItems: 'center',

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  "&[data-state='closed']": {
    animation: `${hide} 100ms ease-in`,
  },
  "&[data-swipe='move']": {
    transform: 'translateX(var(--radix-toast-swipe-move-x))',
  },
  "&[data-swipe='cancel']": {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },

  "&[data-swipe='end'] ": {
    animation: `${swipeOut} 100ms ease-out`,
  },
})

export const ToastDescription = styled(Toast.Description, {
  gridArea: 'description',
  margin: 0,
  fontFamily: 'Roboto',
  fontWeight: 400,
  color: '$gray200',
  fontSize: '14px',
  lineHeight: ' 22.4px',
})

export const ToastAction = styled(Toast.Action, {})

export const ToastViewport = styled(Toast.Viewport, {
  position: 'fixed',
  '--viewport-padding': '25px',
  padding: 'var(--viewport-padding)',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
  width: '360px',
  margin: 0,
  listStyle: 'none',
  zIndex: 2147483647,
  outline: 'none',
})

export const ToastTitle = styled(Toast.Title, {
  gridArea: 'title',
  marginBottom: '4px',
  fontWeight: 'bold',
  fontFamily: 'Roboto',
  color: '$white',
  fontSize: '20px',
})
