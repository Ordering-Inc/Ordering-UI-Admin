import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const ImportListContainer = styled.div` 
`
export const ImportersTableWrapper = styled.div`
`

export const ImpotersTable = styled.table`
  width: 100%;
  color: ${props => props.theme.colors?.headingColor};

  td, th {
    padding: 10px 0;
    font-size: 14px;
    &:first-child {
      width: 50%;
    }
  }

  thead {
    border-bottom: solid 1px ${props => props.theme.colors.disabled};
  }
`
export const ImoportTbody = styled.tbody`
  tr {
    td {
      padding-right: 10px;
      .importer-name {
        display: flex;
        width: 100%;
        border-right: 1px solid ${props => props.theme.colors.borderColor};
      }
    }
  }
  cursor: pointer;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  &:hover {
    background-color: ${props => props.theme.colors.lightPrimary};
  }
  ${({ active }) => active && css`
    background-color: ${props => props.theme.colors.lightPrimary};
    td {
      border-top: 1px solid ${props => props.theme.colors.primary};
      border-bottom: 1px solid ${props => props.theme.colors.primary};
    }
  `}
`
export const UserEnableWrapper = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;

  span {
    font-size: 14px;

    ${props => props.theme?.rtl ? css`
      padding-left: 10px;
    ` : css`
      padding-right: 10px;
    `}
  }
`

export const WrapperUserActionSelector = styled.div`
  display: flex;
  justify-content: flex-end;
  button {
    background: transparent !important;
    border: none;
    padding: 0px;
    &:active,
    &:focus {
      border-color: unset !important;
      box-shadow: none !important;
    }
    svg {
      color: ${props => props.theme.colors.headingColor};
    }
    &:after {
      display: none;
    }
  }
  .show {
    button {
      background: #F8F9FA !important;
      border-color: unset !important;
      box-shadow: none !important;
    }
    >div {
      border: 1px solid #E9ECEF;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
    }
  }
  > div {
    border-radius: 8px;
    ${props => props.theme?.rtl ? css`
      margin-left: 5px;
    ` : css`
      margin-right: 5px;
    `}
    > div {
      a:last-child {
        color: #E63757;
      }
    }
    .dropdown-item {
      font-size: 14px;
    }
  }
`
export const ImportersBottomContainer = styled.div`
  display: flex;
  justify-content: space-between;

`
export const AddNewImporterButton = styled.div`
  display: inline-flex;
  width: fit-content;
  cursor: pointer;
  color: rgb(144, 155, 169);
  font-size: 14px;
  margin-top: 20px;
  &:hover {
    color: ${props => darken(0.05, props.theme.colors.primary)};
  }
`
export const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: relative;
  #not-found-source {
    height: auto;
    h1 {
      font-size: 18px;
      margin-top: 25px;
    }
  }
`
