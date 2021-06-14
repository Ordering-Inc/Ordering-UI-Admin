import styled, { css } from 'styled-components'

export const LateralBarContainer = styled.div`
  width: 0;
  padding: 20px;
  position: fixed;
  z-index: 1005;
  top: 0;
  background: #FFF;
  overflow-x: hidden;
  transition: 0.3s;
  height: 100vh;
  box-shadow: -4px 0px 7px #ccc;

  ${props => props.theme?.rtl ? css`
    left: 0;
  ` : css`
    right: 0;
  `}
`

export const CloseButton = styled.div`
  position: absolute;
  top: 10px;
  background: #E9ECEF;
  padding: 5px;
  cursor: pointer;

  ${props => props.theme?.rtl ? css`
    left: 10px;
  ` : css`
    right: 10px;
  `}

  svg {
    font-size: 24px;
  }
`
