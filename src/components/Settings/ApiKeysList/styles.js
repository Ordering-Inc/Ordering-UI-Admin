import styled, { css } from 'styled-components'

export const ApiKeysListContainer = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;

  ${props => props.theme?.rtl ? css`
    margin-left: 35px;
  ` : css`
    margin-right: 35px;
  `}

  h1 {
    font-size: 20px;
    font-weight: 700;
    margin: 0px;
  }

  button {
    height: 42px;
  }
`

export const ApiKeysListTable = styled.table`
  width: 100%;
  margin-top: 25px;

  thead {
    border-bottom: 1px solid ${props => props.theme.colors.secundaryLight};
    th {
      padding: 10px 0;
      &:last-child {
        padding-left: 20px;
        padding-right: 20px;
      }
    }
  }
  tr {
    width: 100%;
    th,
    td {
      font-size: 12px;
      word-break: break-all;

      &:last-child {
        width: 100px;
        > div {
          padding-left: 20px;
          padding-right: 20px;
        }
      }
    }
  }

  tbody {
    border-bottom: 1px solid ${props => props.theme.colors.borderColor};
    td {
      padding-top: 9px;
      padding-bottom: 9px;

      &:last-child {
        > div {
          display: flex;
          justify-content: flex-end;
        }
      }
    }
  }
`

export const DropdownButtonWrapper = styled.div`
  ${props => props?.theme?.rtl ? css`
    border-right: 1px solid ${props => props.theme.colors.borderColor};
  ` : css`
    border-left: 1px solid ${props => props.theme.colors.borderColor};
  `}
  padding: 5px 20px;
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
      background: ${props => props.theme.colors.secundary} !important;
      border-color: unset !important;
      box-shadow: none !important;
    }
    >div {
      border: 1px solid ${props => props.theme.colors.borderColor};
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
    }
  }

  > div {
    > div {
      border-radius: 8px;
      .dropdown-item {
        font-size: 12px;
        color: ${props => props.theme.colors.headingColor};
      }
      .dropdown-item:last-child {
        color: #E63757;
      }
    }
  }
`
export const AddNewButton = styled.div`
  cursor: pointer;
  font-size: 12px;
  color: ${props => props.theme.colors.lightGray};
  margin: 20px 0;
  width: fit-content;

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`
