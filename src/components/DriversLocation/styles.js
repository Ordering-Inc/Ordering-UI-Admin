import React from 'react'
import styled, { css } from 'styled-components'

export const WrapperMap = styled.div`
  width: 100%;
  height: 100%;
`
export const WrapperMapMarker = styled.div`
  width: 50px;
  height: 50px;
  background: #F79B16;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 6px;
  padding: 5px;

  ${({ offline }) => offline && css`
    background: #9D9B9B;
  `}

  svg {
    width: 100%;
    height: 100%;
    border-radius: 100%;
  }
`
const MapMarkerImgStyled = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  object-fit: cover;
  background-position: center;
  border-radius: 5px;
`
export const MapMarkerImg = (props) => {
  return (
    <MapMarkerImgStyled
      {...props}
      style={{ backgroundImage: `url(${props.bgimage})` }}
    >
      {props.children}
    </MapMarkerImgStyled>
  )
}
