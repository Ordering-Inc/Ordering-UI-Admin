import styled, { css } from 'styled-components'

export const Container = styled.div`
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  border-radius: 7.6px;
  padding: 20px;
  height: 100%;
`

export const ProductCategoryHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;

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
`

export const ProductCategoryContentWrapper = styled.div``

export const ProductCategoryContent = styled.div`
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

  ${({ percent }) => percent > 50 && css`
    color: #00D27A;
  `}

  ${({ percent }) => percent < 30 && css`
    color: #E63757;
  `}

`

export const EmptyContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`
