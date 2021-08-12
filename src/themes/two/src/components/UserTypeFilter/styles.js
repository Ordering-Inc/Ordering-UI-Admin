import styled, { css } from 'styled-components'

export const UserTypeFilterContainer = styled.div`
  width: 100%;
  padding: 20px 0;
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
