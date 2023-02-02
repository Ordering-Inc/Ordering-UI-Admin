import React from 'react'
import styled, { css } from 'styled-components'

export const ReviewsListingContainer = styled.div``

export const ReviewsTable = styled.table`
  margin: 10px 0;
  width: 100%;
  thead {
    tr {
      border-bottom: solid 1px ${props => props.theme.colors.disabled};
    }
  }

  th {
    font-size: 12px;
    font-weight: 700;
  }

  th, td {
    padding: 10px 0;
  }
`

export const ReviewTbody = styled.tbody`
  cursor: pointer;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  &:hover {
    background-color: ${props => props.theme.colors.borderColor};
  }
  ${({ active }) => active && css`
    background-color: ${props => props.theme.colors.lightPrimary} !important;
    td {
      border-top: 1px solid ${props => props.theme.colors.primary};
      border-bottom: 1px solid ${props => props.theme.colors.primary};
    }
  `}
`

export const WrapperImage = styled.div`
  max-width: 45px;
  max-height: 45px;
  height: 45px;
  width: 45px;
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

export const ReviewObject = styled.div`
  font-size: 12px;
  display: flex;
  align-items: center;

  > div:first-child {
    ${props => props.theme?.rtl ? css`
      margin-left: 10px;
    ` : css`
      margin-right: 10px;
    `}
  }

  p {
    margin: 0;
  }
`
export const ReviewMarkerWrapper = styled.div`
  font-size: 12px;

  ${props => props.theme.colors.rtl ? css`
    padding-right: 15px;
  ` : css`
    padding-left: 15px;
  `}

  ${({ isHeader }) => !isHeader && css`
    height: 40px;
    width: 45px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    ${props => props.theme.colors.rtl ? css`
      border-right: 1px solid ${props => props.theme.colors.borderColor};
    ` : css`
      border-left: 1px solid ${props => props.theme.colors.borderColor};
    `}
  `}

  svg {
    color: ${props => props.theme.colors.primary};
    font-size: 20px;
  }

  p {
    margin: 0px;
    color: ${props => props.theme.colors.lightGray};
  }
`
export const PagesBottomContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
`
