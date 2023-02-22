import React from 'react'
import styled, { css } from 'styled-components'

export const DriversGroupsContainer = styled.div`
  margin-top: 20px;
`

export const TableWrapper = styled.div`
  overflow: auto;
`

export const GroupsTable = styled.table`
  width: calc(100% - 10px);
  min-width: 900px;
  color: ${props => props.theme.colors?.headingColor};

  td, th {
    padding: 13px 0;
    font-size: 12px;
    &:first-child {
      width: 30%;
    }

    &:nth-child(2),    
    &:nth-child(3),    
    &:nth-child(4) {
      width: 18%;
    }
  }

  thead {
    tr {
      border-bottom: solid 1px ${props => props.theme.colors.disabled};
    }
  }

  tbody {
    border-bottom: 1px solid ${props => props.theme.colors.borderColor};
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
  }
`

export const BorderWrapper = styled.div`
  font-size: 12px;
  ${({ isHeader }) => isHeader ? css`
    font-weight: 700;
  ` : css`
    height: 40px;
    display: flex;
    align-items: center;
    ${props => props.theme?.rtl ? css`
      margin-left: 20px;
      padding-left: 10px;
      border-left: 1px solid ${props => props.theme.colors.borderColor};
    ` : css`
      margin-right: 20px;
      padding-right: 10px;
      border-right: 1px solid ${props => props.theme.colors.borderColor};
    `}  
  `}
`

export const GroupNameContainer = styled(BorderWrapper)`
  display: flex;
  align-items: center;

  > p {
    font-size: 12px;
    margin: 0px;
  }
`

export const CheckBoxWrapper = styled.div`
  cursor: pointer;
  ${props => props.theme?.rtl ? css`
    margin-left: 20px;
  ` : css`
    margin-right: 20px;
  `}
  svg {
    font-size: 24px;
    color: #B1BCCC;
  }

  ${({ isChecked }) => isChecked && css`
    svg {
      color: ${props => props.theme.colors?.primary};
    }
  `}
`

export const DriverManagerContainer = styled(BorderWrapper)`
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 700;

  > div:first-child {
    ${props => props.theme?.rtl ? css`
      margin-left: 10px;
    ` : css`
      margin-right: 10px;
    `}
  }
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

export const InfoBlock = styled.div`
  p {
    margin: 5px 0 0 0;
    font-size: 12px;
    color: ${props => props.theme.colors.lightGray};
  }
  p.bold {
    margin: 0px;
    font-size: 13px;
    font-weight: 600;
    color: ${props => props.theme.colors.headingColor};
  }
`

export const DriverGroupTypeContainer = styled(BorderWrapper)`
  ${({ isHeader }) => isHeader && css`
    font-weight: 700;
  `}
`

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 8px;
  padding-bottom: 8px;
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

export const PagesBottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 10px;
  margin: 15px 0 38px 0;
`

export const AddNewGroupButton = styled.div`
  cursor: pointer;
  font-size: 12px;
  color: ${props => props.theme.colors.primary};
`
