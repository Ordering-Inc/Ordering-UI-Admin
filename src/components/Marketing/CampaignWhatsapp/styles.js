import styled from 'styled-components'
import React from 'react'

export const Container = styled.div``

export const InputWrapper = styled.div`
  label {
    margin-bottom: 10px;
    font-size: 14px;
    line-height: 24px;
  }
  input, textarea {
    width: 100%;
  }
  textarea {
    height: 80px;
  }
  margin-bottom: 35px;

  .select {
    border: 1px solid ${props => props.theme.colors.gray};
  }
`

export const WhatsAppPreviewWrapper = styled.div`
  margin: 0 auto;
  background-color: ${props => props.theme.colors.secundaryDarkContrast};
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  width: 212px;
  padding: 20px 16px 0px 16px;
`

export const ButtonWrapper = styled.div`
  position: sticky;
  top: 100%;
  padding-bottom: 15px;

  button {
    margin-top: 20px;
    height: 44px;
    border-radius: 8px;
  }
`

export const WhatsAppPreviewLayout = styled.div`
  width: 100%;
`

const WhatsAppContentHeaderStyled = styled.div`
  width: 100%;
  height: 51px;
  box-sizing: border-box;
  position: relative;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  object-fit: cover;
  background-position: center;
`

export const WhatsAppContentHeader = (props) => {
  return (
    <WhatsAppContentHeaderStyled
      {...props}
      style={{ backgroundImage: `url(${props.bgimage})` }}
    >
      {props.children}
    </WhatsAppContentHeaderStyled>
  )
}

export const WhatsAppContent = styled.div`
  background-color: #EAE1D8;
  padding: 9px;
  height: 145px;
  max-height: 145px;
  overflow: auto;
`

export const WhatsAppMessageContent = styled.div`
  margin: 20px 0px 0px 0px;
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
