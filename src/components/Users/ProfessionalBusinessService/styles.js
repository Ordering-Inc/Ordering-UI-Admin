import React from 'react'
import styled, { css } from 'styled-components'

export const BrandBUSIDetailContainer = styled.div`
  margin-top: 20px;
  min-height: calc(100vh - 158px);
`

export const SearchWrapper = styled.div``

export const BusinessListWrapper = styled.div`
  margin-bottom: 20px;

  #not-found-source {
    height: 100%;
  }
`

export const BusinessItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #E9ECEF;
  margin-bottom: 5px;

  > label {
    margin: 0;
    display: flex;
    align-items: center;
  }
`

export const WrapperImage = styled.div`
  max-width: 38px;
  max-height: 38px;
  height: 38px;
  width: 38px;
  ${({ isSkeleton }) => !isSkeleton && css`
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  `}
  border-radius: 7.6px;

  ${props => props.theme?.rtl ? css`
    margin-right: 12px;
  ` : css`
    margin-left: 12px;
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
  border-radius: 7.6px;
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

export const BusinessName = styled.span`
  font-size: 12px;
  ${props => props.theme?.rtl ? css`
    margin-right: 12px;
  ` : css`
    margin-left: 12px;
  `}
`

export const SelectButtonGroup = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  padding-bottom: 13px;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  button:first-child {
    ${props => props.theme?.rtl ? css`
      margin-left: 16px;
    ` : css`
      margin-right: 16px;
    `}
  }
`
