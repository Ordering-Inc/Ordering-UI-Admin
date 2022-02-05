import React, { useState, useEffect } from 'react'
import { useLanguage, useConfig } from 'ordering-components-admin'
import AiOutlineShoppingCart from '@meronex/icons/ai/AiOutlineShoppingCart'
import BsCardImage from '@meronex/icons/bs/BsCardImage'
import { Button } from '../../../styles'
import {
  BusinessFrontLayoutContainer,
  Title,
  LayoutContentWrappper,
  LayoutBoxWrapper,
  LayoutBoxHeader,
  LayoutBoxFooter,
  LayoutBoxContent,
  LayoutTitle,
  FoodBoxContent,
  FoodHeader,
  HeaderBoldLine,
  HeaderLine,
  BusinessImgBox,
  LogoWrapper,
  FoodProductListWrapper,
  FoodProductList,
  FoodCart,
  FoodCategoryList,
  CategoryWrapper,
  CategoryImgWrapper,
  CategoryTitle,
  FoodProductListContent,
  HorzontalProductBox,
  HorzontalProductImageWrapper,
  HorzontalProductInfoList,
  BusinessImgBoxWrapper,
  GroceriesBoxContent,
  GroceriesCartWrapper,
  GroceriesCart,
  GroceriesProductListWrapper,
  GroceriesCategoryListWrapper,
  GroceriesProductListContent,
  ActionButtonWrapper
} from './styles'

export const BusinessFrontLayout = (props) => {
  const {
    formState,
    handleUpdateBusinessClick,
    business,
    setFormState
  } = props

  const [, t] = useLanguage()
  const [configState] = useConfig()

  const useParentCategory = configState?.configs?.use_parent_category?.value
  const [selectedOption, setSelectedOption] = useState('')

  const handleChangeLayout = (index) => {
    setSelectedOption(index)
    setFormState({
      ...formState,
      changes: { front_layout: index }
    })
  }

  const handleSaveLayout = () => {
    handleUpdateBusinessClick && handleUpdateBusinessClick()
  }

  useEffect(() => {
    if (business) setSelectedOption(business?.front_layout)
  }, [business])

  return (
    <>
      <BusinessFrontLayoutContainer>
        <Title>{t('LAYOUT', 'Layout')}</Title>
        <LayoutContentWrappper>
          <LayoutBoxWrapper onClick={() => handleChangeLayout('food')} active={selectedOption === 'food'}>
            <LayoutBoxContent>
              <LayoutBoxHeader />
              <FoodBoxContent>
                <FoodHeader>
                  <HeaderBoldLine />
                  <HeaderLine className='short-line' />
                  <HeaderLine />
                  <HeaderLine />
                </FoodHeader>
                <BusinessImgBoxWrapper>
                  <BusinessImgBox>
                    <BsCardImage />
                    <LogoWrapper>
                      <BsCardImage />
                    </LogoWrapper>
                  </BusinessImgBox>
                </BusinessImgBoxWrapper>
                <FoodProductListWrapper>
                  <FoodProductList>
                    <FoodCategoryList>
                      <div />
                      <div />
                      <div />
                      <div />
                      <div />
                      <div />
                      <div />
                    </FoodCategoryList>
                    <CategoryWrapper>
                      <CategoryImgWrapper>
                        <BsCardImage />
                      </CategoryImgWrapper>
                      <CategoryTitle />
                    </CategoryWrapper>
                    <FoodProductListContent>
                      {[...Array(4).keys()].map(i => (
                        <HorzontalProductBoxUI key={i} />
                      ))}
                    </FoodProductListContent>
                    <CategoryWrapper>
                      <CategoryImgWrapper>
                        <BsCardImage />
                      </CategoryImgWrapper>
                      <CategoryTitle />
                    </CategoryWrapper>
                    <FoodProductListContent>
                      {[...Array(4).keys()].map(i => (
                        <HorzontalProductBoxUI key={i} />
                      ))}
                    </FoodProductListContent>
                  </FoodProductList>
                  <FoodCart>
                    <div>
                      <AiOutlineShoppingCart />
                    </div>
                  </FoodCart>
                </FoodProductListWrapper>
              </FoodBoxContent>
              <LayoutBoxFooter />
            </LayoutBoxContent>
            <LayoutTitle>{t('FOOD', 'Food')}</LayoutTitle>
          </LayoutBoxWrapper>

          {useParentCategory === '1' && (
            <LayoutBoxWrapper onClick={() => handleChangeLayout('groceries')} active={selectedOption === 'groceries'}>
              <LayoutBoxContent>
                <LayoutBoxHeader />
                <GroceriesBoxContent>
                  <BusinessImgBoxWrapper>
                    <BusinessImgBox>
                      <BsCardImage />
                      <LogoWrapper>
                        <BsCardImage />
                      </LogoWrapper>
                      <GroceriesCartWrapper>
                        <GroceriesCart>
                          <AiOutlineShoppingCart />
                        </GroceriesCart>
                      </GroceriesCartWrapper>
                    </BusinessImgBox>
                  </BusinessImgBoxWrapper>
                  <FoodHeader>
                    <HeaderBoldLine />
                    <HeaderLine className='short-line' />
                    <HeaderLine />
                    <HeaderLine />
                  </FoodHeader>
                  <GroceriesProductListWrapper>
                    <GroceriesCategoryListWrapper>
                      {[...Array(6).keys()].map(i => (
                        <CategoryWrapper key={i}>
                          <CategoryImgWrapper>
                            <BsCardImage />
                          </CategoryImgWrapper>
                          <CategoryTitle />
                        </CategoryWrapper>
                      ))}

                    </GroceriesCategoryListWrapper>
                    <FoodProductList>
                      {[...Array(3).keys()].map(i => (
                        <React.Fragment key={i}>
                          <CategoryWrapper>
                            <CategoryImgWrapper>
                              <BsCardImage />
                            </CategoryImgWrapper>
                            <CategoryTitle />
                          </CategoryWrapper>
                          <GroceriesProductListContent>
                            {[...Array(3).keys()].map(i => (
                              <HorzontalProductBoxUI key={i} />
                            ))}
                          </GroceriesProductListContent>
                        </React.Fragment>
                      ))}
                    </FoodProductList>
                  </GroceriesProductListWrapper>
                </GroceriesBoxContent>
                <LayoutBoxFooter />
              </LayoutBoxContent>
              <LayoutTitle>{t('GROCERIES', 'Groceries')}</LayoutTitle>
            </LayoutBoxWrapper>
          )}
        </LayoutContentWrappper>
      </BusinessFrontLayoutContainer>
      <ActionButtonWrapper>
        <Button color='primary' onClick={handleSaveLayout}>{t('SAVE', 'Save')}</Button>
      </ActionButtonWrapper>
    </>
  )
}

const HorzontalProductBoxUI = () => {
  return (
    <HorzontalProductBox>
      <HorzontalProductInfoList>
        <div className='title' />
        <div className='short-line' />
        <div />
        <div />
      </HorzontalProductInfoList>
      <HorzontalProductImageWrapper>
        <BsCardImage />
      </HorzontalProductImageWrapper>
    </HorzontalProductBox>
  )
}
