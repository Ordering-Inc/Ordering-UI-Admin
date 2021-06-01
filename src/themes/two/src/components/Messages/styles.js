import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const MessagesContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`

export const WrapperContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  box-sizing: border-box;
`

export const HeaderProfile = styled.div`
  display: flex;
  padding: 20px 0px;

  div {
     p {
       margin-left: 10px;
       ${props => props.theme?.rtl && css`
         margin-right: 10px;
         margin-left: 0px;
      `}
      }
     strong {
      p{
        margin-block-end: 0.1em;
      }
    }
    p {
      margin-block-start: 0.1em;
      font-size: 0.7em
    }
  }

  @media (max-width: 576px) {
    padding: 10px 0;
  }
`
export const WrapperHeader = styled.div`
  width: 91%;
  max-width: 1200px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 576px) {
    justify-content: center;
    width: 90%;
  }

  ${({ messageDashboardView }) => messageDashboardView && css`
    width: 92%;
    border-bottom: 1px solid #D8D8D8;
    padding-bottom: 5px;
    flex-wrap: wrap;
    row-gap: 10px;
  `}

  ${({ historyView }) => historyView && css`
    width: 92%;
  `}
`
export const HeaderName = styled.p`
  font-size: 1.1em;
  margin-block-end: 0.1em;
  margin-block-start: 0.1em;

`

export const Status = styled.p`
  margin-block-start: 0.1em;
  margin-block-end: 0.1em;
  font-size: 0.7em;
`

export const Image = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 1px 4px rgb(0 0 0 / 10%);
  border-radius: 7.6px;
  box-sizing: border-box;

  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    object-fit: cover;
  }

  img[name]{
    border: 1px solid #182964;
    border-radius: 50%;
  }

  svg {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    padding: 6px;
  }
`

export const HeaderOnline = styled.div`
  display: flex;
  flex-direction: column;
  height: 60px;
  line-height: 1.5;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  h1,
  span {
    margin: 0px;
  }

  h1 {
    font-size: 20px;
    font-weight: 500;
  }

  span {
    font-size: 15px;
    font-weight: 300;
  }
`

export const Chat = styled.div`
  flex: 1;
  display: flex;
  overflow-y: auto;
  overflow-x: hidden;
  flex-direction: column;
  > :first-child{
    margin-top: 10px;
  }
  @media (min-width: 768px){
  }
`

export const MessageConsole = styled.div`
  display: inline-flex;
  justify-content: center;
  font-size: 0.8em;
`

export const MessageBusiness = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 0.8em;
  width: 91%;
  max-width: 1200px;
  margin: auto;
`

export const MessageCustomer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex-wrap: wrap;
  font-size: 0.8em;
  width: 91%;
  max-width: 1200px;
  margin: auto;
`

export const BubbleConsole = styled.div`
  border-radius: 5px;
  padding: 10px 25px 10px 25px;
  margin-bottom: 15px;
  background: #EFEFEF;
  text-align: center;
  height: auto;
  overflow: hidden;
  overflow-wrap: break-word;
  @media (min-width: 1024px){
    max-width: 60%;
  }
`

export const BubbleBusines = styled.div`
  border-radius: 5px;
  padding: 10px 25px 10px 25px;
  max-width: 60%;
  min-width: 80px;
  margin-bottom: 10px;
  background: #EFEFEF;
  overflow: hidden;
  overflow-wrap: break-word;
  &[name=image]{
    width: 100%;
  }
`

export const BubbleCustomer = styled.div`
  border-radius: 5px;
  padding: 10px 25px 10px 25px;
  max-width: 60%;
  min-width: 80px;
  height: auto;
  margin-bottom: 10px;
  background: ${props => props.theme.colors.primary};
  color: white;
  overflow-wrap: break-word;
  overflow: hidden;

  p:last-child {
    left: 10px;
  }

  &[name=image]{
    border-radius: 40px 40px 0px 40px;
    width: 100%;
  }

  ${props => props.theme?.rtl && css`
    border-radius: 40px 40px 40px 0px;

    p:last-child {
      left: initial;
      right: 10px;
    }
  `}
`

export const SkeletonBubbleCustomer = styled.div`
  span{
    border-radius: 5px;
  }
`

export const SkeletonBubbleBusiness = styled.div`
  span{
    border-radius: 5px;
  }
