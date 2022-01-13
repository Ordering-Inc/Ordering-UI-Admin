import styled, { css } from 'styled-components'

export const DetailsContainer = styled.div`
  flex: 1;
  padding: 20px;

  > h1 {
    font-size: 20px;
    font-weight: 700;
    margin-top: 0;
    margin-bottom: 26px;
  }
`
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 36px;
  label {
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 11px;
  }
`
export const QuantityWrapper = styled.div`
  input {
    width: 100%;
    margin-bottom: 24px;
  }
`
export const SwitchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 200px;
  margin-bottom: 14px;

  label {
    &:first-child {
      margin-bottom: 0;
      font-size: 14px;
    }
  }
`
export const SearchbarWrapper = styled.div`
  margin: 59px 0 16px 0;
  label {
    font-size: 16px;
    line-height: 24px;
    font-weight: 600;
    margin-bottom: 17px;
  }

`
export const ProductExtraWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 14px 0;
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
export const ProductOptionWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 14px 0;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  ${props => props.theme?.rtl ? css`
    margin-right: 25px;
  ` : css`
    margin-left: 25px;
  `}
  > span {
    font-size: 14px;
    ${props => props.theme?.rtl ? css`
      margin-right: 20px;
    ` : css`
      margin-left: 20px;
    `}
  }
`
export const ProductSuboptionWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 14px 0;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  ${props => props.theme?.rtl ? css`
    margin-right: 50px;
  ` : css`
    margin-left: 50px;
  `}
  > span {
    font-size: 14px;
    ${props => props.theme?.rtl ? css`
      margin-right: 20px;
    ` : css`
      margin-left: 20px;
    `}
  }
`
