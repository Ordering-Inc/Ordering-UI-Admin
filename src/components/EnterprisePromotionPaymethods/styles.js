import styled, { css } from 'styled-components'

export const PaymethodsContainer = styled.div`
  padding: 15px 5px;

  h1 {
    font-size: 20px;
    font-weight: 700;
    border-bottom: 1px solid ${props => props.theme.colors.borderColor};
    padding-bottom: 32px;
    margin: 0;
  }

  > button {
    height: 44px;
    margin-top: 36px;
  }
`
export const PaymethodItem = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};

  > span {
    font-size: 14px;
    ${props => props.theme?.rtl ? css`
      margin-right: 20px;
    ` : css`
      margin-left: 20px;
    `}
  }
`
