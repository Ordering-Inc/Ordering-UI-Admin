import styled, { css } from 'styled-components'

export const Container = styled.div`
  padding: 20px;
  height: 100%;

  h1 {
    font-size: 20px;
    font-weight: 700;
    margin-top: 5px;
  }

  > button {
    position: sticky;
    top: 100%;
    height: 44px;
    margin-bottom: 20px;
  }
`
export const SwitchWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 56px 0 40px;

  p {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 14px;
    ${props => props.theme?.rtl ? css`
      margin-left: 40px;
    ` : css`
      margin-right: 40px;
    `}
  }
`
export const FormController = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 43px;

  label {
    font-size: 14px;
    margin-bottom: 11px;
  }

  input {
    font-size: 14px;
  }
`
