import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const Container = styled.div`
  padding: 20px;
  overflow: auto;
  transition: 0.3s;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  @media (min-width: 1000px) {
    width: 0;
    ${props => props.theme?.rtl ? css`
      border-right: 1px solid ${props => props.theme.colors.borderColor};
    ` : css`
      border-left: 1px solid ${props => props.theme.colors.borderColor};
    `}
  }
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  h1 {
    font-size: 20px;
    color: ${props => props.theme.colors.headingColor};
    font-weight: 700;
    flex: 1;
    margin: 0;
  }
`

export const ActionSelectorWrapper = styled.div`
  margin: 0 10px;
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
export const CloseButton = styled.div`
  display: none;
  @media (min-width: 1000px) {
    display: flex;
    align-items: center;
  }
`
export const SquareInfoContainer = styled.div`
  padding: 10px 0;
`
export const SquareButtonWrapper = styled.div`
  display: flex;
  > button {
    height: 44px;
    display: flex;
    align-items: center;

    svg {
      font-size: 20px;
      color: ${props => props.theme.colors.black};
      ${props => props.theme?.rtl ? css`
        margin-left: 10px;
      ` : css`
        margin-right: 10px;
      `}
    }
  }
`
export const FormContainer = styled.div`
  margin-top: 20px;

  > button {
    height: 44px;
    margin-top: 20px;
  }
`
export const FormController = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;

  label {
    font-size: 14px;
    margin-bottom: 10px;
  }
`
export const SandboxWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0 25px;

  > span {
    font-size: 14px;
    ${props => props.theme?.rtl ? css`
      margin-right: 10px;
    ` : css`
      margin-left: 10px;
    `}
  }
`
