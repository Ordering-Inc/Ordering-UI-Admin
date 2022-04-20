import styled, { css } from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  height: 100%;
`

export const PaymentMethodsContainer = styled.div`
  height: 100%;
  overflow-x: hidden;
  flex: 1;
  ${({ isOpenWalletDetails }) => isOpenWalletDetails && css`
    max-width: 500px;
  `}
  h1 {
    color: ${props => props.theme.colors.headingColor};
    font-size: 20px;
    font-weight: 700;
    margin-top: 5px;
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
`

export const PaymethodOptionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.colors.lightPrimary};
  }

  ${({ disabled }) => disabled && css`
    cursor: initial;
    svg {
      cursor: pointer;
    }
  `}

  ${({ active }) => active && css`
    background-color: ${props => props.theme.colors.lightPrimary};
    border-top: 1px solid ${props => props.theme.colors.primary};
    border-bottom: 1px solid ${props => props.theme.colors.primary};
  `}

  > svg {
    font-size: 13px;
    color: ${props => props.theme.colors.secundaryLight};
  }
`

export const PaymethodOption = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 0;
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
  flex: 1;
  margin: 0 10px;
`
export const SearchBarWrapper = styled.div`
  margin-bottom: 15px;
  margin-top: 27px;
`
export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  button {
    height: 32px;
    font-size: 12px;
    &:first-child {
      ${props => props.theme?.rtl ? css`
        margin-left: 20px;
      ` : css`
        margin-right: 20px;
      `}
    }
  }
`
