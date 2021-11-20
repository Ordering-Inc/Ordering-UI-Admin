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

  thead {
    tr {
      border-bottom: solid 1px ${props => props.theme.colors.disabled};
      th {
        padding: 13px 0;
        font-size: 12px;
        &:first-child {
          width: 10%;
          ${props => props.theme?.rtl ? css`
            padding-left: 15px;
          ` : css`
            padding-right: 15px;
          `}
          box-sizing: border-box;
        }
        &:nth-child(2) {
          width: 35%;
          padding-left: 15px;
          padding-right: 15px;
          box-sizing: border-box;
        }
        &:nth-child(3) {
          ${props => props.theme?.rtl ? css`
            padding-right: 15px;
          ` : css`
            padding-left: 15px;
          `}
          box-sizing: border-box;
        }
      }
    }
  }

  > tbody {
    border-bottom: 1px solid ${props => props.theme.colors.borderColor};
    td {
      padding: 13px 0;
      font-size: 12px;
      &:first-child {
        width: 10%;
        ${props => props.theme?.rtl ? css`
          padding-left: 15px;
        ` : css`
          padding-right: 15px;
        `}
        box-sizing: border-box;
      }
      &:nth-child(2) {
        width: 35%;
      }
      &:nth-child(3) {
        ${props => props.theme?.rtl ? css`
          padding-right: 15px;
        ` : css`
          padding-left: 15px;
        `}
        box-sizing: border-box;
      }
    }
  }
`

export const UserInfoContainer = styled.div`
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

export const DataListTable = styled.table`
  width: 100%;
  border-left: 1px solid ${props => props.theme.colors.borderColor};
  border-right: 1px solid ${props => props.theme.colors.borderColor};

  tbody {
    border-bottom: none;
    td {
      box-sizing: border-box;
      &:first-child {
        width: 50% !important;
        padding-left: 15px;
        padding-right: 15px;
        box-sizing: border-box;
      }
      &:not(:first-child) {
        width: initial !important;
      }
      white-space: nowrap;
      padding-top: 10px;
      padding-bottom: 10px;
      ${props => props.theme?.rtl ? css`
        padding-left: 15px;
      ` : css`
        padding-right: 15px;
      `}
    }
  }
`
