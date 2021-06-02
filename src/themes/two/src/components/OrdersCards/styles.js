import React from 'react'
import styled, { css } from 'styled-components'

export const OrdersListContainer = styled.div`

`
export const OrderNunberContainer = styled.div`

`
export const OrderCard = styled.div`
  border-radius: 8px;
  border: 1px solid ${props => props.theme.colors?.secundary};
  margin-bottom: 20px;
  padding: 15px 20px;
  p,
  h2 {
    color: ${props => props.theme.colors.headingColor};
    margin: 0px;
  }
  
  h2 {
    font-size: 18px;
  }
`

export const OrderHeader = styled.div`
  > div {
    display: flex;
    margin: 10px 0;
    > p {
      font-size: 14px;
    }
  }
`

export const ViewDetails = styled.a`
  cursor: pointer;
  color: ${props => props.theme.colors.primary};
  font-size: 14px;
  text-decoration: underline;
  margin: 0 10px;
`

export const BusinessInfo = styled.div`
  width: 50%;
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
      font-weight: 600;
    }
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
`

export const DriverSelectorWrapper = styled.div`
  width: 50%;
  box-sizing: border-box;
  ${props => props.theme?.rtl ? css`
    border-right: 1px solid ${props => props.theme.colors?.secundary};
  ` : css`
    border-left: 1px solid ${props => props.theme.colors?.secundary};
  `}

  > div {
    > div:first-child {
      border: none;
      padding: 0px;
    }
  }
`
