import React from 'react'
import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;

  div.skeleton-loading {
    justify-content: space-between;

    > div {
      width: 48%;
    }
  }

  @media (max-width: 992px) {
    div.skeleton-loading {
      > div {
        width: 100%;
      }
    }
  }
`
export const WrapperContainer = styled.div`
  width: 92%;
  margin: auto;
  display: flex;
  position: relative;
  max-width: 1200px;

  @media (max-width: 1200px) {
    padding: 30px 0;
  }

  @media (max-width: 992px) {
    flex-direction: column;
    row-gap: 20px;
    width: 92%;
  }
`
export const OrderInfoContent = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 50px 50px 50px 0;
  box-sizing: border-box;

  @media (max-width: 1200px) {
    padding: 25px 25px 25px 0;
    width: 55%;
  }

  @media (max-width: 992px) {
    width: 100%;

    padding: 20px 0;
  }
`
export const PhotoWrapper = styled.div`
  max-width: 80px;
  max-height: 80px;
  height: 80px;
  width: 80px;
  display: flex;
  align-items: center;

  svg {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin-right: 10px;
    ${props => props.theme?.rtl && css`
      margin-left: 10px;
      margin-right: 0;
    `}
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
  min-height: 75px;
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
export const OrderInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 10px 0px 20px;
`
export const OrderData = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h1, p {
    margin: 0px;
  }
  h1 {
    margin-bottom: 5px;
    font-size: 24px;
  }
  p {
    font-size: 13px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  p:nth-child(1) {
    opacity: 0.8;
  }
  p.date {
    font-weight: bold;
    font-size: 15px;
  }
  p.uuid {
    display: none;
  }

  @media (min-width: 512px) {
    p.uuid {
      display: block;
    }
  }
`
const StatusBarStyled = styled.div`
  height: 5px;
  margin: 10px 0px 0px;
  background: ${props => `linear-gradient(to right, ${props.theme.colors.btnSecondary} ${props.percentage}%, ${props.theme.colors.disabled} ${props.percentage}%)`};
`

export const StatusBar = (props) => {
  return (
    <StatusBarStyled
      {...props}
      // style={{ background: `linear-gradient(to right, #D81212 ${props.percentage}%, #BFBFBF ${props.percentage}%)` }}
    >
      {props.children}
    </StatusBarStyled>
  )
}

export const OrderStatus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  span {
    padding: 2px 10px;
    border: 1px solid ${props => props.theme.colors.btnSecondary};
    color: ${props => props.theme.colors.btnSecondary};
    text-align: center;
    border-radius: 20px;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 13px;
    max-width: 200px;
  }

  @media (min-width: 410px) {
    span {
      font-size: initial;
    }
  }
`
export const StatusImage = styled.div`
  img {
    display: flex;
    width: 40px;
    height: 40px;
    box-sizing: border-box;
    position: relative;
    background-repeat: no-repeat, repeat;
    background-size: contain;
    object-fit: contain;
    border-radius: 10px;
    margin-top: 15px;
  }

  @media (min-width: 410px) {
    img {
      width: 50px;
      height: 50px;
    }
  }
`
export const SectionTitle = styled.p`
  margin: 0px;
  font-size: 18px;
  color: #151824;

  ${({ driver }) => driver && css`
    @media print {
      display: none;
    }
  `}
`
export const SectionContainer = styled.div`
  display: flex;
  margin: 15px 0px 30px;
  width: 100%;
  column-gap: 10px;
`
export const InfoBlock = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-transform: capitalize;
  h1,
  span {
    margin: 0px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  h1 {
    font-size: 20px;
    color: #263238;
    font-weight: 500;
  }

  span {
    font-size: 15px;
    opacity: 0.8;
  }
`
export const CustomerContactBlock = styled.div`
  display: flex;
  column-gap: 20px;

  button {
    outline: none;
    border: 1px solid #182964;
    border-radius: 42px;
    background-color: transparent;
    cursor: pointer;
    width: 90px;
    height: 30px;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    &:active {
      background: ${() => darken(0.07, '#CCC')};
    }

    svg {
      display: flex;
      align-items: center;
      column-gap: 10px;
      color: #182964;
      margin-right: 10px;
      font-size: 18px;
    }
  }

  @media  print {
    display: none;
  }
`
export const OrderProducts = styled(SectionContainer)`
  flex-direction: column;
  max-height: 300px;
  overflow: auto;
  width: calc(100% + 20px);
  padding-right: 20px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 100%;
  }
`
export const OrderBill = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border-top: 1px solid #BFBFBF;
  table {
    width: 100%;
    font-size: 18px;
    tr td:nth-child(2) {
      text-align: right;
      ${props => props.theme?.rtl && css`
        text-align: left;
      `}
    }
  }

  table.total {
    border-top: 1px solid #BFBFBF;
    margin-top: 15px;
    tr {
      font-size: 20px;
      td:nth-child(1) {
        font-weight: bold;
        padding-top: 10px;
      }
      td:nth-child(2) {
        font-weight: bold;
        color: ${props => props.theme.colors.btnDarkBlue};
        padding-top: 10px;
      }
    }
  }
