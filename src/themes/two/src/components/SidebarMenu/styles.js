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
  button.btn-primary {
    background-color: ${props => props.theme.colors.primary};
  }
  transition: width 0.4s ease;
  position: fixed;
  z-index: 1000;
  background-color: #FFF;
  width: 0px;
  height: 100vh;
  overflow: hidden;

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
  button {
    display: flex;
    font-size: 14px;
    box-sizing: border-box;
    svg {
      font-size: 20px;
    }
  }
`

export const UserInfo = styled.div`
  transition: 0.1s;
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

  ${({ active }) => active && css`
    color: ${props => props.theme.colors.primary};
  `}
  ${props => props.theme?.rtl ? css`
    margin-right: 40px;
  ` : css`
    margin-left: 40px;
  `}
`
