import React from 'react'
import styled from 'styled-components'

export const WrapperDriverOrders = styled.div`
`
export const Header = styled.div`
    display: flex;
    column-gap: 20px;
    align-items: center;
`
export const DriverInfo = styled.div`
    h2 {
        font-size: 24px;
        color: #151824;
        margin: 0px;
    }

    p {
        margin: 0px;
        color: #072DB2;
    }
`
export const WrapperDriverImage = styled.div`
  width: 60px;
  height: 60px;
  border: 1px solid #E3E3E3;
  border-radius: 10px;

  svg {
    width: 100%;
    height: 100%;
    padding: 5px;
    box-sizing: border-box;
    border-radius: 50%;
  }
`
const DriverImageStyled = styled.div`
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
export const DriverImage = (props) => {
  return (
    <DriverImageStyled
      {...props}
      style={{ backgroundImage: `url(${props.bgimage})` }}
    >
      {props.children}
    </DriverImageStyled>
  )
}

export const WrapperOrderListing = styled.div`
    padding-top: 40px;
`
