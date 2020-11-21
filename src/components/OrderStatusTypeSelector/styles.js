import styled, { css } from 'styled-components'

export const Option = styled.div`
  display: flex;
  align-items: center;
  padding: 3px 0;
  column-gap: 5px;
  white-space: nowrap;

  ${({ noPadding }) => noPadding && css`
    padding: 0px;
  `}

  img {
    width: 15px;
  }
`
