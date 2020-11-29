import React from 'react'
import styled, { css } from 'styled-components'

export const Option = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  padding: ${({ padding }) => padding || '10px 0'};

  img {
    width: 45px;
    border-radius: 5px;
  }

  ${({ small }) => small && css`
    column-gap: 5px;
    padding: 5px 0px;
    margin: 0px -5px;

    img {
      width: 25px;
    }
  `}

  @media (max-width: 576px) {
    padding: 5px 0;
  }
`

export const OptionContent = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const DriverNameContainer = styled.div`
  font-size: 12px;
  line-height: 1.3;
  color: #263238;

  ${({ small }) => small && css`
    font-size: 8px;
  `}
`

export const DriverName = styled.div`
  font-size: 16px;
  line-height: 1.3;
  color: #263238;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 150px;

  ${({ small }) => small && css`
    font-size: 11px;
  `}

  @media (max-width: 576px) {
    max-width: 90px;
  }
`

export const PhoneContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  color: #000000;

  @media (max-width: 1200px) {
    display: none;
  }
`
export const WrapperDriverImage = styled.div`
  width: 45px;
  height: 45px;
  border: 1px solid #E3E3E3;
  border-radius: 10px;

  svg {
    width: 100%;
    height: 100%;
    padding: 5px;
    box-sizing: border-box;
    border-radius: 50%;
  }

  ${({ small }) => small && css`
    width: 27px;
    height: 27px;
  `}
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
