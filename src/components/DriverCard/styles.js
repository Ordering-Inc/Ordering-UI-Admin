import React from 'react'
import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const DrirverInfo = styled.div`
    display: flex;
    column-gap: 10px;
    width: 100%;
    padding: 15px;
    border-left: 5px solid #F9D853;
    border-bottom: 1px solid #F2F2F2;
    box-sizing: border-box;

    ${({ offline }) => offline && css`
        border-left: none;
        opacity: 0.3;
    `}
`
export const DriverInfoContent = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`
export const InfoBlock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
        font-size: 16px;
        margin: 0px;

        &:first-child {
            color: #263238;
        }
        &:last-child {
            color: #072DB2;
            cursor: pointer;
        }
    }
`
export const InfoCell = styled.div`
    display: flex;
    flex-direction: column;

    p {
        font-size: 12px;
        color: #ADADAD;
        margin: 0px;
    }

    button {
        outline: none;
        border-radius: 40px;
        border: 1px solid #182964;
        color: #182964;
        cursor: pointer;
        background: transparent;
        display: flex;
        column-gap: 5px;
        align-items: center;

        svg {
            color: #182964;
            font-size: 16px;
        }

        &:active {
            background: ${() => darken(0.07, '#CCC')};
        }
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
