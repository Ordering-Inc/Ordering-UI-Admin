import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  > button {
    ${props => props.theme?.rtl ? css`
      margin-left: 10px;
    ` : css`
      margin-right: 10px;
    `}
    font-size: 12px;
    white-space: nowrap;
  }
`
export const SkeletonWrapper = styled.span`
  height: 34px;
  width: 120px;
  border-radius: 30px;
  overflow: hidden;
  ${props => props.theme?.rtl ? css`
    margin-left: 10px;
  ` : css`
    margin-right: 10px;
  `}
  > span {
    display: flex;
    height: 100%;
    width: 100%;
  }
`
