import styled, { css } from 'styled-components'

export const LateralMenuContainer = styled.div`
  position: fixed;
  z-index: 1000;
  background-color: #ffffff;
  height: calc(100vh - 65px);
  box-shadow: 0px 2px 2px #00000029;
  width: ${({ isShowMenu }) => isShowMenu ? '100vw' : '0px'};
  overflow: auto;
  transition: all 0.3s;

  @media (min-width: 769px){
    width: ${({ colapse }) => colapse ? '200px' : '65px'};
  }
`

export const MenuContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 20px 10px;
  box-sizing: border-box;
  height: 100%;

  @media (min-width: 769px){
    padding: 10px 5px;
  }
`

export const MainMenuList = styled.div``

export const MenuBottom = styled.div``

export const LogoHeader = styled.div`
  cursor: pointer;
  margin-bottom: 25px;
  img {
    width: 130px;
    margin: 0 15px;
    vertical-align: middle;
    &.isotype {
      width: 43px;
      margin: 15px auto;
    }
  }
  display: none;
  @media (min-width: 769px){
    display: flex;
  }
`

export const UserAvatar = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  img,
  svg {
    font-size: 24px;
    margin: 0px 15px;
  }
  > div {
    font-size: 14px;
  }
`

export const UserName = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
`

export const MenuItem = styled.div`
  cursor: pointer;
  padding: 10px 0px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  svg {
    margin: 0px 15px;
    font-size: 24px;
  }
  ${({ active }) => active && css`
  background-color: ${props => props.theme.colors.primary};
  color: white;
`};
`

export const ItemText = styled.span`
  font-size: 12px;

`

export const LogOutItem = styled.div`
  cursor: pointer;
  padding: 5px 0px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  transition: all 0.3s;
  color: red;

  svg {
    margin: 0px 15px;
    color: red;
    font-size: 24px;
  }
`

export const MobileHeader = styled.div`
  z-index: 999;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 50px;
  background-color: #ffffff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  box-shadow: 0px 2px 2px #00000029;

  svg {
    font-size: 40px;
  }

  img {
    height: 100%;
    margin-top: 10px;
  }

  @media (min-width: 769px){
    display: none;
  }
`

export const CloseMenu = styled.div`
  margin-bottom: 20px;
  svg {
    font-size: 22px;
  }
  display: flex;
  @media (min-width: 769px){
    display: none;
  }
`

export const SidbeBarControl = styled.div`
  display: flex;
  aligin-items: center;
  justify-content: ${({ colapse }) => colapse ? 'flex-end' : 'center'};
  padding: 15px 0px;

  svg {
    transform: rotate(0deg);
    cursor: pointer;
    font-size: 22px;
    margin: 0px 15px;
  }

  ${({ colapse }) => colapse && css`
    svg {
      transform: rotate(180deg);
    }
  `};
`
