import styled, { css } from 'styled-components'

export const Container = styled.div`
  height: 100%;
  overflow-x: hidden;

  > h1 {
    font-size: 20px;
    font-weight: 700;
    margin: 0px;
  }

  ${({ maxLimit }) => maxLimit && css`
    max-width: 500px;
  `}

  @media (min-width: 1000px) {
    padding: 20px;
  }
`
export const TabsConatiner = styled.div`
  width: 100%;
  margin: 20px 0;
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
    border-bottom: 2px solid;
    font-weight: 500;
  `}

  ${({ active }) => !active && css`
    color: #909BA9;
  `}
`
