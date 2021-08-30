import styled, { css } from 'styled-components'

export const CategoryListContainer = styled.div``

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;

  h1 {
    font-weight: 600;
    font-size: 14px;
    margin: 0;
  }
`
export const ListContent = styled.div`
  margin-top: 35px;
  max-height: calc(100vh - 380px);
  overflow: auto;

  ${props => props.theme.rtl ? css`
      padding-left: 18px;`
    : css`
      padding-right: 18px;`
  }

  @media (max-width: 576px) {
    padding: 0px;
  }

  @media (min-width: 768px) {
    max-height: calc(100vh - 230px);
  }
`

export const AddCategory = styled.div`
  user-select: none;
  font-size: 12px;
  color: ${props => props.theme.colors?.lightGray};
  cursor: pointer;
  padding: 10px;
`
