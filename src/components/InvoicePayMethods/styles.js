import styled, { css } from 'styled-components'

export const InvoicePayMethodsContainer = styled.div`
  margin-top: 10px;
  height: calc(100% - 105px);
`

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #E9ECEF;
  padding: 15px 0;

  > input {
    margin-right: 20px;
    ${props => props.theme?.rtl && css`
      margin-left: 20px;
      margin-right: 0;
    `}
  }
`

export const ActionBtnWrapper = styled.div`
  margin-top: 20px;
  position: sticky;
  top: 100%;
  padding-bottom: 10px;

  > button {
    height: 44px;
  }
`
