import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const Container = styled.div`
  padding: 20px;
  overflow: auto;
  transition: 0.3s;
  
  > button {
    height: 42px;
    width: 100%;
    margin-top: 20px;
  }
  
  @media (min-width: 1000px) {
    max-width: 500px;
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
  justify-content: space-between;
  position: relative;
  h1 {
    font-size: 20px;
    font-weight: 700;
    margin: 5px 0;
    color: ${props => props.theme.colors.headingColor};

    ${props => props.theme?.rtl ? css`
      margin-left: 80px;
    ` : css`
      margin-right: 80px;
    `}
  }
`

export const ActionBlock = styled.div`
  background: ${props => props.theme.colors?.backgroundPage || '#FFF'};
  position: absolute;
  z-index: 1000;
  display: flex;
  align-items: center;
  > button {
    display: none;
  }

  ${props => props.theme?.rtl ? css`
    left: 0px;
  ` : css`
    right: 0px;
  `}

  @media (min-width: 1000px) {
    > button {
      display: block;
      ${props => props.theme?.rtl ? css`
        margin-right: 10px;
      ` : css`
        margin-left: 10px;
      `}
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

export const Content = styled.form`
  margin-top: 30px;
  label {
    font-weight: 400;
    font-size: 14px;
    margin-bottom: 10px;
  }
  input {
    height: 44px;
    width: 100%;
  }
`

export const ButtonWrapper = styled.div`
  position: sticky;
  top: 100%;

  button {
    height: 44px;
  }
`

export const HideSubmitBtn = styled.button`
  display: none;
`

export const OptionList = styled.div`
  margin-top: 35px;
`

export const AddBtn = styled.span`
  font-weight: 400;
  font-size: 14px;
  display: block;
  margin: 10px 0px;
  cursor: pointer;
  user-select: none;
  color: ${props => props.theme.colors.lightGray};
  transition: color 0.2s ease;

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`

export const CheckWrapper = styled.div`
  display: flex;
  align-items: center;

  .check-box {
    cursor: pointer !important;
  }

  span {
    svg {
      cursor: pointer !important;
      font-size: 16px;
      color: ${props => props.theme.colors.secundaryLight};

      &.active {
        color: ${props => props.theme.colors.primary};
      }
    }
  }

  > label {
    margin-bottom: 0;
    display: flex;
    align-items: center;
    font-size: 14px;
    margin-left: 20px;
    ${props => props.theme.rtl && css`
      margin-right: 20px;
      margin-left: 0px;
    `}
  }
`

export const PlaceItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  border-top: 1px solid transparent;
  justify-content: space-between;
  transition: all 0.3s linear;
  cursor: pointer;

  &:hover {
    background: ${props => props.theme.colors.secundary};
  }

  ${({ active }) => active && css`
    background: ${props => props.theme.colors.backgroundInfo};
    border-top: 1px solid ${props => props.theme.colors.primary};
    border-bottom: 1px solid ${props => props.theme.colors.primary};
  `}

  ${({ notAllow }) => notAllow && css`
    cursor: not-allowed;
    * {
      cursor: not-allowed;
    }
  `}

  > svg {
    font-size: 16px;
    color: ${props => props.theme.colors.secundaryLight};
  }
`

export const TableHead = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 8px;
  border-bottom: 1px solid ${props => props.theme.colors.secundaryLight};

  label {
    font-weight: 700;
  }
`
