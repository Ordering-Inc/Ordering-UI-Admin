import React from 'react'
import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 0;
  position: fixed;
  box-shadow: 0px 8px 35px rgba(0, 0, 0, 0.16);

  ${({ isDriverOrders }) => isDriverOrders && css`
    position: absolute;
    box-shadow: none;

    ${props => props.theme?.rtl ? css`
      border-right: 1px solid #CCC;
    ` : css`
      border-left: 1px solid #CCC;
    `}
  `}
  background: #FFF;
  height: 100vh;
  top: 0px;
  z-index: 1001;
  overflow-x: hidden;
  transition: 0.3s;

  ${props => props.theme?.rtl ? css`
    left: 0px;
    ` : css`
    right: 0px;
  `}
  @media print {
    box-shadow: none;
  }
`

export const SkeletonWrapper = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  flex-direction: column;
  > span {
    width: 100%;
  }
`

export const OrderDetailsContent = styled.div`
  padding: 30px 20px;
  box-sizing: border-box;
  width: 100%;
  overflow-x: hidden;
`

export const OrderDetailsExtraContent = styled.div`
  position: relative;
  padding: 30px 20px;
  box-sizing: border-box;
  width: 100%;

  ${props => props.theme?.rtl ? css`
    border-right: 1px solid #E9ECEF;
  ` : css`
    border-left: 1px solid #E9ECEF;
  `}
`

export const ChatContainer = styled.div`
  border: 1px solid ${props => props.theme.colors.borderColor};
  border-radius: 8px;
  margin-top: 40px;
  height: calc(100% - 40px);
  overflow: hidden;
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
    font-size: 16px;
  }

  p {
    color: ${props => props.theme.colors?.headingColor};
    font-size: 14px;
    margin: 0px;
  }

  > div:not(:first-child) {
    min-width: 40%;
    border-color: ${props => props.theme.colors?.secundary};
    border-radius: 8px;
    > div:first-child {
      background-color: ${props => props.theme.colors?.secundary};
      p {
        color: ${props => props.theme.colors.secundaryContrast};
      }
    }
  }
`

export const StatusBarContainer = styled.div`
`

const StatusBarStyled = styled.div`
  height: 10px;
  border-radius: 10px;
  background: ${props => `linear-gradient(to right, ${props.theme.colors.primary} ${props.percentage}%, ${props.theme.colors.borderColor} ${props.percentage}%)`};
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
        font-weight: 500;
        font-size: 14px;
      }
      &:not(:first-child) {
        font-size: 12px;
        color: ${props => props.theme.colors.lightGray};
      }
    }
  }
`
export const OrderProducts = styled.div`
  padding: 20px 0 10px 0;
  border-bottom: 1px solid #E9ECEF;
  h2 {
    color: ${props => props.theme.colors?.headingColor};
    font-size: 18px;
  }
`

export const CloseButton = styled.div`
  width: fit-content;
  cursor: pointer;
  z-index: 100;
  position: absolute;
  top: 30px;
  ${props => props.theme?.rtl ? css`
    left: 20px;
  ` : css`
    right: 20px;
  `}

  svg {
    font-size: 28px;
    color: ${props => props.theme.colors.headingColor};
  }
`
