import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding-top: 7px;

  .btn-submit {
    display: none;
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

export const InputWrapper = styled.div`
  margin-bottom: 25px;

  label {
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 10px;
  }

  input, textarea {
    width: 100%;
  }
`

export const AddCouponSwitchWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 25px 0px 10px 0px;

  > span {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    margin-right: 20px;

    ${props => props.theme?.rtl && css`
      margin-left: 20px;
      margin-right: 0px;
    `}
  }
`

export const CuponCodeWrapper = styled.div`
  label {
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 10px;
  }

  > div {
    background: ${props => props.theme?.colors.backgroundPage};
    border: 1px solid ${props => props.theme.colors.gray};
    box-sizing: border-box;
    border-radius: 7.6px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 8px 3px;

    > button {
      margin: 6px 12px;
      font-size: 10px;
      border-radius: 50px;
      padding: 5px 10px;
      line-height: initial;
      span {
        font-size: 10px;
      }
      svg {
        font-size: 12px;
        margin-left: 2px;
        ${props => props.theme?.rtl && css`
          margin-left: 0px;
          margin-right: 2px;
        `}
      }
    }

    input {
      padding: 5px 0px;
      margin: 15px;
      margin: 6px 12px;
      border: none;
      outline: none;
      font-weight: 500;
      font-size: 12px;
      line-height: initial;
    }
  }
`

export const LastTimeWrapper = styled.div`
  margin-top: 40px;

  > h3 {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    margin-top: 0px;
    margin-bottom: 23px;
  }
`

export const TypeWrapper = styled.div`
  margin-bottom: 15px;
`

export const ParentCheckBoxWrapper = styled.div`
  > div {
    display: flex;
    align-items: center;
    cursor: pointer;
    width: fit-content;

    svg {
      font-size: 16px;
      color: ${props => props.theme.colors.secundaryLight};
      &.checked-icon {
        color: ${props => props.theme.colors.primary};
      }
    }
    
    > span {
      font-size: 14px;
      line-height: 24px;
      margin-left: 13px;
      ${props => props.theme.rtl && css`
        margin-right: 13px;
        margin-left: 0px;
      `}
    }
  }
`

export const ChildCheckBoxWrapper = styled(ParentCheckBoxWrapper)`
  margin-bottom: 10px;
`

export const TimeContent = styled.div`
  padding: 15px 0px 10px 0px; 
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

export const TimeBlock = styled.div`
  display: flex;
  border: 1px solid ${props => props.theme.colors.gray};
  box-sizing: border-box;
  border-radius: 7.6px;
  width: fit-content;
  align-items: center;
  overflow: hidden;

  > span {
    color: ${props => props.theme?.colors.secundaryLight};
  }
  
  > select {
    height: 40px;
    padding: 0px 10px;
    border: none;
    outline: none;
    font-size: 14px;
    color: ${props => props.theme?.colors.secundaryLight};
    appearance: none;
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

export const DateContent = styled.div`
  padding: 15px 25px 10px 25px;
`

export const DateRangeContent = styled.div`
  position: relative;
  > button {
    border-radius: 8px;
    height: 44px;
    background-color: ${props => props.theme.colors.secundary};
    color: ${props => props.theme.colors.headingColor};
    border: none;
  
    svg {
      font-size: 16px;
      margin-right: 12px;
      color: ${props => props.theme.colors.lightGray};
      ${props => props.theme.rtl && css`
        margin-left: 12px;
        margin-right: 0;
      `}
    }
  }
`
