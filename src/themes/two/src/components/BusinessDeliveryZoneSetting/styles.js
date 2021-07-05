import styled, { css } from 'styled-components'

export const Container = styled.div`
  padding: 20px;
  overflow: auto;
  transition: 0.3s;
  box-sizing: border-box;
  
  > button {
    margin: 20px 0;
  }
  @media (min-width: 1000px) {
    width: 0;
    ${props => props.theme?.rtl ? css`
      border-right: 1px solid #E9ECEF;
    ` : css`
      border-left: 1px solid #E9ECEF;
    `}
  }
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h1 {
    font-size: 24px;
    color: ${props => props.theme.colors.headingColor};
  }
`

export const ActionBlock = styled.div`
  display: flex;
  align-items: center;
  > svg {
    display: none;
  }

  @media (min-width: 1000px) {
    > svg {
      display: block;
      cursor: pointer;
      font-size: 24px;
      color: ${props => props.theme.colors.headingColor};
      ${props => props.theme?.rtl ? css`
        margin-right: 10px;
      ` : css`
        margin-left: 10px;
      `}
    }
  }
`

export const TabContainer = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid #CCC;
  overflow-x: auto;
  @media (min-width: 1025px) {
    overflow-x: hidden;
  }
`

export const TabInnerContainer = styled.div`
  display: flex;
`

export const Tab = styled.div`
  padding: 10px 15px;
  cursor: pointer;
  color: ${props => props.theme.colors?.headingColor};
  white-space: nowrap;

  ${({ active }) => active && css`
    border-bottom: 3px solid;
    font-weight: 500;
  `}

  ${({ active }) => !active && css`
    color: #909BA9;
  `}
`
