import styled from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary'

interface ButtonContainerProps {
  variant: ButtonVariant
}

const ButtonVariants = {
  primary: 'purple',
  secondary: 'red',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
`
