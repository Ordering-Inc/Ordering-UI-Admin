import styled, { css } from 'styled-components'

export const FormWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
`

export const Header = styled.div`
  display: inline-flex;
  color: ${props => props.theme.colors.headingColor};
  font-size: 24px;
  margin: 0px;
  font-weight: 600;
  ${props => props.theme?.rtl ? css`
    margin-left: 10px;
  ` : css`
    margin-right: 10px;
  `}
`

export const FormInput = styled.form`
  margin-top: 20px;
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  position: relative;

  label {
    color: ${props => props.theme.colors.headingColor};
    margin-bottom: 10px;
  }

  input,
  textarea {
    color: ${props => props.theme.colors.headingColor};
  }

  button {
    position: absolute;
    bottom: 0;
    right: 0;
    font-size: 14px;
    line-height: 21px;
    padding: 10px 15px;
  }

  .select {
    background-color: ${props => props.theme.colors.secundary};
    border: none;

    div {
      font-size: 14px;
      color: ${props => props.theme.colors.secundaryContrast};
    }

     >div:first-child {
      padding: 5px 15px;
     }
  }
`

export const ActionsForm = styled.div`
  margin-top: 100px;
  > button {
    height: 42px;
    &:first-child {
      ${props => props.theme?.rtl ? css`
        margin-left: 10px;
      ` : css`
        margin-right: 10px;
      `}
    }
  }
`

export const UploadCsvInputContainer = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  input {
    width: 100%;
    &:read-only{
      cursor: pointer;
      color: #748194;
    }
  }
`
