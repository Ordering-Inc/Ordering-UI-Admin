import styled, { css } from 'styled-components'

export const Container = styled.div`
`
export const Option = styled.div`
  font-size: 14px;
  padding: 3px 0;
  text-transform: capitalize;
`
export const ThemeStructureContainer = styled.div`
  overflow: auto;
  height: calc(var(--vh, 1vh) * 100 - 220px);
  .select-wrapper {
    background: ${props => props.theme.colors.secundary};
  }
`
export const SelectThemeContainer = styled.div`
  button {
    height: 42px;
    margin: 30px 0 20px 0;
  }
`
export const PageBlockTitle = styled.div`
  padding: 10px 5px;
  font-weight: 600;
  border-top: 1px solid ${props => props.theme.colors.borderColor};
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  background: ${props => props.theme.colors.secundary};
  font-size: 16px;
`
export const BlockContainer = styled.div`
  padding: 20px 5px;
  border-bottom: 5px solid ${props => props.theme.colors.borderColor};

  h3 {
    font-size: 14px;
    font-weight: 600;
    margin-top: 0px;
    margin-bottom: 8px;
    text-transform: capitalize;
  }
`
export const ComponentContainer = styled.div`
  margin-bottom: 15px;
  ${props => props.theme?.rtl ? css`
    padding-right: 10px;
  ` : css`
    padding-left: 10px;
  `}
  h4 {
    font-size: 12px;
    margin: 0px;
    text-transform: capitalize;
  }
`
export const ComponentHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  > input {
    ${props => props.theme?.rtl ? css`
      margin-left: 5px;
    ` : css`
      margin-right: 5px;
    `}
  }
`
export const OptionContainer = styled.div`
  margin: 15px 0;
  border: 1px solid ${props => props.theme.colors.borderColor};
  border-radius: 8px;
  padding: 10px;
  h5 {
    font-size: 12px;
    margin: 0;
    text-transform: capitalize;
  }
  > input {
    width: 100%;
  }
  .select-wrapper,
  > input {
    margin-top: 8px;
  }
`
export const OptionHeader = styled.div`
  display: flex;
  align-items: center;
  > input {
    ${props => props.theme?.rtl ? css`
      margin-left: 5px;
    ` : css`
      margin-right: 5px;
    `}
  }
`
export const UpdateButtonWrapper = styled.div`
  padding-top: 20px;
  button {
    height: 42px;
  }
`
export const ColorPickerContainer = styled.div`
  margin-top: 8px;
`
export const UploadImageIconContainer = styled.div`
  position: absolute;
  top: 0px;
  padding: 8px;
`

export const UploadImageIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  span {
    margin: 0;
    color: #ADB5BD;
    font-size: 12px;
  }

  svg {
    color: #CED4DA;
    width: 32px;
    height: 32px;
  }
`
export const ComponentImage = styled.div`
  height: 160px;
  width: 160px;
  overflow: hidden;
  cursor: -webkit-grab;
  cursor: grab;
  background: ${props => props.theme.colors.borderColor};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
  border-radius: 7.6px;

  img,
  div {
    width: 100%;
    border-radius: 7.6px;
    height: 100%;
    overflow: hidden;
    position: relative;
  };

  img{
    object-fit: contain;
  }
`
export const PageSelectWrapper = styled.div`
  padding: 20px 0 30px 0;
`
