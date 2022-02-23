import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 100%;
`
export const EditCategoryContent = styled.div`
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const BusinessEnableWrapper = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  span {
    font-weight: 700;
    font-size: 20px;
    ${props => props.theme?.rtl ? css`
      padding-left: 20px;
    ` : css`
      padding-right: 20px;
    `}
  }
`

export const CategoryTypeImage = styled.div`
  margin-top: 48px;
  height: 240px;
  width: 240px;
  border-radius: 8px;
  overflow: hidden;
  cursor: -webkit-grab;
  cursor: grab;
  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.1));
  ${({ disabled }) => disabled && css`
    pointer-events: none;
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

export const BtnWrapper = styled.div`
  position: absolute;
  bottom: 50px;
  button {
    height: 42px;
  }
`

export const UploadImageIconContainer = styled.div`
  position: absolute;
  top: 0px;
  background: rgba(0,0,0,0.2);
`

export const UploadImageIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #FFF;
  span {
    margin: 0;
  }
  svg {
    width: 25px;
    height: 25px;
  }
`

export const CategoryNameWrapper = styled.div`
  margin-top: 50px;
  label {
    width: 100%;
    font-size: 14px;
    color: ${props => props.theme.colors.headingColor};
    margin-bottom: 12px;
  }
  input {
    font-size: 14px;
    width: 100%;
  }
`
export const ParentCategorySelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  label {
    font-size: 14px;
    margin-bottom: 12px;
  }
  .select {
    padding-top: 4px;
    padding-bottom: 4px;
    border: none;
    background-color: ${props => props.theme.colors.secundary};
  }
`
export const Option = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  white-space: nowrap;
  font-size: 14px;
  color: ${props => props.theme.colors.secundaryContrast};
`
export const RightHeader = styled.div`
  display: flex;
  align-items: center;

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
      color: #B1BCCC;
      font-size: 20px;
    }
    &:after {
      display: none;
    }
    &:hover {
      background: #1507260a !important;
      > svg {
        color:  #151b26;
      }
    }
    &:active {
      background: #1507261a !important;
    }
  }
  .show {
    button {
      background: ${props => props.theme.colors.secundary} !important;
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
        color: ${props => props.theme.colors.headingColor};
      }
      .dropdown-item:last-child {
        color: ${props => props.theme.colors.danger};
      }
    }
  }
`
