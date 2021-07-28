import styled, { css } from 'styled-components'

export const LateralBarContainer = styled.div`
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

  div.order_status_filter {
    margin-top: 30px;
    border: 1px solid ${props => props.theme.colors.borderColor};
    border-radius: 8px;
  }
`

export const WrapUserDetails = styled.div`
  max-width: 500px;
  height: 100%;
  padding: 35px 20px;
  position: relative;
`

export const CloseButton = styled.div`
  position: absolute;
  top: 30px;
  cursor: pointer;

  ${props => props.theme?.rtl ? css`
    left: 10px;
  ` : css`
    right: 10px;
  `}

  svg {
    font-size: 30px;
  }
`
