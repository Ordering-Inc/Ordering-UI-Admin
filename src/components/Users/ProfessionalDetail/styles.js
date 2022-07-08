import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const DetailsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  margin-top: -5px;
`

export const UserName = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  > span {
    font-size: 20px;
    font-weight: 700;
    color: ${props => props.theme.colors.headingColor};
    margin: 0;
  }
  > label {
    margin-left: 10px;
    ${props => props.theme.rtl && css`
      margin-right: 10px;
      margin-left: 0px;
    `}
  }
`

export const ActionSelectorWrapper = styled.div`
  ${props => props.theme?.rtl ? css`
    margin-left: 25px;
  ` : css`
    margin-right: 25px;
  `}
  button {
    background: transparent !important;
    border: none;
    padding: 0px 5px;
    &:active,
    &:focus {
      border-color: unset !important;
      box-shadow: none !important;
    }
    svg {
      color: ${props => props.theme.colors.headingColor};
      font-size: 20px;
    }

    &:after {
      display: none;
    }

    &:hover {
      background: ${props => darken(0.04, props.theme.colors.secundary)} !important;
    }
    &:active {
      background: ${props => darken(0.1, props.theme.colors.secundary)} !important;
    }
  }

  .show {
    button {
      background: ${props => darken(0.04, props.theme.colors.secundary)} !important;
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
        &:active {
          background: ${props => darken(0.1, props.theme.colors.secundary)} !important;
        }
      }
      .dropdown-item:last-child {
        color: #E63757;
      }
    }
  }
`

export const SideBarWrapper = styled.div`
  max-width: 500px;
  height: 100%;
  padding: 35px 20px;
  width: 100%;
  > h1 {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 25px;
  }
  > div {
    padding: 0px;
    height: calc(100% - 50px);
  }
`
export const CalendarSyncWrapper = styled.div`
  margin: 0 10px;
  > button {
    height: 44px;
    span {
      ${props => props.theme?.rtl ? css`
        margin-left: 8px;
      ` : css`
        margin-right: 8px;
      `}
    }
  }
`
