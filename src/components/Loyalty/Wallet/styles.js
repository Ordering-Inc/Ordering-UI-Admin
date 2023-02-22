import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 30px;
  ${props => props.theme.rtl && css`
    margin-right: 0;
    margin-left: 30px;
  `}
`

export const Title = styled.h1`
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
  margin-bottom: 13px;
  margin-top: 0px;
`

export const Tabs = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 25px;
  border-bottom: 1px solid #E9ECEF;
`

export const Tab = styled.div`
  user-select: none;
  padding: 10px 0px;
  cursor: pointer;
  color: ${props => props.theme.colors?.headingColor};
  font-size: 14px;
  white-space: nowrap;
  ${props => props.theme?.rtl ? css`
    margin-left: 30px;
  ` : css`
    margin-right: 30px;
  `}

  ${({ active }) => active && css`
    border-bottom: 1px solid;
    font-weight: 500;
  `}

  ${({ active }) => !active && css`
    color: #909BA9;
  `}
`

export const SkeletonWrapper = styled.div`
  h1 {
    margin-top: 0;
    margin-bottom: 20px;
  }
`
