import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  padding: 20px;
`

export const RightHeader = styled.div`
  display: flex;
  align-items: center;
`

export const Tabs = styled.div`
  display: flex;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  margin-bottom: 20px;
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
    border-bottom: 2px solid;
    font-weight: 500;
  `}

  ${({ active }) => !active && css`
    color: ${props => props.theme.colors.lightGray};
  `}
`
export const DetailHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;

  ${props => props.theme?.rtl ? css`
    margin-left: 25px;
  ` : css`
    margin-right: 25px;
  `}
`
export const ActionSelectorWrapper = styled.div`
  .select {
    border: none;

    > div:first-child {
      padding: 5px;
      border-radius: 8px;
      svg {
        font-size: 20px;
      }
      &:hover {
        background: ${props => darken(0.04, props.theme.colors.secundary)} !important;
      }
      &:active {
        background: ${props => darken(0.1, props.theme.colors.secundary)} !important;
      }
    }
    .select-arrow {
      display: none;
    }
    .list {
      border: none;
      box-shadow: 0px 4px 10px rgb(0 0 0 / 12%);
      .list-wrapper {
        > div {
          font-size: 14px;
          color: #E63757;
          padding-top: 0;
          padding-bottom: 0;
        }
      }
    }
  }
`
export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  h2 {
    font-weight: bold;
    font-size: 20px;
    color: ${props => props.theme?.colors.headingColor};
    margin: 0;
    margin-right: 20px;

    ${props => props.theme?.rtl && css`
      margin-left: 20px;
      margin-right: 0;
    `}
  }
`
