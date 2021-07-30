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

export const ButtonLink = styled.div`
  position: relative;
  cursor: pointer;
  padding: 5px;

  ${props => props.theme?.rtl ? css`
    margin-left: 5px;
  ` : css`
    margin-right: 5px;
  `}
  
  > svg {
    color: ${props => props.theme.colors?.secundaryContrast};
    font-size: 22px;
  }
  &.close {
    > svg {
      font-size: 18px;
      color: ${props => props.theme.colors?.headingColor};
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
