import styled, { css } from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  height: 100%;
`

export const PaymentMethodsContainer = styled.div`
  height: 100%;
  overflow-x: hidden;
  flex: 1;
  h1 {
    color: ${props => props.theme.colors.headingColor};
    font-size: 20px;
    font-weight: 700;
  }
  > button {
    height: 44px;
    margin: 20px 0;
  }
  @media (min-width: 576px) {
    padding: 20px;
  }
`

export const PaymethodListWrapper = styled.div`
  border-top: 1px solid ${props => props.theme.colors.borderColor};
  margin: 20px 0;
`

export const PaymethodOptionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
`

export const PaymethodOption = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 0;
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
  font-size: 14px;
  ${props => props.theme?.rtl ? css`
    margin-right: 10px;
  ` : css`
    margin-left: 10px;
  `}
`

export const DropDownWrapper = styled.div`
  button {
    background: transparent !important;
    border: none;
    padding: 0px;
    svg {
      color: ${props => props.theme.colors.headingColor};
    }

    &:after {
      display: none;
    }
    &:hover {
      background: ${props => props.theme.colors.secundary} !important;
    }
  }

  > div {
    > div {
      border: 1px solid ${props => props.theme.colors.borderColor};
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
      border-radius: 8px;

      a.dropdown-item {
        font-size: 14px;
        &:last-child {
          color: #E63757;
        }
      }
    }
  }
`
