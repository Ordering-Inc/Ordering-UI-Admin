import styled, { css } from 'styled-components'

export const BusinessMenuBasicContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const FieldName = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: ${props => props.theme.colors.headingColor};
  padding: 30px 0 10px;
  margin: 0;
  ${({ isBorderBottom }) => isBorderBottom && css`
    border-bottom: 1px solid #E9ECEF;
  `}
`

export const OrderType = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #E9ECEF;

  svg {
    font-size: 20px;
    color: ${({ theme, active }) => active ? theme.colors.primary : theme.colors.lightGray};
  }

  span {
    color: ${props => props.theme.colors.headingColor};
    ${props => props.theme?.rtl ? css`
      margin-right: 10px;
    ` : css`
      margin-left: 10px;
    `}
  }
`
export const CategoryProductsContainer = styled.div`
  border-bottom: 1px solid #E9ECEF;
`

export const CheckBoxWrapper = styled.div`
  svg {
    font-size: 20px;
    color: ${({ theme, active }) => active ? theme.colors.primary : theme.colors.lightGray};
  }
`

export const BusinessCategoryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  > svg {
    transition: transform 0.6s ease;
    color: #212121;
    cursor: pointer;
  }
  ${({ active }) => active && css`
    > svg {
      transform: rotate(180deg);
    }
  `}
`

export const CheckboxContainer = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;

  span {
    color: ${props => props.theme.colors.headingColor};
    ${props => props.theme?.rtl ? css`
      margin-right: 10px;
    ` : css`
      margin-left: 10px;
    `}
  }
  span.bold {
    font-weight: 600;
  }
`

export const ProductContainer = styled.div`
  padding: 7px 0;
  ${props => props.theme?.rtl ? css`
    margin: 0 20px 0 0;
  ` : css`
    margin: 0 0 0 20px;
  `}
`
