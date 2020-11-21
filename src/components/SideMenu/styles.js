import styled, { css } from 'styled-components'

export const Container = styled.div`
  position: fixed;
  width: 60px;
  min-height: calc(100vh - 65px);
  background-color: #1C202E;
  transition: 0.5s;
  left: 0px;

  @media (max-width: 768px) {
    left: -60px;
  }
`
export const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
`
export const MenuLink = styled.a`
  background-color: #1C202E;
  padding: 30px 0px;
  text-decoration: none;
  text-align: center;
  display: block;
  cursor: pointer;

  ${({ active }) => active && css`
    background-color: #4B5474;
  `}
`
export const MenuLinkIcon = styled.img`
  width: 25px; 
`
