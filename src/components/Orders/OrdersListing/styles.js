import styled, { css } from 'styled-components'

export const WrapperNoneOrders = styled.div`
  overflow: auto;

  `
export const InnerNoneOrdersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 15px;
  img {
    width: 250px;
  }

  p {
    font-size: 16px;
    margin: 0px 0 40px 0;
  }

  button {
    height: 44px;
  }

  ${({ small }) => small && css`
    img {
      width: 150px;
    }
  `}

  @media (min-width: 768px) {
    img {
      width: 305px;
    }
    ${({ small }) => small && css`
      img {
        width: 250px;
      }
    `}
  }
`

export const WrapperOrderListContent = styled.div`
  ${({ maxHeight }) => maxHeight && css`
    height: 100%;
  `}
`

export const InfoMessage = styled.div`
  display: flex;
  align-items: center;
  z-index: 100;
  bottom: 40px;
  background: ${props => props.theme.colors.backgroundInfo};
  border: 1px solid ${props => props.theme.colors.info};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
  border-radius: 7.6px;
  padding: 6px 15px;
  box-sizing: border-box;
  margin: 10px 0px 0px 0px !important;
  max-width: 300px;
  right: 0px;
  ${props => props.theme?.rtl && css`
    left: 0px;
    right: initial;
  `}

  svg {
    font-size: 20px;
    color: ${props => props.theme.colors.info};
  }

  span {
    font-size: 12px;
    line-height: 18px;
    color: ${props => props.theme.colors.headingColor};
    margin: 0 10px;
    flex: 1;
  }

  a {
    font-size: 12px;
    white-space: nowrap;
  }

  @media (min-width: 768px) {
    padding: 8px 20px;
    font-size: 14px;
    line-height: 24px;
    ${({ isLateralBar }) => isLateralBar ? css`
      right: 0px;
    ` : css`
      right: 270px;
    `}
    ${({ isLateralBar }) => isLateralBar ? css`
      bottom: 40px;
    ` : css`
      bottom: 0;
    `}
    ${props => props.theme?.rtl && css`
      left: 0px;
      right: initial;
    `}

    span {
      white-space: nowrap;
    }
  }
`
