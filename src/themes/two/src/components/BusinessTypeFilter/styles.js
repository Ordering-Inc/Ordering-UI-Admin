import styled, { css } from 'styled-components'

export const TypeContainer = styled.div`
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
    margin: 5px;
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

  span {
    border-radius: 20px;
    margin: 0 5px;
  }
`