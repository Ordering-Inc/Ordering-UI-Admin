import styled, { css } from 'styled-components'

export const OrderDetailsContainer = styled.div`
  h2 {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    margin-top: 0;
    margin-bottom: 25px;
  }
`

export const ContentWrapper = styled.div``

export const FormControl = styled.div`
  margin-bottom: 23px;
  label {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 12px;
  }
  input {
    width: 100%;
    height: 44px;
  }
  textarea {
    width: 100%;
    height: 100px;
  }

  ${({ noBottom }) => noBottom && css`
    margin-bottom: 0px;
  `}
`

export const SwitchControl = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 23px;
  label {
    margin-bottom: 0px;
    margin-right: 16px;
    ${props => props.theme.rtl && css`
      margin-left: 16px;
      margin-right: 0px;
    `}
  }
`
