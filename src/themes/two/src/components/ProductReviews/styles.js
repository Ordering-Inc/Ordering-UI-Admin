import React from 'react'
import styled, { css } from 'styled-components'

export const ProductReviewsContainer = styled.div`
  height: 100%;
  overflow-x: hidden;

  @media (min-width: 1000px) {
    padding: 20px;
  }
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  h1 {
    font-size: 20px;
    font-weight: 700;
    margin: 0px;
  }
`

export const ReviewsTable = styled.table`
  margin: 10px 0;
  width: 100%;
  thead {
    tr {
      border-bottom: solid 1px ${props => props.theme.colors.disabled};
    }
  }

  th {
    font-size: 12px;
    font-weight: 700;
  }

  th, td {
    padding: 10px 0;
  }
`

export const ReviewTbody = styled.tbody`
  cursor: pointer;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  &:hover {
    background-color: ${props => props.theme.colors.borderColor};
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

export const ReviewObject = styled.div`
  font-size: 12px;
  display: flex;
  align-items: center;

  > div:first-child {
    ${props => props.theme?.rtl ? css`
      margin-left: 10px;
    ` : css`
      margin-right: 10px;
    `}
  }
`

export const InfoBlock = styled.div`
  p {
    font-size: 11px;
    margin: 0px;
    color: ${props => props.theme.colors.lightGray};

    &.bold {
      font-size: 12px;
      font-weight: 500;
      color: ${props => props.theme.colors.headingColor};
    }
  }
`

export const CustomerWrapper = styled.div`
  ${props => props.theme.colors.rtl ? css`
    padding-right: 15px;
  ` : css`
    padding-left: 15px;
  `}

  ${({ isHeader }) => !isHeader && css`
    height: 40px;
    display: flex;
    align-items: center;
    ${props => props.theme.colors.rtl ? css`
      border-right: 1px solid ${props => props.theme.colors.borderColor};
    ` : css`
      border-left: 1px solid ${props => props.theme.colors.borderColor};
    `}
  `}
`
export const ReviewMarkerWrapper = styled.div`
  font-size: 12px;

  ${props => props.theme.colors.rtl ? css`
    padding-right: 15px;
  ` : css`
    padding-left: 15px;
  `}

  ${({ isHeader }) => !isHeader && css`
    height: 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    ${props => props.theme.colors.rtl ? css`
      border-right: 1px solid ${props => props.theme.colors.borderColor};
    ` : css`
      border-left: 1px solid ${props => props.theme.colors.borderColor};
    `}
  `}

  svg {
    color: ${props => props.theme.colors.primary};
    font-size: 20px;
  }

  p {
    margin: 0px;
    color: ${props => props.theme.colors.lightGray};
  }
`
export const CommentsWrapper = styled.div`
  font-size: 12px;
  ${props => props.theme.colors.rtl ? css`
    padding-right: 15px;
  ` : css`
    padding-left: 15px;
  `}

  ${({ isHeader }) => !isHeader && css`
    height: 40px;
    display: flex;
    align-items: center;
    ${props => props.theme.colors.rtl ? css`
      border-right: 1px solid ${props => props.theme.colors.borderColor};
    ` : css`
      border-left: 1px solid ${props => props.theme.colors.borderColor};
    `}
  `}

  p {
    color: ${props => props.theme.colors.lightGray};
    margin: 0px;
  }
`
export const ActionsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  ${props => props.theme.colors.rtl ? css`
    padding-right: 15px;
  ` : css`
    padding-left: 15px;
  `}

  ${({ isHeader }) => !isHeader && css`
    height: 40px;
    display: flex;
    align-items: center;
    ${props => props.theme.colors.rtl ? css`
      border-right: 1px solid ${props => props.theme.colors.borderColor};
    ` : css`
      border-left: 1px solid ${props => props.theme.colors.borderColor};
    `}
  `}
`

export const PagesBottomContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
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

export const ActionSelectorWrapper = styled.div`
  ${props => props.theme?.rtl ? css`
    margin-right: 20px;
  ` : css`
    margin-left: 20px;
  `}
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
        font-size: 12px;
        color: ${props => props.theme.colors.headingColor};
      }
      .dropdown-item:last-child {
        color: #E63757;
      }
    }
  }
`
