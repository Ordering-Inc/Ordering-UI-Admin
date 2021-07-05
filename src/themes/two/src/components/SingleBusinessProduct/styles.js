
import React from 'react'
import styled, { css } from 'styled-components'

export const BusinessActionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 25px;
`

export const SingleListBusinessContainer = styled.tbody`
  border-bottom: 1px solid #E9ECEF;
  cursor: pointer;
  transition: all 0.3s;
  .business {
    padding-right: 20px;
  }

  &:hover {
    background: #E9F2FE;
  }
`

export const BusinessGeneralInfo = styled.div`
  display: flex;
  align-items: center;
  ${props => props.theme?.rtl ? css`
  border-left: 1px solid #E9ECEF;
` : css`
  border-right: 1px solid #E9ECEF;
`}

  p {
    margin: 0;
    font-weight: 500;
    font-size: 12px;
    color: ${props => props.theme.colors.headingColor};
  }
`
export const WrapperImage = styled.div`
  max-width: 38px;
  max-height: 38px;
  min-width: 38px;
  height: 38px;
  width: 38px;
  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.1));
  border-radius: 10px;

  ${props => props.theme?.rtl ? css`
    margin-left: 10px;
  ` : css`
    margin-right: 10px;
  `}
`

export const InfoBlock = styled.div`
  p {
    margin: 0;
    font-size: 12px;
    color: ${props => props.theme.colors.headingColor};
  }

  &.description{
    p {
      font-size: 10px;
      color: ${props => props.theme.colors.lightGray};
    }
  }
`

export const BusinessEnableWrapper = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;

  span {
    font-size: 14px;

    ${props => props.theme?.rtl ? css`
      padding-left: 10px;
    ` : css`
      padding-right: 10px;
    `}
  }
`

const ImageStyled = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  object-fit: cover;
  background-position: center;
  border-radius: 10px;
`
export const Image = (props) => {
  return (
    <ImageStyled
      {...props}
      style={{ backgroundImage: `url(${props.bgimage})` }}
    >
      {props.children}
    </ImageStyled>
  )
}

export const InputName = styled.input`
  border: none;
  outline: none;
  width: 100%;
`
