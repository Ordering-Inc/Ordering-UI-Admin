import styled, { css } from 'styled-components'
import React from 'react'

export const Container = styled.div`
  margin-top: 20px;
  ${({ isMobileView }) => !isMobileView && css`
    border-radius: 8px;
    border: 1px solid ${props => props.theme.colors.borderColor};
  `}
`
export const DesktopHeader = styled.div`
  height: 25px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  div {
    background: ${props => props.theme.colors.gray};
    width: 6px;
    height: 6px;
    border-radius: 50%;
    margin: 0 3px;
  }
`
export const DesktopBackground = styled.div`
  ${({ isMobileView }) => !isMobileView && css`
    border-radius: 0 0 8px 8px;
  `}
  display: flex;
  justify-content: center;
  max-height: calc(90vh - 50px);
  overflow: auto;
`
export const ProductInfoModalPreview = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  position: relative;
  
  ${({ isMobileView }) => !isMobileView && css`
    background: ${props => props.theme.colors.backgroundPage};
  `}

  ${({ isMobileView }) => isMobileView && css`
    width: 270px;
    height: 540px;
    background-image: url(${({ src }) => src});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding: 29px;
    @media (min-width: 576px) {
      width: 325px;
      height: 650px;
      padding: 12px;
    }
  `}
`
export const MobileContentMask = styled.div`
  ${({ isMobileView }) => isMobileView && css`
    -webkit-mask-image: url(${({ src }) => src});
    mask-image: url(${({ src }) => src});
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    -webkit-mask-position: center;
    mask-position: center;
    height: 495px;
    overflow: auto;
    ::-webkit-scrollbar {
      width: 0px;
    }
    background: ${props => props.theme.colors.backgroundPage};
    @media (min-width: 576px) {
      height: 630px;
    }
  `}
`

export const Contentheader = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 1px solid #e9ecef;
`

export const HeaderLogo = styled.div``

export const HeaderInfo = styled.div`
  display: flex;
  border-radius: 50px;
  border: 1px solid ${props => props.theme.colors.borderColor};
  background: #f8f9fa;
  flex: 1;
  margin: 0px 20px;

  @media (min-width: 850px) {
    margin: 0px 50px;
  }
`

export const AddressWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  flex: 1;

  svg {
    min-width: 16px;
    color: rgb(177, 188, 204);
    margin-right: 5px;
    ${props => props.theme?.rtl && css`
      margin-left: 5px;
      margin-right: 0px;
    `}
  }

  span {
    font-size: 12px;
    font-weight: bold;
    white-space: nowrap;
  }
`

export const MomentWrapper = styled.div`
  display: flex;
  align-items: center;
  border-left: 1px solid ${props => props.theme.colors.borderColor};
  border-right: 1px solid ${props => props.theme.colors.borderColor};
  justify-content: center;
  padding: 10px 20px;
  max-width: 150px;
  width: 100%;
  span {
    color: #909ba9;
    font-size: 12px;
  }
`

export const OrderTypeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  max-width: 150px;
  width: 100%;
  span {
    color: #909ba9;
    font-size: 12px;
  }
`

