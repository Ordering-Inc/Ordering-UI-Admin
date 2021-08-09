import styled, { css } from 'styled-components'

export const CategoryProductsContainer = styled.div`
  flex: 1;
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

  input {
    background: ${props => props.theme.colors.lightPrimary};
    border: none;
  }

  @media (min-width: 992px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`

export const HeaderTitleContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  h1 {
    font-size: 24px;
    margin: 0;
    font-weight: 600;
    color: ${props => props.theme.colors.headingColor};
  }
  > button {
    ${props => props.theme?.rtl ? css`
      margin-left: 8px;
      margin-right: -8px;
    ` : css`
      margin-right: 8px;
      margin-left: -8px;
    `}

    svg {
      width: 25px;
      height: 25px;
    }
  }
`

export const ActionsGroup = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  flex-wrap: wrap;

  > button {
    height: 41px;
    ${props => props.theme?.rtl ? css`
      margin-left: 20px;
    ` : css`
      margin-right: 20px;
    `}
  }

  @media (min-width: 992px) {
    margin-top: 0px;
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
