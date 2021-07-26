import styled, { css } from 'styled-components'

export const UserTypeFilterContainer = styled.div`
  width: 100%;
  padding: 20px 0;
  display: flex;
  overflow-x: auto;
  @media (min-width: 992px) {
    overflow-x: hidden;
  }
`

export const InnerContainer = styled.div`
  display: flex;
  button {
    white-space: nowrap;
    font-size: 14px;
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