export const CartWrapper = styled.div`
  display: flex;
  align-items: center;
  color: white;
  border-radius: 8px;
  background: #2C7BE5;
  padding: 5px;
  height: 35px;
  margin: 0px 15px;
  svg {
    margin-right: 5px;
    ${props => props.theme?.rtl && css`
      margin-left: 5px;
      margin-right: 0px;
    `}
  }
  span {
    font-size: 12px;
  }
`

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-right: 10px;
    ${props => props.theme?.rtl && css`
      margin-left: 10px;
      margin-right: 0px;
    `}
  }

  > div {
    width: 35px;
    height: 35px;
    border-radius: 8px;
    overflow: hidden;
    img, svg {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`

export const ContentWrapper = styled.div`
  padding: 20px;
`

export const BusinessInfoContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;

  @media (min-width: 700px) {
    ${({ isMobileView }) => !isMobileView && css`
      flex-direction: row;
      align-items: flex-end;
      justify-content: space-between;
    `}
  }
`

export const BusinessInfoContent = styled.div``

export const BusinessInfo = styled.div`
  display: flex;
`

export const BusinessInfoItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-right:5px;
  ${props => props.theme?.rtl && css`
    padding-left: 5px;
    padding-right: 0;
  `}

  h2 {
    font-weight: 500;
    font-size: 20px;
    margin: 0 0 10px 0;
  }

  .type {
    font-size: 12px;
    color: ${props => props.theme.colors.darkTextColor};
    margin: 0 0 5px 0;
  }

  .preorder-Reviews {
    span {
      user-select: none;
      cursor: pointer;
      font-size: 12px;
      color: ${props => props.theme?.colors.primary};
      text-decoration: underline;
      &:not(:last-child) {
        margin-right: 5px;
        ${props => props.theme?.rtl && css`
          margin-left: 5px;
          margin-right: 0;
        `}
      }

      &.dot {
        font-size: 12px;
        text-decoration: none;
        color: #909BA9;
      }
    }
  }
`

export const BusinessDetail = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  h5 {
    font-size: 12px;
    color: #909BA9;
    margin: 0 5px 0 0;
    font-weight: normal;
    ${props => props.theme?.rtl && css`
      margin-left: 5px;
      margin-right: 0px;
    `}

    span {
      margin-right: 5px;
      ${props => props.theme?.rtl && css`
        margin-left: 5px;
        margin-right: 0px;
      `}
    }
  }

  .review {
    color: #909BA9;
    margin: 0;
    display: flex;
    align-items: center;

    svg {
      font-size: 15px;
      margin-bottom: 1px;
      margin-right: 5px;
      ${props => props.theme?.rtl && css`
        margin-left: 5px;
        margin-right: 0px;
      `}
    }

    p {
      font-size: 12px;
      margin: 0px;
    }
  }

  .dot {
    color: #909BA9;
    font-size: 12px;
    margin-right: 5px;
    ${props => props.theme?.rtl && css`
      margin-left: 5px;
      margin-right: 0px;
    `}
  }

  ${({ isSkeleton }) => isSkeleton && css`
    > span {
      display: flex;
      margin-right: 5px;
      ${props => props.theme?.rtl && css`
        margin-left: 5px;
        margin-right: 0px;
      `}
    }
  `}
`

export const WrapperSearch = styled.div`
  svg {
    left: 0px;
  }
  input {
    border-radius: 0px;
    border: none;
    border-bottom: 1px solid ${props => props.theme.colors.borderColor};
    padding: 8px;
    padding-left: 25px;
  }
`

export const BusinessContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  max-height: 250px;
  height: 230px;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  object-fit: cover;
  background-position: center;
  min-height: 150px;
  justify-content: center;
  align-items: flex-end;
  border-radius: 7.6px;

  ${props => props.isSkeleton && css`
    background-color: #cccccc;
  `}

  ${props => props.bgimage && !props.isClosed && css`
    background-image: url(${props.bgimage});
  `}

  ${props => props.bgimage && props.isClosed && css`
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.bgimage});
  `}

  h1 {
    color: #FFF;
    opacity: 0.5;
    position: absolute;
    top: 0;
    right: 0;
    margin: 0 10px;
    padding: 0;
  }

  @media (min-width: 490px) {
    justify-content: flex-start;
  }

  ${({ isMobileView }) => isMobileView && css`
    margin-left: -20px;
    width: calc(100% + 40px);
    height: 150px;
  `}
`

export const BusinessContent = styled.div`
  border-radius: 10px;
  margin: 10px;
  max-height: 124px;
  width: 124px;

  @media (min-width: 426px) {
    margin: 25px;
  }
`

export const WrapperBusinessLogo = styled.div`
  max-width: 124px;
  max-height: 124px;
  height: 90px;
  width: 90px;

  ${({ isMobileView }) => isMobileView && css`
    height: 50px;
    width: 50px;
    margin-top: -25px;
    margin-bottom: 20px;
  `}
`

const BusinessLogoStyled = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  object-fit: cover;
  background-position: center;
  min-height: 45px;
  border-radius: 7.6px;
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

export const BusinessMoreDetail = styled.div`
  top: 30px;
  right: 30px;
  position: absolute;
  min-width: 24px;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  svg {
    font-size: 20px;
    color: white;
  }
`

export const BusinessProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const BusinessProductListWrapper = styled.div`
  width: 100%;
  margin-top: 30px;

  @media (min-width: 700px) {
    width: 70%;
    ${({ isMobileView }) => isMobileView && css`
      width: 100%;
    `}
  }
`

export const BusinessCartWrapper = styled.div`
  width: 100%;
  margin-top: 30px;

  @media (min-width: 700px) {
    width: 30%;
    padding-left: 15px;
    ${props => props.theme?.rtl && css`
      padding-left: 0px;
      padding-right: 15px;
    `}
    ${({ isMobileView }) => isMobileView && css`
      width: 100%;
      padding: 0px;
    `}
  }
`

export const CategoryWrapper = styled.div`
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  margin-bottom: 20px;
`

export const Tab = styled.div`
  padding: 6px 0;
  ${props => props.theme?.rtl ? css`
    margin-left: 20px;
  ` : css`
    margin-right: 20px;
  `}
  cursor: pointer;
  color: ${props => props.theme.colors?.headingColor};
  white-space: nowrap;
  font-size: 12px;

  ${({ active }) => active && css`
    border-bottom: 1px solid;
    font-weight: 500;
  `}

  ${({ active }) => !active && css`
    color: ${props => props.theme.colors.lightGray};
  `}
`

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px;
  margin: 10px 0px;
  border-radius: 7.6px;
  cursor: pointer;
  position: relative;
  border: 1px solid #E9ECEF;
  box-sizing: border-box;

  background: ${({ soldOut }) => soldOut ? '#6c757d33' : '#FFF'};

  @media (min-width: 576px) {
    margin: 10px;
    width: calc(100% - 40px);
  }

  ${({ isCartOnProductsList }) => isCartOnProductsList ? css`
    @media (min-width: 993px) {
      width: calc(50% - 20px);
      margin: 10px 20px 10px 0px;
      ${props => props.theme?.rtl && css`
        margin: 10px 0px 10px 20px;
      `}
    }
  ` : css`
    @media (min-width: 681px) {
      width: calc(50% - 20px);
    }

    @media (min-width: 993px) {
      width: calc(33.3% - 15px);
      margin: 10px 15px 10px 0px;
      ${props => props.theme?.rtl && css`
        margin: 10px 0px 10px 15px;
      `}
    }
  `}
  ${({ isMobileView }) => isMobileView && css`
    width: 100% !important;
    margin: 10px 0px !important;
  `}
`

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  max-width: calc(100% - 90px);
  > * {
    margin: 3px;
  }

  h1 {
    font-size: 12px;
    font-weight: 500;
    text-align: left;
    color: #263238;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  p {
    color: #909BA9;
    text-align: left;
    font-size: 8px;
    ${props => props.theme?.rtl && css`
      text-align: right;
    `}

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }

  span {
    color: ${props => props.theme.colors.darkTextColor};
    font-size: 10px;
  }

  @media (min-width: 1024px) {
    p {
      font-size: 10px;
    }

    span {
      font-size: 12px;
    }
  }
`

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;

  .off-price {
    font-size: 10px;
    color: #909BA9;
    margin-left: 5px;
    text-decoration: line-through;

    ${props => props.theme.rtl && css`
      margin-right: 5px;
      margin-left: 0;
    `}

    @media (min-width: 1024px) {
      font-size: 13px;
    }
  }
`

export const WrapLogo = styled.div`
  max-width: 65px;
  max-height: 65px;
  height: 65px;
  width: 65px;
  margin-left: 5px;
  ${props => props.theme?.rtl && css`
    margin-right: 5px;
    margin-left: 0px;
  `}
`

const CardLogoStyled = styled.div`
  box-sizing: border-box;
  position: relative;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  background-position: center;
  object-fit: cover;
  min-height: 65px;
  border-radius: 8px;
`
export const CardLogo = (props) => {
  const style = {}
  if (props.bgimage) {
    style.backgroundImage = `url(${props.bgimage})`
  }
  if (props.soldOut) {
    style.filter = 'brightness(70%)'
  }
  return (
    <CardLogoStyled {...props} style={style}>
      {props.children}
    </CardLogoStyled>
  )
}

export const SoldOut = styled.span`
  font-weight: bold;
  position: absolute;
  background: #495057 0% 0% no-repeat padding-box;
  padding: 3px 6px;
  top: 5px;
  border-radius: 2px 0px 0px 2px;
  right: 0px;
  color: white;
  font-size: 10px;
  ${props => props.theme?.rtl && css`
    left: 0px;
    right: initial;
  `}
  &:first-letter {
    text-transform: uppercase;
  }
`

export const BusinessProductList = styled.div``

export const ProductsListing = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 15px;
`

export const WrapAllCategories = styled.div`
  .category-title {
    display: flex;
    align-items: center;
    padding-top: 5px;
    padding-bottom: 12px;
    margin-left: 10px;
    ${props => props.theme?.rtl && css`
      margin-right: 10px;
      margin-left: 0;
    `}

    img {
      border-radius: 7.6px;
      min-width: 30px;
      min-height: 30px;
      height: 30px;
      width: 30px;
      margin-right: 8px;
      ${props => props.theme?.rtl && css`
        margin-left: 8px;
        margin-right: 0;
      `}
    }

    @media (min-width: 993px) {
      margin: 0px;
    }
  }

  h3 {
    font-weight: 500;
    font-size: 18px;
    color: ${props => props.theme?.colors.darkTextColor};
    margin: 0px 0px 0px 10px;
    ${props => props.theme?.rtl && css`
      margin: 0px 10px 0px 0px;
    `}

    @media (min-width: 993px) {
      margin: 0px;
    }
  }
`

export const BusinessCartContent = styled.div`
  background: ${props => props.theme.colors?.backgroundPage || '#FFF'};
  padding: 15px;
  position: relative;
  margin-bottom: 20px;

  .product.accordion {
    margin: 0;
  }

  ${({ isModal }) => !isModal && css`
    border: 1px solid #E9ECEF;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
    border-radius: 7.6px;
  `}

  @media (min-width: 768px) {
    padding: 25px 20px;
    position: sticky;
    top: 0;
  }
`

export const EmptyCart = styled.div`
  .empty-content {
    display: flex;
    flex-direction: column;
    align-items: center;

    svg {
      font-size: 35px;
      color: #B1BCCC;
      margin-top: 10px;
    }

    p {
      font-size: 12px;
      color: #B1BCCC;
      margin: 15px 0 0 0;
    }
  }
`

export const EmptyBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;

  span {
    font-weight: 500;
    font-size: 14px;
    color: ${props => props.theme.colors.darkTextColor};
  }

  button {
    color: #748194;
    background: #F8F9FA;
    border: 1px solid #F8F9FA;
    border-radius: 7.6px;
    height: 35px;
    font-size: 12px;
    padding-left: 15px;
    padding-right: 15px;
  }
`

export const MobileHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 15px 0px;

  svg {
    color: #909BA9;
  }
`

export const MobileCartViewWrapper = styled.div`
  position: sticky;
  width: 100%;
  left: 0;
  bottom: 0;
  background-color: white;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  box-shadow: 0px 4px 10px rgb(0 0 0 / 12%);

  span {
    font-weight: 500;
    font-size: 14px;
  }

  button {
    height: 35px;
    border-radius: 7px;
  }
`
