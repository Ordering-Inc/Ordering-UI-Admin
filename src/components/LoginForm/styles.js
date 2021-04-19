import React from 'react'
import styled, { css } from 'styled-components'

export const LoginContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  min-height: ${({ isPopup }) => isPopup ? '500px' : '100vh'};

  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`
const Side = styled.div`
  display: flex;
  width: 100%;
`
export const HeroSide = styled.div`
  display: none;

  ${({ bgimage }) => bgimage && css`
    background-repeat: no-repeat, repeat;
    background-size: cover;
    object-fit: cover;
    background-position: center;
  `}

  @media (min-width: 992px) {
    width: 50%;
    text-align:  center;
    display: block;
    img {
      width: 35%;
      margin-top: 18vh;
      margin-left: -80px;
    }
  }
`

export const LoginHeroContainer = (props) => {
  const style = {}
  style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.bgimage})`

  return (
    <HeroSide {...props} style={style}>
      {props.children}
    </HeroSide>
  )
}

export const FormSide = styled(Side)`
  flex-direction: column;
  justify-content: center;
  background-color: #1C202E;
  padding: 0 8%;
  box-sizing: border-box;
  height: 100vh;

  @media (min-width: 769px) {
    height: auto;     
  }

  @media (min-width: 992px) {
    margin-left: -80px;
    border-radius: 54px 0px 0px 54px;
    width: calc(50% + 80px);
  }
`
export const LoginWith = styled.div`
  font-size: 14px;

  @media (min-width: 425px) {
    font-size: 18px;
  }

  @media (min-width: 768px) {
    font-size: 14px;
  }

  @media (min-width: 992px) {
    font-size: ${({ isPopup }) => isPopup ? '13px' : '18px'};
  }

  @media (min-width: 1200px) {
    ${({ isPopup }) => isPopup && css`
      font-size: 17px;
    `};
  }
`

export const FormInput = styled.form`
  width: ${({ isPopup }) => isPopup ? '90%' : '100%'};
  display: flex;
  flex-direction: column;

  * {
    padding: 8px 0px;
  }

  input:not(:last-child) {
    margin-top: 15px;
    margin-bottom: 15px;
    padding-left: 60px;
    padding-top: 12px;
    padding-bottom: 12px;
  }

  button {
    position: relative;
    margin-top: 40px;
    padding: 12px 5px;

    svg {
      position: absolute;
      right: 35px;
      top: 8px;
      font-size: 24px;
    }
  }
`

export const RedirectLink = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 10px;
  font-size: 17px;

  span {
    color: #4C6CDB;
    margin-right: 5px;

    ${props => props.theme?.rtl && css`
      margin-left: 5px;
      margin-right: 0px;
    `}
  }

  a {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
  }

  * {
    margin: 0px;
    padding: 0px;
  }

  ${({ register }) => register && css`
    width: calc(90% - 20px);

    @media (min-width: 481px) {
      width: ${({ isPopup }) => isPopup ? 'calc(90% - 20px)' : 'calc(80% - 20px)'};
    }
  `}

  @media (min-width: 425px) {
    flex-direction: row;
  }

  @media (min-width: 768px) {
    font-size: 14px;
  }

  @media (min-width: 992px) {
    font-size: ${({ isPopup }) => isPopup ? '13px' : '18px'};
    flex-direction: row;
  }

  @media (min-width: 1200px) {
    ${({ isPopup }) => isPopup && css`
      font-size: 16px;
    `};
  }
`

export const SocialButtons = styled.div`
   width: calc(100% - 40px);
   margin-top: 5px;

  button {
    display: flex;
    justify-content: start;
    width: 100%;
    padding: 5px 30px;
    color: #000000;

    img {
      width: 30px;
    }

    div {
      font-size: 0.8em;
    }
  }
`

export const TitleFormSide = styled.div`
  color: #fff;
  
  h1 {
    text-transform: uppercase;
    font-size: 24px;
    margin: 0px;
  }

  p {
    font-size: 16px;
    margin-top: 0px;
    margin-bottom: 60px;
  }

  @media (min-width: 425px) {
    h1 {
      font-size: 40px;
    }
    p {
      font-size: 20px;
    }
  }

  @media (min-width: 769px) {
    h1 {
      font-size: 50px;
    }
    p {
      font-size: 24px;
      margin-bottom: 80px;
    }
  }  
`
export const InputWithIcon = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  input {
    width: 100%;
  }

  img {
    position: absolute;
    width: 20px;
    padding: 8px 20px;
  }

  svg {
    position: absolute;
    font-size: 24px;
    color: #707070;
    padding: 8px 20px;
  }
`