`
export const BackActions = styled.div`
  position: absolute;
  top: 20px;
  left: 4%;
  z-index: 999;
  a {
    text-decoration: none;
    cursor: pointer;
    font-weight: bold;
  }
  svg {
    font-size: 30px;
    color: #000;
  }

  @media (max-width: 1200px) {
    left: 2%;
  }

  @media print {
    display: none;
  }
`
export const SkeletonBlock = styled.div`
  width: ${({ width }) => width && `${width}%`};
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`
export const SkeletonBlockWrapp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`
export const SkeletonInfoCell = styled.div`
  display: flex;
  flex-direction: column;
  column-gap: 10px;
`
export const SkeletonInnerBlock = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`
export const WrapperSkeletonText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const WrapperSkeletonBottom = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 100px;

  span {
    width: 90%;
    border-radius: 30px;
  }
`
export const WrapperSkeletonButton = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    border-radius: 20px;
  }
`
export const PayAndOrderTypeInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 5px;
  border-top: 1px solid #D8D8D8;
  border-bottom: 1px solid #D8D8D8;
  margin-top: 30px;

  @media (max-width: 576px) {
    flex-direction:  column;
  }
`
export const Paymethod = styled.div`
  display: flex;
  flex-direction: column;

  p {
    color: #182964;
    margin: 0px;
  }

  @media (max-width: 576px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 0;
  }
`
export const PaymethodContent = styled.div`
  display: flex;
  column-gap: 10px;
  align-items: center;  
  color: #151824;

  img {
    width: 15px;
  }
`
export const PaymethodCreatedDate = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  border-left: 1px solid #D8D8D8;
  border-right: 1px solid #D8D8D8;

  @media (max-width: 576px) {
    width: 100%;
    border-left: none;
    border-right: none;
    border-top: 1px solid #D8D8D8;
    border-bottom: 1px solid #D8D8D8;
    padding: 10px 0;
  }
`
export const PaymethodCreatedDateContent = styled.div`
  p {
    color: #182964;
    margin: 0px;

    &:last-child {
      color:  #151824;
    }
  }

  @media (max-width: 576px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`
export const OrderTypeInfo = styled.div`
  display: flex;
  flex-direction: column;

  p {
    color: #182964;
    margin: 0px;
  }

  @media (max-width: 576px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 0;
  }
`
export const OrderTypeContent = styled.div`
  display: flex;
  column-gap: 10px;
  align-items: center;  
  color: #151824;

  img {
    width: 13px;
  }
`
export const ContactInfoContent = styled.div`
  width: 50%;
  background: ${props => props.theme.colors.primary};
  border-radius: 40px;
  padding: 30px 50px;
  box-sizing: border-box;

  @media (max-width: 1200px) {
    padding: 20px 25px;
    width: 45%;
  }
  
  @media (max-width: 992px) {
    width: 100%;
  }
`
export const ContactInfoHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  column-gap: 15px;
  margin-bottom: 20px;

  & > div {
    &:first-child {
      width: 270px;
    }
  }

  @media (max-width: 576px) {
    flex-direction: column-reverse;
    row-gap: 15px;

    & > div {
      &:first-child {
        width: 100%;
      }
    }
  }

  @media print {
    display: none;
  }
`
export const WrapperButton = styled.div`
  display: flex;
  align-items: center;
  column-gap: 15px;

  @media (max-width: 576px) {
    width: 100%;
    justify-content: flex-end;
  }
`
export const ButtonLink = styled.button`
  background: ${props => props.theme.colors.btnDarkBlue};
  outline: none;
  border: none;
  border-radius: 100%;
  cursor: pointer;
  width: 44px;
  height: 44px;
  align-items: center;
  display: flex;
  justify-content: center;

  &:active {
    background: ${(props) => darken(0.07, props.theme.colors.btnDarkBlue)};
  }
`
export const DriverSelectorContainer = styled.div`
  margin: 15px 0 100px 0;
  & > div {
    width: 100%;
  }

  @media print {
    display: none;
  }
`
export const PrintButtonContainer = styled.div`
  padding-bottom: 60px;
  button {
    width: 100%;
    padding: 10px 15px;
    font-size: 20px;
  }
  @media print {
    display: none;
  }
`
export const ChatContainer = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  background: #fff;
  height: calc(100vh - 65px);
  z-index: 1000;
`
export const PhoneNumber = styled.div`
  display: none;
  font-size: 15px;

  @media print {
    display: block;
  }
`
