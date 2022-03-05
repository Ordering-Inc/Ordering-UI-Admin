import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const ProdcutGalleryContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 20px 10px;
  position: relative;
  overflow-x: hidden;

  > h1 {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 30px;
    padding: 0 10px;
  }
`

export const GalleryImagesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const GalleryItem = styled.div`
  width: 130px;
  margin: 10px;
`

export const GalleryItemBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0;

  > input {
    width: 100%;
    font-size: 14px;
    ${({ isAdd }) => isAdd ? css`
      border: 1px solid ${props => props.theme.colors.borderColor};
    ` : css`
      border: none;
    `}
    outline: none;
  }
`

export const GalleryImage = styled.div`
  width: 100%;
  height: 130px;
  border-radius: 8px;
  overflow: hidden;
  cursor: -webkit-grab;
  cursor: grab;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  position: relative;

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
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0px;
  background: rgba(0,0,0,0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ small }) => small ? css`
    padding: 4px;
  ` : css`
    padding: 8px;
  `}
  svg {
    color: #FFF;
    font-size: 50px;
    color: ${props => props.theme.colors.textGray};
  }

  p {
    margin: 0px;
    padding-top: 14px;
    font-size: 12px;
    color: ${props => props.theme.colors.textGray};
    text-align: center;
  }
`
export const DropDownWrapper = styled.div`
  ${props => props.theme?.rtl ? css`
    margin-right: 5px;
    ` : css`
    margin-left: 5px;
  `}
  button {
    display: flex;
    background: transparent !important;
    border: none;
    padding: 5px;
    border-radius: 8px;
    svg {
      color: ${props => props.theme.colors.headingColor};
      font-size: 20px;
    }
    &:active,
    &:focus {
      border-color: unset !important;
      box-shadow: none !important;
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
