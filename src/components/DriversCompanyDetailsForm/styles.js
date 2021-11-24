import styled, { css } from 'styled-components'

export const DetailsContainer = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
`

export const Header = styled.div`
  margin-bottom: 19px;
  h1 {
    font-size: 20px;
    font-weight: 700;
    margin: 0px;
    min-height: 24px;
  }
`

export const TabsContainer = styled.div`
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  margin-bottom: 15px;
`

export const Tab = styled.div`
  padding: 10px 0px;
  cursor: pointer;
  color: ${props => props.theme.colors?.lightGray};
  white-space: nowrap;
  font-size: 12px;

  ${props => props.theme?.rtl ? css`
    margin-left: 30px;
  ` : css`
    margin-right: 30px;
  `}

  ${({ active }) => active && css`
    color: ${props => props.theme.colors.headingColor};
    border-bottom: 2px solid ${props => props.theme.colors.headingColor};
    font-weight: 500;
    font-size: 14px;
  `}
`
