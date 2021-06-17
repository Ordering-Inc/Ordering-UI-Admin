import styled from 'styled-components'

export const BusinessListContainer = styled.div`
  max-height: calc(100vh - 380px);
  overflow: auto;

  @media (min-width: 768px) {
    max-height: calc(100vh - 280px);
  }
`

export const BusinessListTable = styled.table`
  width: calc(100% - 10px);
  min-width: 900px;
  color: ${props => props.theme.colors?.headingColor};

  td, th {
    padding: 10px 0;
    &:first-child {
      width: 30%;
    }
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

export const WrapperPagination = styled.div`
  margin-top: 20px;
`

export const BusinessCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
