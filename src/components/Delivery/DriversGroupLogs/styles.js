import styled, { css } from 'styled-components'

export const DriversGroupLogsContainer = styled.div`
  height: calc(100% - 180px);
  ${({ disabled }) => disabled && css`
    opacity: 0.7;
    pointer-events: none;
  `}
`

export const TableWrapper = styled.div`
  overflow: auto;
  height: 100%;
`

export const SeeChanges = styled.span`
  color: ${props => props.theme.colors.primary};
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
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
        &:nth-child(3) {
          width: 35%;
          padding-left: 15px;
          padding-right: 15px;
          box-sizing: border-box;
        }
        &:nth-child(4) {
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
      &:nth-child(3) {
        width: 35%;
      }
      &:nth-child(4) {
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

export const EventTypeContainer = styled.div`
  white-space: nowrap;
  font-size: 12px;
  min-height: 36px;
  display: flex;
  align-items: center;
  padding-right: 15px;
  padding-left: 15px;
  margin-left: 15px;
  margin-right: 10px;
  border-right: 1px solid ${props => props.theme.colors.borderColor};
  border-left: 1px solid ${props => props.theme.colors.borderColor};
  p{
    margin-bottom: 0px;
  }
`

export const SchedulesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  justify-content: center;

  ${props => props?.border && css`
    div:first-child {
    border-right: 1px solid #E9ECEF;
    padding-right: 30px;
    `
  }
`

export const Schedules = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const ScheduleDay = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
`

export const ScheduleLapses = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 1px solid #E9ECEF;
  padding-left: 10px;

  p  {
    margin: 0px;
  }
`

export const ScheduleTitle = styled.h2`
  text-align: center;
`
