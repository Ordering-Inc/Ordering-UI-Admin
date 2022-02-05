import React, { useState, useEffect, useRef } from 'react'
import { useLanguage, useUtils } from 'ordering-components-admin'
import { XLg } from 'react-bootstrap-icons'
import { useTheme } from 'styled-components'
import { Checkbox, TextArea, Button } from '../../../styles'
import MdRadioButtonChecked from '@meronex/icons/md/MdRadioButtonChecked'
import MdRadioButtonUnchecked from '@meronex/icons/md/MdRadioButtonUnchecked'
import BsDashCircle from '@meronex/icons/bs/BsDashCircle'
import BsPlusCircle from '@meronex/icons/bs/BsPlusCircle'
import BsCircleHalf from '@meronex/icons/bs/BsCircleHalf'
import BsCircleFill from '@meronex/icons/bs/BsCircleFill'
import FiMinusCircle from '@meronex/icons/fi/FiMinusCircle'
import FiPlusCircle from '@meronex/icons/fi/FiPlusCircle'

import {
  Container,
  DesktopHeader,
  DesktopBackground,
  ProductInfoModalPreview,
  ModalHeader,

  WrapperImage,
  SwiperWrapper,
  ProductInfo,
  ProductFormTitle,
  SkuContent,
  Divider,
  ProductEdition,
  ProductTabContainer,
  SectionTitle,
  ProductComment,
  Tabs,
  Tab,
  WrapperIngredients,
  IngredientContainer,
  OptionContainer,
  OptionWrapHeader,
  OptionTitleContainer,
  OptionTitle,
  OptionFlag,
  OptionThumbnail,
  WrapperSubOption,
  ProductSuboptionContainer,
  IconControl,
  SubOptionThumbnail,
  SuoptionText,
  QuantityControl,
  PositionControl,
  SuboptionPrice,
  ProductActions,
  MobileContentMask
} from './styles'

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, {
  Navigation,
  Thumbs
} from 'swiper'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

SwiperCore.use([Navigation, Thumbs])

