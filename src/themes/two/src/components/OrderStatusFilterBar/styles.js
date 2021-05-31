import styled, { css } from 'styled-components'

export const OrderStatusFilterContainer = styled.div`
  display: flex;
  width: 100%;
  overflow-x: auto;
  border-bottom: 1px solid #CCC;
`

export const InnerContainer = styled.div`
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
