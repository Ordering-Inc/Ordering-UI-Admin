import React from 'react'
import styled, { css } from 'styled-components'

export const BusinessDetailsContainer = styled.div`
  padding: 20px;
  position: relative;
`

export const DetailsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const BusinessName = styled.h1`
  color: ${props => props.theme.colors.headingColor};
  font-size: 24px;
  margin: 0px;
  font-weight: 600;

  ${props => props.theme?.rtl ? css`
    margin-left: 10px;
  ` : css`
    margin-right: 10px;
  `}
`

export const LeftHeader = styled.div`
  display: flex;
  align-items: center;
`

export const RightHeader = styled.div`
  display: flex;
  align-items: center;
`

export const SupportButton = styled.span`
  cursor: pointer;
  ${props => props.theme?.rlt ? css`
    margin-left: 10px;
  ` : css`
    margin-right: 10px;
  `}
  svg {
    color: ${props => props.theme.colors.lightGray};
    font-size: 24px;
  }
`

export const CloseButton = styled.span`
  cursor: pointer;
  svg {
    color: ${props => props.theme.colors.headingColor};
    font-size: 24px;
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
  height: 150px;
  border-radius: 8px;
  margin-top: 20px;
  ${({ isSkeleton }) => isSkeleton && css`
    background: #E9ECEF;
  `}

  @media (min-width: 768px) {
    height: 180px;
  }
`

export const BusinessHeader = (props) => {
  const style = {}
  style.backgroundImage = `url(${props.bgimage})`

  return (
    <BusinessHeaderStyled {...props} style={style}>
      {props.children}
    </BusinessHeaderStyled>
  )
}

const BusinessLogoStyled = styled.div`
  display: flex;
  width: 60px;
  height: 60px;
  box-sizing: border-box;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  object-fit: cover;
  background-position: center;
  min-height: 60px;
  border-radius: 8px;
  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.1));
  position: absolute;
  bottom: -30px;
  ${props => props.theme?.rtl ? css`
    right: 20px;
  ` : css`
    left: 20px;
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

export const BusinessDetailsContent = styled.div`
  margin-top: 60px;
`

export const BusinessDescription = styled.p`
  color: ${props => props.theme.colors.headingColor};
  margin: 25px 0;
`

export const BusinessConfigsContainer = styled.div`
  border: 1px solid #E9ECEF;
  border-radius: 8px;
  margin-bottom: 50px;
  > div:last-child {
    border-bottom: none;
  }
`

export const BusinessConfigItem = styled.div`
  cursor: pointer;
  padding: 10px 15px;
  display: flex;
  justify-content: space-between;
  color: ${props => props.theme.colors.headingColor};
  border-bottom: 1px solid #E9ECEF;
  
  svg {
    font-size: 20px;
  }
`
