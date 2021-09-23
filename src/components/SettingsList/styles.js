import styled from 'styled-components'

export const SettingsListContainer = styled.div``

export const GeneralContainer = styled.div`
  margin-top: 53px;
`

export const GeneralTitle = styled.div`
  display: flex;
  align-items: center;

  p {
    font-weight: bold;
    font-size: 20px;
    color: ${props => props.theme.colors.headingColor};
    margin-bottom: 6px;
  }
`

export const FormContainer = styled.div`
  margin-top: 20px;

  button {
    background: ${props => props.theme.colors.primary};
    color: white;
    border-radius: 8px;
    font-size: 14px;
    margin: 20px 0;
  }
`

export const OptionsError = styled.span`
  font-size: 12px;
  color: #d83520;
`

export const FormGroupText = styled.div`
  margin-bottom: 20px;

  label {
    font-weight: 600;
    margin-bottom: 10px;
    font-size: 14px;
    color: ${props => props.theme.colors.headingColor};
  }

  input[type='text'] {
    font-size: 14px;
    height: 44px;
    border: 1px solid #DEE2E6;
    box-sizing: border-box;
    border-radius: 7.6px;
  }
`

export const FormGroupCheck = styled.div`
  padding-bottom: 20px;
  border-bottom: 1px solid #E9ECEF;

  input {
    width: 16px;
    height: 16px;
    box-sizing: border-box;
    border-radius: 2px;
    margin-right: 10px;
  }
  label {
    font-size: 14px;
    display: flex;
    align-items: center;
    color: ${props => props.theme.colors.headingColor};
  }
`

export const FormGroupWrapper = styled.div`
  padding-top: 20px;
`

export const Required = styled.span`
  font-weight: 600;
  font-size: 10px;
  color: #E63757;
`

export const SkeletonWrapper = styled.div`
  margin-top: 52px;

  div {
    margin-bottom: 15px;
  }
`

export const CheckBoxWrapper = styled.div`
  p {
    font-weight: 600;
    margin: 20px 0 0;
    font-size: 14px;
    color: ${props => props.theme.colors.headingColor};
  }
`
