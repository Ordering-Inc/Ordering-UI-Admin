import React from 'react'
import styled, { css } from 'styled-components'

export const PromotionListContainer = styled.div`
  max-height: calc(100vh - 230px);
  overflow: auto;
  margin-top: 30px;

  
  ${({ eventDisabled }) => eventDisabled && css`
    pointer-events: none;
  `}

  @media (min-width: 768px) {
    max-height: calc(100vh - 200px);
  }
`
export const PromotionListTable = styled.table`
  width: calc(100% - 10px);
  min-width: 950px;
  color: ${props => props.theme.colors?.headingColor};
  transition: all 0.3s;

  td, th {
    padding: 10px 0;
    &.promotion {
      width: 30%;
    }

    &.date_range {
      width: 115px;
    }

    &:last-child {
      width: 120px;
    }
  }

  th {
    font-size: 12px;
    font-weight: 700;
  }

  td {
    font-size: 12px;
  }

  thead {
    tr {
      th {
        ${({ noFixedHeader }) => !noFixedHeader && css`
          position: sticky;
          top: 0px;
          z-index: 100;
        `}
        background: ${props => props.theme.colors?.backgroundPage || '#FFF'};
      }
    }
  }
`
export const SinglePromotionTbody = styled.tbody`
  border-top: 1px solid ${props => props.theme.colors.borderColor};
  cursor: pointer;
  &:hover {
    background-color: ${props => props.theme.colors.lightPrimary};
  }
  &.active {
    background-color: ${props => props.theme.colors.lightPrimary};
    td {
      border-top: 1px solid ${props => props.theme.colors.primary};
      border-bottom: 1px solid ${props => props.theme.colors.primary};
    }
  }

  &:first-of-type {
    ${({ isAccept }) => css`
      border-top: 1px solid ${props => isAccept ? props.theme.colors.primary : props.theme.colors.disabled};
    `}
  }
  &:last-of-type {
    ${({ isPromotionBottom }) => css`
      border-bottom: 1px solid ${props => isPromotionBottom ? props.theme.colors.primary : props.theme.colors.borderColor};
    `}
  }
  ${({ isAccept }) => isAccept && css`
    border-top: 1px solid ${props => props.theme.colors.primary};
    background-color: ${props => props.theme.colors.secundary};
  `}
`
export const EnableWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  span {
    font-size: 12px;

    ${props => props.theme?.rtl ? css`
      padding-left: 10px;
    ` : css`
      padding-right: 10px;
    `}
  }
`
export const DragableContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  > div:first-child {
    display: flex;
    align-items: center;
  
    > span {
      font-weight: 500;
      flex: 1;
    }
  }
`
export const DragImageWrapper = styled.div`
  img {
    ${props => props.theme?.rtl ? css`
      margin-left: 10px;
    ` : css`
      margin-right: 10px;
    `}
    &:hover {
      cursor: grab;
    }
  }

  span {
    ${props => props.theme?.rtl ? css`
      margin-left: 10px;
    ` : css`
      margin-right: 10px;
    `}
  }
`
export const WrapperImage = styled.div`
  display: flex;
  align-items: center;
  max-width: 40px;
  max-height: 40px;
  height: 40px;
  width: 40px;
  ${({ isSkeleton }) => !isSkeleton && css`
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  `}
  border-radius: 8px;
  margin: 0 10px;  
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
  border-radius: 8px;
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
export const VerticalLine = styled.div`
  width: 1px;
  height: 38px;
  background-color: ${props => props.theme.colors.borderColor};
  margin: 0 20px;
`
export const PromotionDateRanageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    margin: 0;
  }
`
export const PromotionTypeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const PromotionHow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const PromotionListBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 38px;
  ${({ eventDisabled }) => eventDisabled && css`
    pointer-events: none;
  `}
`
export const AddNewButton = styled.div`
  cursor: pointer;
  color: ${props => props.theme.colors.lightGray};
  width: fit-content;
  font-size: 13px;
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`

export const WrapperPagination = styled.div`
`
export const DummyImageWrapper = styled.div`
  height: 40px;
  width: 40px;
  background-color: rgb(0 0 0 / 20%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: ${props => props.theme.colors.lightGray};
    font-size: 18px;
  }
`
