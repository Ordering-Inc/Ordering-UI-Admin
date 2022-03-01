import styled, { css } from 'styled-components'

export const OrderDashboardControlsContainer = styled.div`
  display: flex;
  margin-top: 10px;

  button {
    height: 42px;
    ${props => props.theme?.rtl ? css`
      margin-left: 14px;
    ` : css`
      margin-right: 14px;
    `}

    svg {
      ${props => props.theme?.rtl ? css`
        margin-right: 5px;
      ` : css`
        margin-left: 5px;
      `}
    }
  }

  @media (min-width: 992px) {
    margin: 0px;
  }
`

export const InnerContnet = styled.div`
  display: flex;
  align-items: center;
`
