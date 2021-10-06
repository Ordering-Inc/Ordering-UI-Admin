import styled, { css } from 'styled-components'
import React from 'react'

export const ReviewDetailsContainer = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  h1 {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 0;
    ${props => props.theme?.rtl ? css`
      margin-left: 15px;
    ` : css`
      margin-right: 15px;
    `}
  }
`

export const DriverPhotoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`

export const WrapperImage = styled.div`
  max-width: 120px;
  max-height: 120px;
  height: 120px;
  width: 120px;
  ${({ isSkeleton }) => !isSkeleton && css`
    border: 1px solid #E3E3E3;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  `}
  border-radius: 10px;

  ${props => props.theme?.rtl ? css`
    margin-left: 10px;
  ` : css`
    margin-right: 10px;
  `}

  > svg {
    width: 100%;
    height: 100%;
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
  border-radius: 8px;
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

export const ReviewItemContatiner = styled.div`
  margin-bottom: 40px;
`

export const ReviewQualityContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ReviewBarContainer = styled.div`
  margin: 15px 0;
`

const ReviewBarStyled = styled.div`
  height: 6px;
  border-radius: 10px;
  background: ${props => `linear-gradient(to right, ${props.theme.colors.headingColor} ${props.percentage}%, ${props.theme.colors.borderColor} ${props.percentage}%)`};
`

export const ReviewBar = (props) => {
  return (
    <ReviewBarStyled
      {...props}
    >
      {props.children}
    </ReviewBarStyled>
  )
}

export const ReviewQualityTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    margin: 0px;
    color: ${props => props.theme.colors.lightGray};
    font-size: 12px;
  }
`

export const Comment = styled.div`
  font-size: 12px;
  margin: 25px 0;
`

export const NotReviewed = styled.p`
  font-size: 14px;
`
