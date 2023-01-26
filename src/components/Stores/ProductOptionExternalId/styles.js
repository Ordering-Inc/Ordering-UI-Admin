import styled from 'styled-components'

export const Container = styled.div`
  button {
    height: 44px;
    text-transform: lowercase;
    &:first-letter {
      text-transform: uppercase;
    }
  }
`

export const FormControl = styled.div`
  margin-bottom: 25px;
  label {
    margin-bottom: 10px;
  }
  input {
    height: 44px;
    width: 100%;
  }
`
