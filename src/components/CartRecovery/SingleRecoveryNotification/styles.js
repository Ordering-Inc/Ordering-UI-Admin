import styled, { css } from 'styled-components'

export const Container = styled.form`
  min-height: calc(100% - 70px);
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

  .select {
    border: 1px solid ${props => props.theme.colors.gray};
  }
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
