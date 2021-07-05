import styled, { css } from 'styled-components'

export const ListContent = styled.div`
  margin-top: 35px;
`

export const ProductListContainer = styled.div`
  margin: 0;
  max-height: calc(100vh - 380px);
  min-height: 200px;
  overflow: auto;

  @media (min-width: 768px) {
    max-height: calc(100vh - 230px);
  }
  
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
  }

  th.more {
    width: 50px;
  }

  th.id,
  td.id {
    width: 10%;
  }

  thead {
    tr {
      th {
        position: sticky;
        top: 0px;
        z-index: 100;
        background: #FFF;
        border-bottom: 1px solid #B1BCCC;
      }
    }
  }
`

export const WrapperNotFound = styled.div`
  height: 500px;
  > div{
    height: 100%;
  }
`

export const AddProductBtn = styled.div`
  user-select: none;
  font-size: 12px;
  color: #909BA9;
  margin-top: 12px;
  cursor: pointer;
`
