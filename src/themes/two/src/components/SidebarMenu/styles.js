import styled, { css } from 'styled-components'

export const Header = styled.div`
  position: fixed;
  width: 100vw;
  z-index: 1000;
`

export const SidebarContainer = styled.div`
  @media print {
    display: none;
  }

  transition: width 0.4s ease;
  position: fixed;
  z-index: 1000;
  background-color: #FFF;
  width: 0px;
  height: 100vh;
  overflow: hidden;

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

  @media (min-width: 760px) {
    height: inherit;
    overflow: inherit;
    position: relative;
    width: ${({ isCollapse }) => isCollapse ? '65px' : '240px'} !important;
    ${({ isCollapse }) => isCollapse && css`
      .collapse.show {
        display: none;
      }
    `}
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

export const LogoWrap = styled.div`
  height: 60px;
  box-sizing: border-box;
  background-color: #FFF;

  @media (min-width: 760px) {
    height: 80px;
  }
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

export const CollapseButton = styled.div`
  top: 25px;
  ${props => props.theme?.rtl ? css`
    left: -15px;
  ` : css`
    right: -15px;
  `}
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
  border-radius: 7.6px;
  cursor: pointer;
  svg {
    font-size: 18px;
    transition: transform 0.4s ease;
  }

  ${({ isCollapse }) => isCollapse && css`
    svg {
      transform: rotate(180deg);
    }
  `}
`

export const IconContent = styled.span`
  position: absolute;
  cursor: pointer;
  top: 9px;
  ${props => props.theme?.rtl ? css`
    right: 10px;
  ` : css`
    left: 10px;
  `}

  ${({ isClose }) => isClose && css`
    ${props => props.theme?.rtl ? css`
      right: initial;
      left: 10px;
    ` : css`
      left: initial;
      right: 10px;
    `}
  `}
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  background-color: rgb(247, 247, 247);
  box-shadow: transparent 0px 0px 0px 1px inset;

  svg {
    flex-shrink: 0;
    font-size: 24px;
  }
`

export const MenuClose = styled.div`
  position: relative;
  height: 60px;
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

  &:hover {
    background-color: ${props => props.theme.colors.lightPrimary};
  }

  > svg {
    position: absolute;
    top: 8px;
    ${props => props.theme?.rtl ? css`
      right: 0.75rem;
    ` : css`
      left: 0.75rem;
    `}
    width: 20px;
    height: 20px;
  }

  .select {
    border: none;
    > div:first-child {
      justify-content: flex-start;
      font-size: 14px;
      font-weight: 500;
      ${props => props.theme?.rtl ? css`
        padding-right: 48px;
      ` : css`
        padding-left: 48px;
      `}

      > div:first-child {
        flex: unset;
      }
    }
  }

  .options {
    > div {
      font-size: 14px;
    }
  }
`
