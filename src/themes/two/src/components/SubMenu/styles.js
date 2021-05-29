import styled, { css } from 'styled-components'

export const SubMenuContainer = styled.div`
  > div:first-child {
    cursor: pointer;
    font-weight: 600;
    padding: 10px 0;
    font-size: 18px;

    span {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      flex: 1;
    }

    svg {
      font-size: 24px;

      ${props => props.theme?.rtl ? css`
        margin-left: 10px;
      ` : css`
        margin-right: 10px;
      `}
    }
  }
`

export const Item = styled.div`
  cursor: pointer;
  padding: 10px 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  ${({ active }) => active && css`
    color: ${props => props.theme.colors.primary};
  `}

  ${props => props.theme?.rtl ? css`
    margin-right: 30px;
  ` : css`
    margin-left: 30px;
  `}
`
