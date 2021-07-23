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
  box-shadow: -4px 0px 7px #ccc;

  ${props => props.theme?.rtl ? css`
    left: 0;
  ` : css`
    right: 0;
  `}

  > svg {
    cursor: pointer;
    position: absolute;
    top: 20px;
    ${props => props.theme?.rtl ? css`
      left: 20px;
    ` : css`
      right: 20px;
    `}
    font-size: 30px;
    color: ${props => props.theme.colors.headingColor};
  }
`
