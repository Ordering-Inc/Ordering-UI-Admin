import styled, { css } from 'styled-components'

export const PluginListContainer = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
`

export const PLuginsSeparator = styled.div`
  width: 100%;
  max-height: ${props => props.h ?? '100%'};
  box-sizing: border-box;
  overflow-y: auto;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${props => props.mb ?? 30}px;

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

  @media (min-width: 576px) {
    ${props => props.theme?.rtl ? css`
      margin-left: 70px;
    ` : css`
      margin-right: 70px;
    `}
  }
`

export const PluginsTable = styled.table`
  width: 100%;
  margin-top: 25px;

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
        > input {
          outline: none;
          border: 1px dashed ${props => props.theme.colors.borderColor};
          padding: 3px;
          width: 96%;
        }
      }
    }

    th:last-child {
      min-width: 130px;
      ${props => props.theme.colors.rtl ? css`
        padding-right: 15px;
      ` : css`
        padding-left: 15px;
      `}
    }
  }
`

export const PluginTbody = styled.tbody`
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};

  td {
    padding: 7px 0;
    font-size: 12px;
  }

  ${({ isAddMode }) => !isAddMode && css`
    &:hover {
      background-color: ${props => props.theme.colors.lightPrimary};
    }
  `}

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
  ${props => props.theme?.rtl ? css`
    margin-right: 20px;
  ` : css`
    margin-left: 20px;
  `}
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
  justify-content:  ${props => props.justifyContent ?? 'space-between'};
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