export const ProductDesktopPreview = (props) => {
  const {
    product,
    productCart,
    showProductOption,
    isMobileView
  } = props

  const [, t] = useLanguage()
  const [{ parsePrice }] = useUtils()
  const theme = useTheme()
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const [gallery, setGallery] = useState([])
  const [tabValue, setTabValue] = useState(null)
  const productContainerRef = useRef(null)
  const productInfoRef = useRef(null)
  const isSoldOut = product.product?.inventoried && product.product?.quantity === 0

  const getMaxMin = (option) => {
    let maxMin = `(${t('MIN', 'Min')}: ${option.min} / ${t('MAX', 'Max')}: ${option.max})`
    if (option.min === 1 && option.max === 1) {
      maxMin = t('REQUIRED', 'Required')
    } else if (option.min === 0 && option.max > 0) {
      maxMin = `(${t('MAX', 'Max')}: ${option.max})`
    } else if (option.min > 0 && option.max === 0) {
      maxMin = `(${t('MIN', 'Min')}: ${option.min})`
    }
    return maxMin
  }

  useEffect(() => {
    const imageList = []
    imageList.push(product?.images || theme.images?.dummies?.product)
    for (const galleryItem of product?.gallery) {
      imageList.push(galleryItem.file)
    }
    setGallery(imageList)
  }, [product])

  useEffect(() => {
    if (!tabValue) return
    if (document.getElementById(`${tabValue}`)) {
      const topOffset = (tabValue === 'all') ? 0 : productInfoRef.current.offsetTop + document.getElementById(`${tabValue}`).offsetTop - 120
      productContainerRef.current.scrollTo({
        top: topOffset,
        behavior: 'smooth'
      })
    }
  }, [tabValue])

  let pos = { top: 0, left: 0, x: 0, y: 0 }
  const ele = document.getElementById('product_mobile_view')

  const mouseDownHandler = (e) => {
    if (!isMobileView) return
    ele.style.cursor = 'grabbing'
    ele.style.userSelect = 'none'
    pos = {
      left: ele.scrollLeft,
      top: ele.scrollTop,
      x: e.clientX,
      y: e.clientY
    }
    document.addEventListener('mousemove', mouseMoveHandler)
    document.addEventListener('mouseup', mouseUpHandler)
  }

  const mouseMoveHandler = (e) => {
    const dx = e.clientX - pos.x
    const dy = e.clientY - pos.y
    ele.scrollTop = pos.top - dy
    ele.scrollLeft = pos.left - dx
  }

  const mouseUpHandler = () => {
    document.removeEventListener('mousemove', mouseMoveHandler)
    document.removeEventListener('mouseup', mouseUpHandler)
    ele.style.cursor = 'grab'
    ele.style.removeProperty('user-select')
  }

  return (
    <Container
      isMobileView={isMobileView}
    >
      {!isMobileView && (
        <DesktopHeader>
          <div />
          <div />
          <div />
        </DesktopHeader>
      )}
      <DesktopBackground
        ref={productContainerRef}
        isMobileView={isMobileView}
      >
        <ProductInfoModalPreview
          isMobileView={isMobileView}
          src={theme.images.general.mobileCase}
        >
          <MobileContentMask
            isMobileView={isMobileView}
            src={theme.images.general.mobileMask}
            id='product_mobile_view'
            onMouseDown={mouseDownHandler}
          >
            {!isMobileView && (
              <ModalHeader>
                <XLg />
              </ModalHeader>
            )}
            <WrapperImage>
              <SwiperWrapper>
                <Swiper
                  spaceBetween={10}
                  navigation
                  thumbs={{ swiper: thumbsSwiper }} className='mySwiper2'
                >
                  {gallery.map((img, i) => (
                    <SwiperSlide key={i}>
                      <img src={img} alt='' />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <Swiper
                  onSwiper={setThumbsSwiper}
                  spaceBetween={20}
                  slidesPerView={5}
                  breakpoints={{
                    0: {
                      slidesPerView: 3,
                      spaceBetween: 20
                    },
                    300: {
                      slidesPerView: 4,
                      spaceBetween: 20
                    },
                    400: {
                      slidesPerView: 5,
                      spaceBetween: 20
                    },
                    550: {
                      slidesPerView: 6,
                      spaceBetween: 20
                    },
                    769: {
                      slidesPerView: 4,
                      spaceBetween: 20
                    },
                    1000: {
                      slidesPerView: 5,
                      spaceBetween: 20
                    },
                    1400: {
                      slidesPerView: 6,
                      spaceBetween: 20
                    },
                    1600: {
                      slidesPerView: 7,
                      spaceBetween: 20
                    }
                  }}
                  freeMode
                  watchSlidesProgress
                  className='product-thumb'
                >
                  {gallery.map((img, i) => (
                    <SwiperSlide key={i}>
                      <img src={img} alt='' />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </SwiperWrapper>
            </WrapperImage>
            <ProductInfo ref={productInfoRef}>
              <ProductFormTitle>
                <h1>{product?.name}</h1>
                {product?.price && (
                  <div className='price-wrapper'>
                    <span>{productCart.total && parsePrice(productCart.total)}</span>
                    {product?.offer_price && <span className='price-discount'>{parsePrice(product?.offer_price)}</span>}
                  </div>
                )}
                {product?.description && <p>{product?.description}</p>}
                {product?.sku && product?.sku !== '-1' && product?.sku !== '1' && (
                  <SkuContent>
                    <h2>{t('SKU', theme?.defaultLanguages?.SKU || 'Sku')}</h2>
                    <p>{product?.sku}</p>
                  </SkuContent>
                )}
              </ProductFormTitle>
              <Divider />
              <ProductEdition>
                {
                  (product?.ingredients.length > 0 || product?.extras.length > 0) && (
                    <ProductTabContainer id='all'>
                      <Tabs variant='primary'>
                        <Tab
                          key='all'
                          active={tabValue === 'all' || !tabValue}
                          onClick={() => setTabValue('all')}
                        >
                          {t('ALL', 'All')}
                        </Tab>
                        {
                          product?.ingredients.length > 0 && (
                            <Tab
                              key='ingredients'
                              active={tabValue === 'ingredients'}
                              onClick={() => setTabValue('ingredients')}
                            >
                              {t('INGREDIENTS', 'ingredients')}
                            </Tab>
                          )
                        }
                        {
                          product?.extras.length > 0 && (
                            <Tab
                              key='extra'
                              active={tabValue === 'extra'}
                              onClick={() => setTabValue('extra')}
                            >
                              {t('EXTRA', 'Extra')}
                            </Tab>
                          )
                        }
                      </Tabs>
                    </ProductTabContainer>
                  )
                }
                <div id='ingredients'>
                  {product?.ingredients.length > 0 && (<SectionTitle>{t('INGREDIENTS', theme?.defaultLanguages?.INGREDIENTS || 'Ingredients')}</SectionTitle>)}
                  <WrapperIngredients isProductSoldout={isSoldOut}>
                    {product?.ingredients.map(ingredient => (
                      <IngredientContainer
                        key={ingredient?.id}
                      >
                        <Checkbox
                          defaultChecked={productCart.ingredients[`id:${ingredient?.id}`]?.selected}
                        />
                        <span>
                          {ingredient.name}
                        </span>
                      </IngredientContainer>
                    ))}
                  </WrapperIngredients>
                </div>
                <div id='extra'>
                  {
                    product?.extras.map(extra => extra.options.map(option => {
                      return (
                        <div key={option?.id}>
                          {
                            showProductOption(option) && (
                              <OptionContainer>
                                <OptionWrapHeader>
                                  <OptionTitleContainer>
                                    {option.image && option.image !== '-' && (
                                      <OptionThumbnail src={option.image} />
                                    )}
                                    <OptionTitle><span>{option.name}</span></OptionTitle>
                                  </OptionTitleContainer>
                                  <OptionFlag>{getMaxMin(option)}</OptionFlag>
                                </OptionWrapHeader>
                                <WrapperSubOption>
                                  {
                                    option.suboptions.map(suboption => {
                                      const currentState = productCart.options[`id:${option?.id}`]?.suboptions[`id:${suboption?.id}`] || {}
                                      const price = option?.with_half_option && suboption?.half_price && currentState.position !== 'whole' ? suboption?.half_price : suboption?.price
                                      return suboption?.enabled ? (
                                        <ProductSuboptionContainer
                                          key={suboption?.id}
                                        >
                                          <IconControl>
                                            {((option?.min === 0 && option?.max === 1) || option?.max > 1) ? (
                                              <Checkbox defaultChecked={currentState?.selected} />
                                            ) : (
                                              currentState?.selected ? (
                                                <MdRadioButtonChecked />
                                              ) : (
                                                <MdRadioButtonUnchecked disabled />
                                              )
                                            )}
                                          </IconControl>
                                          {suboption.image && suboption.image !== '-' && (
                                            <SubOptionThumbnail src={suboption.image} />
                                          )}
                                          <SuoptionText>
                                            <div>{suboption?.name}</div>
                                          </SuoptionText>
                                          {option?.allow_suboption_quantity && (
                                            <QuantityControl>
                                              <BsDashCircle />
                                              {currentState.quantity}
                                              <BsPlusCircle />
                                            </QuantityControl>
                                          )}
                                          {
                                            option?.with_half_option && (
                                              <PositionControl>
                                                <BsCircleHalf
                                                  className={['reverse', currentState.selected && currentState.position === 'left' ? 'selected' : null].filter(classname => classname).join(' ')}
                                                />
                                                <BsCircleFill
                                                  className={[currentState.selected && currentState.position === 'whole' ? 'selected' : null].filter(classname => classname).join(' ')}
                                                />
                                                <BsCircleHalf
                                                  className={[currentState.selected && currentState.position === 'right' ? 'selected' : null].filter(classname => classname).join(' ')}
                                                />
                                              </PositionControl>
                                            )
                                          }
                                          <SuboptionPrice>
                                            + {parsePrice(price)}
                                          </SuboptionPrice>
                                        </ProductSuboptionContainer>
                                      ) : null
                                    })
                                  }
                                </WrapperSubOption>
                              </OptionContainer>
                            )
                          }
                        </div>
                      )
                    }))
                  }
                </div>
                <ProductComment>
                  <SectionTitle>{t('COMMENTS', 'COMMENTS')}</SectionTitle>
                  <TextArea
                    rows={3}
                    placeholder={t('SPECIAL_COMMENT', 'Special comment')}
                    defaultValue={productCart.comment}
                  />
                </ProductComment>
              </ProductEdition>
              <ProductActions isMobileView={isMobileView}>
                <div className='price'>{productCart.total && parsePrice(productCart.total)}</div>
                {
                  productCart && !isSoldOut && (
                    <div className='incdec-control'>
                      <FiMinusCircle
                        className={`${productCart.quantity === 1 || isSoldOut ? 'disabled' : ''}`}
                      />
                      <span>{productCart.quantity}</span>
                      <FiPlusCircle
                        className={`${isSoldOut ? 'disabled' : ''}`}
                      />
                    </div>
                  )
                }
                {productCart && !isSoldOut && (
                  <Button
                    color='primary'
                    borderRadius='8px'
                    className='add'
                  >
                    <span>{t('ADD', 'Add')}</span>
                  </Button>
                )}

                {isSoldOut && (
                  <Button
                    className={`add ${!(productCart && !isSoldOut) ? 'soldout' : ''}`}
                    color='primary'
                    outline
                  >
                    {t('SOLD_OUT', 'Sold out')}
                  </Button>
                )}
              </ProductActions>
            </ProductInfo>
          </MobileContentMask>
        </ProductInfoModalPreview>
      </DesktopBackground>
    </Container>
  )
}
