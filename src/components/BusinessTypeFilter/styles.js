import styled, { css } from 'styled-components'

export const TypeContainer = styled.div`
  width: 100%;
  padding: 20px 0;
  button {
    font-size: 14px;
    ${props => props.theme?.rtl ? css`
      margin-left: 12px;
    ` : css`
      margin-right: 12px;
    `}
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

  ${({ isSkeleton }) => isSkeleton && css`
    span {
      border-radius: 20px;
    }
  `}
`
