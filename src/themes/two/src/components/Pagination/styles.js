import styled, { css } from 'styled-components'

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
`

export const PageButton = styled.button`
  background-color: transparent;
  font-size: 14px;
  color: ${props => props.theme.colors.headingColor};
  outline: none;
  border: none;
  border-radius: 50%;
  width: 27px;
  height: 27px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px;


  ${({ active }) => active && css`
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primaryContrast};
  `}

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`
