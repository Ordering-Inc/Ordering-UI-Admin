import styled, { css } from 'styled-components'

export const PropertiesContainer = styled.div`
  height: 100%;
  overflow-x: hidden;
  h1 {
    color: ${props => props.theme.colors.headingColor};
    font-size: 24px;
    font-weight: 600;
    padding-bottom: 30px;
    margin: 0px;
    border-bottom: 1px solid #E9ECEF;
  }

  > input {
    width: 100%;
  }

  > button {
    margin: 30px 0 20px 0;
    height: 44px;
  }
  @media (min-width: 1000px) {
    padding: 20px;
  }
`

export const PropertyOption = styled.div`
  border-bottom: 1px solid #E9ECEF;
  padding: 12px 0;
  display: flex;
  align-items: center;
  label {
    font-size: 14px;
    margin-bottom: 0;
    cursor: pointer;
    color: ${props => props.theme.colors.headingColor};
    ${props => props.theme?.rtl ? css`
      padding-right: 10px;
    ` : css`
      padding-left: 10px;
    `}
  }
`

export const TypeSelectWrapper = styled.div`
  > div {
    max-width: 100%;
    min-width: 100%;
    padding: 3.5px 15px;
    margin-bottom: 10px;
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
  margin-top: 20px;
  font-size: 14px;
  margin-bottom: 5px;
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

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3.5px 15px;
`
