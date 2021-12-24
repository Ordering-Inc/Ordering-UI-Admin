import React from 'react'
import styled, { css } from 'styled-components'

export const Container = styled.div`
  min-height: 800px;
  > h1 {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 26px;
  }

  > button {
    height: 44px;
    position: sticky;
    top: 100%;
    margin-top: 30px;
  }
`
export const BusinessSelectorContainer = styled.div`
  position: relative;
  margin-bottom: 29px;
  
  > div:not(:first-child) {
    width: 100%;
    margin-top: 5px;
  }
`
export const SelectedBusinessWrapper = styled.div`
  cursor: pointer;
  padding: 10px 16px;
  background: ${props => props.theme.colors.secundary};
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > svg {
    font-size: 0.7em;
    transition: 0.2s ease-in-out;
  }

  > div {
    display: flex;
    align-items: center;
    font-size: 14px;
  }
`
export const Label = styled.div`
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 16px;
`

export const WrapperImage = styled.div`
  max-width: 38px;
  max-height: 38px;
  height: 38px;
  width: 38px;

  ${({ isSmall }) => isSmall && css`
    max-width: 24px;
    max-height: 24px;
    height: 24px;
    width: 24px;
  `}
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin: 0 10px;

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
