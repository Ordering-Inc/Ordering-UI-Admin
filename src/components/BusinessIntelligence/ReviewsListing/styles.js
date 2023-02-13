import styled, { css } from 'styled-components'

export const ReviewsListingContainer = styled.div`
  flex: 1;
  padding: 20px;
  box-sizing: border-box;
  transition: all 0.5s;
  max-height: 100vh;
  overflow: auto;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  flex-wrap: wrap;
  row-gap: 20px;
`

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  h1 {
    font-size: 20px;
    font-weight: 700;
    color: ${props => props.theme.colors.headingColor};
    margin: 0px;
  }
  > button {
    ${props => props.theme?.rtl ? css`
      margin-left: 8px;
      margin-right: -8px;
    ` : css`
      margin-right: 8px;
      margin-left: -8px;
    `}

    svg {
      width: 25px;
      height: 25px;
    }
  }
`

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;

  input {
    border: none;
    background-color: ${props => props.theme.colors.secundary};
  }
`

export const Tabs = styled.div`
  margin-top: 25px;
  display: flex;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
`

export const Tab = styled.div`
  padding: 10px 0;
  ${props => props.theme?.rtl ? css`
    margin-left: 30px;
  ` : css`
    margin-right: 30px;
  `}
  cursor: pointer;
  color: ${props => props.theme.colors?.headingColor};
  white-space: nowrap;
  font-size: 14px;

  ${({ active }) => active && css`
    border-bottom: 3px solid;
    font-weight: 500;
  `}

  ${({ active }) => !active && css`
    color: ${props => props.theme.colors.lightGray};
  `}
`

export const SelectWrapper = styled.div`
  position: relative;
`

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  svg {
    margin: 0 5px;
    font-size: 16px;
    transition: 0.2s ease-in-out;
    &.rotate {
      transform: rotate(180deg);
    }
  }
`
