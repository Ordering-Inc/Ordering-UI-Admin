import styled, { css } from 'styled-components'

export const PaymentMethodsContainer = styled.div`
  height: 100%;
  overflow-x: hidden;
  padding: 20px;
  h1 {
    color: ${props => props.theme.colors.headingColor};
    font-size: 24px;
  }
`

export const PaymethodListWrapper = styled.div`
  border-top: 1px solid #E9ECEF;
  margin: 20px 0;
`

export const PaymethodOptionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #E9ECEF;
`

export const PaymethodOption = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 0;
  cursor: pointer;
  color: ${props => props.theme.colors.headingColor};
  
  > svg {
    font-size: 20px;
    &.fill {
      color: ${props => props.theme.colors.primary};
    }
  }
`

export const PaymethodName = styled.span`
  color: ${props => props.theme.colors.headingColor};
  ${props => props.theme?.rtl ? css`
    margin-right: 10px;
  ` : css`
    margin-left: 10px;
  `}
`

export const DropDownWrapper = styled.div`
  button {
    background: #F8F9FA !important;
    border: none;
    padding: 0px;
    svg {
      color: ${props => props.theme.colors.headingColor};
    }

    &:after {
      display: none;
    }
  }

  > div {
    > div {
      border: 1px solid #E9ECEF;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
      border-radius: 8px;
      a:last-child {
        color: #E63757;
      }
    }
  }
`
