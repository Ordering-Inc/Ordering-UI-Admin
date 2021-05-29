import styled, { css } from 'styled-components'

export const OrderDashboardControlsContainer = styled.div`
  display: flex;

  button {
    color: ${props => props.theme.colors?.secundary};
    margin: 0 7px;
    height: 42px;

    &:hover {
      border: 1px solid ${props => props.theme.colors?.secundary};
    }

    svg {
      ${props => props.theme?.rtl ? css`
        margin-right: 5px;
      ` : css`
        margin-left: 5px;
      `}
    }
  }
`

export const InnerContnet = styled.div`
  display: flex;
`

export const WrapOrderStatusTypeSelector = styled.div`
  margin: 0 7px;
  div.orderStatus {
    > div:first-child {
      background-color: #f8f9fa;
  
      p {
        color: ${props => props.theme.colors.secundary};
      }
    }
  }
`
