import styled, { css } from 'styled-components'

export const Container = styled.div`
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type=number] {
    -moz-appearance: textfield;
  }
`

export const Title = styled.h1`
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  margin-top: 0px;
  margin-bottom: 30px;
`

export const RadioCheckWrapper = styled.div`
  margin-top: 24px;

  > div {
    display: flex;
    align-items: center;
    cursor: pointer;
    width: fit-content;

    span {
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
    }

    svg {
      margin-right: 13px;
      ${props => props.theme.rtl && css`
        margin-right: 0px;
        margin-left: 13px;
      `}
      color: ${props => props.theme.colors.secundaryLight};
      &.fill {
        color:${props => props.theme.colors.primary};
      }
    }
  }
`

export const ButtonWrapper = styled.div`
  position: sticky;
  top: 100%;

  button {
    height: 44px;
  }
`

export const ArrowIconsWrapper = styled.div`
  position: absolute;
  height: 100%;
  top: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 7px 10px;
  right: 0px;
  ${props => props.theme?.rtl && css`
    right: initial;
    left: 0px;
  `}
  svg {
    color: ${props => props.theme.colors.secundaryLight};
    font-size: 12px;
  }
`

export const DaysContent = styled.div`
  padding: 15px 0px 10px 0px;
  > div {
    width: 216px;
    position: relative;
    input {
      width: 100%;
      height: 44px;
      padding-right: 25px;
      ${props => props.theme?.rtl && css`
        padding-left: 25px;
        padding-right: 15px;
      `}
    }
  }
`

export const SubTitle = styled.h2`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  margin: 0px;
`
