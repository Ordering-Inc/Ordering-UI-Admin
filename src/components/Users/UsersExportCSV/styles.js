import styled, { css } from 'styled-components'

export const ExportContainer = styled.div`
  position: relative;
  button {
    svg {
      ${props => props.theme?.rtl ? css`
        margin-right: 8px;
      ` : css`
        margin-left: 8px;
      `}
    }
  }
`

export const PopoverContainer = styled.div`
  position: absolute;
  margin-top: 5px;
  padding: 5px 0;
  background: ${props => props.theme.colors?.backgroundPage || '#FFF'};
  box-shadow: 0 6px 12px rgba(0,0,0,.175);
  z-index: 200;

  ${props => props.theme?.rtl ? css`
    right: 0px;
  ` : css`
    left: 0px;
  `}
`

export const Item = styled.div`
  padding: 3px 20px;
  white-space: nowrap;
  cursor: pointer;
  &:hover {
    background-color: #F2F2F2;
  }
`
