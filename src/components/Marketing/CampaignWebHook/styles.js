import styled from 'styled-components'

export const Container = styled.div``

export const InputWrapper = styled.div`
  label {
    margin-bottom: 10px;
    font-size: 14px;
    line-height: 24px;
  }
  input, textarea {
    width: 100%;
  }
  textarea {
    height: 80px;
  }
  margin-bottom: 35px;

  .select {
    border: 1px solid ${props => props.theme.colors.gray};
  }
`

export const ButtonWrapper = styled.div`
  position: sticky;
  top: 100%;
  padding-bottom: 15px;

  button {
    margin-top: 20px;
    height: 44px;
    border-radius: 8px;
  }
`

export const Description = styled.div`
  font-size: 14px;
  margin: 10px 0px;
  span {
    color: ${props => props.theme.colors.primary};
    cursor: pointer;
    transition: all 0.3s linear;
    &:hover {
      text-decoration: underline;
    }
  }
`
