import styled from 'styled-components'

export const SettingsListContainer = styled.div`
  width: 100%;
  padding: 26px 20px;
`

export const GeneralContainer = styled.div``

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

export const Required = styled.span`
  font-weight: 600;
  font-size: 10px;
  color: #E63757;
`

export const SkeletonWrapper = styled.div`
  margin-top: 20px;

  div {
    margin-bottom: 15px;
  }
`
