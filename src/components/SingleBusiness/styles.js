import React from 'react'
import styled, { css } from 'styled-components'

export const SingleBusinessContainer = styled.tbody`
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  cursor: pointer;
  &:hover {
    background-color: ${props => props.theme.colors.lightPrimary};
  }
  ${({ active }) => active && css`
    background-color: ${props => props.theme.colors.lightPrimary};
    td {
      border-top: 1px solid ${props => props.theme.colors.primary};
      border-bottom: 1px solid ${props => props.theme.colors.primary};
    }
  `}
`

export const WrapperImage = styled.div`
  max-width: 45px;
  max-height: 45px;
  height: 45px;
  width: 45px;
  ${({ isSkeleton }) => !isSkeleton && css`
    border: 1px solid #E3E3E3;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  `}
  border-radius: 10px;

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

export const BusinessGeneralInfo = styled.div`
  display: flex;
  align-items: center;
  > div:last-child {
    flex: 1;
  }
`

export const InfoBlock = styled.div`
  ${props => props.theme?.rtl ? css`
    padding-left: 10px;
  ` : css`
    padding-right: 10px;
  `}
  p {
    margin: 5px 0 0 0;
    font-size: 12px;
    color: ${props => props.theme.colors.lightGray};
  }
  p.bold {
    margin: 0px;
    font-size: 14px;
    font-weight: 600;
    color: ${props => props.theme.colors.headingColor};
  }
  p.star {
    margin: 0px;
    display: flex;
    align-items: center;
    svg {
      font-size: 16px;
      color: ${props => props.theme.colors.secundaryLight};
    }
    span {
      font-size: 14px;
      ${props => props.theme?.rtl ? css`
        margin-right: 8px;
      ` : css`
        margin-left: 8px;
      `}
    }
  }
`

export const BusinessEnableWrapper = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;

  span {
    font-size: 14px;
    color: ${props => props.theme.colors.headingColor};

    ${props => props.theme?.rtl ? css`
      padding-left: 10px;
    ` : css`
      padding-right: 10px;
    `}
  }
`

export const SingleBusinessCardContainer = styled.div`
  ${({ isSkeleton }) => !isSkeleton && css`
    cursor: pointer;
  `}
  border: 1px solid #E9ECEF;
  box-sizing: border-box;
  border-radius: 8px;

  margin: 10px;
  width: calc(100% - 20px);

  @media (min-width: 768px) {
    width: calc(50% - 20px);
  }

  @media (min-width: 992px) {
    width: calc(33.33% - 20px);
  }

  @media (min-width: 1024px) {
    width: calc(25% - 20px);
  }
  @media (min-width: 1250px) {
    width: calc(20% - 20px);
  }
`

const BusinessHeaderStyled = styled.div`
  width: 100%;
  box-sizing: border-box;
  position: relative;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  object-fit: cover;
  background-position: center;
  height: 100px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  ${({ isSkeleton }) => isSkeleton && css`
    background: #E9ECEF;
  `}
`

export const BusinessHeader = (props) => {
  const style = {}
  style.backgroundImage = `url(${props.bgimage})`

  return (
    <BusinessHeaderStyled {...props} style={style}>
      {props.children}
    </BusinessHeaderStyled>
  )
}

const BusinessLogoStyled = styled.div`
  display: flex;
  width: 45px;
  height: 45px;
  box-sizing: border-box;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  object-fit: cover;
  background-position: center;
  min-height: 45px;
  border-radius: 8px;
  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.1));
`

export const BusinessLogo = (props) => {
  const style = {}
  if (props.bgimage) {
    style.backgroundImage = `url(${props.bgimage})`
  }

  return (
    <BusinessLogoStyled {...props} style={style}>
      {props.children}
    </BusinessLogoStyled>
  )
}

export const BusinessContent = styled.div`
  padding: 40px 10px 10px 10px;
  h1, p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  h1 {
    font-size: 14px;
    margin-bottom: 5px;
    color: ${props => props.theme.colors.headingColor};
  }

  p {
    font-size: 12px;
    margin: 0px;
    color: ${props => props.theme.colors.lightGray};
  }
`

export const BusinessActionContainer = styled.div`
  border-top: 1px solid ${props => props.theme.colors.secundary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  padding-top: 10px;
`

export const WrapperBusinessActionSelector = styled.div`
  display: flex;
  justify-content: flex-end;
  button {
    background: transparent !important;
    border: none;
    padding: 0px;
    &:active,
    &:focus {
      border-color: unset !important;
      box-shadow: none !important;
    }
    svg {
      color: ${props => props.theme.colors.headingColor};
    }

    &:after {
      display: none;
    }
  }

  .show {
    button {
      background: ${props => props.theme.colors.secundary} !important;
      border-color: unset !important;
      box-shadow: none !important;
    }
    >div {
      border: 1px solid ${props => props.theme.colors.borderColor};
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
    }
  }

  > div {
    > div {
      border-radius: 8px;
      .dropdown-item {
        font-size: 14px;
        color: ${props => props.theme.colors.headingColor};
      }
      .dropdown-item:last-child {
        color: #E63757;
      }
    }
  }
`

export const BusinessHeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: -22px;
  width: 100%;
  align-items: flex-end;
  padding: 0 15px;

  > span {
    font-size: 12px;
  }
`
