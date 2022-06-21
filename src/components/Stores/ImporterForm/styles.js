
import styled, { css } from 'styled-components'

export const NewImporter = styled.div`
  width: 100%;
  padding: 35px 20px;
  overflow-x: hidden;

  .col {
    display: flex;
    align-items: flex-end;
  }
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Title = styled.div`
  font-size: 20px;
  margin: 0px 10px 0px 0px;
  font-weight: 700;
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  position: relative;

  label {
    color: ${props => props.theme.colors.headingColor};
    margin-bottom: 10px;
    font-size: 14px;
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

export const FormInput = styled.form`
  margin-top: 20px;
`
export const ActionsForm = styled.div`
  margin-top: 20px;
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
export const FiledListWrapper = styled.div`
  width: 100%;
  margin-top: 15px;
  position: relative;
  label {
    font-size: 14px;
  }
`
export const FieldAddForm = styled.form`

`
export const FieldRow = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  &>:first-child {
    width: 85%;
  }
`
export const FieldName = styled.div`
  background: ${props => props.theme.colors?.backgroundPage || '#FFF'};
  color: ${props => props.theme.colors?.headingColor};
  border: 1px solid #DEE2E6;
  border-radius: 8px;
  font-size: 14px;
  padding: 10px 15px;
  outline: none;
  width: 98%;
`
export const FieldValue = styled(FieldName)`
  width: 85%;
`

export const ButtonWrapper = styled.div`
  display: inline-flex;
  margin-left: 15px;
  ${props => props.theme?.rtl && css`
    margin-right: 15px;
    margin-left: 0;
 `}
  
  button {
    outline: none;
    background: transparent;
    border: none;
    padding: 0px;
    height: fit-content;
    svg {
      color: ${props => props.theme.colors?.headingColor};
    }
  }

  button[type='submit'] {
    svg {
      color: ${props => props.theme.colors.primary};
    }
  } 
`

export const ExampleCSV = styled.span`
  color: ${props => props.theme.colors.primary};
  font-size: 16px;
  font-style: italic;
  margin: 0 5px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`
