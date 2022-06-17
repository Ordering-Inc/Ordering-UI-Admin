import styled, { css } from 'styled-components'
import React from 'react'

export const Container = styled.div`
  display: flex;
  height: 100%;
`

export const InnerContainer = styled.div`
  ${({ isHide }) => isHide ? css`
    width: 0px;
    overflow: hidden;
    flex: initial;
  ` : css`
    flex: 1;
  `}
  transition: 0.3s;
  @media (min-width: 576px) {
    ${({ isHide }) => isHide ? css`
      padding: 0;
    ` : css`
      padding: 20px;
    `}
  }
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  h1 {
    font-size: 20px;
    font-weight: 700;
    margin-top: 0px;
    margin-bottom: 18px;
  }

  button {
    margin-bottom: 18px;
    height: 44px;
    margin-right: 40px;

    ${props => props.theme.rtl && css`
      margin-left: 40px;
      margin-right: 0px;
    `}
  }
`

export const SearchWrapper = styled.div`
  margin-bottom: 30px;
`

export const ProfessionalListWrapper = styled.div`
  margin-bottom: 20px;

  #not-found-source {
    height: 100%;
  }
`

export const ProfessionalItemContainer = styled.div`
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

export const CheckWrapper = styled.div`
  display: flex;
  align-items: center;

  span {
    svg {
      cursor: default !important;
      font-size: 16px;
      color: ${props => props.theme.colors.secundaryLight};

      &.active {
        color: ${props => props.theme.colors.primary};
      }
    }
  }

  > label {
    margin: 0;
    display: flex;
    align-items: center;
  }
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

export const UserInfo = styled.div`
  margin-left: 15px;
  ${props => props.theme.rtl && css`
    margin-left: 0px;
    margin-right: 15px;
  `}

  h3 {
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    margin-top: 0px;
    margin-bottom: 1px;
  }
  p {
    font-weight: 400;
    font-size: 10px;
    line-height: 15px;
    margin: 0px;
  }
`

export const AddBtn = styled.span`
  font-weight: 400;
  font-size: 14px;
  display: block;
  margin-top: 15px;
  cursor: pointer;
  user-select: none;
  color: ${props => props.theme.colors.lightGray};
  transition: color 0.2s ease;

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`

export const BottomWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const WrapperPagination = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
`
