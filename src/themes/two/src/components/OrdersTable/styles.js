import React from 'react'
import styled, { css } from 'styled-components'

export const OrdersContainer = styled.div`
  max-height: calc(100vh - 410px);
  overflow: auto;

  @media (min-width: 768px) {
    max-height: calc(100vh - 370px);
  }

  @media (min-width: 992px) {
    max-height: calc(100vh - 290px);
    ${({ isSelectedOrders }) => isSelectedOrders && css`
      max-height: calc(100vh - 345px);
    `}
  }

  @media (min-width: 1200px) {
    max-height: calc(100vh - 280px);

    ${({ isSelectedOrders }) => isSelectedOrders && css`
      max-height: calc(100vh - 345px);
    `}
  }
`

export const Table = styled.table`
  width: calc(100% - 10px);
  min-width: 900px;

  th,
  td {
    padding: 15px;
    border-bottom: solid 1px #E9ECEF;
    box-sizing: border-box;

    &:first-child {
      ${props => props.theme?.rtl ? css`
        padding-left: 0px;
      ` : css`
        padding-right: 0px;
      `}
    }
  }

  th {
    padding-top: 0px;
  }

  thead {
    tr {
      width: 100%;
      th {
        color: ${props => props.theme.colors?.headingColor};
        white-space: nowrap;
        position: sticky;
        top: 0px;
        z-index: 100;
        background: #FFF;
      }
    }
  }

  tbody {
    padding-bottom: 10px;

    tr {
      width: 100%;
      height: 99px;
      cursor: pointer;
    }
  }

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .orderPrice {
    div.info {
      p {
        ${props => props.theme?.rtl ? css`
          text-align: left;
        ` : css`
          text-align: right;
        `}
      }
    }
  }

  div.info {
    p {
      margin: 0px;
      color: ${props => props.theme.colors?.lightGray};
      font-size: 12px;
    }
    p.date {
      color: ${props => props.theme.colors?.headingColor};
    }
    p.bold {
      font-size: 14px;
      font-weight: 600;
      color: ${props => props.theme.colors?.headingColor};
    }
  }
`

export const OrderNumberContainer = styled.div`
  display: flex;
  align-items: center;

  p {
    max-width: 130px;
  }

  ${props => props.theme?.rtl ? css`
    border-left: 1px solid #E9ECEF;
    padding-left: 15px;
  ` : css`
    border-right: 1px solid #E9ECEF;
    padding-right: 15px;
  `}
`

export const CheckBox = styled.span`
  svg {
    font-size: 24px;
    color: #B1BCCC;

    ${props => props.theme?.rtl ? css`
      margin-left: 10px;
    ` : css`
      margin-right: 10px;
    `}
    ${({ isChecked }) => isChecked && css`
      color: ${props => props.theme.colors?.primary};
    `}
  }
`

export const BusinessInfo = styled.div`
  display: flex;
  align-items: center;
  p {
    max-width: 125px;
  }
  div.info {
    ${props => props.theme?.rtl ? css`
      margin-right: 10px;
    ` : css`
      margin-left: 10px;
    `}
  }
`

export const CustomerInfo = styled(BusinessInfo)`
  p {
    max-width: 125px;
  }
`

export const DriversInfo = styled.div`
  > div {
    > div {
      border: none;
      > div:first-child {
        padding: 0px 10px;
        p {
          color: ${props => props.theme.colors?.headingColor};
          font-size: 14px;
        }
      }
    }
  }
`

export const WrapperImage = styled.div`
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

const ImageStyled = styled.div`
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
export const Image = (props) => {
  return (
    <ImageStyled
      {...props}
      style={{ backgroundImage: `url(${props.bgimage})` }}
    >
      {props.children}
    </ImageStyled>
  )
}

export const OrderType = styled.div`
  display: flex;
  align-items: center;

  img, svg {
    width: 25px;
    height: 30px;
  }

  img {
    border-radius: unset;
    border: none;
  }

  span {
    color: ${props => props.theme.colors.headingColor};
    font-size: 14px;
    ${props => props.theme?.rtl ? css`
      marign-right: 5px;
    ` : css`
      margin-left: 5px;
    `}
  }
`

export const WrapOrderStatusSelector = styled.div`
  > div {
    p {
      font-size: 14px;
    }
    > div:first-child {
      p {
        color: ${props => props.theme.colors?.headingColor};
        max-width: 140px;
      }
    }
  }
`

export const WrapperPagination = styled.div`
  margin-top: 10px;
`
