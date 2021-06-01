import React from 'react'
import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 0;
  flex-direction: column;
  position: fixed;
  background: #FFF;
  height: 100vh;
  top: 0px;
  z-index: 100;
  box-shadow: -4px 0px 7px #ccc;
  overflow-x: hidden;
  transition: 0.5s;
  padding: 20px;

  ${props => props.theme?.rtl ? css`
    left: 0px;
    ` : css`
    right: 0px;
  `}

  @media print {
    box-shadow: none;
  }
`

export const ChatContainer = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  background: #fff;
  height: 100%;
  z-index: 1000;
  box-sizing: border-box;
  border: 1px solid #ccc;
  overflow: hidden;
  border-radius: 7px;
`

export const ButtonLink = styled.div`
  cursor: pointer;
  padding: 5px;
  margin: 0 5px;

  &:hover {
    background-color: ${props => props.theme.colors?.secundary};
    border-radius: 5px;
  }

  svg {
    color: ${props => props.theme.colors?.secundaryContrast};
    font-size: 24px;
  }
`

export const OrderStatus = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;

  h2 {
    color: ${props => props.theme.colors?.headingColor};
    margin: 0px;
    font-size: 18px;
  }

  p {
    color: ${props => props.theme.colors?.headingColor};
    font-size: 14px;
    margin: 0px;
  }

  > div:not(:first-child) {
    min-width: 40%;
    > div {
      border-radius: 8px;
      border-color: ${props => props.theme.colors?.secundary};
      background-color: ${props => props.theme.colors?.secundary};
    }
  }
`

export const StatusBarContainer = styled.div`
`

const StatusBarStyled = styled.div`
  height: 10px;
  border-radius: 10px;
  background: ${props => `linear-gradient(to right, ${props.theme.colors.primary} ${props.percentage}%, ${props.theme.colors.disabled} ${props.percentage}%)`};
`

export const StatusBar = (props) => {
  return (
    <StatusBarStyled
      {...props}
    >
      {props.children}
    </StatusBarStyled>
  )
}

export const AdvancedLogistic = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;

  > div {
    p {
      color: ${props => props.theme.colors?.headingColor};
      margin: 0px;

      &:first-child {
        font-weight: 600;
      }
      &:not(:first-child) {
        font-size: 14px;
      }
    }
  }
`

export const BusinessInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid ${props => props.theme.colors?.secundary};
`

export const PhotoWrapper = styled.div`
  max-width: 60px;
  max-height: 60px;
  height: 60px;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  border-radius: 7.6px;

  svg {
    width: 50px;
    height: 50px;
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
  > div {
    display: flex;
    align-items: center;

    svg {
      font-size: 20px;
    }
    > p {
      margin: 0px;
      font-weight: 600;
      color: ${props => props.theme.colors?.headingColor};
    }
  }

  > p {
    color: ${props => props.theme.colors?.headingColor};
    font-size: 14px;
    margin: 0px;
  }

  ${props => props.theme?.rtl ? css`
    margin-right: 15px;
  ` : css`
    margin-left: 15px;
  `}
`
export const NotificationIcon = styled.div`
  color: ${props => props.theme.colors.primary};
  font-size: 20px;
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
    > div {
      border-radius: 8px;
      border-color: ${props => props.theme.colors?.secundary};
      background-color: ${props => props.theme.colors?.secundary};
      > div:first-child {
        color: ${props => props.theme.colors?.headingColor};
      }
    }
  }
`

export const OrderProducts = styled.div`
  margin-top: 20px;
  h2 {
    color: ${props => props.theme.colors?.headingColor};
    font-size: 18px;
  }
`
