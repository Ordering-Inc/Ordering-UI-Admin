import styled, { css } from 'styled-components'

export const Container = styled.div`
  padding: 20px 20px 0 20px;
  width: 100%;
  overflow-x: hidden;

  > h1 {
    font-size: 20px;
    font-weight: 700;
    margin-top: 0;
    margin-bottom: 7px;
  }
`
export const Tabs = styled.div`
  display: flex;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  > div {
    &:not(:last-child) {
      ${props => props.theme?.rtl ? css`
        margin-left: 32px;
      ` : css`
        margin-right: 32px;
      `}
    }
  }
`
export const Tab = styled.div`
  cursor: pointer;
  color: ${props => props.theme.colors.lightGray};
  font-size: 14px;
  padding: 13px 0;
  position: relative;

  ${({ active }) => active && css`
    color: ${props => props.theme.colors.headingColor};
    font-weight: 600;
    &:after {
      content: "";
      background: ${props => props.theme.colors.headingColor};
      height: 2px;
      width: 100%;
      position: absolute;
      bottom: -1px;
      ${props => props.theme?.rtl ? css`
        right: 0px;
      ` : css`
        left: 0px;
      `}
    }
  `}
`
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
