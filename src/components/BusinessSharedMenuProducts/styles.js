import styled, { css } from 'styled-components'

export const MenuProductsContainer = styled.div`
  padding: 20px 0;
  height: calc(100% - 50px);
`
export const SearchBarWrapper = styled.div`
  margin-bottom: 15px;
`
export const ProductListWrapper = styled.div`
  height: calc(100% - 100px);
  overflow: auto;
`
export const ProductItem = styled.div`
  display: flex;
  align-items: center;
  padding: 14px 0;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  cursor: pointer;

  ${props => props.theme?.rtl ? css`
    input {
      margin-left: 20px;
    }
  ` : css`
    input {
      margin-right: 20px;
    }
  `}

  span {
    font-size: 14px;
  }
`
