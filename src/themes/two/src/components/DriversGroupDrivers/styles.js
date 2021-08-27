import React from 'react'
import styled, { css } from 'styled-components'

export const Container = styled.div`
  height: calc(100% - 160px);
  margin-bottom: 35px;

  > button {
    position: sticky;
    top: 100%;
    height: 42px;
    margin-top: 20px;
  }
`

export const SearchBarWrapper = styled.div`
  margin-bottom: 10px;
`

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  button:first-child {
    ${props => props.theme?.rtl ? css`
      margin-left: 7px;
    ` : css`
      margin-right: 7px;
    `}
  }
`

export const BusinessesContainer = styled.div`
  height: calc(100% - 130px);
  overflow: auto;
`

export const BusinessWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};

  p {
    margin: 0px;
    font-size: 12px;
  }

  ${({ isDisabed }) => isDisabed && css`
    pointer-events: none;
  `}
`

export const WrapperImage = styled.div`
  max-width: 40px;
  max-height: 40px;
  height: 40px;
  width: 40px;
  ${({ isSkeleton }) => !isSkeleton && css`
    border: 1px solid #E3E3E3;
  `}
  border-radius: 8px;

  svg {
    width: 100%;
    height: 100%;
    padding: 7px;
    box-sizing: border-box;
    border-radius: 50%;
  }

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

export const DriverInfoContainer = styled.div`
  p {
    margin: 0px;
    &:first-child {
      font-weight: 500;
      font-size: 13px;
    }

    &:last-child {
      font-size: 12px;
      color: ${props => props.theme.colors.lightGray};
    }
  }
`
