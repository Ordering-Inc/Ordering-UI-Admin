import styled, { css } from 'styled-components'

export const ListContent = styled.div`
  height: 100%;
  border: none;
  
  @media (min-width: 768px) {
    border-left: 1px solid #E9ECEF;
  }
`

export const ProductListContainer = styled.div`
  margin: 0;
  max-height: calc(100vh - 420px);
  overflow: auto;

  @media (min-width: 768px) {
    max-height: calc(100vh - 300px);
  }
  
  @media (min-width: 576px) {
    ${props => props.theme.rtl ? css`
    margin-right: 30px;
    ` : css`
    margin-left: 30px;
    `}
  }
`

export const ProductListSpreadContainer = styled.div`
  margin: 0;

  @media (min-width: 576px) {
    ${props => props.theme.rtl ? css`
    margin-right: 30px;
    ` : css`
    margin-left: 30px;
    `}
  }
`

export const BusinessProductListTable = styled.table`
  width: calc(100% - 10px);
  min-width: 900px;
  color: ${props => props.theme.colors?.headingColor};
  transition: all 0.3s;

  td, th {
    padding: 15px;
    font-size: 14px;
    &:first-child {
      padding-left: 0px;
      padding-right: 0px;
    }
  }

  th.more {
    width: 50px;
  }

  th.price {
    max-width: 100px;
  }

  th.description {
    width: 35%;
  }

  th.id,
  td.id {
    width: 10%;
  }

  td {
    input.product_price {
      max-width: 100px;
    }
  }

  thead {
    border-bottom: 1px solid ${props => props.theme.colors.borderColor};
    tr {
      th {
        position: sticky;
        top: 0px;
        z-index: 100;
        background: #FFF;
      }
    }
  }
`

export const WrapperNotFound = styled.div`
  font-size: 16px;
  text-align: center;
  font-weight: 500;
  margin: 20px;
`

export const AddProductBtn = styled.div`
  user-select: none;
  font-size: 12px;
  color: #909BA9;
  margin-top: 12px;
  cursor: pointer;
  margin-bottom: 15px;
  display: inline-block;
`

export const ProductListBottom = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;

  ${props => props.theme?.rtl ? css`
    margin-right: 30px;
  ` : css`
    margin-left: 30px;
  `}
`
