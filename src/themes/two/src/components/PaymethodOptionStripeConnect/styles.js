import styled, { css } from 'styled-components'

export const Container = styled.div`
  padding: 20px;
  overflow: auto;
  transition: 0.3s;
  box-sizing: border-box;
  width: 0;
  display: flex;
  flex-direction: column;
  ${props => props.theme?.rtl ? css`
    border-right: 1px solid #E9ECEF;
  ` : css`
    border-left: 1px solid #E9ECEF;
  `}

  > button:last-child {
    position: sticky;
    top: 100%;
    width: fit-content;
    height: 42px;
    margin-bottom: 20px;
  }

  > input {
    background: ${props => props.theme.colors.secundary};
  }
`

export const FieldName = styled.p`
  color: ${props => props.theme.colors.headingColor};
  margin: 30px 0 10px;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h1 {
    font-size: 24px;
    color: ${props => props.theme.colors.headingColor};
    font-weight: 600;
  }
`

export const CloseButton = styled.div`
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
`

export const InputGroup = styled.div`
  display: flex;
  justify-content: space-between;
`

export const InputWrapper = styled.div`
  width: 48%;
`

export const StripeConnectButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background: #D4F2FF;
  border-radius: 7.6px;
  color: #27BCFD;
  width: fit-content;
  padding: 7px 15px;
  display: flex;
  align-items: center;

  &:active {
    background: #258cb9;
    color: #FFF;
    span {
      &:first-child {
        background: #FFF;
        svg {
          color: #27BCFD;
        }
      }
    }
  }

  span {
    &:first-child {
      background: #27BCFD;
      padding: 2px;
      border-radius: 5px;
      svg {
        font-size: 20px;
        color: #FFF;
      }
    }
    &:last-child {
      ${props => props.theme?.rtl ? css`
        margin-right: 15px;
      ` : css`
        margin-left: 15px;
      `}
    }
  }
`
