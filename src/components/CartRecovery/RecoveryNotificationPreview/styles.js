import styled, { css } from 'styled-components'

export const Container = styled.div`

`

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
`

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  position: sticky;
  bottom: 0px;
  top: 100%;

  button {
    height: 44px;
    margin-right: 25px;
    ${props => props.theme.rtl && css`
      margin-right: 25px;
      margin-right: 10px;
    `}
  }
`

export const Option = styled.div`
  font-size: 14px;
  line-height: 24px;
`
