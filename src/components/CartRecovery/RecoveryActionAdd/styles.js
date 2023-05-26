import styled, { css } from 'styled-components'

export const RecoveryActionAddContainer = styled.form`
`
export const CardContainer = styled.div`
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
  border-radius: 7.6px;
  padding: 25px 38px;
  margin-bottom: 29px;

  h2 {
    font-size: 16px;
    font-weight: 600;
    margin: 0 0 29px 0;
  }
`
export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 60px 0;

  button {
    border-radius: 8px;
    height: 44px;
    &:first-child {
      margin: 0 10px;
    }
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

  .select {
    border: 1px solid ${props => props.theme.colors.borderColor};
    padding: 9px 0;
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

export const TimeContent = styled.div`
  padding: 15px 0px 10px 0px; 
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
export const Option = styled.div`
  font-size: 14px;
  line-height: 24px;
`
