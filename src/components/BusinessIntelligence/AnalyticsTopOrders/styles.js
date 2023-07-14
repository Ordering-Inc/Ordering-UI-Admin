import styled, { css } from 'styled-components'

export const Container = styled.div`
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  border-radius: 7.6px;
  padding: 10px;
  height: 100%;
`

export const AnalyticsTopOrdersHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 10px 10px 0 10px;

  p {
    margin: 0;
    font-size: 14px;
    color: ${props => props.theme?.colors.headingColor};
    text-transform: uppercase;
  }
`

export const ActionBlock = styled.div`
  svg {
    font-size: 16px;
    color: #212121;
    cursor: pointer;
  }

  ${({ disabled }) => disabled && css`
    svg {
      color: ${props => props.theme?.colors.disabled};
      cursor: not-allowed;
    }
  `}
`

export const TopOrdersContainerWrapper = styled.div``

export const TopOrdersContent = styled.div`
  padding: 12px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #E9ECEF;
  margin-bottom: 5px;

  p {
    margin: 0;
    font-size: 14px;
    color: ${props => props.theme?.colors.headingColor};
    margin-right: 10px;
  }
`

export const SkeletonContainerWrapper = styled.div`
  > div {
    margin-bottom: 5px;
  }
`

export const PercentContainer = styled.span`
  font-size: 14px;
  color: ${props => props.theme?.colors.headingColor};
  min-width: 60px;
  text-align: right;

  ${({ percent }) => percent > 50 && css`
    color: ${props => props.theme.colors.green};
  `}

  ${({ percent }) => percent < 30 && css`
    color: ${props => props.theme.colors.danger};
  `}
`

export const EmptyContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`

export const ProductCategoryContainer = styled.div`
  padding: 0 10px 10px 10px;
`

export const ValueWrapper = styled.div`
  display: flex;
  align-items: center;
  > span {
    margin-left: 15px;
    ${props => props.theme.rtl && css`
      margin-left: 0px;
      margin-right: 15px;
    `}
  }
`

export const ValueContainer = styled.span`
  font-size: 14px;
  color: ${props => props.theme?.colors.headingColor};
  
  ${({ percent }) => percent > 50 && css`
    color: ${props => props.theme.colors.green};
  `}

  ${({ percent }) => percent < 30 && css`
    color: ${props => props.theme.colors.danger};
  `}
`
