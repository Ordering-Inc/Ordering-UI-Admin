import React from 'react'
import styled, { css } from 'styled-components'

export const BrandListingContainer = styled.div`
  flex: 1;
  padding: 20px;
  box-sizing: border-box;
  transition: all 0.5s;
  overflow: auto;
  max-height: 100vh;

  @media print {
    display: none;
  }
`

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 35px;

  input {
    background: #E9ECEF;
    border: none;
  }

  @media (min-width: 992px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`

export const HeaderTitleContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  h1 {
    font-size: 24px;
    margin: 0;
    font-weight: 600;
    color: ${props => props.theme.colors.headingColor};
  }
  > button {
    ${props => props.theme?.rtl ? css`
      margin-left: 8px;
      margin-right: -8px;
    ` : css`
      margin-right: 8px;
      margin-left: -8px;
    `}

    svg {
      width: 25px;
      height: 25px;
    }
  }
`

export const ActionsGroup = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  flex-wrap: wrap;

  > button {
    height: 41px;
    ${props => props.theme?.rtl ? css`
      margin-left: 20px;
    ` : css`
      margin-right: 20px;
    `}
  }
  input {
    border-radius: 8px;
  }

  @media (min-width: 992px) {
    margin-top: 0px;
  }
`

export const BrandListTable = styled.table`
  width: 100%;
  min-width: 500px;

  thead {
    border-bottom: 1px solid ${props => props.theme.colors.secundaryLight};
    th {
      padding: 10px 0;
      font-size: 12px;
    }
  }

  tr {
    th, td {
      &:last-child {
        width: 100px;
        min-width: 100px;
      }
      &:not(:last-child) {
        flex: 1;
      }
    }
  }

  th:last-child {
    ${props => props.theme.colors.rtl ? css`
      padding-right: 15px;
    ` : css`
      padding-left: 15px;
    `}
  }
`

export const BrandBody = styled.tbody`
  cursor: pointer;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};

  td {
    padding: 7px 0;
    font-size: 12px;
    input {
      border: none;
      width: 100%;
      padding: 3px 0;
      outline: none;
      &:focus {
        border: 1px solid ${props => props.theme.colors.borderColor};
      }      
    }
  }

  &:hover {
    background-color: ${props => props.theme.colors.lightPrimary};
  }

  ${({ active }) => active && css`
    background-color: ${props => props.theme.colors.lightPrimary};
  `}
`

export const WrapperImage = styled.div`
  height: 38px;
  width: 38px;
  min-width: 38px;
  ${({ isSkeleton }) => !isSkeleton && css`
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  `}
  border-radius: 7.6px;

  ${props => props.theme?.rtl ? css`
    margin-left: 20px;
  ` : css`
    margin-right: 20px;
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

export const BrandGeneralInfo = styled.div`
  display: flex;
  align-items: center;
`

export const InfoBlock = styled.div`
  p {
    font-size: 14px;
    font-weight: 500;
    margin: 0;
    color: ${props => props.theme?.colors.headingColor};
  }
  span {
    font-size: 10px;
    font-weight: 400;
    color: ${props => props.theme.colors.lightGray};
  }
`

export const BrandListTableWrapper = styled.div`
  overflow: auto;
  margin-top: 20px;
  width: 100%;
`

export const BrandListBottomContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;

  span {
    cursor: pointer;
    user-select: none;
    font-size: 14px;
    color: ${props => props.theme.colors?.primary};
  }
`
