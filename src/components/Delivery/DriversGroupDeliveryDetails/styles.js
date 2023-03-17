import styled, { css } from 'styled-components'

export const Container = styled.div`
  height: calc(100% - 130px);
  ${({ disabled }) => disabled && css`
    opacity: 0.7;
    pointer-events: none;
  `}
  > button {
    position: sticky;
    top: 100%;
    margin-top: 30px;
    height: 44px;
  }
`
