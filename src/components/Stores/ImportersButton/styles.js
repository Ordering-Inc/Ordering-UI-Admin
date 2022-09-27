import styled, { css } from 'styled-components'

export const CsvImportButtonWrapper = styled.div`
  button {
    height: 41px;
    svg {
      ${props => props.theme?.rtl ? css`
        margin-right: 8px;
      ` : css`
        margin-left: 8px;
      `}      
    }
  }
`
