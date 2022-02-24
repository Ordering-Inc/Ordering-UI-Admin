import styled, { css } from 'styled-components'
import { lighten } from 'polished'

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
    background: ${props => props.theme.colors.gray};
    border-radius: 0 0 8px 8px;
  `}
  display: flex;
  justify-content: center;
  padding: 20px;
  max-height: calc(90vh - 150px);
  overflow: auto;
`
export const ProductInfoModalPreview = styled.div`
  max-width: 500px;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  position: relative;
  
  ${({ isMobileView }) => !isMobileView && css`
    background: ${props => props.theme.colors.backgroundPage};
  `}

  ${({ isMobileView }) => isMobileView && css`
    width: 325px;
    height: 650px;
    background-image: url(${({ src }) => src});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding: 12px;
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
    height: 630px;
    overflow: auto;
    ::-webkit-scrollbar {
      width: 0px;
    }
    background: ${props => props.theme.colors.backgroundPage};
  `}
`
export const ModalHeader = styled.div`
  padding: 20px;
  svg {
    color: ${props => props.theme.colors.secundaryContrast};
    font-size: 16px;
  }
`
export const WrapperImage = styled.div`
  position: relative;
`
export const SwiperWrapper = styled.div`
  position: relative;
  width: 100%;

  .mySwiper2 {
    height: 250px;
    width: 100%;
    .swiper-slide-active {
      border-radius: 0px;
      img {
        border-radius: 0px;
      }
    }
    @media (min-width: 576px) {
      height: 320px;
    }
    @media (min-width: 1201px) {
    }
  }
  .swiper {
    width: 100%;
    height: 500px;
    margin-left: auto;
    margin-right: auto;
  }
  .swiper-slide {
    background-size: cover;
    background-position: center;
  }
  .product-thumb {
    box-sizing: border-box;
    padding: 15px 0px;
    margin: 0px 10px;

    .swiper-slide {
      opacity: 0.8;
      border-radius: 7.6px;
      height: 60px;

      img {
        border-radius: 7.6px;
      }
    }
    .swiper-slide-thumb-active {
      opacity: 1;
    }
  }
  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .swiper-button-next {
    background-image: url(${props => props.theme.images.icons.rightArrow});
    background-color: rgba(0,0,0,0.2);
    background-repeat: no-repeat;
    background-position: 55% center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
  .swiper-button-prev {
    background-image: url(${props => props.theme.images.icons.leftArrow});
    background-color: rgba(0,0,0,0.2);
    background-repeat: no-repeat;
    background-position: 45% center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
  .swiper-button-next::after, .swiper-button-prev::after {
    display: none;
  }
`
export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0px;
  position: relative;

  h1 {
    font-weight: 700;
    font-size: 20px;
    margin-top: 0;
    margin-bottom: 5px;
  }

  .price-wrapper {
    display: flex;
    align-items: center;

    span {
      font-size: 14px;
      margin-right: 5px;
      ${props => props.theme?.rtl && css`
        margin-right: 0px;
        margin-left: 5px;
      `}
    }

    .price-discount {
      font-size: 12px;
      color: ${props => props.theme.colors.lightGray};
    }
  }
  p {
    font-size: 13px;
    color: ${props => props.theme.colors.lightGray};
    margin-top: 0px;
    margin-bottom: 10px;
  }
`
export const ProductFormTitle = styled.div`
  overflow-wrap: break-word;
  margin: 10px 15px;

  .price-discount {
    text-decoration: line-through;
  }
`
export const SkuContent = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 0px;
  }

  p {
    font-size: 14px;
  }
`
export const Divider = styled.div`
  height: 6px;
  background: ${props => props.theme.colors.secundary};
`
export const ProductEdition = styled.div`
  margin: 10px 15px;
`
export const ProductTabContainer = styled.div`
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  position: sticky;
  top: 50px;
  background: ${props => props.theme.colors?.backgroundPage || '#FFF'};
  z-index: 900;

  @media (min-width: 769px) {
    top: -20px;
  }
`
export const SectionTitle = styled.h3`
  text-transform: capitalize;
  font-size: 14px;
  padding: 15px 0px;
  margin: 0px;
  font-weight: 600;
`
export const ProductComment = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 50px;

  p {
    font-weight: 300;
    margin-bottom: 5px;
  }
`
export const Tabs = styled.div`
  display: flex;
`

export const Tab = styled.div`
  ${props => props.theme?.rtl ? css`
    padding: 5px 0 5px 10px;
  ` : css`
    padding: 5px 10px 5px 0;
  `}
  cursor: pointer;
  font-size: 12px;
  ${({ active }) => active ? css`
    color: ${props => props.theme.colors.headingColor};
    font-weight: 600;
    border-bottom: 1px solid ${props => props.theme.colors.headingColor};
  ` : css`
    color: ${props => props.theme.colors.lightGray};
  `}
`
export const WrapperIngredients = styled.div`
  ${({ isProductSoldout }) => isProductSoldout && css`
    border-radius: 10px;
    pointer-events: none;
    background: hsl(0, 0%, 72%);
  `}
`
export const IngredientContainer = styled.div`
  display: flex;
  align-items: center;

  input {
    transform: scale(0.9);
  }

  > span {
    color: ${props => props.theme.colors.lightGray};
    font-size: 12px;
    ${props => props.theme.rtl ? css`
      margin-right: 8px;
    ` : css`
      margin-left: 8px;
    `}
  }
`
export const OptionContainer = styled.div`
  &.error {
    background-color: orange;
  }
`
export const OptionWrapHeader = styled.div`
  padding: 15px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${props => props.theme.colors?.backgroundPage || '#FFF'};
