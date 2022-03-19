import React from 'react'
import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const ProductDetailsContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  overflow-x: hidden;

  ${({ disabled }) => disabled && css`
    pointer-events: none;
  `}
`

export const DetailsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`

export const ProductName = styled.h1`
  flex: 1;
  color: ${props => props.theme.colors.headingColor};
  font-size: 20px;
  margin: 0px;
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
`
export const ProductImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;
  border-radius: 8px;
  overflow: hidden;
  background: ${props => props.theme.colors.lightGray};
  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.1));
  margin-bottom: 20px;

  > svg {
    width: 70%;
    height: 70%;
    color: white;
  }

  @media (min-width: 768px) {
    width: 200px;
    height: 200px;
    margin-bottom: 0px;
  }
`
const ProductImageStyled = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  object-fit: cover;
  background-position: center;
`

export const ProductImage = (props) => {
  const style = {}
  style.backgroundImage = `url(${props.bgimage})`

  return (
    <ProductImageStyled {...props} style={style}>
      {props.children}
    </ProductImageStyled>
  )
}

export const ProductDetailsContent = styled.div`
  margin: 20px 0;
`

export const ProductPrice = styled.p`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  margin: 30px 0 15px;
  color: ${props => props.theme.colors.headingColor};
  span {
    font-size: 18px;
    font-weight: 300;
    color: ${props => props.theme.colors.lightGray};
    text-decoration: line-through;
    ${props => props.theme?.rtl ? css`
      margin-right: 15px;
    ` : css`
      margin-left: 15px;
    `}
  }
`

export const ProductDescription = styled.p`
  word-break: break-word;
  font-size: 14px;
  color: ${props => props.theme.colors.headingColor};
  margin: 25px 0;
`

export const ProductConfigsContainer = styled.div`
  border: 1px solid ${props => props.theme.colors.borderColor};
  border-radius: 8px;
  margin-bottom: 50px;
  overflow: hidden;
  > div:first-child {
    border-top: none !important;
  }

  > div:last-child {
    border-bottom: none !important;
  }
`

export const ProductConfigOption = styled.div`
  cursor: pointer;
  padding: 13px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${props => props.theme.colors.lightGray};
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};

  &:hover {
    background-color: ${props => props.theme.colors.lightPrimary};
  }
  
  ${({ active }) => active && css`
    color: ${props => props.theme.colors.headingColor};
    background-color: ${props => props.theme.colors.lightPrimary};
    border-bottom: 1px solid ${props => props.theme.colors.primary} !important;
    border-top: 1px solid ${props => props.theme.colors.primary};
  `}

  span {
    font-size: 12px;
  }
  svg {
    font-size: 14px;
  }
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
export const ProductPreviewHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-right: 1px solid ${props => props.theme.colors.borderColor};
  ${props => props.theme?.rtl ? css`
    margin-left: 40px;
  ` : css`
    margin-right: 40px;
  `}

  h1 {
    font-size: 20px;
    font-weight: 700;
    margin: 0;
  }
  > div {
    display: flex;
    button {
      margin: 0 5px;
    }
  }
`
export const ProductSummaryContent = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`
export const ProductSales = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 90px;
  padding: 10px;
  border: 1px solid #E9ECEF;
  box-sizing: border-box;
  border-radius: 7.6px;

  @media (min-width: 768px) {
    width: 230px;
  }
`
export const RolWrapper = styled.div`
  margin-left: 20px;
  ${props => props.theme?.rtl && css`
    margin-right: 20px;
    margin-left: 0;
 `}

  h4 {
    font-size: 20px;
    font-weight: 600;
    margin: 0;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    ${props => props.theme.colors.headingColor};
  }

  p {
    margin: 0;
    font-size: 12px;
    line-height: 18px;
    ${props => props.theme.colors.lightGray};
  }
`
export const ProductDetails = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10px 0;
`
export const FieldsItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 48%;
  margin-bottom: 25px;
  
  h4 {
    margin: 0;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    ${props => props.theme.colors.headingColor};
  }

  p {
    margin: 0;
    font-size: 12px;
    line-height: 18px;
    ${props => props.theme.colors.lightGray};
  }
`
