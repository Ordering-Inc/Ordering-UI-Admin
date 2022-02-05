import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const DetailsContainer = styled.div`
  width: 100%;
  padding: 20px;
`
export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const LeftHeader = styled.div`
  display: flex;
  align-items: center;

  span.customer-name {
    font-size: 20px;
    font-weight: 700;
  }
`
export const RightHeader = styled.div`
  ${props => props.theme?.rtl ? css`
    margin-left: 35px;
  ` : css`
    margin-right: 35px;
  `}
`
export const VerifiedItem = styled.span`
  font-size: 10px;
  background-color: ${props => props.theme.colors.lightGreen};
  padding: 2px 7px;
  border-radius: 50px;
  color: ${props => props.theme.colors.green};
  display: flex;
  align-items: center;
  margin: 0 5px;

  svg {
    font-size: 12px;
    ${props => props.theme?.rtl ? css`
      margin-left: 3px;
    ` : css`
      margin-right: 3px;
    `}
  }
`

export const ActionSelectorWrapper = styled.div`
  ${props => props.theme?.rtl ? css`
    margin-left: 40px;
  ` : css`
    margin-right: 40px;
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
      }
      .dropdown-item:last-child {
        color: #E63757;
      }
    }
  }
`
export const PhotoWrapper = styled.div`
  width: 216px;
  height: 216px;
  margin: 30px 0;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  span {
    height: 100%;
    width: 100%;
    position: relative;
    top: -2px;
  }

  svg {
    width: 100%;
    height: 100%;
  }
`
export const MenusContainer = styled.div`
  margin-top: 50px;
  border: 1px solid ${props => props.theme.colors.borderColor};
  border-radius: 8px;
  overflow: hidden;
  ${({ isLoading }) => isLoading && css`
    pointer-events: none;
  `}
  > div:first-child {
    border-top: none !important;
  }
  > div:last-child {
    border-bottom: none !important;
  } 
`
export const OptionMenu = styled.div`
  cursor: pointer;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${props => props.theme.colors.lightGray};
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  border-top: 1px solid transparent;
  &:hover {
    background-color: ${props => props.theme.colors.lightPrimary};
  }
  span {
    font-size: 14px;
  }
  svg {
    font-size: 16px;
  }
  ${({ active }) => active && css`
    color: ${props => props.theme.colors.headingColor};
    border-top: 1px solid ${props => props.theme.colors.primary};
    border-bottom: 1px solid ${props => props.theme.colors.primary} !important;
    background-color: ${props => props.theme.colors.lightPrimary};
  `}
`
export const UserDetailsWrapper = styled.div`
  width: 100%;
  padding: 20px;
`
