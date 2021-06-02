import styled, { css } from 'styled-components'

export const SidebarContainer = styled.div`
  @media print {
    display: none;
  }

  @media (max-width: 760px) {
    position: fixed;
    z-index: 1000;
  }
`

export const SidebarInnerContainer = styled.div`
  position: sticky;
  top: 0px;
  width: 100vw;
  transition: width 0.4s ease;
  @media (min-width: 760px) {
    height: 100vh !important;
    width: ${({ isCollapse }) => isCollapse ? '65px' : '230px'};
    ${props => props.theme?.rtl ? css`
      border-left: 1px solid #E9ECEF;
    ` : css`
      border-right: 1px solid #E9ECEF;
    `}
  }
`

export const LogoWrap = styled.div`
  height: 60px;
  box-sizing: border-box;
  background-color: #FFF;
  img {
    height: 60px;
  }

  @media (min-width: 760px) {
    height: 80px;
    border-bottom: 1px solid #CCC;
  }
`

export const SidebarContent = styled.div`
  width: 0;
  overflow: hidden;
  flex: 1;
  box-sizing: border-box;
  background-color: #FFF;
  transition: 0.5s;
  button {
    font-size: 14px;
    box-sizing: border-box;
    svg {
      font-size: 20px;
    }
  }

  @media (min-width: 760px) {
    width: inherit !important;
    ${props => props.theme?.rtl ? css`
      border-left: 1px solid #E9ECEF;
    ` : css`
      border-right: 1px solid #E9ECEF;
    `}
  }
`

export const UserInfo = styled.div`
  border-top: 1px solid #E9ECEF;
  background-color: #FFF;
  width: 0;
  overflow: hidden;
  transition: 0.5s;

  @media (min-width: 760px) {
    width: inherit !important;
    ${props => props.theme?.rtl ? css`
      border-left: 1px solid #E9ECEF;
    ` : css`
      border-right: 1px solid #E9ECEF;
    `}
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
  position: fixed;
  cursor: pointer;
  top: 9px;
  ${props => props.theme?.rtl ? css`
    right: 10px;
  ` : css`
    left: 10px;
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
    font-size: 30px;
  }
`
