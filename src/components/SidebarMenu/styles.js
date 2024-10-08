import styled, { css } from 'styled-components'

export const SidebarContainer = styled.div`
  @media print {
    display: none;
  }

  position: fixed;
  background: ${props => props.theme.colors.backgroundPage};
  z-index: 1000;
  transition: all 0.25s ease;
  height: calc(var(--vh, 1vh) * 100);
  overflow: auto;
  width: 100vw;
  ${({ isCollapse }) => isCollapse && css`
    ${props => props.theme?.rtl
      ? css`margin-right: -100vw;`
      : css`margin-left: -100vw;`};
  `}

  @media (min-width: 768px) {
    position: relative;
    width: 240px;
    ${({ isCollapse }) => isCollapse && css`
      ${props => props.theme?.rtl
        ? css`margin-right: -240px;`
        : css`margin-left: -240px;`};
    `}
  }

  button.btn-primary {
    background-color: ${props => props.theme.colors.primary};
  }

  button {
    display: flex;
    font-size: 14px;
    box-sizing: border-box;
    border-radius: 8px;
    font-weight: 500;
    &:hover {
      background-color: ${props => props.theme.colors.lightPrimary};
    }
    &.btn-primary {
      &:hover {
        background-color: ${props => props.theme.colors.primary};
      }
    }

    span {
      ${props => props.theme?.rtl ? css`
        margin-right: 15px;
      ` : css`
        margin-left: 15px;
      `}
    }

    svg {
      font-size: 20px;
    }
  }

`

export const SidebarInnerContainer = styled.div`
  height: 100%;
  @media (min-width: 760px) {
    position: sticky;
    top: 0px;
    ${props => props.theme?.rtl ? css`
      border-left: 1px solid ${props => props.theme.colors.borderColor};
    ` : css`
      border-right: 1px solid ${props => props.theme.colors.borderColor};
    `}
  }
`

export const SidebarHeader = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
`
export const LogoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > img {
    max-width: 150px;
    max-height: 100px;
    object-fit: contain;
  }
`
export const BurgerButton = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 6px;
  height: 32px;
  padding: 0 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all .2s ease-in;

  > svg {
    width: 25px;
    height: 16px;
    color: #B1BCCC;
  }

  &:hover {
    background-color: #1507260a !important;

    > svg {
      color:  #151b26;
    }
  }

  &:active {
    background-color: #1507261a !important;
  }
`

export const SidebarMainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: auto;
`

export const SidebarContent = styled.div`
  flex: 1;
  box-sizing: border-box;
  transition: 0.1s;
  border-top: 1px solid ${props => props.theme.colors.borderColor};
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
`

export const UserInfo = styled.div`
  transition: 0.1s;
  > button:first-child {
    margin: 5px 0;
    ${props => props.theme?.rtl ? css`
      padding-right: 8px;
    ` : css`
      padding-left: 8px;
    `}
    span {
      max-width: calc(100% - 40px);
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      ${props => props.theme?.rtl ? css`
        margin-right: 10px;
      ` : css`
        margin-left: 10px;
      `}
      font-weight: 600;
      font-size: 16px;
    }
  }
`
export const MenuContainer = styled.div`
  margin: 5px 0;
  > span {
    font-weight: 500;
    font-size: 10px;
    line-height: 15px;
    padding: 0px 13px;
    color: ${props => props.theme.colors.lightGray};
  }
  > button {
    width: 100%;
    text-align: initial;
  }

  > span {
    font-weight: 500;
    font-size: 10px;
    line-height: 15px;
    padding: 20px;
    color: ${props => props.theme.colors.lightGray};
  }

  ${({ disabledFeature }) => disabledFeature && css`
    background-color: ${props => props.theme.colors.disabled};
    cursor: not-allowed;
    > button {
      pointer-events: none;
    }
  `}
`

export const MenuContent = styled.div`
  padding: 5px 0;
`

export const SubMenu = styled.div`
  cursor: pointer;
  padding: 5px 0;
  font-size: 14px;
  color: ${props => props.theme.colors.lightGray};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-radius: 8px;

  &:hover {
    background-color: ${props => props.theme.colors.lightPrimary};
  }

  ${({ active }) => active && css`
    color: ${props => props.theme.colors.primary};
  `}
  ${({ disabledFeature }) => disabledFeature && css`
    background-color: ${props => props.theme.colors.disabled}!important;
    cursor: not-allowed;
  `}

  ${props => props.theme?.rtl ? css`
    padding-right: 40px;
  ` : css`
    padding-left: 40px;
  `}
`

export const LanguageSelectorContainer = styled.div`
  position: relative;
  border-radius: 8px;
  min-height: 35px;

  &:hover {
    background-color: ${props => props.theme.colors.lightPrimary};
  }

  .options {
    > div {
      font-size: 14px;
    }
  }
`
export const PoweredWrapper = styled.div`
  text-align: center;
  font-size: 14px;
  font-weight: 600;
`

export const MobileMessage = styled.div`
  position: fixed;
  top: 100px;
  left: calc(50% - 130px);
  z-index: 999;
  background: ${props => props.theme.colors.backgroundInfo};
  border: 1px solid ${props => props.theme.colors.primary};
  box-sizing: border-box;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
  border-radius: 7.6px;
  width: 260px;
  > div {
    padding: 15px 15px 10px 15px;
    font-size: 12px;
    line-height: 18px;
    position: relative;
    > svg {
      position: absolute;
      top: 3px;
      right: 3px;
      cursor: pointer;
      font-size: 21px;
    }
  }
`
