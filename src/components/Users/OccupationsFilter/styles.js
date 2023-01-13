import styled, { css } from 'styled-components'

export const Container = styled.div`
  flex: 1;
  width: 100%;

  button {
    ${props => props.theme?.rtl ? css`
      margin-left: 10px;
    ` : css`
      margin-right: 10px;
    `}
    font-size: 12px;
    white-space: nowrap;
  }

  @media (min-width: 992px) {
    width: 50%;
    ${props => props.theme?.rtl ? css`
      margin-left: 30px;
    ` : css`
      margin-right: 30px;
    `}
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
