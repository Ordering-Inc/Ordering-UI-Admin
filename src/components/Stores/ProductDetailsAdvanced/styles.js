import styled, { css } from 'styled-components'

export const PropertiesContainer = styled.form`
  label:first-child{
    margin-top: 0;
  }

  > input {
    width: 100%;
  }

  > button {
    height: 44px;
    margin-top: 30px;
  }
`

export const PropertyOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  max-width: 300px;

  label:first-child {
    margin: 0;
    font-size: 14px;
    width: calc(100% - 50px);
  }
`

export const TypeSelectWrapper = styled.div`
  > div {
    max-width: 100%;
    min-width: 100%;
    padding: 3.5px 15px;
  }
`

export const Option = styled.div`
  font-size: 14px;
  /* white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 95%; */
  ${({ padding }) => padding && css`
    padding: 5px 0;
  `}
  ${({ isWeight }) => isWeight && css`
    font-weight: 600;
  `}
`

export const OptionCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  font-size: 16px;
  font-weight: 600;
  ${({ padding }) => padding && css`
    padding: 5px 0;
  `}
  ${({ isWeight }) => isWeight && css`
    font-weight: 600;
  `}
`

export const LabelCustom = styled.label`
  margin-top: 30px;
  margin-bottom: 10px;
  font-size: 14px;
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

export const FieldRow = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  label:first-child{
    margin-top: 30px;
  }
  > div {
    width: 100%;
    padding: 0px;
  }

  @media (min-width: 576px) {
    flex-direction: row;
    > div {
      width: 48%;
    }
  }
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  padding: 0 10px;

  &.growUnset {
    flex-grow: unset;
  }

  &.showWeight {
    width: 40%;
  }
`
export const WeightWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  input {
    width: 55%;
  }

  .select {
    width: 40%;
    padding-top: 3.5px;
    font-size: 14px;

    .list {
      padding-top: 7px;
      padding-bottom: 7px;
      margin-bottom: 10px;
    }
  }
`
export const PropertyOptionWrapper = styled.div`
  display: block;
  margin-top: 30px;
`

export const PricePerUnit = styled.div`
  display: flex;
  align-items: center;

  label {
    font-size: 14px;
    margin: 0;
    margin-right: 15px;
    ${props => props.theme?.rtl && css`
    margin-right: 0;
    margin-left: 15px;
    `}
  }
  
  .select {
    font-size: 14px;
    padding: 3.5px;
    .list {
      padding-top: 7px;
      padding-bottom: 7px;
    }
  }
`
