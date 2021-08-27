import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding: 20px;

  h1 {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 15px;
  }
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  label {
    font-size: 14px;
    margin-bottom: 12px;
  }
`

export const CheckboxWrapper = styled.div`
  display: flex;
  margin-bottom: 50px;

  input {
    margin-top: 5px;
  }
  div {
    p {
      margin: 0px;
      &:first-child {
        font-size: 14px;
      }
      &:last-child {
        font-size: 12px;
        color: ${props => props.theme.colors.lightGray};
      }
    }

    ${props => props.theme?.rtl ? css`
      margin-right: 10px;
    ` : css`
      margin-left: 10px;
    `}
  }
`

export const AdvancedOptionContainer = styled.div`
  position: relative;
  > div:not(:last-child) {
    margin-bottom: 45px;
  }
`

export const DotLine = styled.div`
  position: absolute;
  width: 1px;
  background-color: ${props => props.theme.colors.primary};
  height: calc(100% - 20px);
  top: 10px;
  ${props => props.theme?.rtl ? css`
    right: 18px;
  ` : css`
    left: 18px;
  `}
`

export const StepItem = styled.div`
  display: flex;
  align-items: center;

  div.number {
    border-radius: 50%;
    border: 1px solid ${props => props.theme.colors.primary};
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    z-index: 10;
    background: #FFF;
  }

  span {
    font-size: 14px;
    margin: 0 18px;
    width: 200px;
  }

  input {
    width: 120px;
  }

  img {
    ${props => props.theme?.rtl ? css`
      margin-right: 50px;
    ` : css`
      margin-left: 50px;
    `}
  }
`
