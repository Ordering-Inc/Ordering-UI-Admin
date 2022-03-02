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

  ${({ isBorderTop }) => isBorderTop && css`
    border-top: 1px solid ${props => props.theme.colors.borderColor};
  `}

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
    flex: 1;
  }

  > svg {
    color: ${props => props.theme.colors.secundaryLight};
    font-size: 13px;
    margin: 0 3px;
  }

  ${({ active }) => active && css`
    border-top: 1px solid ${props => props.theme.colors.primary};
    border-bottom: 1px solid ${props => props.theme.colors.primary};
    background-color: ${props => props.theme.colors.lightPrimary};
  `}
`
