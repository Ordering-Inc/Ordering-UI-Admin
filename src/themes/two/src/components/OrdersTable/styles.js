import React from 'react'
import styled, { css } from 'styled-components'

export const OrdersContainer = styled.div`
  overflow-y: hidden;
  width: 100%;
`

export const Table = styled.table`
  table-layout: fixed;
  th,
  td {
    padding: 15px;
    border-bottom: solid 1px #B1BCCC;
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
    display: block;
    tr {
      width: 100%;
      th {
        color: ${props => props.theme.colors?.headingColor};
      }
    }
  }

  tbody {
    overflow-x: hidden;
    max-height: calc(100vh - 420px);
    padding-bottom: 10px;
    width: 100%;
    display: block;

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

  .orderNo {
    min-width: 190px;
    max-width: 190px;
  }

  .small {
    min-width: 60px;
    max-width: 60px;
  }

  .businessInfo {
    min-width: 205px;
    max-width: 205px;
  }

  .customerInfo {
    min-width: 205px;
    max-width: 205px;
  }

  .driverInfo {
    min-width: 205px;
    max-width: 205px;
  }

  .orderType {
    min-width: 140px;
    max-width: 140px;
  }

  .advanced {
    min-width: 265px;
    max-width: 265px;
  }

  .orderStatusTitle {
    min-width: 220px;
    max-width: 220px;
  }

  .orderPrice {
    min-width: 140px;
    max-width: 140px;

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
      color: ${props => props.theme.colors?.headingColor};
      font-size: 12px;
    }
    p.bold {
      font-size: 14px;
      font-weight: 600;
    }
  }

  @media (min-width: 760px) {
    max-height: calc(100vh - 420px);
  }

  @media (min-width: 992px) {
    tbody {
      max-height: calc(100vh - 340px);
    }
  }

  @media (min-width: 1200px) {
    tbody {
      max-height: calc(100vh - 300px);
    }
  }
`

export const OrderNumberContainer = styled.div`
  display: flex;
  align-items: center;

  p {
    max-width: 125px;
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
    color: ${props => props.theme.colors?.headingColor};

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
