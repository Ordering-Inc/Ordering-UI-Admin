import styled, { css } from 'styled-components'

export const FormInput = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  div.phone_number {
    margin-bottom: 20px;
    width: 100%;
  }
  input {
    color: ${props => props.theme.colors.headingColor};
  }
  input.form {
    padding: 10px 15px;
    width: 100%;
    margin-bottom: 20px;
    box-sizing: border-box;
    &:disabled {
      background-color: rgba(239, 239, 239, 0.3);
      cursor: not-allowed;
    }
  }
  div.PhoneInput {
    input {
      border-radius: 8px;
    }
  }
  button {
    width: 100%;
    padding: 7px 0;
  }
  @media (min-width: 769px) {
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
  }
`

export const ActionsForm = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  button {
    flex: 1;
    margin-top: 10px;
    padding: 7px 0px;
    width: 49%;
    box-sizing: border-box;

    &:disabled {
      cursor: not-allowed;
    }

    &:nth-child(2) {
      margin-left: 10px;
    }
  }

  ${props => props.theme?.rtl && css`
    button {
      &:nth-child(1) {
        margin-right: 0px;
      }
      &:last-child {
        margin-right: 5px;
      }
    }
  `}
`

export const SkeletonForm = styled.div`
  width: 100%;
  justify-content: center;
  height: auto;
  display: inline-flex;
  flex-wrap: wrap;
  padding: 0;
  margin-top: 0px;
  > * {
    width: 100%;
    margin: 10px 0;
    display: inline;
    height: 50px;
    span{
      border-radius: 16px;
      width: 100%;
      height: 100%;
    }
  }
  @media (min-width: 768px){
    justify-content: flex-start;
    > * {
      width: calc(50% - 10px);
      margin: 5px;
    }
  }
`
export const DriverZoneRestrictionWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  > span {
    font-size: 14px;
  }
`
export const WrapperPassword = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  input{
    box-sizing: border-box;
    width: 100%;
    margin-bottom: 0 !important;
    ${props => props.theme?.rtl ? css`
      padding-left: 40px !important;
    ` : css`
      padding-right: 40px !important;
    `}
  }
`
export const TogglePassword = styled.span`
  position: absolute;
  font-weight: 300;
  color: #333;
  font-size: 24px;
  cursor: pointer;
  ${props => props.theme?.rtl ? css`
    left: 10px;
  ` : css`
    right: 10px;
  `}
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;

  .select {
    padding-top: 4px;
    padding-bottom: 4px;
    border: none;
    background-color: ${props => props.theme.colors.secundary};
    font-size: 14px;

    ${({ isTimezone }) => isTimezone && css`
      > div:first-child {
        > div {
          overflow: hidden;
        }
      }
      .list-wrapper {
        font-size: 12px;
        max-height: 220px;
      }
    `}
  }
`
