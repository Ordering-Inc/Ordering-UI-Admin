import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
export const IconContent = styled.button`
  position: relative;
  max-width: 100%;
  margin: 0px;
  display: inline-flex;
  min-height: 35px;
  border-radius: 40px;
  border: none;
  cursor: pointer;
  transition: background-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;
  user-select: none;
  text-decoration: none;
  text-align: center;
  background-color: ${({ isHome }) => isHome ? '#333' : 'rgb(247, 247, 247)'};
  box-shadow: transparent 0px 0px 0px 1px inset;
  width: 35px;
  height: 35px;
  padding: 0px;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${({ isHome }) => isHome ? 'rgba(255,255,255,0.1)' : 'rgb(255, 255, 255)'};
    box-shadow: transparent 0px 0px 0px 1px inset;
  }

  svg {
    flex-shrink: 0;
    font-size: 30px;
    color: ${({ isHome }) => isHome ? 'rgb(255, 255, 255)' : '#333'};
  }
`

export const SidebarContent = styled.div`
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
  background: #1C202E;

  @media (max-height: 450px) {
    padding-top: 15px;
  }
`

export const MenuClose = styled.button`
  position: absolute;
  top: 0;
  max-width: 100%;
  margin: 6px;
  display: inline-flex;
  min-height: 35px;
  border-radius: 40px;
  border: none;
  cursor: pointer;
  transition: background-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;
  user-select: none;
  text-decoration: none;
  text-align: center;
  background-color: ${({ isHome }) => isHome ? '#333' : 'rgb(247, 247, 247)'};
  box-shadow: transparent 0px 0px 0px 1px inset;
  width: 35px;
  height: 35px;
  padding: 0px;
  align-items: center;
  justify-content: center;

  &:hover {
    box-shadow: transparent 0px 0px 0px 1px inset;
  }

  svg {
    flex-shrink: 0;
    font-size: 30px;
  }
`

export const MenuLink = styled.a`
  position: relative;
  cursor: pointer;
  overflow: hidden;
  text-decoration: none;
  appearance: none;
  border: none;
  padding: 0px;
  margin: 0px;
  text-align: inherit;
  display: block;
  width: 100%;
  outline: none !important;

  &:hover {
    color: #f1f1f1;
  }

  ${({ active }) => active && css`
    background: #4B5474;
  `}

  @media (max-height: 450px) {
    font-size: 18px;
  }
`

export const WrappContent = styled.div`
  max-width: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  column-gap: 20px;
  padding: 16px;
`

export const MenuLinkIcon = styled.img`
  width: 25px;
`

export const MenuLinkText = styled.div`
  max-width: 100%;
  flex-grow: 1;
  overflow: hidden;
  flex-basis: 100%;
  grid-area: 2 / 2 / auto / auto;
`

export const TextInfo = styled.span`
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.04ch;
  text-transform: none;
  text-align: left;
  margin: 0px;
  padding: 0px;
  display: block;
  font-variant-ligatures: no-common-ligatures;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #fff;
`

export const MenuLinkSeparator = styled.div``
