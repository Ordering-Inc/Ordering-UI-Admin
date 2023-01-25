import styled, { css } from 'styled-components'
import React from 'react'
import { darken } from 'polished'

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

export const RightHeader = styled.div`
  display: flex;
  align-items: center;
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
    display: flex;
    align-items: center;
    th, td {
      &:first-child {
        flex: 1;
      }
      &:last-child {
        min-width: 200px;
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

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 8px;
  padding-bottom: 8px;

  ${props => props.theme.colors.rtl ? css`
    border-right: 1px solid ${props => props.theme.colors.borderColor};
    padding-right: 15px;
  ` : css`
    border-left: 1px solid ${props => props.theme.colors.borderColor};
    padding-left: 15px;
  `}
`

export const EnableWrapper = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;

  span {
    font-size: 12px;
    color: ${props => props.theme.colors.headingColor};

    ${props => props.theme?.rtl ? css`
      padding-left: 10px;
    ` : css`
      padding-right: 10px;
    `}
  }
`

export const WrapperImage = styled.div`
  max-width: 32px;
  max-height: 32px;
  height: 32px;
  width: 32px;
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
    margin: 0;
    color: ${props => props.theme?.colors.headingColor};
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

export const BrandDetailContainer = styled.div`
  padding: 20px;
  width: 100%;
`

export const DetailHeder = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
  ${props => props.theme?.rtl ? css`
    margin-left: 40px;
  ` : css`
    margin-right: 40px;
  `}
  > div:first-child {
    flex: 1;
    display: flex;
    align-items: center;
    > span {
      font-weight: bold;
      font-size: 20px;
    }
    label {
      margin: 0 20px;
    }
  }
`

export const TabContainer = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 1px solid ${props => props.theme?.colors.borderColor};
`

export const Tab = styled.div`
  padding: 10px 0px;
  font-size: 14px;
  cursor: pointer;
  color: ${props => props.theme.colors?.headingColor};
  white-space: nowrap;
  ${props => props.theme?.rtl ? css`
    margin-left: 30px;
  ` : css`
    margin-right: 30px;
  `}

  ${({ active }) => active && css`
    border-bottom: 1px solid;
    font-weight: 500;
  `}

  ${({ active }) => !active && css`
    color: ${props => props.theme?.colors.lightGray};
    font-size: 12px;
  `}
`

export const ActionSelectorWrapper = styled.div`
  .select {
    border: none;

    > div:first-child {
      padding: 5px;
      border-radius: 8px;
      svg {
        font-size: 20px;
      }
      &:hover {
        background: ${props => darken(0.04, props.theme.colors.secundary)} !important;
      }
      &:active {
        background: ${props => darken(0.1, props.theme.colors.secundary)} !important;
      }
    }
    .select-arrow {
      display: none;
    }
    .list {
      .list-wrapper {
        > div {
          font-size: 14px;
          color: #E63757;
          padding-top: 0;
          padding-bottom: 0;
        }
      }
    }
  }
`
