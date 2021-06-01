import styled, { css } from 'styled-components'

export const SidebarContainer = styled.div`
  @media print {
    display: none;
  }
`

export const SidebarInnerContainer = styled.div`
  position: sticky;
  top: 0px;
  width: ${({ isCollapse }) => isCollapse ? '65px' : '230px'};
  height: 100vh;
  ${props => props.theme?.rtl ? css`
    border-left: 1px solid #E9ECEF;
  ` : css`
    border-right: 1px solid #E9ECEF;
  `}
  transition: width 0.4s ease;
`

export const LogoWrap = styled.div`
  border-bottom: 1px solid #CCC;
  height: 80px;
  box-sizing: border-box;
`

export const SidebarContent = styled.div`
  flex: 1;
  box-sizing: border-box;
  button {
    font-size: 14px;
    box-sizing: border-box;
    svg {
      font-size: 20px;
    }
  }
`

export const UserInfo = styled.div`
  border-top: 1px solid #E9ECEF;
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
