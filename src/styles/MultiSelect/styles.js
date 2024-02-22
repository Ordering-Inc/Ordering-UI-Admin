import styled, { css } from 'styled-components'

export const CheckBox = styled.div`
  color: ${props => props.theme.colors.primary};
  display: flex;
  svg {
    font-size: 16px;
  }
`

export const TextFormatted = styled.span`
  ${({ primary, theme }) => primary && css`
    color: ${theme?.colors?.primary};
  `}

  div {
    font-size: 14px;
    color: ${props => props.theme.colors.primary};
  }
`

export const PaginationWrapper = styled.div`
  margin: 20px;
`
