import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const DetailsContainer = styled.div`
  padding: 20px;
  overflow: auto;
  width: 100%;
`
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 52px;

  h1 {
    font-size: 20px;
    font-weight: 700;
    margin: 0;
  }
`
export const FormInput = styled.form`
  min-height: calc(100% - 100px);
  > button {
    position: sticky;
    top: 100%;
    height: 44px;
  }
`
export const ProductTagImage = styled.div`
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
export const FormController = styled.div`
  display: flex;
  flex-direction: column;
  margin: 38px 0;

  label {
    font-size: 14px;
    margin-bottom: 11px;
  }
`
export const ActionSelectorWrapper = styled.div`
  ${props => props.theme?.rtl ? css`
    margin-left: 35px;
  ` : css`
    margin-right: 35px;
  `}
  position: relative;
  button {
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
      background: ${props => props.theme.colors.secundary} !important;
      > svg {
        color:  #151b26;
      }
    }
    &:active {
      background: ${props => props.theme.colors.secundaryDarkContrast} !important;
    }
  }

  .show {
    >div {
      border: 1px solid ${props => props.theme.colors.borderColor};
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
      transform: translate(0, 36px) !important;
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
