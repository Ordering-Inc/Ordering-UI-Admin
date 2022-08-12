import React from 'react'
import styled, { css } from 'styled-components'

export const Container = styled.div`
  margin-top: 20px;
  min-height: calc(100vh - 158px);
`

export const SearchWrapper = styled.div`
  margin-bottom: 30px;
`

export const BusinessListWrapper = styled.div`
  margin-bottom: 20px;

  #not-found-source {
    height: 100%;
  }
`

export const BusinessItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  cursor: pointer;
  ${({ isFirst }) => isFirst && css`
    border-top: 1px solid ${props => props.theme.colors.borderColor};
  `}

  > label {
    margin: 0;
    display: flex;
    align-items: center;
  }
  > svg {
    color: ${props => props.theme.colors.secundaryLight};
    margin: 0px 10px;
  }
  &:hover {
    background: ${props => props.theme.colors.secundary};
  }
  ${({ active }) => active && css`
    background: ${props => props.theme.colors.backgroundInfo};
    border-top: 1px solid ${props => props.theme.colors.primary};
    border-bottom: 1px solid ${props => props.theme.colors.primary};
  `}
`

export const WrapperImage = styled.div`
  max-width: 38px;
  max-height: 38px;
  height: 38px;
  width: 38px;
  ${({ isSkeleton }) => !isSkeleton && css`
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  `}
  border-radius: 7.6px;
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

export const BusinessName = styled.span`
  font-size: 12px;
  ${props => props.theme?.rtl ? css`
    margin-right: 12px;
  ` : css`
    margin-left: 12px;
  `}
`
