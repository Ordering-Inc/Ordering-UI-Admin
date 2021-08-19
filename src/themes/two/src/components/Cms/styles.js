import styled, { css } from 'styled-components'

export const StaticPageListContainer = styled.div`
  flex: 1;
  padding: 20px;
  box-sizing: border-box;
  transition: all 0.5s;
  max-height: 100vh;
  overflow: auto;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 35px;
  flex-wrap: wrap;
  row-gap: 20px;
`

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  h1 {
    font-size: 20px;
    font-weight: 700;
    color: ${props => props.theme.colors.headingColor};
    margin: 0px;
  }
  > button {
    ${props => props.theme?.rtl ? css`
      margin-left: 8px;
      margin-right: -8px;
    ` : css`
      margin-right: 8px;
      margin-left: -8px;
    `}

    svg {
      width: 25px;
      height: 25px;
    }
  }
`

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  button {
    height: 41px;
    ${props => props.theme?.rtl ? css`
      margin-left: 11px;
    ` : css`
      margin-right: 11px;
    `}
  }

  input {
    border: none;
    background-color: ${props => props.theme.colors.secundary};
  }
`

export const PageListTable = styled.table`
  width: 100%;
  margin-top: 20px;

  thead {
    border-bottom: 1px solid ${props => props.theme.colors.secundaryLight};
    th {
      padding: 10px 0;
      font-size: 12px;
    }
  }

  tr {
    display: flex;
    align-items: center;
    th, td {
      &:first-child {
        flex: 1;
      }
      &:last-child {
        min-width: 200px;
      }
    }
  }

  th:last-child {
    ${props => props.theme.colors.rtl ? css`
      padding-right: 15px;
    ` : css`
      padding-left: 15px;
    `}
  }
`

export const PageTbody = styled.tbody`
  cursor: pointer;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};

  td {
    padding: 7px 0;
    font-size: 12px;
    input {
      border: none;
      width: 100%;
      padding: 3px 0;
      outline: none;
      &:focus {
        border: 1px solid ${props => props.theme.colors.borderColor};
      }      
    }
  }

  &:hover {
    background-color: ${props => props.theme.colors.lightPrimary};
  }

  ${({ active }) => active && css`
    background-color: ${props => props.theme.colors.lightPrimary};
  `}
`

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 8px;
  padding-bottom: 8px;

  ${props => props.theme.colors.rtl ? css`
    border-right: 1px solid ${props => props.theme.colors.borderColor};
    padding-right: 15px;
  ` : css`
    border-left: 1px solid ${props => props.theme.colors.borderColor};
    padding-left: 15px;
  `}
`

export const EnableWrapper = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;

  span {
    font-size: 12px;
    color: ${props => props.theme.colors.headingColor};

    ${props => props.theme?.rtl ? css`
      padding-left: 10px;
    ` : css`
      padding-right: 10px;
    `}
  }
`

export const ActionSelectorWrapper = styled.div`
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
  font-size: 12px;
  color: ${props => props.theme.colors.lightGray};
`
