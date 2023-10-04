import styled, { css } from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`

export const HeaderTitleContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  > h1 {
    font-size: 20px;
    margin: 0px;
    font-weight: 700;
  }

  > button {
    ${props => props.theme?.rtl ? css`
      margin-left: 8px;
      margin-right: -8px;
    ` : css`
      margin-right: 8px;
      margin-left: -8px;
    `}

    svg {
      width: 25px;
      height: 25px;
    }

    &.tour_btn {
      ${props => props.theme?.rtl ? css`
        margin-left: -8px;
        margin-right: 8px;
      ` : css`
        margin-right: -8px;
        margin-left: 8px;
      `}
      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`

export const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  flex-wrap: wrap;
  > * {
    margin-bottom: 10px;
  }

  > *:not(:last-child) {
    ${props => props.theme?.rtl ? css`
      margin-left: 10px;
    ` : css`
      margin-right: 10px;
    `}
  }

  input {
    background: ${props => props.theme.colors.secundary};
    border: none;
  }

  button {
    height: 41px;
  }

  > *:last-child {
    flex: inherit;
    width: 100%;
  }

  @media (min-width: 768px) {
    margin-top: 0px;
    > * {
      margin-bottom: 0px;
    }
    > *:last-child {
      flex: 1;
    }
  }
`

export const WarningMessage = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  z-index: 100;
  top: 50px;
  background: ${props => props.theme.colors.warning100};
  border: 1px solid ${props => props.theme.colors.warning};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
  border-radius: 7.6px;
  padding: 0px 15px;
  box-sizing: border-box;
  margin: 10px 0px 0px 0px !important;

  right: 0px;
  ${props => props.theme?.rtl && css`
    left: 0px;
    right: initial;
  `}

  svg {
    font-size: 20px;
    color: ${props => props.theme.colors.warning};
  }

  span {
    font-size: 12px;
    line-height: 18px;
    color: ${props => props.theme.colors.headingColor};
    margin: 0 10px;
    flex: 1;
  }

  a {
    font-size: 12px;
    white-space: nowrap;
  }

  @media (min-width: 768px) {
    padding: 0px 20px;
    font-size: 14px;
    line-height: 24px;
    right: 0px; 
    z-index: 10;
    ${props => props.theme?.rtl && css`
      left: 0px;
      right: initial;
    `}

    span {
      white-space: nowrap;
    }
  }
`
