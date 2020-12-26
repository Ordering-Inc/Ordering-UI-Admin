import styled, { css } from 'styled-components'
export const WrapperMapMarker = styled.div`
  width: 40px;
  height: 40px;
  background: #fff;
  border: 5px solid #F79B16;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 6px;
  padding: 5px;
  position: absolute;
  transform: translate(-50%, -50%);
  z-index: 1;

  ${({ offline }) => offline && css`
    border: 5px solid #9D9B9B;
  `}

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

export const DriverInfo = styled.div`
  background: #fff;
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
