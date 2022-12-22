import styled, { css } from 'styled-components'

export const Container = styled.div`
  max-height: calc(100vh - 410px);
  overflow: auto;

  ${({ noScroll }) => noScroll && css`
    overflow: hidden;
  `}

  @media (min-width: 768px) {
    max-height: calc(100vh - 385px);
  }

  @media (min-width: 992px) {
    max-height: calc(100vh - 305px);
    ${({ isSelectedOrders }) => isSelectedOrders && css`
      max-height: calc(100vh - 345px);
    `}
  }

  @media (min-width: 1200px) {
    max-height: calc(100vh - 273px);
    ${({ isSelectedOrders }) => isSelectedOrders && css`
      max-height: calc(100vh - 345px);
    `}
  }
`

export const Table = styled.table`
  width: calc(100% - 10px);
  min-width: 700px;

  th,
  td {
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;

    &:first-child {
      padding-left: 0px;
      padding-right: 0px;
    }
    &.action {
      padding-left: 0px;
      padding-right: 0px;
    }
  }

  td {
    &.right-border {
      height: 0px;
      > div {
        padding: 5px 0px;
        width: 100%;
        height: 100%;
        ${props => props.theme?.rtl ? css`
          border-left: 1px solid #E9ECEF;
          padding-left: 15px;
        ` : css`
          border-right: 1px solid #E9ECEF;
          padding-right: 15px;
        `}
      }
    }
  }

  th {
    padding-top: 0px;
    font-weight: 700;
    font-size: 12px;
    padding: 5px 15px;
    &.allow-colums {
      width: 50px;
    }
  }

  thead {
    tr {
      width: 100%;
      border-bottom: solid 1px ${props => props.theme.colors.disabled};
      th {
        color: ${props => props.theme.colors?.headingColor};
        white-space: nowrap;
        z-index: 100;
        background: ${props => props.theme.colors.backgroundPage};
      }
    }
  }

  ${({ isRelative }) => isRelative && css`
    thead {
      tr {
        th {
          position: sticky;
          top: 0px;
        }
      }
    }
  `}

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 0px;
    &.bold {
      font-weight: 500;
    }
  }
`

export const Tbody = styled.tbody`
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  cursor: pointer;

  &:hover {
    background: ${props => props.theme.colors.secundary};
  }
  &.active {
    background-color: ${props => props.theme.colors.lightPrimary};
    td {
      border-top: 1px solid ${props => props.theme.colors.primary} !important;
      border-bottom: 1px solid ${props => props.theme.colors.primary} !important;

      ${({ isCustomStyle }) => isCustomStyle && css`
        &:first-child {
          ${props => props.theme?.rtl ? css`
            border-right: 1px solid ${props => props.theme.colors.primary} !important;
          ` : css`
            border-left: 1px solid ${props => props.theme.colors.primary} !important;
          `}
        }
        &:last-child {
          ${props => props.theme?.rtl ? css`
            border-left: 1px solid ${props => props.theme.colors.primary} !important;
          ` : css`
            border-right: 1px solid ${props => props.theme.colors.primary} !important;
          `}
        }
      `}
    }
  }
`

export const SwitchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > .campaign-enabled {
    margin-bottom: 0px;
    font-size: 14px;
    line-height: 24px;
    margin-right: 7px;
    ${props => props.theme.rtl && css`
      margin-left: 7px;
      margin-right: 0px;
    `}
  }
`

export const StatusWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    text-transform: capitalize;
    margin-right: 12px;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    ${props => props.theme.rtl && css`
      margin-left: 12px;
      margin-right: 0px;
    `}
  }
`

export const StatusPoint = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: #E9ECEF;
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

export const LinkText = styled.span`
  color: ${props => props.theme.colors.primary};
  &:hover {
    text-decoration: underline;
  }
`
