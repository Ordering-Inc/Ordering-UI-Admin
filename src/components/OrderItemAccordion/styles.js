import React, { css } from 'react'
import styled from 'styled-components'

export const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #FFF;
  cursor: pointer;
  min-width: 960px;
`
export const OrderItemAccordionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 0px 3px #00000029;
  border-radius: 6px;
  border-left: 10px solid;
  border-color: ${({ filterColor }) => filterColor || '#0E9B55'};
  margin-bottom: 10px;
  position: initial;

  & > div {

    &:nth-child(1) {
      width: 15%;
      min-width: 160px;
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

    &:nth-child(2) {
      width: 18%;
      min-width: 150px;
    }

    &:nth-child(3) {
      width: 18%;
      min-width: 150px;
    }

    &:nth-child(4) {
      width: 17%;
      min-width: 150px;
    }

    &:nth-child(5) {
      min-width: 40px;
      width: 5%;
    }

    
    &:nth-child(6) {
      width: 20%;
      min-width: 170px;
    }

    &:nth-child(7) {
      width: 7%;
      min-width: 110px;
      display: flex;
      justify-content: flex-end;
    }
  }
`
export const OrderItemAccordionCell = styled.div`
  display: flex;
  column-gap: 8px;
  padding: 20px 0;

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
  max-width: 50px;
  max-height: 50px;
  height: 50px;
  width: 50px;
  border: 1px solid #E3E3E3;
  border-radius: 10px;

  svg {
    width: 100%;
    height: 100%;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 50%;
  }
`
export const WrapperProductImage = styled.div`
  max-width: 65px;
  max-height: 50px;
  height: 50px;
  width: 65px;
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
`
export const BigText = styled.p`
  color: #000000;
  margin: 0px;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
export const SmallText = styled.p`
  color: #343434;
  font-size: 13px;
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
  width: 30px;
  height: 30px;

  img {
    width: 100%;
    height: 100%;
    border-radius: unset;
    border: none;
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
export const OrderProductsQuickDetailContainer = styled.div`
  overflow: hidden;
  transition: max-height 0.6s ease;
  width: 100%;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 3px #00000029;
  border-radius: 10px;
  box-sizing: border-box;
  margin-bottom: 10px;
  cursor: default;
`
export const OrderProductsInner = styled.div`
  padding: 20px 40px;
`
export const ProductTable = styled.table`
  width: 100%;

  thead {
    th {
      padding: 5px 0;
      color: #707070;
      font-size: 13px;
      text-align: left;

      &:first-child {
        padding-left: 60px;
      }

      &:nth-child(2),
      &:nth-child(3),
      &:nth-child(4) {
        width: 20%;
      }

      &:last-child {
        width: 60px;
      }
    }
  }

  tbody {
    tr {
      td {
        color: #263238;
        font-weight: 500;
        font-size: 13px;
        padding-top: 25px;
        border-bottom: 1px solid #F2F2F2;
        vertical-align: top;

        &:first-child {
          padding: 10px 0;
        }
      }
    }

    .subFee {
      td {
        border-bottom: none;
        color: #263238;
        font-weight: normal;
        padding: 6px 0;
      }
    }

    .totalFee {
      td {
        color: #263238;
        font-weight: 500;
        padding: 10px 0;
        border-bottom: none;

        &:nth-child(4),
        &:nth-child(5) {
          border-top: 1px solid #F2F2F2;         
        }
      }
    }
  }
`
export const WrapperDriverSelector = styled.div`
  > div {
    border: none;
    margin: 0 -15px;
  }
`
export const ProductImageContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`
export const AccordionContent = styled.div`
  overflow: hidden;
  transition: max-height 0.6s ease;
  width: 100%;
  margin: auto;

  @media (min-width: 481px) {
    width: 80%;
  }
`
export const ProductOptionsList = styled.ul`
  list-style-type: none;

  .suboption {
    margin-left: -25px;
    ${props => props.theme?.rtl && css`
      margin-right: -25px;
      margin-left: 0px;
  `}
  }

  p:nth-child(1) {
    margin-bottom: 0;
    font-weight: 500;
  }

  p {
    font-weight: 400;
    margin: 0px;
  }

  li span {
    font-weight: 300;
  }

  li.ingredient {
    padding-left: 15px;
    ${props => props.theme?.rtl && css`
      padding-right: 15px;
      padding-left: 0px;
    `}
  }
`
export const ProductComment = styled.div`
  padding-left: 40px;
  ${props => props.theme?.rtl && css`
    padding-right: 40px;
    padding-left: 0px;
  `}
  p {
    font-weight: bold;
    margin: 0px;
  }

  h3 {
    font-weight: normal;
    text-transform: capitalize;
    margin: 0px 20px 0px 40px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    ${props => props.theme?.rtl && css`
      margin: 0px 40px 0px 20px
    `}
  }
`
