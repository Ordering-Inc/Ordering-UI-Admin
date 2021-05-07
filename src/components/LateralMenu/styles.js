import styled, { css } from 'styled-components'

export const LateralMenuContainer = styled.div`
  position: fixed;
  top: 0px;
  z-index: 1000;
  background-color: #ffffff;
  height: 100vh;
  box-shadow: 0px 2px 2px #00000029;
  width: ${({ isShowMenu }) => isShowMenu ? '100vw' : '0px'};
  overflow: auto;
  transition: all 0.3s;

  @media (min-width: 769px){
    width: 200px;
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
    width: 200px;
    padding: 10px 5px;
  }
`

export const MainMenuList = styled.div``

export const MenuBottom = styled.div``

export const LogoHeader = styled.div`
  cursor: pointer;
  margin-bottom: 25px;
  img {
    width: 190px;
    height: 55px;
    margin: 0;
    vertical-align: middle;
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
  svg {
    margin: 0px 20px;
  }
`

export const UserName = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
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
