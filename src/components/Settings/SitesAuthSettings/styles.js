import styled, { css } from 'styled-components'

export const SitesListContainer = styled.div`
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
  overflow-x: hidden;
`

export const Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  h1 {
    font-weight: 700;
    font-size: 20px;
    margin: 0;
  }

  margin-right: 35px;
  ${props => props.theme.rtl && css`
    margin-left: 35px;
    margin-right: 0;
  `}
`

export const SitesWrapper = styled.div`
  margin-top: 35px;
  border: 1px solid ${props => props.theme.colors.borderColor};
  border-radius: 8px;
  overflow: hidden;
  > div:first-child {
    border-top: none !important;
  }

  > div:last-child {
    border-bottom: none !important;
  } 
`
export const SiteItem = styled.div`
  cursor: pointer;
  padding: 12px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${props => props.theme.colors.lightGray};
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};

  &:hover {
    background-color: ${props => props.theme.colors.lightPrimary};
  }
  span {
    font-size: 14px;
  }
  svg {
    font-size: 20px;
  }
  ${({ active }) => active && css`
    color: ${props => props.theme.colors.headingColor};
    border-top: 1px solid ${props => props.theme.colors.primary};
    border-bottom: 1px solid ${props => props.theme.colors.primary} !important;
    background-color: ${props => props.theme.colors.lightPrimary};
  `}
`
