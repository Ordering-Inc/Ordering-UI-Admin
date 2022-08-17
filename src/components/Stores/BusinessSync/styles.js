import styled, { css } from 'styled-components'

export const Container = styled.div`
  padding: 20px;
  width: 100%;
`

export const Header = styled.div`
  h2 {
    margin-bottom: 30px;
    margin-top: 0px;
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
  }
`

export const Tabs = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 25px;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
`

export const Tab = styled.div`
  user-select: none;
  padding: 10px 0px;
  cursor: pointer;
  color: ${props => props.theme.colors?.headingColor};
  font-size: 14px;
  white-space: nowrap;
  color: ${props => props.theme.colors.lightGray};
  ${props => props.theme?.rtl ? css`
    margin-left: 30px;
  ` : css`
    margin-right: 30px;
  `}

  ${({ active }) => active && css`
    border-bottom: 1px solid;
    font-weight: 500;
    color: ${props => props.theme.colors.headingColor};
  `}
`
