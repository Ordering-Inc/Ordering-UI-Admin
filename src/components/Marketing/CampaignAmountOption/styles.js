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

  input {
    width: 100%;
    height: 44px;
    border-radius: 8px !important;
    padding: 0px 15px !important;
    outline: none !important;
    border: 1px solid ${props => props.theme.colors.gray} !important;
    padding-right: 25px;
    ${props => props.theme?.rtl && css`
      padding-left: 25px;
      padding-right: 15px;
    `}
    &::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: ${props => props.theme.colors.secundaryLight};
      opacity: 1; /* Firefox */
    }

    &:-ms-input-placeholder { /* Internet Explorer 10-11 */
      color: ${props => props.theme.colors.secundaryLight};
    }

    &::-ms-input-placeholder { /* Microsoft Edge */
      color: ${props => props.theme.colors.secundaryLight};
    }
  }

  b {
    border: none !important;
    background: transparent !important;
    box-shadow: none !important;
    &:nth-child(2) {
      i {
        border: none !important;
        box-shadow: -1px 1px 0 ${props => props.theme.colors.secundaryLight};
        transform: rotate(135deg);
        width: 7px !important;
        height: 7px !important;
        margin: 0ex 0px 0px -0.56ex !important;
      }
    }
    &:last-child {
      i {
        border: none !important;
        box-shadow: -1px 1px 0 ${props => props.theme.colors.secundaryLight};
        transform: rotate(-45deg);
        width: 7px !important;
        height: 7px !important;
        margin: -0.9ex 0px 0px -0.56ex !important;
      }
    }
  }
`

export const SubTitle = styled.h2`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  margin: 0px;
`
