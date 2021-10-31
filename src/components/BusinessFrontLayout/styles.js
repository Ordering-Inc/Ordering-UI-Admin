import styled, { css } from 'styled-components'

export const BusinessFrontLayoutContainer = styled.div`
  box-sizing: border-box;
  @media (min-width: 576px) {
    padding: 20px 10px;
  }
`

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 700;
  color: ${props => props.theme.colors?.headingColor};
  margin-bottom: 30px;
  margin-left: 10px;

  ${props => props.theme.rtl && css`
    margin-left: 0px;
    margin-right: 10px;
  `}
`

export const LayoutContentWrappper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const LayoutBoxWrapper = styled.div`
  width: 100%;
  margin: 10px;

  ${({ active }) => active && css`
    > div {
      border: 1px solid ${props => props.theme.colors.primary};
    }

    > p {
      color: ${props => props.theme.colors.headingColor};
    }
  `}

  @media (min-width: 576px) {
    width: calc(50% - 20px)
  }
`

export const LayoutBoxFooter = styled.div`
  background: ${props => props.theme.colors.secundary};
  border-radius: 0px 0px 7.6px 7.6px;
  height: 28px;
  border-top: 1px solid ${props => props.theme.colors.borderColor};
`

export const LayoutBoxHeader = styled.div`
  background: ${props => props.theme.colors.secundary};
  border-radius: 7.6px 7.6px 0px 0px;
  height: 16px;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
`

export const LayoutBoxContent = styled.div`
  border-radius: 7.6px;
  border: 1px solid ${props => props.theme.colors.borderColor};
`

export const LayoutTitle = styled.p`
  font-size: 14px;
  line-height: 24px;
  margin-top: 20px;
  margin-bottom: 0;
  text-align: center;
  color: ${props => props.theme.colors.lightGray};
`

export const FoodBoxContent = styled.div`
  min-height: 256px;
  padding: 8px 7px;
`

export const FoodHeader = styled.div`
  width: 53px;
  margin-bottom: 5px;
  padding: 0 4px;

  > div {
    margin-bottom: 3px;
  }
`

export const HeaderLine = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${props => props.theme.colors.secundaryDarkContrast};
  
  &.short-line {
    width: 15px;
  }
`

export const HeaderBoldLine = styled.div`
  height: 3px;
  width: 100%;
  background-color: #ADB5BD;
`

export const BusinessImgBoxWrapper = styled.div`
  padding: 0 4px;
`

export const BusinessImgBox = styled.div`
  background: ${props => props.theme.colors.secundary};
  border-radius: 2px;
  width: 100%;
  box-sizing: border-box;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 7px;

  > svg {
    max-width: 26px;
    max-height: 24px;
    height: 24px;
    width: 26px;
    color: #ADB5BD;
  }
`

export const LogoWrapper = styled.div`
  position: absolute;
  left: 6px;
  bottom: 6px;
  max-width: 18px;
  max-height: 18px;
  height: 18px;
  width: 18px;
  border: 1px solid #DEE2E6;
  box-sizing: border-box;
  border-radius: 1px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${props => props.theme?.rtl && css`
    right: 6px;
    left: initial;
  `}

  > svg {
    width: 9px;
    height: 8px;
    color: #ADB5BD;
  }
`

export const FoodProductListWrapper = styled.div`
  display: flex;
`

export const FoodProductList = styled.div`
  flex: 1;
`

export const FoodCart = styled.div`
  width: 30%;
  margin-left: 8px;
  padding-right: 4px;

  ${props => props.theme.rtl && css`
    margin-left: 0px;
    margin-right: 8px;
    padding-right: 0px;
    padding-left: 4px;
  `}

  > div {
    border: 1px solid #E9ECEF;
    box-sizing: border-box;
    border-radius: 1px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 7px;
      min-width: 7px;
      height: 7px;
      color: ${props => props.theme.colors.disabled};
    }
  }
`

export const FoodCategoryList = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 6px;
  width: 100%;
  padding-left: 4px;

  ${props => props.theme.rtl && css`
    padding-right: 4px;
    padding-left: 0px;
  `}

  div {
    margin-right: 2px;
    width: 12%;
    height: 1px;
    background: ${props => props.theme.colors.borderColor};

    ${props => props.theme.rtl && css`
      margin-right: 0px;
      margin-left: 2px;
    `}

    &:first-child {
      height: 2px;
      background: #CED4DA;
    }
  }
`

export const CategoryWrapper = styled.div`
  display: flex;
  margin: 4px;
  align-items: center;
