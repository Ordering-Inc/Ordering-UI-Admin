import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const MainContainer = styled.div`
`
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  h1 {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 0px;
    color: ${props => props.theme.colors.headingColor};
  }

  ${props => props.theme?.rtl ? css`
    margin-left: 40px;
  ` : css`
    margin-right: 40px;
  `}
`
export const ActionSelectorWrapper = styled.div`
  button {
    display: flex;
    background: transparent !important;
    border: none;
    padding: 5px;
    border-radius: 8px;

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
      background: ${props => darken(0.1, props.theme.colors.secundaryDarkContrast)} !important;
    }
  }

  .show {
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
        color: ${props => props.theme.colors.headingColor};
        padding: 7px 20px;
        &:active {
          background: ${props => darken(0.1, props.theme.colors.secundary)} !important;
        }
      }
      .dropdown-item:last-child {
        color: ${props => props.theme.colors.danger};
      }
    }
  }
`
export const OptionContainer = styled.div`
  display: flex;
  width: 100%;
`

export const OptionImage = styled.div`
  width: 95px;
  height: 95px;
  position: relative;
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
  padding: 4px;
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
  }

  svg {   
    font-size: ${({ small }) => small ? '16px' : '32px'};
  }
`

export const OptionInfoContainer = styled.div`
  flex: 1;
  ${props => props.theme?.rtl ? css`
    margin-right: 20px;
  ` : css`
    margin-left: 20px;
  `}
`

export const OptionContent = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1200px) {
    flex-direction: row;
  }
`

export const RightOptionContent = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  > div:not(:last-child) {
    width: 100px;
  }
  @media (min-width: 1200px) {
    margin-top: 0px;
  }
`

export const InputWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  input {
    border-color: ${({ isMaxError, theme }) => isMaxError ? `${theme.colors.danger} !important` : '#DEE2E6'};
  }
  label {
    color: ${props => props.theme.colors.headingColor};
    font-size: 14px;
    margin-bottom: 10px;
  }
  .default {
    min-width: 50px;
    width: 65px;
    text-align: center;
    svg {
      color: ${props => props.theme.colors.secundaryLight};
    }
  }
  ${({ primary }) => !primary && css`
    label {
      display: none;
    }
  `}
  ${props => props.theme?.rtl ? css`
    margin-left: 20px;
  ` : css`
    margin-right: 20px;
  `}

  ${props => props.disabled && css`
    div{
      pointer-events: none;
    }
  `}

  ${props => props.maxHeight && css`
    height: 100%;
    div {
      margin-top: 10px;
    }
  `}
  
  .checked {
    svg {
      color: ${props => props.theme.colors.primary};
    }
  }
`

export const ActionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 27px;
  padding-top: 6px;
  padding-bottom: 6px;
  width: 150px;
  
  ${({ primary }) => !primary && css`
    margin-top: 0px;
  `}

  ${({ top }) => top && css`
    margin-top: 30px;
  `}

  ${props => props.theme?.rtl ? css`
    border-right: 1px solid #E9ECEF;
    padding-right: 20px;
  ` : css`
    border-left: 1px solid #E9ECEF;
    padding-left: 20px;
  `}

  > svg {
    cursor: pointer;
    font-size: 16px;
    ${props => props.theme?.rtl ? css`
      margin-right: 35px;
    ` : css`
      margin-left: 35px;
    `}
  }
`

export const EnableWrapper = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;

  span {
    font-size: 14px;
    color: ${props => props.theme.colors.headingColor};

    ${props => props.theme?.rtl ? css`
      padding-left: 10px;
    ` : css`
      padding-right: 10px;
    `}
  }
`

export const OptionSettings = styled.div`
  display: flex;
  margin: 20px 0;
  flex-direction: column;

  @media (min-width: 1200px) {
    flex-direction: row;
  }
`

export const OptionSettingItem = styled.div`
  flex: 1;
`
export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  label {
    cursor: pointer;
    color: ${props => props.theme.colors.headingColor};
    font-size: 14px;
    margin-bottom: 0px;

    ${props => props.theme?.rtl ? css`
      padding-right: 10px;
    ` : css`
      padding-left: 10px;
    `}
  }
`

export const Dvider = styled.div`
  height: 13px;
  background: #F8F9FA;
  margin: 10px 0 30px;
`

export const ModifierOptionsContainer = styled.div`
  margin-bottom: 20px;
  h2 {
    font-size: 18px;
    font-weight: 600;
    color: ${props => props.theme.colors.headingColor};
    margin-bottom: 30px;
  }
`

export const SubOptionContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 15px;
`

export const SubOptionImage = styled.div`
  width: 44px;
  height: 44px;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  cursor: -webkit-grab;
  cursor: grab;
  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.1));

  ${({ primary }) => primary && css`
    margin-top: 27px;
  `}
  ${props => props.theme?.rtl ? css`
    margin-left: 20px;
  ` : css`
    margin-right: 20px;
  `}

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

export const LeftSubOptionContent = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`

export const RightSubOptionContent = styled.div`
  display: flex;
  align-items: center;
  input {
    max-width: 100px;
    ${props => props.theme?.rtl ? css`
      margin-left: 15px;
    ` : css`
      margin-right: 15px;
    `}
  }
`
export const AdddSubOptionForm = styled.form`
  display: flex;
  width: 100%;
  margin-top: 15px;
`

export const SelectboxGroup = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50%;
  
  > div {
    background: #F8F9FA;
    &:first-child {
      margin-bottom: 20px;
    }
  }

  > p {
    font-size: 14px;
    margin: 0;
  }

  @media (min-width: 1200px) {
    max-width: initial;
  }
`

export const AddNewOptionButton = styled.div`
  margin-top: 15px;
  font-size: 14px;
  color: ${props => props.theme.colors.lightGray};
  span {
    cursor: pointer;
  }

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`
