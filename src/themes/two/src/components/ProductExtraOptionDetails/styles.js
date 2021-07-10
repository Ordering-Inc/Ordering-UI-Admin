import styled, { css } from 'styled-components'

export const MainContainer = styled.div`
  h1 {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 20px;
    color: ${props => props.theme.colors.headingColor};
  }
`

export const OptionContainer = styled.div`
  display: flex;
  width: 100%;
`

export const OptionImage = styled.div`
  width: 95px;
  height: 95px;
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
  label {
    color: ${props => props.theme.colors.headingColor};
    font-size: 14px;
    margin-bottom: 10px;
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
`

export const ActionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
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

export const DropDownWrapper = styled.div`
  ${props => props.theme?.rtl ? css`
    margin-right: 35px;
    ` : css`
    margin-left: 35px;
  `}
  button {
    background: #F8F9FA !important;
    border: none;
    padding: 0px;
    svg {
      color: ${props => props.theme.colors.headingColor};
    }

    &:after {
      display: none;
    }
  }

  > div {
    > div {
      border: 1px solid #E9ECEF;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
      border-radius: 8px;

      a:last-child {
        color: #E63757;
      }
    }
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

  @media (min-width: 1200px) {
    max-width: initial;
  }
`
