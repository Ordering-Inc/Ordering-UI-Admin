import React from 'react'
import styled, { css } from 'styled-components'

export const SingleListBusinessContainer = styled.tbody`
  border-bottom: 1px solid #E9ECEF;
  cursor: pointer;
`

export const WrapperImage = styled.div`
  max-width: 45px;
  max-height: 45px;
  height: 45px;
  width: 45px;
  ${({ isSkeleton }) => !isSkeleton && css`
    border: 1px solid #E3E3E3;
  `}
  border-radius: 10px;

  ${props => props.theme?.rtl ? css`
    margin-left: 10px;
  ` : css`
    margin-right: 10px;
  `}
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

export const BusinessGeneralInfo = styled.div`
  display: flex;
  align-items: center;
`

export const InfoBlock = styled.div`
  p {
    margin: 5px 0 0 0;
    font-size: 12px;
  }
  p.bold {
    margin: 0px;
    font-size: 14px;
    font-weight: 600;
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

export const SingleBusinessCardContainer = styled.div`
  border: 1px solid #E9ECEF;
  box-sizing: border-box;
  border-radius: 8px;

  margin: 10px;
  width: calc(100% - 20px);

  @media (min-width: 768px) {
    width: calc(33.33% - 20px);
  }

  @media (min-width: 1024px) {
    width: calc(25% - 20px);
  }
  @media (min-width: 1200px) {
    width: calc(20% - 20px);
  }
`

const BusinessHeaderStyled = styled.div`
  width: 100%;
  box-sizing: border-box;
  position: relative;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  object-fit: cover;
  background-position: center;
  height: 75px;
  border-radius: 8px;

  @media (min-width: 768px) {
    height: 100px;
  }
`

export const BusinessHeader = (props) => {
  const style = {}
  if (props.bgimage && !props.isClosed) {
    style.backgroundImage = `url(${props.bgimage})`
  } else {
    style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.bgimage})`
  }

  return (
    <BusinessHeaderStyled {...props} style={style}>
      {props.children}
    </BusinessHeaderStyled>
  )
}

const BusinessLogoStyled = styled.div`
  display: flex;
  width: 45px;
  height: 45px;
  box-sizing: border-box;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  object-fit: cover;
  background-position: center;
  min-height: 45px;
  border-radius: 8px;
  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.1));
  position: absolute;
  bottom: -22px;
  ${props => props.theme?.rtl ? css`
    right: 15px;
  ` : css`
    left: 15px;
  `}
`

export const BusinessLogo = (props) => {
  const style = {}
  if (props.bgimage) {
    style.backgroundImage = `url(${props.bgimage})`
  }

  return (
    <BusinessLogoStyled {...props} style={style}>
      {props.children}
    </BusinessLogoStyled>
  )
}

export const BusinessContent = styled.div`
  padding: 40px 10px 10px 10px;
  color: ${props => props.theme.colors.headingColor};
  h1 {
    font-size: 16px;
    margin-bottom: 5px;
  }

  p {
    font-size: 12px;
    margin: 0px;
    color: ${props => props.theme.colors.lightGray};
  }
`

export const BusinessActionContainer = styled.div`
  display: flex;
  align-items: center;
`
