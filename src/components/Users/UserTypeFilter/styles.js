import styled, { css } from 'styled-components'

export const UserTypeFilterContainer = styled.div`
  display: flex;
  align-items: center;
  button {
    white-space: nowrap;
    font-size: 12px;
    height: 32px;
    display: flex;
    align-items: center;
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
