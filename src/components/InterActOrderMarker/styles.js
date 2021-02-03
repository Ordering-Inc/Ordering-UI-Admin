import React from 'react'
import styled from 'styled-components'

export const RoundMarker = styled.div`
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    transform: translate(-50%, -50%);
    z-index: 1;
    background: rgba(14, 155, 85, 0.2);
    border-radius: 100%;
`
export const WrapperMapMarker = styled.div`
  width: 35px;
  height: 35px;
  background: #fff;
  border: 5px solid #0E9B55;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 6px;

  svg {
    width: 100%;
    height: 100%;
    border-radius: 100%;
    padding: 3px;
    box-sizing: border-box;
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
  overflow: hidden;
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
