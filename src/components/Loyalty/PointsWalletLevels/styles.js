import styled, { css } from 'styled-components'
import React from 'react'

export const Container = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
`

export const Title = styled.h1`
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
  margin-bottom: 13px;
  margin-top: 0px;
`
export const LevelContainer = styled.div`
  border-top: 1px solid ${props => props.theme.colors.borderColor};
`

export const LevelItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  justify-content: space-between;
  transition: all 0.3s linear;
  cursor: pointer;

  &:hover {
    background: ${props => props.theme.colors.secundary};
  }

  ${({ active }) => active && css`
    background: ${props => props.theme.colors.backgroundInfo};
    border-top: 1px solid ${props => props.theme.colors.primary};
    border-bottom: 1px solid ${props => props.theme.colors.primary};
  `}

  > svg {
    font-size: 18px;
    color: ${props => props.theme.colors.secundaryLight};
  }
`

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
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

  ${props => props.theme?.rtl ? css`
    margin-right: 1px;
  ` : css`
    margin-left: 1px;
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

export const LevelName = styled.span`
  font-size: 14px;
  ${props => props.theme?.rtl ? css`
    margin-right: 12px;
  ` : css`
    margin-left: 12px;
  `}
`

export const LevelBottomContainer = styled.div`
  width: calc(100% - 10px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 10px;
  margin: 15px 0;
`

export const AddNewLevelButton = styled.div`
  cursor: pointer;
  font-size: 14px;
  color: ${props => props.theme.colors.lightGray};
  transition: all 0.3s linear;
  user-select: none;

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`
export const NotFoundSourceWrapper = styled.div`
  > div {
    height: initial;
    padding: 20px;
  }
`
