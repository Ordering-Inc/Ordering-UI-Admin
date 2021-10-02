import styled, { css } from 'styled-components'
import React from 'react'

export const ReviewDetailsContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: 20px;
  box-sizing: border-box;
`

export const Header = styled.div`
  margin-bottom: 30px;
  h1 {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 0px;
    ${props => props.theme?.rtl ? css`
      margin-left: 15px;
    ` : css`
      margin-right: 15px;
    `}
  }
`

export const ProductImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`

export const WrapperImage = styled.div`
  ${({ isSmall }) => isSmall ? css`
    max-width: 40px;
    max-height: 40px;
    height: 40px;
    width: 40px;
  ` : css`
    max-width: 120px;
    max-height: 120px;
    height: 120px;
    width: 120px;
  `}

  ${({ isSkeleton }) => isSkeleton ? css`
    display: flex;
    align-items: center;
  ` : css`
    border: 1px solid #E3E3E3;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  `}
  border-radius: 8px;

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

export const ReviewContentWrapper = styled.div`
`

export const ReviewHeader = styled.div`
`

export const LikeSignWrapper = styled.div`
  ${({ isLike }) => isLike ? css`
    > svg:first-child {
      color: ${props => props.theme.colors.primary};
    }
  ` : css`
    > svg:last-child {
      color: ${props => props.theme.colors.primary};
    }
  `}

  svg {
    color: ${props => props.theme.colors.disabled};
    font-size: 22px;

    &:first-child {
      ${props => props.theme?.rtl ? css`
        margin-left: 10px;
      ` : css`
        margin-right: 10px;
      `}
    }
  }
`

export const ReviewComment = styled.p`
  font-size: 14px;
  margin: 15px 0;
`

export const NotReviewed = styled.p`
  font-size: 14px;
`
