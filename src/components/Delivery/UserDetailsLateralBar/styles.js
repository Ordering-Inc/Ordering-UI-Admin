import styled, { css } from 'styled-components'

export const LateralBarContainer = styled.div`
  width: 0;
  position: fixed;
  z-index: 1005;
  top: 0;
  background: ${props => props.theme.colors?.backgroundPage || '#FFF'};
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
    padding: 0 10px;
  }

  table.orders_table {
    thead {
      display: none;
    }
    border-collapse: separate;
    border-spacing: 0 18px;
    td {
      border-top: 1px solid ${props => props.theme.colors.borderColor};
      border-bottom: 1px solid ${props => props.theme.colors.borderColor};
      &:first-child {
        padding: 15px;
        ${props => props.theme?.rtl ? css`
          border-radius: 0 8px 8px 0;
        ` : css`
          border-radius: 8px 0 0 8px;
        `}
        ${props => props.theme?.rtl ? css`
          border-right: 1px solid ${props => props.theme.colors.borderColor};
        ` : css`
          border-left: 1px solid ${props => props.theme.colors.borderColor};
        `}
      }
      &:last-child {
        ${props => props.theme?.rtl ? css`
          border-radius: 8px 0 0 8px;
        ` : css`
          border-radius: 0 8px 8px 0;
        `}
        ${props => props.theme?.rtl ? css`
          border-left: 1px solid ${props => props.theme.colors.borderColor};
        ` : css`
          border-right: 1px solid ${props => props.theme.colors.borderColor};
        `}
      }
    }
  }
`

export const WrapUserDetails = styled.div`
  max-width: 500px;
  height: 100%;
  padding: 35px 20px;
  position: relative;
`

export const CloseButtonWrapper = styled.div`
  position: absolute;
  top: 30px;

  ${props => props.theme?.rtl ? css`
    left: 10px;
  ` : css`
    right: 10px;
  `}

`
