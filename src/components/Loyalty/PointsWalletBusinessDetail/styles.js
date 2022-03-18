import styled, { css } from 'styled-components'

export const Container = styled.form`
  width: 100%;
  min-height: calc(var(--vh, 1vh) * 100 - 150px);
  ${({ isBusiness }) => isBusiness && css`
    padding: 20px;
  `}
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type=number] {
    -moz-appearance: textfield;
  }
`

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 35px;
  margin-bottom: 23px;

  ${props => props.theme.rtl && css`
    padding-left: 35px;
    padding-right: 0px;
  `}

  h1 {
    font-size: 20px;
    font-weight: bold;
    margin: 0px;
  }
`

export const DetailContent = styled.div``

export const PointsRedemptionWrapper = styled.div`
  h2 {
    font-weight: 600;
    font-size: 16px;
    margin-top: 0px;
    margin-bottom: 5px;
    line-height: 24px;
  }
  p {
    font-size: 14px;
    line-height: 24px;
    margin-top: 0px;
    margin-bottom: 10px;
  }
`

export const PointsInputWrapper = styled.div`
  display: flex;
  align-items: center;
  input {
    max-width: 245px;
    width: 100%;
    margin-right: 14px;
    ${props => props.theme.rtl && css`
      margin-right: 0px;
      margin-left: 14px;
    `}
  }
  span {
    margin: 0px 14px;
  }
`

export const PaymentRulesWrapper = styled.div`
  margin-bottom: 25px;
  margin-top: 35px;

  h2 {
    font-size: 14px;
    line-height: 24px;
    margin: 0px;
  }
  p {
    font-size: 14px;
    line-height: 24px;
    color: ${props => props.theme.colors.lightGray};
    margin-top: 5px;
    margin-bottom: 0px;
  }
`

export const PaymentOptionListWrapper = styled.div`

`

export const CheckBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 18px;
  cursor: pointer;

  svg {
    color: ${props => props.theme.colors.primary};
    font-size: 19px;
    min-width: 19px;
    margin-right: 13px;
    ${props => props.theme.rtl && css`
      margin-left: 13px;
      margin-right: 0px;
    `}
  }
  p {
    font-size: 14px;
    line-height: 24px;
    margin: 0px;
  }
`

export const OptionInputWrapper = styled.div`
  padding-left: 20px;
  margin-bottom: 18px;
  ${props => props.theme.rtl && css`
    padding-left: 0px;
    padding-right: 20px;
  `}

  input {
    width: 100%;
    max-width: 215px;
  }
`

export const PointsAccumulationContainer = styled.div`
  margin-top: 50px;

  > h2 {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    margin-top: 0px;
    margin-bottom: 5px;
  }
  > p {
    font-size: 14px;
    line-height: 24px;
    margin-top: 0px;
    margin-bottom: 20px;
    color: ${props => props.theme.colors.lightGray};
  }
  > span {
    font-size: 14px;
    line-height: 24px;
  }
`

export const AccumulationInputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 28px;
  margin-top: 14px;

  input {
    max-width: 240px;
    width: 100%;
  }

  .price {
    margin-right: 14px;
    font-size: 14px;
    line-height: 24px;
    ${props => props.theme.rtl && css`
      margin-right: 0px;
      margin-left: 14px;
    `}
  }

  .equal, input {
    margin: 0px 14px;
  }
`

export const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 11px;

  p {
    font-size: 14px;
    line-height: 24px;
    margin: 0px 15px 0px 0px;
    ${props => props.theme.rtl && css`
      margin: 0px 0px 0px 15px;
    `}
  }
`

export const ButtonWrapper = styled.div`
  position: sticky;
  top: 100%;

  button {
    margin-top: 20px;
    height: 44px;
    border-radius: 8px;
  }
`