`

export const CategoryImgWrapper = styled.div`
  margin-right: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 8px;
  width: 8px;
  height: 8px;
  background: ${props => props.theme.colors.secundary};
  border-radius: 1px;
  
  ${props => props.theme?.rtl && css`
    margin-left: 2px;
    margin-right: 0;
  `}

  > svg {
    width: 4px;
    height: 3.5px;
    min-width: 4px;
    color: #ADB5BD;
  }
`

export const CategoryTitle = styled.div`
  width: 24px;
  height: 2px;
  background-color: #CED4DA;
`

export const FoodProductListContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  > div {
    width: calc(50% - 8px);
  }
`

export const HorzontalProductBox = styled.div`
  display: flex;
  align-items: center;
  border: 0.5px solid ${props => props.theme.colors.borderColor};
  box-sizing: border-box;
  border-radius: 2px;
  margin: 4px;
  padding: 3.5px;
`

export const HorzontalProductImageWrapper = styled.div`
  background: #F8F9FA;
  border-radius: 1px;
  width: 14px;
  height: 14px;
  min-width: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 3.5px;

  ${props => props.theme.rtl && css`
    margin-right: 3.5px;
    margin-left: 0;
  `}

  > svg {
    width: 6px;
    height: 5px;
    min-width: 6px;
    color: #ADB5BD;
  }
`

export const HorzontalProductInfoList = styled.div`
  flex: 1;

  > div {
    height: 1.2px;
    background: ${props => props.theme.colors.borderColor};

    &.title {
      height: 2.3px;
      background: #ADB5BD;
    }
    &.short-line {
      width: 30%;
      margin: 2.3px 0;
    }

    &:last-child {
      margin-top: 1.2px;
    }
  }
`
export const VerticalProductInfoList = styled(HorzontalProductInfoList)`
  width: 100%;
`

export const GroceriesBoxContent = styled(FoodBoxContent)``

export const GroceriesCartWrapper = styled.div`
  position: absolute;
  top: -3px;
  right: 3px;

  ${props => props.theme.rtl && css`
    left: 3px;
    right: initial;
  `}
`

export const GroceriesCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 55px;
  height: 56px;
  background: ${props => props.theme.colors.btnSecondaryContrast};
  border: 0.5px solid ${props => props.theme.colors.borderColor};
  box-sizing: border-box;
  border-radius: 2px;

  > svg {
    width: 6px;
    height: 6px;
    color: ${props => props.theme.colors.disabled};
  }
`

export const GroceriesProductListWrapper = styled.div`
  display: flex;
`

export const GroceriesCategoryListWrapper = styled.div``

export const GroceriesProductListContent = styled(FoodProductListContent)`
  > div {
    width: calc(33.3% - 8px);
  }
`

export const MarketBoxContent = styled(FoodBoxContent)`
  position: relative;
`

export const MarketLogoWrapper = styled.div`
  max-width: 18px;
  max-height: 18px;
  height: 18px;
  width: 18px;
  border: 1px solid #DEE2E6;
  box-sizing: border-box;
  border-radius: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 4px;
  margin-bottom: 8px;

  ${props => props.theme?.rtl && css`
    margin-left: 0px;
    margin-right: 4px;
  `}

  > svg {
    width: 9px;
    height: 8px;
    color: #ADB5BD;
  }
`

export const VerticalProductBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4px;
`

export const VerticalProductImageWrapper = styled(HorzontalProductImageWrapper)`
  margin: 0 0 4px 0;
  width: 23px;
  height: 23px;
  min-width: 23px;
`

export const MarketProductListContent = styled(FoodProductListContent)`
  > div {
    width: calc(20% - 8px);
  }
`

export const CategoryAndActionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.5px solid ${props => props.theme.colors.lightGray};
  box-sizing: border-box;
  border-radius: 2px;
  width: 12px;
  height: 8px;

  svg {
    width: 5px;
    color: ${props => props.theme.colors.lightGray};
  }
`

export const MarketCartWrapper = styled.div`
  position: absolute;
  top: 2px;
  right: 15px;

  ${props => props.theme.rtl && css`
    left: 15px;
    right: initial;
  `}
`

export const MarketProductList = styled(FoodProductList)`
  padding: 0 4px;
`

export const MarketCategoryListWrapper = styled(GroceriesCategoryListWrapper)`
  border-right: 0.5px solid ${props => props.theme.colors.secundary};

  ${props => props.theme.rtl && css`
    border-left: 0.5px solid ${props => props.theme.colors.secundary};
    border-right: none;
  `}
`

export const ActionButtonWrapper = styled.div`
  position: sticky;
  top: 100%;

  button {
    height: 44px;
    background: ${props => props.theme.colors.primary};
    color: white;
    border-radius: 8px;
    font-size: 14px;
    margin: 20px;
  }
`
