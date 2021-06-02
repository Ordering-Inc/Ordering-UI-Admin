import styled, { css } from 'styled-components'

export const SubFilterContainer = styled.div`
  width: 100%;
  padding: 20px 0;
  display: flex;
  flex-wrap: wrap;

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
`
