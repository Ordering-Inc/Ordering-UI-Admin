import React from 'react'
import styled, { css } from 'styled-components'

export const Container = styled.form`
  padding-bottom: 30px;
  ${({ disabled }) => disabled && css`
    opacity: 0.7;
    pointer-events: none;
  `}

  > button {
    position: sticky;
    top: 100%;
    height: 42px;
    margin: 30px 0 0 0px;
  }
`
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 35px;

  label {
    font-size: 14px;
  }

  div {
    font-size: 14px;
  }

  .select {
    padding: 11px 0;
    border: none;
    background-color: ${props => props.theme.colors.secundary};
  }
  .list {
    .options {
      > div {
        > div {
          padding: 7px 10px;
        }
      }
    }
  }
`

export const DriverManagerContainer = styled.div`
  height: calc(100% - 130px);
  overflow: auto;
  max-height: 250px;
`

export const DriverManagerWrapper = styled.div`
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

export const ManagerInfoContainer = styled.div`
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

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 29px 0;
  p {
    font-size: 14px;
    margin: 0px;
    ${props => props.theme?.rtl
? css`
      padding-right: 10px;
    `
: css`
      padding-left: 10px;
    `}
  }
`
export const SearchBarWrapper = styled.div`
  margin-bottom: 15px;
  width: 100%;
`

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
`
