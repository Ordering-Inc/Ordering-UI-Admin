import React, { css } from 'react'
import styled from 'styled-components'

export const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #FFF;
  cursor: pointer;
`
export const OrderItemAccordionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 0px 3px #00000029;
  border-radius: 6px;
  border-left: 7px solid;
  border-color: ${({ filterColor }) => filterColor || '#0E9B55'};
  margin-bottom: 10px;
  position: initial;

  & > div {
    &: first-child {
      width: 15%;
      min-width: 180px;
      align-items: center;
      column-gap: 0px;
      padding: 0px;
      & > div {
        &:first-child {
          padding: 0 5px;
          height: 90px;
          display: flex;
          align-items: center;
        }
      }    
    }
  }
`
export const OrderItemAccordionCell = styled.div`
  display: flex;
  column-gap: 8px;
  padding: 15px 0;

  .rotate {
    transform: rotate(180deg);
  }

  .accordion__icon {
    margin-left: auto;
    transition: transform 0.6s ease;
    ${props => props.theme?.rtl && css`
      margin-right: auto;
      margin-left: initial;
    `}
  }

  & > div {
    & > div {
      &:first-child {
        p {
          margin: 0px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          max-width: 165px;   
        }
      }
    }
  }
`
export const CheckBoxContainer = styled.div`
  color: #404040;
  svg {
    width: 20px;
    height: 20px;
    circle {
      fill: #ccc;
    }
  }

  &:hover {
    svg {
      circle {
        fill: #404040;
      }
    }
  }
`
export const WrapperAccordionImage = styled.div`
  max-width: 45px;
  max-height: 45px;
  height: 45px;
  width: 45px;
  border: 1px solid #E3E3E3;
  border-radius: 10px;

  svg {
    width: 100%;
    height: 100%;
    padding: 7px;
    box-sizing: border-box;
    border-radius: 50%;
  }
`
const AccordionImageStyled = styled.div`
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
export const AccordionImage = (props) => {
  return (
    <AccordionImageStyled
      {...props}
      style={{ backgroundImage: `url(${props.bgimage})` }}
    >
      {props.children}
    </AccordionImageStyled>
  )
}

export const TextBlockContainer = styled.div`
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const BigText = styled.p`
  color: #000000;
  margin: 0px;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
`
export const SmallText = styled.p`
  color: #343434;
  font-size: 12px;
  margin: 0px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
export const DeliveryTypeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const DeliveryIcon = styled.div`
  width: 25px;
  height: 30px;

  img {
    width: 100%;
    height: 100%;
    border-radius: unset;
    border: none;
  }

  svg {
    width: 100%;
    height: 100%;
  }
`
export const DeliveryName = styled.p`
  margin: 0px;
  color: #343434;  
  font-size: 9px;
`
export const OrderDetailToggleButton = styled.span`
  cursor: pointer;
  margin: 0 5px;
  margin-top: 3px;
`
export const WrapperDriverSelector = styled.div`
  > div {
    border: none;
    margin: 0 -15px;
  }
`
export const OrderInfoContainer = styled.div`
  flex: 1;
`
export const WrapperGeneralInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e8e8e8;

  & > div {
    
    &:nth-child(1) {
      width: 20%;
      min-width: 150px;
    }

    &:nth-child(2) {
      width: 20%;
      min-width: 150px;
    }

    &:nth-child(3) {
      width: 23%;
      min-width: 150px;
      padding: 0px;
      p {
        font-size: 14px;
        font-weight: 600;
      }
    }

    &:nth-child(4) {
      min-width: 40px;
      width: 6%;
      font-size: 14px;
    }

    
    &:nth-child(5) {
      width: 22%;
      min-width: 170px;
      display: block;
      justify-content: initial;
      text-align: center;

      p {
        font-size: 12px;
      }
    }

    &:nth-child(6) {
      width: 9%;
      width: 9%;
      min-width: 120px;
      display: flex;
      justify-content: flex-end;
    }
  }

  @media (max-width: 1200px) {
    & > div {
      &:nth-child(3),
      &:nth-child(4) {
        display: none;
      }
    }
  }
`
export const WrapperOrderlabel = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > div {
    &:nth-child(1) {
      width: 20%;
    }

    &:nth-child(2) {
      width: 20%;
    }

    &:nth-child(3) {
      width: 23%;
    }

    &:nth-child(4) {
      flex: 1;
      justify-content: flex-end;
      margin: 0 5px;
    }
  }

  @media (max-width: 1200px) {
    & > div {
      &:nth-child(1),
      &:nth-child(2) {
        width: 29%;
      }
    }
  }
`
export const WrapOrderQuickDetail = styled.div``
