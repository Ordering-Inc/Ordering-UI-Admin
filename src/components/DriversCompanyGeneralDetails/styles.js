import styled from 'styled-components'

export const FormContainer = styled.form`
  min-height: calc(100% - 120px);
  button[type='submit'] {
    position: sticky;
    top: 100%;
    height: 42px;
  }
`
export const GroupContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    width: calc(50% - 15px);
  }
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 35px;

  label {
    font-size: 14px;
  }

  div {
    font-size: 14px;
  }

  .select {
    padding-top: 4px;
    padding-bottom: 4px;
    border: none;
    background-color: ${props => props.theme.colors.secundary};
  }
`
