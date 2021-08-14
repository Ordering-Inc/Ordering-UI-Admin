import styled, { css } from 'styled-components'

export const InvoiceGeneralDetailContainer = styled.div``

export const FormControl = styled.div`
  margin-bottom: 35px;

  input, textarea {
    background: #FFFFFF;
    border: 1px solid #DEE2E6;
    box-sizing: border-box;
    border-radius: 7.6px;
    font-size: 14px;
    padding: 10px 15px;
    outline: none;
  }

  textarea {
    width: 100%;
  }

  .select {
    width: 100%;
    background: #F8F9FA;
    color: #748194;
    border: none;

    > div:first-child {
      font-size: 14px;
      padding-top: 5px;
      padding-bottom: 5px;

      div:first-child {
        font-size: 14px;
        padding: 1px 0;
      }
    }
  }
`

export const Label = styled.label`
  font-size: 14px;
  color: ${props => props.theme?.colors.headingColor};
  margin-bottom: 10px;
`

export const Option = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  font-size: 13px;
  line-height: 2;
  font-weight: 500;
`

export const CalendarWrapper = styled.div`
  position: relative;

  > div {
    left: 0 !important;
  }

  button {
    padding: 7px 15px;
    width: 100%;
    color: #748194;
    background: #F8F9FA;
    border-radius: 7.6px;
    border: none;
    text-align: left;

    svg {
      font-size: 16px;
      margin-right: 12px;
      ${props => props.theme.rtl && css`
        margin-right: 12px;
        margin-left: 0;
      `}
    }
  }
`

export const ActionBtnWrapper = styled.div`
  padding-top: 30px;
  margin-bottom: 20px;
`
