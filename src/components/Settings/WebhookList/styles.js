import styled, { css } from 'styled-components'

export const WebhookListContainer = styled.div`
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

  @media (min-width: 576px) {
    ${props => props.theme?.rtl ? css`
      margin-left: 65px;
    ` : css`
      margin-right: 65px;
    `}
  }
`

export const WebhookListTable = styled.table`
  width: 100%;
  margin-top: 25px;

  thead {
    border-bottom: 1px solid ${props => props.theme.colors.secundaryLight};
    th {
      padding: 10px 0;
    }
  }
  tr {
    width: 100%;
  }

  th {
    &:nth-child(2) {
      padding-left: 20px;
      padding-right: 20px;
    }
    &:nth-child(3) {
      padding-left: 20px;
      padding-right: 20px;
    }
  }

  th,
  td {
    &:not(:last-child) {
      > div {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    font-size: 12px;
    max-width: 200px;
  
    &:first-child {
      width: 40%;
      box-sizing: border-box;
      > div {
        ${props => props.theme?.rtl ? css`
          padding-left: 20px;
        ` : css`
          padding-right: 20px;
        `}

        input {
          width: 100%;
          padding: 3px;
          border: 1px solid ${props => props.theme.colors.borderColor};
          outline: none;
        }
      }
    }
    &:nth-child(2) {
      width: 24%;
      > div {
        padding-left: 20px;
        padding-right: 20px;
      }
    }
    &:nth-child(3) {
      width: 26%;
      > div {
        padding-left: 20px;
        padding-right: 20px;
      }
    }
  }

  tbody {
    border-bottom: 1px solid ${props => props.theme.colors.borderColor};
    td {
      padding-top: 9px;
      padding-bottom: 9px;
      &:not(:first-child) {
        > div {
          height: 40px;
          display: flex;
          align-items: center;
          ${props => props.theme?.rtl ? css`
            border-right: 1px solid ${props => props.theme.colors.borderColor};
          ` : css`
            border-left: 1px solid ${props => props.theme.colors.borderColor};
          `}
        }
      }
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

export const SelectorWrapper = styled.div`
  width: 100%;

  .select {
    border: none;
  }
`

export const PagesBottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 10px;
  margin: 15px 0;

  > button {
    height: 44px;
  }
`
