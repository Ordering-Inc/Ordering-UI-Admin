import React from 'react'
import styled, { css } from 'styled-components'

export const SelectWrapper = styled.div`
  .header {
    > div {
      > div {
        padding: 0;
      }
    }
  }
`

export const Option = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors?.headingColor};
  padding: ${({ padding }) => padding || '5px 10px'};
  white-space: nowrap;
  ${({ isPhoneView }) => isPhoneView && css`
    width: 100%;
  `}
  ${({ isRemove }) => isRemove && css`
    color: ${props => props.theme.colors.danger};
    padding: 3px 10px;
    font-size: 14px;
  `}

  img {
    width: 45px;
    border-radius: 8px;
  }

  ${({ small }) => small && css`
    padding: ${({ padding }) => padding || '5px 0px'};
    img {
      width: 25px;
    }
  `}

  span {
    font-size: 14px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 350px;
  }

  @media (max-width: 576px) {
    padding: ${({ padding }) => padding || '5px 0px'};
    span {
      max-width: 280px;
    }
  }
`

export const OptionInnerContainer = styled.div`
  display: flex;
  align-items: center;
  ${props => props.theme?.rtl ? css`
    padding-right: 20px;
  ` : css`
    padding-left: 20px;
  `}
`

export const OptionContent = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const DriverNameContainer = styled.div`
  line-height: 1.3;
  color: #263238;
`

export const DriverName = styled.p`
  font-size: 14px;
  font-weight: 600;
  line-height: 1.3;
  color: ${props => props.theme.colors.headingColor};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 350px;
  margin: 0px;

  ${({ small }) => small && css`
    font-weight: 400;
  `}

  @media (max-width: 576px) {
    max-width: 150px;
  }
`

export const WrapperDriverImage = styled.div`
  width: 45px;
  height: 45px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: flex;

  svg {
    width: 100%;
    height: 100%;
    padding: 7px;
    box-sizing: border-box;
    border-radius: 50%;
  }

  ${({ small }) => small && css`
    width: 24px;
    height: 24px;
    border-radius: 8px;
    svg {
      padding: 3px;
    }
  `}

  ${props => props.theme?.rtl ? css`
    margin-left: 8px;
  ` : css`
    margin-right: 8px;
  `}
`
const DriverImageStyled = styled.div`
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
export const DriverImage = (props) => {
  return (
    <DriverImageStyled
      {...props}
      style={{ backgroundImage: `url(${props.bgimage})` }}
    >
      {props.children}
    </DriverImageStyled>
  )
}
