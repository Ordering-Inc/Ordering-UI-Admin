import styled, { css } from 'styled-components'

export const LateralBarContainer = styled.div`
  width: 0;
  position: fixed;
  z-index: 1005;
  top: 0;
  background: #FFF;
  overflow-x: hidden;
  transition: 0.4s;

  ${props => props.theme?.rtl ? css`
    left: 0;
  ` : css`
    rigth: 0;
  `}
`