`
export const OptionTitleContainer = styled.div`
  margin: 0px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 70%;
  display: flex;
  align-items: center;  

  *:first-child {
    margin-right: 8px;
  }
`
export const OptionTitle = styled.h3`
  font-size: 14px;
  display: flex;
  flex-direction: column;
  margin-bottom: 0;

  span {
    &:not(:first-child) {
      color: ${props => props.theme.colors.grayTextColor};
      font-size: 12px;
      font-weight: 400;
    }
  }
`
export const OptionFlag = styled.span`
  font-size: 12px;
  margin: 0px;
  text-transform: capitalize;
  color: #A52121;
  font-weight: 500;
`
export const OptionThumbnail = styled.div`
  display: inline-block;
  border-radius: 8px;
  background-image: url(${({ src }) => src});
  background-repeat: no-repeat, repeat;
  width: 40px;
  height: 40px;
  background-size: cover;
  object-fit: cover;
  background-position: center;
  justify-content: center;
  align-items: center;
`
export const WrapperSubOption = styled.div`
  border-radius: 10px;
  &.error {
    background-color: ${lighten(0.58, '#A52121')};
  }
  &.soldout {
    pointer-events: none;
    background-color: hsl(0, 0%, 72%);
  }
`
export const ProductSuboptionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  cursor: pointer;

  -webkit-touch-callout: none;
    -webkit-user-select: none;
     -khtml-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
`
export const IconControl = styled.div`
  transform: scale(0.9);
  display: flex;
  color: ${props => props.theme.colors.primary};
  margin-right: 5px;
  ${props => props.theme?.rtl && css`
    margin-left: 5px;
    margin-right: 0px;
  `}
  svg {
    font-size: 25px;
  }

  svg[disabled] {
    color: #CBCBCB;
  }
`
export const SubOptionThumbnail = styled.div`
  display: inline-block;
  border-radius: 8px;
  background-image: url(${({ src }) => src});
  background-repeat: no-repeat, repeat;
  width: 30px;
  height: 30px;
  background-size: cover;
  object-fit: cover;
  background-position: center;
  justify-content: center;
  align-items: center;
`
export const SuoptionText = styled.div`
  flex: 1 1 auto;
  display: flex;
  font-weight: 300;
  color: #555;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0 5px;
  font-size: 12px;

  div {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  span {
    margin-left: 10px;
    font-weight: 500;
    color: ${props => props.theme.colors.primary};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    ${props => props.theme?.rtl && css`
      margin-left: 0;
      margin-right: 10px;    
    `}
  }
`

export const QuantityControl = styled.div`
  display: flex;
  color: #555;
  align-items: center;
  font-weight: 300;
  font-size: 12px;
  margin: 0 5px;

  svg {
    color: ${props => props.theme.colors.primary};
    font-size: 16px;
    margin-right: 3px;
    ${props => props.theme?.rtl && css`
      margin-left: 3px;
      margin-right: 0px;
    `}
  }

  svg[disabled] {
    color: #CBCBCB;
  }

  svg:last-child {
    margin-left: 3px;
    margin-right: 0;
    ${props => props.theme?.rtl && css`
      margin-right: 3px;
      margin-left: 0px;
  `}
  }
`

export const PositionControl = styled.div`
  display: flex;
  align-items: center;
  color: #CBCBCB;
  font-weight: 300;
  font-size: 18px;
  margin: 0 5px;

  svg {
    font-size: 16px;
    margin-right: 3px;
    ${props => props.theme?.rtl && css`
      margin-left: 3px;
      margin-right: 0px;
    `}
    &.reverse {
      transform: rotate(180deg);
    }

    &.selected {
      color: ${props => props.theme.colors.primary};
    }

    &:last-child {
      margin-right: 0;
      ${props => props.theme?.rtl && css`
        margin-left: 0;
      `}
    }
  }
`
export const SuboptionPrice = styled.div`
  display: flex;
  white-space: nowrap;
  font-weight: 300;
  font-size: 14px;
  color: #555;
  margin-left: 5px;
  ${props => props.theme?.rtl && css`
    margin-right: 5px;
    margin-left: 0px;
  `}
`
export const ProductActions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ isMobileView }) => isMobileView ? css`
    padding: 15px;
    button.add {
      padding: 0px 5px;
    }
  ` : css`
    padding: 10px 15px;
    button.add {
      padding: 5px 10px;
    }
  `}
  width: 100%;
  z-index: 999;
  border-top: 1px solid ${props => props.theme.colors.borderColor};
  border-radius: 0 0 8px 8px;
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100%;
  background: ${props => props.theme.colors?.backgroundPage || '#FFF'};

  div.price {
    font-weight: 600;
    font-size: 14px;
  }

  div.incdec-control {
    width: 50%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    svg {
      width: 22px;
      height: 22px;
      cursor: pointer;
    }
  }
  div:last-child {
    width: 100%;
    display: flex;
    align-items: center;
  }

  button:disabled,
  button.disabled,
  svg.disabled {
    opacity: 0.5;
  }

  svg.disabled {
    pointer-events: none;
  }

  button.add {
    width: 90%;
    margin-top: 10px;
    position: relative;
    font-size: 12px;

    &.soldout {
      width: 100%;
      pointer-events: none;
    }
  }

  @media (min-width: 577px) {
    position: sticky;
  }

  @media (min-width: 1200px) {
    ${({ isMobileView }) => isMobileView ? css`
      bottom: 0;
    ` : css`
      bottom: -21px;
    `}
    flex-direction: row;
    justify-content: space-between;

    div.price {
      width: 25%;
    }

    button.add {
      width: 40%;
      margin-top: 0;
    }

    div.incdec-control {
      width: 30%;
    }
  }
`
