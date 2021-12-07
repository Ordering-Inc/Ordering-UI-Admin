import styled, { css } from 'styled-components'

export const DetailsContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: 20px;
  box-sizing: border-box;
`
export const Header = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 0;

  h1 {
    margin: 0;
    font-size: 20px;
    font-weight: 700;
    max-width: 350px;
  }

  > label {
    margin: 0 15px;
  } 
`
export const TabsContainer = styled.div`
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.colors?.borderColor};
`
export const Tab = styled.div`
  user-select: none;
  padding: 10px 0px;
  cursor: pointer;
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
    color: ${props => props.theme.colors?.lightGray};
  `}
`
