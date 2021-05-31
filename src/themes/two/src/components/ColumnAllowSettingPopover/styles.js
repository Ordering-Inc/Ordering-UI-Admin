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
  background-color: #FFF;
  padding: 15px;
  border-radius: 10px;
  max-width: 250px;
  z-index: 1001;
  border: 1px solid ${props => props.theme.colors?.headingColor};
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 24px;
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
    font-size: 20px;
  }

  span {
    font-size: 14px;
    font-weight: 400;
    ${props => props.theme?.rtl ? css`
      margin-right: 10px;
      ` : css`
      margin-left: 10px;
    `}
  }
`
