import React from 'react'
import styled, { css } from 'styled-components'

export const OrdersContainer = styled.div`
  max-height: calc(100vh - 410px);
  overflow: auto;

  ${({ noScroll }) => noScroll && css`
    overflow: hidden;
  `}

  @media (min-width: 768px) {
    max-height: calc(100vh - 385px);
  }

  @media (min-width: 992px) {
    max-height: calc(100vh - 305px);
    ${({ isSelectedOrders }) => isSelectedOrders && css`
      max-height: calc(100vh - 345px);
    `}
  }

  @media (min-width: 1200px) {
    max-height: calc(100vh - 275px);
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
    box-sizing: border-box;
    font-size: 14px;

    &:first-child {
      padding-left: 0px;
      padding-right: 0px;
    }
  }

  th {
    padding-top: 0px;
  }

  thead {
    tr {
      width: 100%;
      border-bottom: solid 1px ${props => props.theme.colors.disabled};
      th {
        color: ${props => props.theme.colors?.headingColor};
        white-space: nowrap;
        position: sticky;
        top: 0px;
        z-index: 100;
        background: ${props => props.theme.colors.backgroundPage};
      }
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

export const OrderTbody = styled.tbody`
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.colors.lightPrimary};
  }
  &.active {
    background-color: ${props => props.theme.colors.lightPrimary};
    td {
      border-top: 1px solid ${props => props.theme.colors.primary} !important;
      border-bottom: 1px solid ${props => props.theme.colors.primary} !important;
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
  cursor: pointer;
  ${props => props.theme?.rtl ? css`
    margin-left: 10px;
  ` : css`
    margin-right: 10px;
  `}
  svg {
    font-size: 24px;
    color: #B1BCCC;

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
export const StatusInfo = styled(BusinessInfo)`
  .info {
    margin: 0;
    .bold {
      max-width: 150px;
    }
  }
`

export const DriversInfo = styled.div`
  > div {
    > div {
      border: none;
      &:first-child {
        .driver-photo {
          width: 45px;
          height: 45px;
        }
        .driver-info {
          p {
            color: ${props => props.theme.colors?.headingColor};
            font-size: 14px;
            font-weight: 600;
          }
          span {
            display: initial;
          }
        }
      }
    }
  }
  ${({ noClick }) => noClick && css`
    pointer-events: none;
  `}
`

export const WrapperImage = styled.div`
  max-width: 45px;
  max-height: 45px;
  height: 45px;
  width: 45px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  border-radius: 7.6px;

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
  border-radius: 7.6px;
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
      margin-right: 5px;
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
  padding-top: 5px;
`
export const LogisticStatusDot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  display: inline-block;

  ${props => props.theme?.rtl ? css`
    margin-right: 6px;
  ` : css`
    margin-left: 6px;
  `}

  ${({ status }) => status === 0 && css`
    background-color: ${props => props.theme.colors.orange};
  `}
  ${({ status }) => status === 1 && css`
    background-color: ${props => props.theme.colors.warning};
  `}
  ${({ status }) => status === 2 && css`
    background-color: ${props => props.theme.colors.info};
  `}
  ${({ status }) => status === 3 && css`
    background-color: ${props => props.theme.colors.danger};
  `}
  ${({ status }) => status === 4 && css`
    background-color: ${props => props.theme.colors.success};
  `}
`
export const PriorityDot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  display: inline-block;

  ${props => props.theme?.rtl ? css`
    margin-right: 6px;
  ` : css`
    margin-left: 6px;
  `}

  ${({ priority }) => priority === -1 && css`
    background-color: ${props => props.theme.colors.secundaryLight};
  `}
  ${({ priority }) => priority === 0 && css`
    background-color: ${props => props.theme.colors.primary};
  `}
  ${({ priority }) => priority === 1 && css`
    background-color: ${props => props.theme.colors.warning};
  `}
  ${({ priority }) => priority === 2 && css`
    background-color: ${props => props.theme.colors.danger};
  `}
`
