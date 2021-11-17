import styled, { css } from 'styled-components'

export const DriversGroupLogsContainer = styled.div`
  height: calc(100% - 180px);
`

export const TableWrapper = styled.div`
  overflow: auto;
  height: 100%;
`

export const Table = styled.table`
  width: 100%;
  min-width: 1000px;
  color: ${props => props.theme.colors?.headingColor};

  td, th {
    padding: 13px 0;
    font-size: 12px;
    &:first-child {
      width: 10%;
    }
    &:nth-child(2) {
      width: 35%;
    }
  }

  thead {
    tr {
      border-bottom: solid 1px ${props => props.theme.colors.disabled};
    }
  }

  tbody {
    border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  }
`

export const UserInfoContainer = styled.div`
  ${props => props.theme?.rtl ? css`
    padding-left: 15px;
    margin-left: 15px;
    border-left: 1px solid ${props => props.theme.colors.borderColor};
  ` : css`
    padding-right: 15px;
    margin-right: 15px;
    border-right: 1px solid ${props => props.theme.colors.borderColor};
  `}
  p {
    color: ${props => props.theme.colors.lightGray};
    margin: 0px;
    font-size: 12px;
    &:first-child {
      color: ${props => props.theme.colors.headingColor};
      font-weight: 500;
    }
  }
`

export const DataList = styled.div`
  min-height: 36px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${props => props.theme?.rtl ? css`
    padding-left: 15px;
    margin-left: 15px;
    border-left: 1px solid ${props => props.theme.colors.borderColor};
  ` : css`
    padding-right: 15px;
    margin-right: 15px;
    border-right: 1px solid ${props => props.theme.colors.borderColor};
  `}
`

export const DataItem = styled.div`
  display: flex;

  > span {
    white-space: nowrap;

    &:first-child {
      flex: 1;
    }
    &:not(:first-child) {
      width: 50px;
      text-align: center;
    }
  }
`
export const DateTimeWrapper = styled.div`
  white-space: nowrap;
  font-size: 12px;
  min-height: 36px;
  display: flex;
  align-items: center;

  ${props => props.theme?.rtl ? css`
    padding-left: 15px;
    margin-left: 15px;
    border-left: 1px solid ${props => props.theme.colors.borderColor};
  ` : css`
    padding-right: 15px;
    margin-right: 15px;
    border-right: 1px solid ${props => props.theme.colors.borderColor};
  `}
`

export const NoData = styled.div`
  font-size: 16px;
`
export const WrapperPagination = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0;
`
