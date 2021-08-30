import React from 'react'
import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const OrderItemContainer = styled.div`
  border-left: 5px solid;
  border-color: ${({ filterColor }) => filterColor || '#0E9B55'};
  padding: 10px;
  border-bottom: 1px solid #F2F2F2;
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;
  ${({ deliveryUI }) => deliveryUI && css`
    ${({ deliveryUIActive }) => deliveryUIActive && css`
      background: #e8e8e8;
    `}
  `}
  ${({ messageUI }) => messageUI && css`
    ${({ messageUIActive }) => messageUIActive && css`
      background: #e8e8e8;
    `}
  `}

  ${({ isOrdersListView }) => isOrdersListView && css`
    cursor: initial;
  `}
`
export const WrapperInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0px;

  ${({ border }) => border && css`
    border-bottom: 1px solid #F2F2F2;
    border-top: 1px solid #F2F2F2;
    margin: 5px 0;
    padding: 10px 0;
  `}
`
export const WrapperAccordionImage = styled.div`
  max-width: 50px;
  max-height: 50px;
  height: 50px;
  width: 50px;
  border: 1px solid #e3e3e3;
  border-radius: 5px;
  margin: 0px;

  ${({ small }) => small && css`
    width: 25px;
    height: 25px;
    border-radius: 5px;
  `}

  svg {
    width: 100%;
    height: 100%;
    padding: 3px;
    box-sizing: border-box;
    border-radius: 50%;
  }
`
const AccordionImageStyled = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  background-repeat: no-repeat, repeat;
  background-size: contain;
  object-fit: cover;
  background-position: center;
  border-radius: 5px;
`
export const AccordionImage = (props) => {
  return (
    <AccordionImageStyled
      {...props}
      style={{ backgroundImage: `url(${props.bgimage})` }}
    >
      {props.children}
    </AccordionImageStyled>
  )
}

export const BusinessInfo = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
`

export const BusinessContent = styled.div`
  h1 {
    color: #000000;
    font-size: 14px;
    margin: 0px;
    line-height: 13px;
  }
  p {
    color: #000000;
    font-size: 12px;
    margin: 0px;
    max-width: 90px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`
export const DeliveryInfo = styled.div`
  display: flex;
  flex-direction: column;

  p {
    color: #343434;
    font-size: 12px;
    margin: 0px;
  }
`
export const DeliveryType = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;
  justify-content: flex-end;
`
export const DeliveryIcon = styled.div`
  width: 14px;
  height: 14px;
  display: flex;

  img {
    width: 100%;
    height: 100%;
  }
`

export const DeliveryName = styled.p`
  margin: 0px;
  color: #343434;
  font-size: 12px;
`
export const CustomerInfo = styled.div`
  display: flex;
  column-gap: 8px;
  border: 1px solid;
  border-color: #1c202e;
  border-radius: 28px;
  align-items: center;
  padding: 5px 10px;
  width: 48%;
  box-sizing: border-box;
`
export const DriverInfo = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
  width: 48%;
  font-size: 11px;
  box-sizing: border-box;

  > div {
    width: 100%;
  }
`
export const CustomerContent = styled.div`
  p {
    color: #000;
    margin: 0px;
    white-space: nowrap;
    max-width: 80px;
    text-overflow: ellipsis;
    overflow: hidden;
    &:first-child {
      font-size: 11px;
      font-weight: 500;
    }
    &:last-child {
      font-size: 8px;
    }
  }
`
export const WrapperOrderStatus = styled.div`
  padding-top: 10px;
  > div {
    width: 100%;
    border-color: ${props => props.theme.colors.btnDarkBlue};
  }
`

export const WrapperDriverSelector = styled.div`
  > div {
    width: 100%;
    > div {
      padding: 0 10px;
    }
  }
`
export const UnreadMessageIndicator = styled.span`
  background: ${props => props.theme.colors.btnDarkBlue};
  color: #fff;
  padding: 0px 3px;
  border-radius: 12px;
  min-width: 12px;
  font-size: 12px;
  text-align: center;
`
export const OrderLabelItem = styled.div`
  display: flex;
  column-gap: 5px;
  font-size: 12px;
`
export const MoreDetailsButton = styled.p`
  font-size: 12px;
  color: ${props => props.theme.colors.btnDarkBlue} !important;
  text-decoration: underline;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    color: ${props => darken(0.07, props.theme.colors.btnDarkBlue)} !important;
  }
`
export const TimeAgo = styled.p`
  font-weight: 600;
  text-align: right;
`
export const WrapIndicator = styled.div`
  display: flex;
  justify-content: flex-end;
`
