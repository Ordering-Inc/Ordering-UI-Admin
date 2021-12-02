import styled, { css } from 'styled-components'

export const SidebarContainer = styled.div`
  @media print {
    display: none;
  }

  position: fixed;
  background: ${props => props.theme.colors.backgroundPage};
  z-index: 1000;
  transition: all 0.25s ease;
  height: 100vh;
  overflow: auto;
  width: 100vw;
  ${({ isCollapse }) => isCollapse && css`
    margin-left: -100vw;
  `}

  @media (min-width: 768px) {
    overflow: hidden;
    position: relative;
    width: 240px;
    min-width: 240px;
    ${({ isCollapse }) => isCollapse && css`
      margin-left: -240px;
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
    height: 100vh;
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
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${props => props.theme?.rtl ? css`
    margin-right: 0.75rem;
  ` : css`
    margin-left: 0.75rem;
  `}
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
  height: calc(100% - 80px);
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
  > button {
    width: 100%;
    text-align: initial;
  }
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
