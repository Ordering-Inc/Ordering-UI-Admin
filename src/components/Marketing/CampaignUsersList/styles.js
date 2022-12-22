import styled from 'styled-components'

export const Container = styled.div``

export const Title = styled.div`
  margin-bottom: 30px;

  h1 {
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    margin: 0px;
    > span {
      display: inline-flex;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      margin: 0px 16px;
    }
  }
`

export const TableContainer = styled.div``

export const Table = styled.table`
  width: 100%;

  th,
  td {
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;

    &:first-child {
      padding-left: 0px;
      padding-right: 0px;
    }
  }
`

export const THead = styled.thead`
  tr {
    width: 100%;
    border-bottom: solid 1px ${props => props.theme.colors.secundaryLight};
    th {
      color: ${props => props.theme.colors?.headingColor};
      white-space: nowrap;
      z-index: 100;
      background: ${props => props.theme.colors.backgroundPage};
      padding-top: 0px;
      font-weight: 700;
      font-size: 12px;
      padding: 5px 15px;
    }
  }
`

export const TBody = styled.tbody`
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  tr {
    td {
      &.underline {
        text-decoration: underline;
      }
    }
  }
`

export const PaginationWrapper = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: flex-end;
`
