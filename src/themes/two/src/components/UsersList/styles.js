import React from 'react'
import styled, { css } from 'styled-components'

export const UsersConatiner = styled.div`
  height: calc(100vh - 200px);
  overflow: auto;
`

export const UsersTable = styled.table`
  width: calc(100% - 10px);
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

export const UserMainInfo = styled.div`
  display: flex;
  align-items: center;
`

export const CheckBoxWrapper = styled.div`
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
export const UserTypeWrapper = styled.div`
  > div {
    display: flex;

    .select {
      border: none;
      padding: 0px;

      > div {
        padding: 0px;
      }
    }

    .list {
      .options {
        border: 1px solid #E9ECEF;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
        border-radius: 8px;
      }
    }
  }
  p {
    margin: 5px 0 0 0;
    font-size: 12px;
  }
`

export const UserEnableWrapper = styled.div`
  display: flex;
  align-items: center;

  span {
    font-size: 14px;

    ${props => props.theme?.rtl ? css`
      padding-left: 10px;
    ` : css`
      padding-right: 10px;
    `}
  }
`
