import styled, { css } from 'styled-components'

export const UserActiveStateFilterContainer = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid #CCC;
  overflow-x: auto;
  @media (min-width: 992px) {
    overflow-x: hidden;
  }
`

export const InnerContainer = styled.div`
  display: flex;
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
