import styled, { css } from 'styled-components'

export const HeaderItem = styled.div`
  ${props => props.theme?.rtl ? css`
    text-align: left;
    ` : css`
    text-align: right;
  `}
  svg {
    cursor: pointer;
    color: ${props => props.theme.colors?.headingColor};
    font-size: 20px;
  }
`

export const PopoverBody = styled.div`
  position: absolute;
  background-color: #FFF;
  padding: 15px;
  border-radius: 7.6px;
  max-width: 250px;
  z-index: 1001;
  border: 1px solid ${props => props.theme.colors?.borderColor};
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 24px;

  ${props => props.theme?.rtl ? css`
    left: 0px;
  ` : css`
    right: 0px;
  `}
`

export const PopoverList = styled.div`
`

export const AllowItem = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors?.headingColor};
  padding: 7px;
  cursor: pointer;
  svg {
    font-size: 24px;
  }
  span {
    white-space: nowrap;
    font-size: 12px;
    font-weight: 400;
    ${props => props.theme?.rtl ? css`
      margin-right: 10px;
      ` : css`
      margin-left: 10px;
    `}
  }

  ${({ isChecked }) => isChecked && css`
    svg {
      color: ${props => props.theme.colors?.primary};
    }
  `}
`
