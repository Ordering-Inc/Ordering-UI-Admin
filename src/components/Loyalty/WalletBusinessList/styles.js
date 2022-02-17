import styled, { css } from 'styled-components'
import React from 'react'

export const Container = styled.div``

export const BusinessSelectOption = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 18px;

  > button {
    margin-right: 16px;
    ${props => props.theme?.rtl && css`
      margin-right: 0px;
      margin-left: 16px;
    `}
  }
`

export const SearchWrapper = styled.div`
  margin-bottom: 20px;
`

export const TableWrapper = styled.div`
  width: 100%;
  overflow: auto;
`

export const BusinessTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  min-width: 500px;

  > thead {
    border-bottom: 1px solid ${props => props.theme.colors.secundaryLight};
    tr{
      th {
        padding: 12px 0px;
        :not(.business-info) {
          text-align: center;
        }
      }
    }
  }
`

export const TBoday = styled.tbody`
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  cursor: pointer;
  tr{
    td {
      padding: 12px 1px;
    }
  }
  &:hover {
    background: ${props => props.theme.colors.secundary};
  }

  ${({ active }) => active && css`
    background: #F5F9FF;
    td {
      border-top: 1px solid ${props => props.theme.colors.primary};
      border-bottom: 1px solid ${props => props.theme.colors.primary};
    }
  `}
`

export const BusinessInfoWrapper = styled.div`
  display: flex;
  align-items: center;

  > span {
    font-size: 14px;
    margin-left: 12px;
    ${props => props.theme?.rtl && css`
      margin-right: 12px;
      margin-left: 0;
    `}
  }
`

export const WrapperImage = styled.div`
  max-width: 38px;
  max-height: 38px;
  height: 38px;
  width: 38px;

  ${({ isSkeleton }) => isSkeleton ? css`
    background: #F8F9FA;
  ` : css`
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  `}
  border-radius: 8px;

  > svg {
    width: 100%;
    height: 100%;
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

export const CheckBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 20px;
    color: ${props => props.theme.colors.secundaryLight};

    &.fill {
      color: ${props => props.theme.colors.primary};
    }
  }
`

export const ModifiedWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row-reverse;

  svg {
    font-size: 17px;
    color: ${props => props.theme.colors.secundaryLight};
  }

  ${({ isSkeleton }) => !isSkeleton && css`
    > span {
      font-size: 12px;
      padding: 2px 8px;
      background: #F5F9FF;
      border-radius: 50px;
      color: ${props => props.theme.colors.primary};
    }
  `}
`
