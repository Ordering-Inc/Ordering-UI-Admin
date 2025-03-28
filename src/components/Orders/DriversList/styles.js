import React from 'react'
import styled, { css } from 'styled-components'

export const DriversListContainer = styled.div`
  padding: 15px 0px;
  position: relative;
  @media (min-width: 992px) {
    ${({ showCompressedInfo }) => showCompressedInfo && css`
      padding: 0px 0px;
    `}
  }
`

export const DriverCard = styled.div`
  min-height: 66px;
  cursor: pointer;
  display: flex;
  align-items: center;
  position: relative;
  border: 1px solid ${props => props.theme.colors.borderColor};
  box-sizing: border-box;
  border-radius: 8px;
  margin-bottom: 20px;
  padding: 10px 15px;

  &:hover {
    background-color: ${props => props.theme.colors.lightPrimary};
  }

  ${({ active }) => active && css`
    background-color: ${props => props.theme.colors.lightPrimary};
    border: 1px solid ${props => props.theme.colors.primary};
  `}

  @media (min-width: 992px) {
    ${({ showCompressedInfo }) => showCompressedInfo && css`
      margin-bottom: 5px;
    `}
  }
`

export const WrapperImage = styled.div`
  max-width: 45px;
  max-height: 45px;
  height: 45px;
  width: 45px;
  border: 1px solid ${props => props.theme.colors.borderColor};
  border-radius: 8px;

  svg {
    width: 100%;
    height: 100%;
    padding: 7px;
    box-sizing: border-box;
    border-radius: 50%;
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

export const WrapperStar = styled.div`
  unicode-bidi: bidi-override;
  color: #c5c5c5;
  font-size: 17px;
  position: relative;
  width: fit-content;

  &::before {
    content: '★★★★★';
    opacity: .3;
  }

  &::after {
    color: #F9D853;
    content: '★★★★';
    position: absolute;
    z-index: 1;
    display: block;
    left: 0;
    top:0;
    width: ${({ width }) => width};
    overflow: hidden;
  }
`

export const DriverInfo = styled.div`
  width: 100%;
  flex: 1;
  ${({ hidePhoto }) => !hidePhoto && css`
    ${props => props.theme?.rtl ? css`
      margin-right: 15px;
    ` : css`
      margin-left: 15px;
    `}
  `}
  > div:first-child {
    display: flex;
    align-items: center;

    svg {
      margin: 0 5px;
    }

    p.name {
      font-size: 14px;
      color: ${props => props.theme.colors?.headingColor};
      font-weight: 600;
      margin: 0px;
      flex: 1;
    }
    .text-red {
      font-size: 14px;
      color: red;
      ${props => props.theme?.rtl ? css`
        margin-right: 2px;
      ` : css`
        margin-left: 2px;
      `}
    }
    @media (min-width: 992px) {
      ${({ showCompressedInfo }) => showCompressedInfo && css`
        p.name {
          font-size: 12px;
        }
        .text-red {
          font-size: 11px;
        }
        .driver-orders {
          font-size: 11px;
        }
      `}
    }
  }
`

export const Timestatus = styled.div`
  width: 4px;
  height: 42px;
  border-radius: 20px;
  margin-right: 10px;
  ${props => props.theme?.rtl && css`
    margin-right: 0px;
    margin-left: 10px;
 `}
 ${({ timeState }) => timeState === 'in_time' && css`
    background-color: #00D27A;
  `}
  ${({ timeState }) => timeState === 'at_risk' && css`
    background-color: #FFC700;
  `}
  ${({ timeState }) => timeState === 'delayed' && css`
    background-color: #E63757;
  `}
`

export const PaginationWrapper = styled.div`
  position: sticky;
  bottom: 0px;
  background: #fff;
  justify-content: center;
  > div {
    padding: 10px 5px 0px 5px;
  }
`
