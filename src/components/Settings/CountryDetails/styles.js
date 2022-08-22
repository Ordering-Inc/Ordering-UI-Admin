import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 35px;

  h1 {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 0;
    ${props => props.theme?.rtl ? css`
      margin-left: 15px;
    ` : css`
      margin-right: 15px;
    `}
  }
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;

  label {
    font-size: 14px;
  }

  div {
    font-size: 14px;
  }
`

export const FormContainer = styled.form`
  button {
    height: 42px;
    margin-top: 20px;
  }
`
