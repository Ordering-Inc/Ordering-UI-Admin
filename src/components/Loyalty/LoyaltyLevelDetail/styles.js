import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const Container = styled.div`
  width: 100%;
  min-height: calc(var(--vh, 1vh) * 100 - 150px);
  padding: 20px;
`

export const DetailsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const LevelName = styled.h1`
  color: ${props => props.theme.colors.headingColor};
  font-size: 20px;
  margin-top: 0px;
  margin-bottom: 24px;
  font-weight: 700;

  ${props => props.theme?.rtl ? css`
    margin-left: 10px;
  ` : css`
    margin-right: 10px;
  `}
`

export const LeftHeader = styled.div`
  display: flex;
  align-items: center;
`

export const RightHeader = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3px;
  margin-bottom: 24px;
`

export const ActionSelectorWrapper = styled.div`
  padding-right: 35px;

  ${props => props.theme.rtl && css`
    padding-left: 35px;
    padding-right: 0px;
  `}

  button {
    background: transparent !important;
    border: none;
    padding: 0px 5px;
    &:active,
    &:focus {
      border-color: unset !important;
      box-shadow: none !important;
    }
    svg {
      color: ${props => props.theme.colors.headingColor};
      font-size: 20px;
    }

    &:after {
      display: none;
    }

    &:hover {
      background: ${props => darken(0.04, props.theme.colors.secundary)} !important;
    }
    &:active {
      background: ${props => darken(0.1, props.theme.colors.secundary)} !important;
    }
  }

  .show {
    button {
      background: ${props => darken(0.04, props.theme.colors.secundary)} !important;
    }
    >div {
      border: 1px solid ${props => props.theme.colors.borderColor};
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
    }
  }

  > div {
    > div {
      border-radius: 8px;
      .dropdown-item {
        font-size: 12px;
        padding: 6px 20px;
        color: ${props => props.theme.colors.headingColor};
        &:active {
          background: ${props => darken(0.1, props.theme.colors.secundary)} !important;
        }
      }
      .dropdown-item:last-child {
        color: #E63757;
      }
    }
  }
`

export const Content = styled.form``

export const FormController = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  label {
    color: ${props => props.theme.colors.headingColor};
    margin-bottom: 10px;
    font-size: 14px;
    position: relative;
  }

  input,
  textarea {
    color: ${props => props.theme.colors.headingColor};
  }
`

export const ExPirationWrapper = styled.div`
  margin-top: 50px;

  > h2 {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    margin-top: 0px;
    margin-bottom: 23px;
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
    &::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
      text-transform: lowercase;
    }

    &:-ms-input-placeholder { /* Internet Explorer 10-11 */
      text-transform: lowercase;
    }

    &::-ms-input-placeholder { /* Microsoft Edge */
      text-transform: lowercase;
    }
  }
`

export const CheckBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 18px;
  cursor: pointer;

  svg {
    color: ${props => props.theme.colors.secundaryLight};
    &.active {
      color: ${props => props.theme.colors.primary};
    }
    font-size: 16px;
    min-width: 16px;
    margin-right: 12px;
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

export const ButtonWrapper = styled.div`
  position: sticky;
  top: 100%;
  padding: 20px 0;

  button {
    height: 44px;
    border-radius: 8px;
  }
`

export const LoyaltyImage = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 8px;
  overflow: hidden;
  cursor: -webkit-grab;
  cursor: grab;
  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.1));

  img,
  div {
    width: 100%;
    border-radius: 8px;
    height: 100%;
    overflow: hidden;
  };

  img{
    object-fit: cover;
  }
`

export const UploadImageIconContainer = styled.div`
  position: absolute;
  top: 0px;
  background: rgba(0,0,0,0.2);
  ${({ small }) => small ? css`
    padding: 4px;
  ` : css`
    padding: 8px;
  `}
`

export const UploadImageIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #FFF;
  border: 1px dashed #fff;
  span {
    margin: 0;
    text-align: center;
    font-size: 14px;
  }

  svg {   
    width: 45px;
    height: 45px;
  }
`
