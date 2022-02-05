import styled, { css } from 'styled-components'

export const UserTypeFilterContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  button {
    white-space: nowrap;
    ${props => props.theme?.rtl ? css`
      margin-left: 12px;
    ` : css`
      margin-right: 12px;
    `}
    svg {
      font-size: 20px;

      ${props => props.theme?.rtl ? css`
        margin-right: 10px;
      ` : css`
        margin-left: 10px;
      `}
    }
  }
`
