import styled, { css } from 'styled-components'

export const HeaderItem = styled.div`
  ${props => props.theme?.rtl ? css`
    text-align: left;
    ` : css`
    text-align: right;
  `}
  button {
    padding: 7px;
    display: flex;
  }
  svg {
    color: ${props => props.theme.colors?.headingColor};
    font-size: 20px;
  }
`

export const PopoverBody = styled.div`
  position: absolute;
  background-color: #FFF;
  padding: 15px;
  border-radius: 10px;
  max-width: 250px;
  z-index: 1001;
  border: 1px solid #E9ECEF;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
  border-radius: 7.6px;
  top: 40px;

  > p {
    color: ${props => props.theme.colors.headingColor};
    font-size: 14px;
    margin: 0px;
    padding: 7px;
    font-weight: 500;

  }

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
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    white-space: nowrap;
    font-size: 14px;
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

export const WrapperSpinnerLoader = styled.div`
  > div {
    position: absolute;
    top: 0px;
  }
`
