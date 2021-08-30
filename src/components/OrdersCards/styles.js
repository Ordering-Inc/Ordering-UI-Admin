import React from 'react'
import styled, { css } from 'styled-components'

export const OrdersListContainer = styled.div`
  height: calc(100% - 200px);
  padding: 0 12px 15px 12px;
  box-sizing: border-box;
  overflow-x: hidden;

  @media (min-width: 1024px) and (max-width: 1300px) {
    height: calc(100% - 230px);
  }
`
export const OrderNunberContainer = styled.div`

`
export const OrderCard = styled.div`
  position: relative;
  cursor: pointer;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.colors?.secundary};
  margin-bottom: 20px;
  padding: 15px 20px;

  &:hover {
    background-color: ${props => props.theme.colors.lightPrimary};
  }

  ${({ active }) => active && css`
    background-color: ${props => props.theme.colors.lightPrimary};
    border: 1px solid ${props => props.theme.colors.primary};
  `}

  p,
  h2 {
    color: ${props => props.theme.colors.headingColor};
    margin: 0px;
  }
  
  h2 {
    font-size: 16px;
    font-weight: 600;
  }
`

export const OrderHeader = styled.div`
  > div {
    display: flex;
    margin: 10px 0;
    > p {
      font-size: 12px;
    }
  }
`

export const ViewDetails = styled.a`
  cursor: pointer;
  color: ${props => props.theme.colors.primary};
  font-size: 12px;
  text-decoration: underline;
  margin: 0 10px;
`

export const BusinessInfo = styled.div`
  width: 100%;
  box-sizing: border-box;
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 125px;

  }
  display: flex;
  align-items: center;

  div.info {
    ${props => props.theme?.rtl ? css`
      margin-right: 10px;
    ` : css`
      margin-left: 10px;
    `}
    p {
      margin: 0px;
      color: ${props => props.theme.colors?.headingColor};
      font-size: 12px;
    }
    p.bold {
      font-size: 14px;
      font-weight: 500;
    }
  }
  @media (min-width: 1300px) {
    width: 45%;
  }
`

export const WrapperImage = styled.div`
  max-width: 45px;
  max-height: 45px;
  height: 45px;
  width: 45px;
  ${({ isSkeleton }) => !isSkeleton && css`
    border: 1px solid #E3E3E3;
    border-radius: 10px;
  `}

  svg {
    width: 100%;
    height: 100%;
    padding: 7px;
    box-sizing: border-box;
    border-radius: 50%;
  }
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
  border-radius: 10px;
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

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1300px) {
    flex-direction: row;
  }
`

export const DriverSelectorWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  margin-top: 10px;
  > div {
    > div:first-child {
      border: none;
      padding: 0px;
      > div:first-child {
        padding: 0px
      }
    }
  }

  @media (min-width: 1300px) {
    width: 55%;
    margin-top: 0px;
    ${props => props.theme?.rtl ? css`
      border-right: 1px solid ${props => props.theme.colors?.secundary};
      padding-right: 15px;
    ` : css`
      border-left: 1px solid ${props => props.theme.colors?.secundary};
      padding-left: 15px;
    `}
  }
`

export const WrapperPagination = styled.div`
  margin: 10px 15px 0 15px;
`

export const UnreadMessageCounter = styled.div`
  position: absolute;
  top: 12px;
  ${props => props.theme?.rtl ? css`
    left: 20px;
  ` : css`
    right: 20px;
  `}
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.lightPrimary};
  border-radius: 8px;
  font-size: 12px;
  height: 24px;
  color: ${props => props.theme.colors.primary};
  padding: 0 10px;
`
