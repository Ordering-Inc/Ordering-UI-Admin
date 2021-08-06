import styled, { css } from 'styled-components'

export const OrderDetailsHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column-reverse;

  > div:first-child {
    color: ${props => props.theme.colors?.headingColor};
    width: 100%;
    h1 {
      font-size: 24px;
      margin: 0px;
      font-weight: 700;
    }

    p {
      font-size: 14px;
      margin: 0px;
    }
  }

  > div:not(:first-child) {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    margin-bottom: 20px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    > div:not(:first-child) {
      margin-bottom: 0px;
    }
  }
`

export const ButtonGroup = styled.div`
  > button {
    position: relative;
    ${props => props.theme?.rtl ? css`
      margin-left: 8px;
    ` : css`
      margin-right: 8px;
    `}
    &:last-child {
      ${props => props.theme?.rtl ? css`
        margin-left: 0px;
      ` : css`
        margin-right: 0px;
      `}
    }
  }
`

export const UreadMessageAlert = styled.span`
  position: absolute;
  top: -9px;

  ${props => props.theme?.rtl ? css`
    left: -13px;
  ` : css`
    right: -13px;
  `}
  svg {
    font-size: 40px;
    color: ${props => props.theme.colors.primary};
  }
`
