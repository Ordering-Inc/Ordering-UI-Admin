import styled, { css } from 'styled-components'

export const UserActiveStateFilterContainer = styled.div`
  width: 100%;
  border-bottom: 1px solid #CCC;
`

export const Tab = styled.div`
  padding: 10px 0px;
  font-size: 14px;
  ${props => props.theme?.rtl ? css`
    margin-left: 30px;
  ` : css`
    margin-right: 30px;
  `}
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
