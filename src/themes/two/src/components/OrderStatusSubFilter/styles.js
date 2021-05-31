import styled, { css } from 'styled-components'

export const SubFilterContainer = styled.div`
  width: 100%;
  overflow: hidden;

  button {
    margin: 20px 10px;
    white-space: nowrap;

    svg {
      font-size: 24px;

      ${props => props.theme?.rtl ? css`
        margin-right: 10px;
      ` : css`
        margin-left: 10px;
      `}
    }
  }
`

export const InnerConatiner = styled.div`
  display: flex;
`
