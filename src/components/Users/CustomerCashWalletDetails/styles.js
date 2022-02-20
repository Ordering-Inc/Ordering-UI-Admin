import styled from 'styled-components'

export const WalletBalaceContainer = styled.div`
  padding-top: 38px;
  display: flex;
  flex-direction: column;
  > span {
    &:first-child {
      font-size: 24px;
      font-weight: 500;
      line-height: 36px;
    }
    &:last-child {
      font-size: 14px;
    }
  }
`
export const SectionContainer = styled.div`
  margin-top: 54px;
  margin-bottom: 30px;
  > p {
    font-size: 16px;
    font-weight: 600;
    margin-top: 0;
    margin-bottom: 22px;
  }
  > button {
    height: 44px;
  }
`
export const FormController = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 26px;

  label {
    font-size: 14px;
    margin-bottom: 10px;
  }

  input,
  textarea {
    font-size: 14px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type=number] {
    -moz-appearance: textfield;
  }
`
