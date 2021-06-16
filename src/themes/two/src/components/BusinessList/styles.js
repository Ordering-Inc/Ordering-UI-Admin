import React from 'react'
import styled, { css } from 'styled-components'

export const BusinessListContainer = styled.div`
  max-height: calc(100vh - 380px);
  overflow: auto;

  @media (min-width: 768px) {
    max-height: calc(100vh - 280px);
  }
`

export const BusinessListTable = styled.table`
  width: calc(100% - 10px);
  min-width: 900px;
  color: ${props => props.theme.colors?.headingColor};

  td, th {
    padding: 10px 0;
    &:first-child {
      width: 30%;
    }
    &:nth-child(2) {
      width: 20%;
    }

    &:nth-child(4),
    &:nth-child(5) {
      width: 10%;
    }
  }

  thead {
    tr {
      th {
        position: sticky;
        top: 0px;
        z-index: 100;
        background: #FFF;
        border-bottom: 1px solid #B1BCCC;
      }
    }
  }

  tbody {
    border-bottom: 1px solid #E9ECEF;
    cursor: pointer;
  }
`

export const WrapperPagination = styled.div`
  margin-top: 10px;
`

export const WrapperImage = styled.div`
  max-width: 45px;
  max-height: 45px;
  height: 45px;
  width: 45px;
  ${({ isSkeleton }) => !isSkeleton && css`
    border: 1px solid #E3E3E3;
  `}
  border-radius: 10px;

  ${props => props.theme?.rtl ? css`
    margin-left: 10px;
  ` : css`
    margin-right: 10px;
  `}
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

export const BusinessGeneralInfo = styled.div`
  display: flex;
  align-items: center;
`

export const InfoBlock = styled.div`
  p {
    margin: 5px 0 0 0;
    font-size: 12px;
  }
  p.bold {
    margin: 0px;
    font-size: 14px;
    font-weight: 600;
  }
`
