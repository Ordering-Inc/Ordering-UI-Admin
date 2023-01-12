import React from 'react'
import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const Container = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  > button {
    height: 44px;
    margin-top: 25px;
  }
`
export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;

  ${props => props.theme?.rtl ? css`
    margin-left: 40px;
  ` : css`
    margin-right: 40px;
  `}

  h1 {
    font-size: 20px;
    margin: 0;
    font-weight: 700;
    ${props => props.theme?.rtl ? css`
      margin-left: 8px;
    ` : css`
      margin-right: 8px;
    `}
  }
`
export const LeftHeader = styled.div`
  display: flex;
  align-items: center;
`

export const RightHeader = styled.div`
  display: flex;
  align-items: center;
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

export const BannerImage = styled.div`
  ${({ isWebBanner }) => isWebBanner ? css`
    height: 95px;
  ` : css`
    width: 130px;
    height: 130px;
  `}
  margin-bottom: 20px;
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
    font-size: 55px;
    color: ${props => props.theme.colors.lightGray};
  }

  p {
    margin: 0px;
    padding-top: 14px;
    font-size: 12px;
    color: ${props => props.theme.colors.lightGray};
    text-align: center;
  }
`
export const FormController = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 14px;
    margin-bottom: 8px;
  }
`
export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  .select {
    ${props => props.theme?.rtl ? css`
      margin-left: 2px;
    ` : css`
      margin-right: 2px;
    `}
    font-size: 14px;
    background: ${props => props.theme.colors.secundary};
    border: none;
    > div:first-child {
      padding-top: 5px;
      padding-bottom: 5px;
    }
    .list {
      > div {
        white-space: nowrap;
      }
    }
  }
`
export const SearchBarWrapper = styled.div`
  margin: 20px 0;
`
export const BusinessListWrapper = styled.div`
  height: calc(100% - 400px);
  overflow-x: hidden;

  #not-found-source {
    height: 100%;
  }
`
export const BusinessItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #E9ECEF;
  margin-bottom: 5px;
`
export const WrapperImage = styled.div`
  max-width: 38px;
  max-height: 38px;
  height: 38px;
  width: 38px;
  ${({ isSkeleton }) => !isSkeleton && css`
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  `}
  border-radius: 7.6px;

  ${props => props.theme?.rtl ? css`
    margin-right: 12px;
  ` : css`
    margin-left: 12px;
  `}
`

const ImageStyled = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  object-fit: cover;
  background-position: center;
  border-radius: 7.6px;
`
export const Image = (props) => {
  return (
    <ImageStyled
      {...props}
      style={{ backgroundImage: `url(${props.bgimage})` }}
    >
      {props.children}
    </ImageStyled>
  )
}

export const BusinessName = styled.span`
  font-size: 12px;
  ${props => props.theme?.rtl ? css`
    margin-right: 12px;
  ` : css`
    margin-left: 12px;
  `}
`
export const ProductLinkContainer = styled.div`
  margin: 20px 0;
  height: calc(100% - 370px);
`
export const Option = styled.div`
  display: flex;
  align-items: center;
  
  img {
    min-height: 38px;
    min-width: 38px;
    height: 38px;
    width: 38px;
    border-radius: 8px;
    object-fit: cover;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border: 1px solid ${props => props.theme.colors.borderColor};
    margin-right: 8px;
    ${props => props.theme?.rtl && css`
      margin-right: 0px;
      margin-left: 8px;
    `}
  }
  span {
    display: flex;
    flex-direction: column;
    font-size: 12px;
    max-width: 170px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    color: ${props => props.theme.colors.textGray};
    b {
      font-size: 14px;
      line-height: 20px;
      font-weight: 400;
      color: ${props => props.theme.colors.textBlack};
    }
  }
`
export const RadioButton = styled.div`
  cursor: pointer;
`
