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
`

export const BusinessDetailsExtraContent = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  transition: 0.3s;
  overflow-x: hidden;
  ${props => props.theme?.rtl ? css`
    border-right: 1px solid #E9ECEF;
  ` : css`
    border-left: 1px solid #E9ECEF;
  `}

  > button {
    z-index: 100;
    position: absolute;
    top: 20px;
    ${props => props.theme?.rtl ? css`
      left: ${({ isExtendExtraOpen }) => isExtendExtraOpen ? '520px' : '20px'};
    ` : css`
      right: ${({ isExtendExtraOpen }) => isExtendExtraOpen ? '520px' : '20px'};
    `}
  }
`
