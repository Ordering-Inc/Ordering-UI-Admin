import styled from 'styled-components'

export const WrapperCheckPassword = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 15px;

  h3 {
    font-size: 32px;
    margin: 0px;
  }

  p {
    margin: 0px;
  }

  input {
    outline: none;
    font-size: 16px;

    border: 1px dashed rgba(20, 20, 20, 0.2);

    &:focus {
      border: 1px dashed #ef1962;
    }
  }
`
export const ErrorText = styled.div`
  text-align: center;
  color: #ef1962;
`
