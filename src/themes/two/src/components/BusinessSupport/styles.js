import React from 'react'
import styled, { css } from 'styled-components'

export const BusinessSupportContainer = styled.div`
  h1 {
    font-size: 24px;
    color: ${props => props.theme.colors.headingColor};
    font-weight: 600;
  }
`

export const BusinessOwnersContainer = styled.div`
  margin: 30px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const BusinessOwnerInfo = styled.div`
  display: flex;

  div.info {
    > p:first-child {
      color: ${props => props.theme.colors.primary};
      margin: 0;
    }

    >p:last-child {
      display: flex;
      align-items: center;
      color: ${props => props.theme.colors.headingColor};
      margin: 0;
      font-size: 12px;
    }
  }
`

export const WrapperImage = styled.div`
  max-width: 45px;
  max-height: 45px;
  height: 45px;
  width: 45px;
  ${({ isSkeleton }) => !isSkeleton && css`
    border: 1px solid #E3E3E3;
  `}
  border-radius: 100%;

  svg {
    width: 100%;
    height: 100%;
    padding: 7px;
    box-sizing: border-box;
    border-radius: 100%;
  }

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
  border-radius: 100%;
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
