import styled, { css } from 'styled-components'

export const SubFilterContainer = styled.div`
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
    margin-top: 5px;
    margin-bottom: 5px;
    text-transform: capitalize;
    ${props => props.theme?.rtl ? css`
      margin-left: 10px;
    ` : css`
      margin-right: 10px;
    `}
    font-size: 14px;
    white-space: nowrap;

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
