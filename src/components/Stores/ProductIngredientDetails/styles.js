import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const Container = styled.div`
  overflow: auto;
  transition: 0.3s;

  > button {
    margin-top: 30px;
    height: 44px;
    position: sticky;
    top: 100%;
  }

  @media (min-width: 1000px) {
    width: 500px;
    padding: 20px;
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
  justify-content: space-between;
  margin-bottom: 30px;

  h1 {
    font-size: 20px;
    font-weight: 700;
    flex: 1;
    margin-bottom: 0;
    ${props => props.theme?.rtl ? css`
      margin-left: 15px;
    ` : css`
      margin-right: 15px;
    `}
  }

  > div {
    display: flex;
    align-items: center;
    > button {
      display: none;
    }
  }
  @media (min-width: 1000px) {
    > div {
      > button {
        display: block;
      }
    }
  }
`

export const ActionSelectorWrapper = styled.div`
  button {
    display: flex;
    background: transparent !important;
    border: none;
    padding: 5px;
    border-radius: 8px;

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
      background: ${props => darken(0.1, props.theme.colors.secundaryDarkContrast)} !important;
    }
  }

  .show {
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
        padding: 7px 20px;
        &:active {
          background: ${props => darken(0.1, props.theme.colors.secundary)} !important;
        }
      }
      .dropdown-item:last-child {
        color: ${props => props.theme.colors.danger};
      }
    }
  }
`
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 11px;
  }
`
