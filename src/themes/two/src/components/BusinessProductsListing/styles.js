import styled, { css } from 'styled-components'

export const CategoryProductsContainer = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  transition: all 0.5s;
  overflow: hidden;
  margin-top: 60px;

  @media print {
    display: none;
  }

  @media (min-width: 760px) {
    margin-top: 0px;
  }
`

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    text-align: center;
    font-size: 24px;
    margin: 0 0 15px 0;
    font-weight: 600;
    color: ${props => props.theme.colors.headingColor};
  }

  input {
    background: #E9ECEF;
    border: none;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    h1 {
      margin: 0 5px 0 0;
      text-align: left;
    }
  }
`

export const CategoryProductsContent = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const CategoryListContainer = styled.div`
  min-width: 250px;

  @media (max-width: 576px) {
    width:100%;
  }
`

export const ProductListContainer = styled.div`
  flex-grow: 1;
  width: 100%;

  @media (min-width: 769px) {
    width: calc(100% - 250px);
  }
`
export const AddButton = styled.span`
  cursor: pointer;
  svg {
    font-size: 24px;
    color: ${props => props.theme.colors.primary};
  }

  ${props => props.theme.rtl ? css`
    margin-right: 10px;
  ` : css`
    margin-left: 10px;
  `}

  @media (max-width: 576px) {
    margin: 0;
  }
`

export const ProductHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;

  ${props => props.theme?.rtl ? css`
    margin-right: 20px;
  ` : css`
    margin-left: 20px;
  `}

  h1 {
    font-weight: 600;
    font-size: 14px;
    margin: 0;
  }

  svg {
    font-size: 16px;
  }
`

export const ActionIconList = styled.div`
  display: flex;
  align-items: center;
`

export const ViewMethodButton = styled.span`
  margin-left: 12px;
  cursor: pointer;
  color: ${props => props.theme.colors.headingColor};

  svg {
    font-size: 16px;
  }

  ${({ active }) => active && css`
    color: ${props => props.theme.colors.primary};
  `}
`
