import styled, { css } from 'styled-components'

export const AnalyticsBusinessFilterContainer = styled.div``

export const FilterBtnWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;  
`

export const TreeViewItemContainer = styled.div``

export const TreeViewParentItem = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;

  svg {
    font-size: 24px;
    color: #B1BCCC;
    &.fill {
      color: ${props => props.theme?.colors.primary};
    }
  }
`

export const TreeViewParentLabel = styled.span`
  user-select: none;
  font-weight: 500;
  font-size: 15px;
  cursor: pointer;
  color: ${props => props.theme.colors.headingColor};
  margin-left: 10px;
  ${props => props.theme?.rtl && css`
    margin-right: 10px;
    margin-left: 0;
  `}
`

export const TreeViewChildrenItem = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
  margin-left: 40px;
  ${props => props.theme?.rtl && css`
    margin-right: 40px;
    margin-left: 0;
  `}

  svg {
    font-size: 24px;
    color: #B1BCCC;
    &.fill {
      color: ${props => props.theme?.colors.primary};
    }
  }
`

export const TreeViewChildrenLabel = styled.span`
  user-select: none;
  font-size: 15px;
  color: ${props => props.theme.colors.headingColor};
  margin-left: 30px;
  ${props => props.theme?.rtl && css`
    margin-right: 30px;
    margin-left: 0;
  `}
`

export const TreeViewChildrenContainer = styled.div`
  ${props => props.theme?.rtl ? css`
    margin-right: 10px;
    border-right: 1px solid #E9ECEF;
  ` : css`
    margin-left: 10px;
    border-left: 1px solid #E9ECEF;
  `}
`

export const SelectBtnWrapper = styled.div`
  display: flex;
  span {
    margin: 0 5px;
    border-radius: 50px;
  }
  button {
    margin-top: 5px;
    margin-bottom: 5px;
    text-transform: capitalize;
    ${props => props.theme?.rtl ? css`
      margin-left: 10px;
    ` : css`
      margin-right: 10px;
    `}
    font-size: 14px;
    white-space: nowrap;

    svg {
      font-size: 20px;

      ${props => props.theme?.rtl ? css`
        margin-right: 10px;
      ` : css`
        margin-left: 10px;
      `}
    }
  }
`
