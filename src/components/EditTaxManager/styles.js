import styled, { css } from 'styled-components'

export const LabelCustom = styled.label`
  margin-top: 20px;
`

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;

  button {
    padding-top: 5px;
    padding-bottom: 5px;

    &:last-child {
      ${props => props.theme?.rtl ? css`
        margin-right: 20px;
      ` : css`
        margin-left: 20px;
      `}
    }
  }
`

export const EditTaxContainer = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  & > div {
    width: 48%;
  }

  @media (max-width: 576px) {
    flex-direction: column;
    & > div {
      width: 100%;
    }
  }
`

export const WrapperRow = styled.div`
  display: flex;
  width: 100% !important;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  & > div {
    width: 100%;
    height: 100px;
    margin-bottom: 20px;
    border: none;
  }

  .date-filter-container {
    z-index: 100;
  }

  > input {
    width: 100%;
    height: 57px;
    margin-bottom: 20px;
    padding: 10px 25px;
    box-sizing: border-box;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    -moz-appearance: textfield;
  }

  @media (min-width: 992px) {
    flex-direction: row;
    & > div {
      width: 48%;
    }

    > input {
      width: 48%;
    }
  }
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3.5px 15px;
`

export const Option = styled.div`
  font-size: 14px;
  ${({ padding }) => padding && css`
    padding: 5px 0;
  `}
  ${({ isWeight }) => isWeight && css`
    font-weight: 600;
  `}
`

export const TypeSelectWrapper = styled.div`
  > div {
    max-width: 100%;
    min-width: 100%;
    padding: 3.5px 15px;
    margin-bottom: 10px;
  }
`
