import styled, { css } from 'styled-components'

export const Container = styled.div`
  padding: 20px;
  overflow: auto;
  transition: 0.3s;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  > button {
    margin-top: 20px;
    position: sticky;
    top: 100%;
    width: fit-content;
    height: 42px;
    margin-bottom: 20px;
  }

  @media (min-width: 1000px) {
    width: 0;
    ${props => props.theme?.rtl ? css`
      border-right: 1px solid #E9ECEF;
    ` : css`
      border-left: 1px solid #E9ECEF;
    `}
  }
  > p {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    margin: 0;
  }
`

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 27px;

  button {
    height: 44px;
    border-radius: 8px;
    width: 100%;
    margin-bottom: 10px;
    @media (min-width: 576px) {
      margin-bottom: 0;
      width: fit-content;
      &:first-child {
        margin-right: 15px;
        ${props => props.theme.rtl && css`
          margin-right: 0;
          margin-left: 15px;
        `}
      }
    }
  }
  @media (min-width: 576px) {
    flex-direction: row;
  }
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  h1 {
    font-size: 20px;
    color: ${props => props.theme.colors.headingColor};
    font-weight: 600;
    margin: 0;
  }
`

export const CloseButton = styled.div`
  display: none;
  @media (min-width: 1000px) {
    display: flex;
    align-items: center;
    > svg {
      cursor: pointer;
      font-size: 24px;
      color: ${props => props.theme.colors.headingColor};
      ${props => props.theme?.rtl ? css`
        margin-right: 10px;
      ` : css`
        margin-left: 10px;
      `}
    }
  }
`

export const FormControl = styled.div`
  label {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 6px;
  }
  input {
    width: 100%;
    height: 44px;
  }

  ${({ isMargin }) => isMargin && css`
    margin-top: 10px;
  `}
`

export const QRCodeLayout = styled.div`
  margin-bottom: 20px;
`
