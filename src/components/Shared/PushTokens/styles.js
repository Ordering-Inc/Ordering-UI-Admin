import styled from 'styled-components'

export const Container = styled.div`
  p.no-data {
    font-size: 14px;
    margin: 20px 0;
  }
`
export const TableWrapper = styled.div`
  overflow: auto;
`
export const Table = styled.table`
  width: 100%;
  min-width: 900px;
  color: ${props => props.theme.colors?.headingColor};

  thead {
    tr {
      border-bottom: solid 1px ${props => props.theme.colors.disabled};
      th {
        padding: 13px 0;
        font-size: 12px;
        &:nth-child(2) {
          width: 35%;
          padding-left: 15px;
          padding-right: 15px;
          box-sizing: border-box;
        }
        &:nth-child(3),
        &:nth-child(4),
        &:nth-child(5)
        {
          width: 19%;
        }
      }
    }
  }

  tbody {
    border-bottom: 1px solid ${props => props.theme.colors.borderColor};
    td {
      padding: 13px 0;
      font-size: 12px;

      &:nth-child(2) {
        width: 35%;
        padding-left: 15px;
        padding-right: 15px;
        box-sizing: border-box;
      }

      &:nth-child(3),
      &:nth-child(4),
      &:nth-child(5) {
        width: 19%;
      }
    }
  }
`
export const WrapperPagination = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0;
`
