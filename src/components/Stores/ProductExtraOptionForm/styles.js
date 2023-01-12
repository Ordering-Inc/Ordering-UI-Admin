import styled, { css } from 'styled-components'

export const OptionContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 576px) {
    flex-direction: row;
  }
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
  margin: 0px auto 15px auto;

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
  @media (min-width: 576px) {
    ${props => props.theme?.rtl ? css`
      margin-right: 20px;
    ` : css`
      margin-left: 20px;
    `}
  }
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
  justify-content: space-between;
  margin-top: 10px;
  > div:not(:last-child) {
    width: 85px;
  }
  @media (min-width: 450px) {
    justify-content: flex-start;
  }
  @media (min-width: 1200px) {
    margin-top: 0px;
  }
`

export const InputWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
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
  ${({ header }) => header && css`
    input {
      visibility: hidden;
      height: 0;
      padding: 0;
    }
    label {
      margin-bottom: 0;
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

  @media (max-width: 1200px) {
    ${({ noMargin }) => noMargin && css`
      margin: 0;
    `}
  }
`

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 27px;
  padding-top: 6px;
  padding-bottom: 6px;
  
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
  ${({ header }) => header && css`
    border-left: none;
    border-right: none;
  `}
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
