import styled, { css } from 'styled-components'

export const WrapperMap = styled.div`
  width: 100%;
  height: 100%;
  ${({ disableUI }) => disableUI && css`
    display: none;
  `}
`
