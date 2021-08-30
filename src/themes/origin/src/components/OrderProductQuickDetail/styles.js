import React from 'react'
import styled, { css } from 'styled-components'

export const WrapSkelton = styled.div`
  overflow: hidden;
  width: 100%;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 3px #00000029;
  border-radius: 10px;
  box-sizing: border-box;
  margin-bottom: 10px;
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
          ${({ skeleton }) => skeleton && css`
            padding-left: 60px;
            & > span {
              margin-right: 10px;
            }
          `}
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
export const ProductImageContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
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
