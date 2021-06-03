import React from 'react'
import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 0;  
  position: fixed;
  background: #FFF;
  height: 100vh;
  top: 0px;
  z-index: 1001;
  box-shadow: -4px 0px 7px #ccc;
  overflow-x: hidden;
  transition: 0.5s;

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
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
`

export const OrderDetailsExtraContent = styled.div`
  position: relative;
  padding: 20px;
  box-sizing: border-box;
  width: 100%;

  ${props => props.theme?.rtl ? css`
    border-right: 1px solid ${props => props.theme.colors?.secundary};
  ` : css`
    border-left: 1px solid ${props => props.theme.colors?.secundary};
  `}

  > button {
    z-index: 100;
    position: absolute;
    top: 20px;
    ${props => props.theme?.rtl ? css`
      left: 20px;
    ` : css`
      right: 20px;
    `}
  }
`

export const ChatContainer = styled.div`
  border: 1px solid ${props => props.theme.colors.secundary};
  border-radius: 8px;
  margin-top: 40px;
  height: calc(100% - 40px);
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
export const OrderProducts = styled.div`
  margin-top: 20px;
  h2 {
    color: ${props => props.theme.colors?.headingColor};
    font-size: 18px;
  }
`