`

export const ChatImage = styled.div`
  width: 100%;
  height: auto;
  img{
    width: 100%;
    height: auto;
    vertical-align: middle;
    object-fit: contain;
  }
`

export const PartnerName = styled.p`
  margin-block-start: 0;
  margin-block-end: 0.6em;
  font-size: 1.1em;
`

export const MyName = styled.p`
    margin-block-start: 0;
    margin-block-end: 0.6em;
    font-size: 1.1em;
    text-align: right;

    ${props => props.theme?.rtl && css`
      text-align: left;
  `}
`

export const TimeofSent = styled.p`
  position: relative;
  text-align: right;
  font-size: 0.8em;
  margin-block-start: 0.2em;
  margin-block-end: initial;

  ${props => props.theme?.rtl && css`
    text-align: left;
  `}
`

export const SendForm = styled.div`
  display: flex;
  background: #FAFAFA;
  border-top: 1px solid #EEEEEE;
  height: 70px;

  @media (min-width: 768px) {
    height: 90px;
  }
`

export const Send = styled.form`
  align-items: center;
  display: flex;
  margin-top: 3px;
  height: auto;
  width: 80%;
  max-width: 1200px;
  margin: auto;
  justify-content: space-between;
  column-gap: 50px;
  input {
    padding-top: 10px;
    padding-bottom: 10px;
    width: 100%;
    flex: 1;
  }

  @media (max-width: 576px) {
    width: 90%;
  }

  ${({ messageDashboardView }) => messageDashboardView && css`
    width: 92%;
  `}
`

export const WrapperSendInput = styled.div`
  flex: 1;
  position: relative;
  box-sizing: border-box;
`

export const SendImage = styled.label`
  width: 25px;
  height: 25px;
  
  position: absolute;
  top: 10px;
  right: 0px;

  input {
    display: none;
  }

  svg {
    color: #CFD0D0;
    width: 25px;
    height: 25px;
    cursor: pointer
  }
`

export const WrapperDeleteImage = styled.div`
  position: absolute;
  top: 7px;
  right: -10px;

  button{
    &:disabled {
    cursor: not-allowed;
    }
  }
`

export const WrapperSendMessageButton = styled.div`
  white-space: nowrap;
  width: fit-content;

  button{
    padding-top: 7px;
    padding-bottom: 7px;
    svg {
       width: 1.5em;
       height: 1.5em; 
       vertical-align: middle;
       color: white;
       ${props => props.theme?.rtl && css`
        margin-left: 10px;
        margin-right: 0px;
        transform: rotate(270deg)
      `}
    }

    span {
      display: none;
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

  @media (min-width: 480px){
    button{
      svg {
        margin-right: 10px;
      }
      span {
        display: inline;
      }
    }
  }
`
export const WrapperHitoryHeader = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`

export const TabItem = styled.div`
  font-size: 14px;
  padding: 5px 10px;
  cursor: pointer;
  text-align: center;
  color: #909BA9;
  
  ${({ active }) => active && css`
    border-bottom: 1px solid ${props => props.theme.colors?.headingColor};
    color: ${props => props.theme.colors?.headingColor};
    font-weight: 600;
  `}

  @media (max-width: 576px) {
    padding: 5px 10px;
    font-size: 14px;
  }
`
export const SkeletonHitory = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  column-gap: 20px;

  @media (max-width: 576px) {
    span {
      width: 250px !important;
    }
  }
`
export const WrapperLogistics = styled.div``
export const WrapperLogisticInformation = styled.div``
export const HeaderInfo = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  border-bottom: 1px solid ${props => props.theme.colors.secundary};
`
export const SearchAndDetailControlContainer = styled.div`
  display: flex;
  column-gap: 10px;
  align-items: center;
`
export const MessagesSearch = styled.div`
  position: relative;

  img {
    position: absolute;
    top: 13px;
    left: 14px;
  }

  input {
    width: 200px;
    border: 1px solid #1C202E;
    border-radius: 22px;
    outline: none;
    padding: 8px;
    padding-left: 40px;
    font-size: 15px;
    background: transparent;

    &::placeholder {
      color: #182964;
    }
  }
`
export const OrderDetailIconButton = styled.button`
  outline: none;
  border: none;
  background: #b9bcc7;
  &:active {
    background: ${() => darken(0.07, '#b9bcc7')};
  }
  border-radius: 5px;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 5px;

  svg {
    font-size: 30px;
  }
`
