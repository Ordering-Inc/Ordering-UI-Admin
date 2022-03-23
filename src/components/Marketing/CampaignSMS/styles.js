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

export const SmsPreviewWrapper = styled.div`
  margin: 0 auto;
  background-color: ${props => props.theme.colors.secundaryDarkContrast};
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  width: 212px;
  padding: 20px 16px 0px 16px;
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

export const SmsPreviewContentWrapper = styled.div`
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
