import styled, { css } from 'styled-components'

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

export const BackActions = styled.div`
  position: absolute;
  top: 20px;
  left: 4%;
  a {
    text-decoration: none;
    cursor: pointer;
    font-weight: bold;
  }
  svg {
    font-size: 30px;
    color: #000;
  }
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
  width: 80%;
  max-width: 1200px;
  margin: auto;
  display: flex;
  align-items: center;

  @media (max-width: 576px) {
    justify-content: center;
    width: 90%;
  }

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
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${props => props.theme?.colors?.primary};
  border-radius: 10px;
  box-sizing: border-box;

  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    object-fit: cover;
    border: 1px solid #F5F5F5;
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

  @media (max-width: 576px) {
    width: 50px;
    height: 50px;
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
  text-align: left;
  margin-left: 10px;

  ${props => props.theme?.rtl && css`
    margin-right: 10px;
    margin-left: 0px;
    text-align: right;
  `}
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
  border-radius: 97px;
`

export const MessageBusiness = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 0.8em;
  width: 80%;
  max-width: 1200px;
  margin: auto;

  @media (max-width: 576px) {
    width: 90%;
  }
`

export const MessageCustomer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex-wrap: wrap;
  font-size: 0.8em;
  width: 80%;
  max-width: 1200px;
  margin: auto;

  @media (max-width: 576px) {
    width: 90%;
  }
`

export const BubbleConsole = styled.div`
  border-radius: 50px;
  padding: 5px 15px;
  max-width: 40%;
  margin-bottom: 15px;
  background: #EFEFEF;
  text-align: center;
  height: auto;
  overflow: hidden;
  overflow-wrap: break-word;
  @media (min-width: 1024px){
    max-width: 30%
  }
`

export const BubbleBusines = styled.div`
  border-radius: 40px 40px 40px 0px;
  padding: 10px 25px 10px 25px;
  max-width: 60%;
  min-width: 80px;
  margin-bottom: 10px;
  background: #EFEFEF;
  overflow: hidden;
  overflow-wrap: break-word;
  &[name=image]{
    border-radius: 40px 40px 40px 0px;
    width: 100%;
  }

  ${props => props.theme?.rtl && css`
      border-radius: 40px 40px 0px 40px;
  `}

  @media (min-width: 480px) {
    border-radius: 97px 97px 97px 0px;

    ${props => props.theme?.rtl && css`
      border-radius: 97px 97px 0px 97px;
      &[name=image]{
        border-radius: 40px 40px 0px 40px;
       }
    `}
  }

  @media (min-width: 1024px){
    max-width: 40%;
  }
`

export const BubbleCustomer = styled.div`
  border-radius: 40px 40px 0px 40px;
  padding: 10px 25px 10px 25px;
  max-width: 60%;
  min-width: 80px;
  height: auto;
  margin-bottom: 10px;
  background: #182964;
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

    &[name=image]{
      border-radius: 40px 40px 40px 0px;
     }
  `}
  
  @media (min-width: 480px){
    border-radius: 97px 97px 0px 97px;

    ${props => props.theme?.rtl && css`
      border-radius: 97px 97px 97px 0px;
    `}
  }

  @media (min-width: 1024px){
    max-width: 40%
  }

`

export const SkeletonBubbleCustomer = styled.div`
  span{
    border-radius: 97px 97px 0px 97px;
    ${props => props.theme?.rtl && css`
    border-radius: 97px 97px 97px 0px;
    `}
  }
`

export const SkeletonBubbleBusiness = styled.div`
  span{
    border-radius: 97px 97px 97px 0px;
    ${props => props.theme?.rtl && css`
    border-radius: 97px 97px 0px 97px;
    `}
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
  justify-content: space-between;

  @media (max-width: 576px) {
    justify-content: center;
  }
`

export const TabItem = styled.div`
  font-size: 20px;
  padding: 5px 20px;
  cursor: pointer;

  ${({ active }) => active && css`
    border-bottom: 2px solid ${props => props.theme.colors.btnDarkBlue};
    color: ${props => props.theme.colors.btnDarkBlue};
  `}

  @media (max-width: 576px) {
    padding: 5px 10px;
  }
`
export const SkeletonHitory = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  column-gap: 20px;

  span {
    border-radius: 30px;
  }

  @media (max-width: 576px) {
    span {
      width: 250px !important;
    }
  }
`
export const WrapperOrderHistory = styled.div``
export const WrapperLogistics = styled.div``
