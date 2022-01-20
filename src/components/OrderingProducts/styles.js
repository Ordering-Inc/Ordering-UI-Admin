import styled, { css } from 'styled-components'

export const OrderingProductsContainer = styled.div`
  flex: 1;
  padding: 20px;
  box-sizing: border-box;
  transition: all 0.5s;
  overflow: auto;
  max-height: 100vh;

  @media print {
    display: none;
  }
`

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 35px;

  input {
    background: #E9ECEF;
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
export const ProductListTableWrapper = styled.div`
  margin-top: 20px;
  width: 100%;
  overflow: auto;
`

export const ProductListTable = styled.table`
  width: 100%;
  min-width: 800px;

  thead {
    border-bottom: 1px solid ${props => props.theme.colors.secundaryLight};
    th {
      padding: 10px 0;
      font-size: 12px;
    }
  }

  tr {
    display: flex;
    align-items: center;
    th, td {
      &.product {
        width: 25%
      }
    }
    td {
      &.product {
        font-size: 14px;
        font-weight: 500;
      }
      &.description {
        font-size: 12px;
        line-height: 15px;
        color: ${props => props.theme.colors.lightGray};
      }
    }
  }

  th.description,
  td.description {
    ${props => props.theme.colors.rtl ? css`
      padding-right: 15px;
    ` : css`
      padding-left: 15px;
    `}
  }
`

export const PageTbody = styled.tbody`
  cursor: pointer;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};

  td {
    padding: 16px 0;
    input {
      border: none;
      width: 100%;
      padding: 3px 0;
      outline: none;
      &:focus {
        border: 1px solid ${props => props.theme.colors.borderColor};
      }      
    }
  }

  &:hover {
    background-color: ${props => props.theme.colors.lightPrimary};
  }

  ${({ active }) => active && css`
    background-color: ${props => props.theme.colors.lightPrimary};
  `}
`
export const PagesBottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 10px;
  margin: 15px 0;
`

export const AddNewPageButton = styled.div`
  cursor: pointer;
  font-size: 14px;
  color: ${props => props.theme.colors.lightGray};

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`
