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
    max-height: calc(100vh - 275px);
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
    padding: 10px 15px;
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
    &.actionInfo {
      height: 0px;
      > div {
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
    .drag-wrapper {
      min-height: 38px;
      display: flex;
      align-items: center;

      > p {
        font-weight: 500;
        margin-bottom: 0px;
        ${props => props.theme?.rtl ? css`
          margin-right: 14px;
        ` : css`
          margin-left: 14px;
        `}
      }
    }
    .description {
      height: 100%;
      display: flex;
      align-items: center;
    }
  }

  th {
    padding-top: 0px;
    .bold {
      font-weight: 600;
    }
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
        position: sticky;
        top: 0px;
        z-index: 100;
        background: ${props => props.theme.colors.backgroundPage};
      }
    }
  }

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
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
  justify-content: flex-end;

  > .recovery-enabled {
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

export const DragImageWrapper = styled.div`
  img {
    &:hover {
      cursor: grab;
    }
  }
`

export const PagesBottomContainer = styled.div`
  width: calc(100% - 10px);
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
