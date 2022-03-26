import styled, { css } from 'styled-components'
import React from 'react'

export const Container = styled.div``

export const NotificationBlock = styled.div`
  border-top: 1px solid ${props => props.theme.colors.borderColor};
  padding: 40px 0px;

  ${({ noBorder }) => noBorder && css`
    border: none;
    padding-top: 0px;
  `}
`

export const BlockHeader = styled.div`
  display: flex;
  align-items: center;

  > span {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    text-transform: capitalize;
  }

  > label {
    margin: 0px 15px;
  }
`

export const PreivewEditWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 15px;

  > span {
    font-size: 14px;
    line-height: 24px;
  }
  > button {
    height: 44px;
  }
`

export const PreviewContent = styled.div``

export const EmailPreviewWrapper = styled.div`
  max-width: 317px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid ${props => props.theme.colors.borderColor};

  ${({ isSkeleton }) => isSkeleton && css`
    border: none;
    background: ${props => props.theme.colors.borderColor};
    height: 200px;
  `}
`

export const EmailPreviewHeader = styled.div`
  width: 100%;
  height: 18px;
  background: ${props => props.theme.colors.secundaryDarkContrast};
`

export const PointGroup = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 4px;
  height: 100%;
  > div {
    width: 7px;
    height: 7px;
    min-width: 7px;
    border-radius: 50%;
    background-color: #CED4DA;
    margin: 0px 4px;
  }
`

export const EmailPreviewContent = styled.div`
  background-color: ${props => props.theme.colors.primaryContrast};
  padding: 13px 30px;

  > h2 {
    margin-top: 0px;
    margin-bottom: 10px;
    text-align: center;
    font-size: 10px;
  }
  p {
    margin: 0px;
    font-size: 7px;
  }
`

export const SmsPreviewWrapper = styled.div`
  margin: 0 auto;
  background-color: ${props => props.theme.colors.secundaryDarkContrast};
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  width: 212px;
  padding: 20px 16px 0px 16px;
`

export const NotificationPreviewWrapper = styled(SmsPreviewWrapper)``

export const NotificationPreviewLayout = styled.div`
  width: 100%;
`

const SmsContentLayoutStyled = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  object-fit: cover;
  background-position: center;
`

export const SmsContentLayout = (props) => {
  return (
    <SmsContentLayoutStyled
      {...props}
      style={{ backgroundImage: `url(${props.bgimage})` }}
    >
      {props.children}
    </SmsContentLayoutStyled>
  )
}

const NotificationContentHeaderStyled = styled.div`
  width: 100%;
  height: 51px;
  box-sizing: border-box;
  position: relative;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  object-fit: cover;
  background-position: center;
`
export const NotificationContentHeader = (props) => {
  return (
    <NotificationContentHeaderStyled
      {...props}
      style={{ backgroundImage: `url(${props.bgimage})` }}
    >
      {props.children}
    </NotificationContentHeaderStyled>
  )
}

export const NotificationContent = styled.div`
  background-color: #EAE1D8;
  padding: 9px;
  height: 145px;
  max-height: 145px;
  overflow: auto;
`

export const SmsPreviewContentWrapper = styled(NotificationContent)`
  background-color: transparent;
  width: 100%;
  padding: 9px;
  margin-top: 30px;
  height: 165px;
  max-height: 165px;
  overflow: auto;
`

export const SmsPreviewContent = styled.div`
  margin: 10px 0px 0px 0px;
  background: ${props => props.theme.colors.secundary};
  border-radius: 7.6px;
  padding: 10px;
  height: fit-content;

  > h2 {
    font-size: 10px;
    margin-top: 0px;
    margin-bottom: 5px;
  }
  p {
    font-size: 7px;
    margin: 0px;
    color: ${props => props.theme.colors.lightGray};
  }
`

export const NotificationMessageContent = styled(SmsPreviewContent)`
  height: fit-content;
  margin: 20px 0px 0px 0px;
`

export const AddNewNotificationButton = styled.div`
  font-size: 14px;
  color: ${props => props.theme.colors.lightGray};
  padding-bottom: 15px;
  span {
    cursor: pointer;
  }

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`
