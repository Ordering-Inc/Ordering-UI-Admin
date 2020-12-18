import styled, { css } from 'styled-components'

export const Option = styled.div`
  display: flex;
  align-items: center;
  padding: 3px 0;
  column-gap: 5px;  

  ${({ noPadding }) => noPadding && css`
    padding: 0px;
  `}

  img {
    width: 15px;
  }

  p {
    margin: 0px;
    white-space: nowrap;

    @media (max-width: 1300px) {
      margin: 0px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      max-width: 115px;
    }
  }
`
