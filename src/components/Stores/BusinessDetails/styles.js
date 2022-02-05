import styled, { css } from 'styled-components'

export const BarContainer = styled.div`
  display: flex;
  width: 0;
  position: fixed;
  z-index: 1005;
  top: 0;
  background: #FFF;
  overflow-x: hidden;
  transition: 0.3s;
  height: 100vh;
  box-shadow: 0px 8px 35px rgba(0, 0, 0, 0.16);

  ${props => props.theme?.rtl ? css`
    left: 0;
  ` : css`
    right: 0;
  `}
`
