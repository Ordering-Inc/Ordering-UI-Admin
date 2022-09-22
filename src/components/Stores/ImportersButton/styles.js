import styled, { css } from 'styled-components'

export const CsvImportButtonWrapper = styled.div`
  ${({ disabledFeature }) => disabledFeature && css`
    cursor: not-allowed;
    > button {
      pointer-events: none;
      background-color: ${props => props.theme.colors.disabled};
    }
  `}

  button {
    height: 41px;
    ${props => props.theme?.rtl ? css`
      margin-left: 15px;
    ` : css`
      margin-right: 15px;
    `}

    svg {
      ${props => props.theme?.rtl ? css`
        margin-right: 8px;
      ` : css`
        margin-left: 8px;
      `}      
    }
  }
`
