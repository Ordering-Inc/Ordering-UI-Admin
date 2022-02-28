import React from 'react'
import styled, { css } from 'styled-components'

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
  width: 40px;
  height: 40px;
  background: ${props => props.theme.colors?.backgroundPage || '#FFF'};
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

export const InfoContainer = styled.div`
  background: ${props => props.theme.colors?.backgroundPage || '#FFF'};
  position: absolute;
  border-radius: 5px;
  padding: 10px;
  row-gap: 5px;
  z-index: 2;
  box-shadow: 0px 2px 2px #00000029;
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`
export const TextContainer = styled.div`
  display: flex;
  column-gap: 10px;
`
export const Text = styled.span`
  ${({ fontWeight }) => fontWeight && css`
    font-weight: 600;
  `}
  font-size: 14px;
  white-space: nowrap;
`
