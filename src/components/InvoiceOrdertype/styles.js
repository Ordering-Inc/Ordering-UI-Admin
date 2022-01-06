import styled, { css } from 'styled-components'

export const InvoiceOrderTypeContainer = styled.div`
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

  label {
    margin: 0px;
    font-size: 14px;
  }
`

export const ActionBtnWrapper = styled.div`
  position: sticky;
  top: 100%;

  > button {
    height: 44px;
  }
`
