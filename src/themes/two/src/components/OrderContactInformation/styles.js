import React from 'react'
import styled, { css } from 'styled-components'

export const BusinessInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid ${props => props.theme.colors?.secundary};
`

export const PhotoWrapper = styled.div`
  max-width: 48px;
  max-height: 48px;
  height: 48px;
  width: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  border-radius: 7.6px;

  svg {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  @media print {
    display: none;
  }
`

const PhotoStyled = styled.div`
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

export const Photo = (props) => {
  return (
    <PhotoStyled
      {...props}
      style={{ backgroundImage: `url(${props.bgimage})` }}
    >
      {props.children}
    </PhotoStyled>
  )
}

export const InfoContent = styled.div`
  flex: 1;
  > div {
    display: flex;
    align-items: center;

    > p {
      margin: 0px;
      font-weight: 600;
      color: ${props => props.theme.colors?.headingColor};
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
    }

    > button {
      ${props => props.theme?.rtl ? css`
        margin-right: 8px;
      ` : css`
        margin-left: 8px;
      `}
    }
  }

  > p {
    color: ${props => props.theme.colors?.lightGray};
    font-size: 12px;
    margin: 0px;
  }

  ${props => props.theme?.rtl ? css`
    margin-right: 15px;
  ` : css`
    margin-left: 15px;
  `}
`

export const CustomerInfo = styled(BusinessInfo)``

export const DriverInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const DriverInfo = styled(BusinessInfo)`
  border-bottom: none;
`

export const DriverSelectorContainer = styled.div`
  min-width: 40%;
  > div {
    width: 100%;
    border-radius: 8px;
    border-color: ${props => props.theme.colors?.secundary};
    > div {
      background-color: ${props => props.theme.colors?.secundary};
      > div:first-child {
        color: ${props => props.theme.colors?.headingColor};
      }
    }
  }
`
