import React, { useEffect, useState, useRef } from 'react'
import Skeleton from 'react-loading-skeleton'
import BisDownArrow from '@meronex/icons/bi/BisDownArrow'
import { useWindowSize } from '../../../hooks/useWindowSize'
import RiImageAddFill from '@meronex/icons/ri/RiImageAddFill'
import {
  useLanguage,
  BusinessProductsListing as BusinessProductsListingController
} from 'ordering-components-admin'
import { BusinessProductsCategoyDetails } from '../BusinessProductsCategoyDetails'
import BsViewList from '@meronex/icons/bs/BsViewList'
import BsTable from '@meronex/icons/bs/BsTable'
import { List as MenuIcon, ChevronRight } from 'react-bootstrap-icons'
import { useInfoShare } from '../../../contexts/InfoShareContext'
import { Button, IconButton } from '../../../styles'
import { Modal, SearchBar, SideBar, ColumnAllowSettingPopover } from '../../Shared'
import { BusinessProductList } from '../BusinessProductList'
import { BusinessProductsCategories } from '../BusinessProductsCategories'
import { ProductDetails } from '../ProductDetails'
import { SingleBusinessCategoryEdit } from '../SingleBusinessCategoryEdit'
import { BusinessSelectHeader } from '../BusinessSelectHeader'
import { BatchImageForm } from '../BatchImageForm'
import { BusinessDetails } from '../BusinessDetails'

import {
  CategoryProductsContainer,
  HeaderContainer,
  HeaderTitleContainer,
  CategoryProductsContent,
  CategoryListContainer,
  ProductListContainer,
  ProductHeader,
  ActionIconList,
  ViewMethodButton,
  ActionsGroup,
  BusinessNameWrapper,
  BusinessSelector,
  Breadcrumb,
  ColumnsAllowWrapper
} from './styles'

const BusinessProductsListingUI = (props) => {
  const {
    categorySelected,
    searchValue,
    handleChangeCategory,
    handleChangeSearch,
    featuredProducts,
    businessState,
    onProductRedirect,
    handleStoresRedirect,
    slug,
    categoryId,
    productId,
    isInitialRender,
    handleUpdateInitialRender,
    handleUpdateBusinessState,
    setCategorySelected,
    setBusinessSlug,
    openCategories,
    setFormTaxState,
    formTaxState,
    taxes,
    setTaxes,
    fees,
    setFees
  } = props

  const [, t] = useLanguage()
  const { width } = useWindowSize()
  const [{ isCollapse }, { handleMenuCollapse }] = useInfoShare()
  const [viewMethod, setViewMethod] = useState('list')
  const [currentCategory, setCurrentCategory] = useState(null)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [showSelectHeader, setShowSelectHeader] = useState(false)
  const [selectedBusiness, setSelectedBusiness] = useState(null)
  const categoryListRef = useRef()
  const [batchImageFormOpen, setBatchImageFormOpen] = useState(false)
  const [openSidebar, setOpenSidebar] = useState(null)

  const [openColumnsPopover, setOpenColumnsPopover] = useState(false)
  const [allowSpreadColumns, setAllowSpreadColumns] = useState({
    id: true,
    name: true,
    description: true,
    price: true,
    cost_price: true,
    inventoried: true,
    quantity: true
  })
  const spreadColumnOptions = [
    {
      value: 'cost_price',
      content: t('PRODUCT_COST', 'Product cost')
    }
  ]
  const handleChangeAllowSpreadColumns = (type) => {
    setAllowSpreadColumns({
      ...allowSpreadColumns,
      [type]: !allowSpreadColumns[type]
    })
  }

  const handleOpenCategoryDetails = (category = null) => {
    setOpenSidebar(null)
    setSelectedProduct(null)
    if (category && category?.id !== null) {
      setCategorySelected(category)
      setCurrentCategory(category)
      setOpenSidebar('category_details')
    } else {
      setCurrentCategory(null)
      setOpenSidebar('category_details')
    }
  }

  const handleCloseEdit = () => {
    onProductRedirect && onProductRedirect({
      slug: slug,
      category: null,
      product: null
    })
    setCurrentCategory(null)
    setOpenSidebar(null)
  }

  const handleOpenProductDetails = (product) => {
    setSelectedProduct(product)
    setOpenSidebar('product_details')
    onProductRedirect({
      slug: businessState?.business?.slug,
      product: product.id,
      category: product.category_id
    })
  }

  const handleCloseProductDetails = () => {
    setOpenSidebar(null)
    setSelectedProduct(null)
    handleUpdateInitialRender(false)
    onProductRedirect({
      slug: businessState?.business?.slug
    })
  }

  const handleProductAdd = (status) => {
    if (viewMethod !== 'list') return
    if (status) {
      setOpenSidebar('add_product')
    } else {
      setOpenSidebar(null)
    }
  }

  const handleSelectHeader = () => {
    setShowSelectHeader(!showSelectHeader)
  }

  const handleClose = () => {
    setShowSelectHeader(false)
  }

  const changeBusinessState = (business) => {
    handleClose()
    setSelectedBusiness(business)
    setCategorySelected(null)
    setBusinessSlug(business?.slug)
    onProductRedirect({ slug: business?.slug })
  }

  useEffect(() => {
    if (categoryId && productId) {
      handleUpdateInitialRender(true)
    }
  }, [])
  useEffect(() => {
    if (!isInitialRender || !businessState?.business?.slug) return
    setOpenSidebar('product_details')
    onProductRedirect({
      slug: businessState?.business?.slug,
      product: productId,
      category: categoryId
    })
  }, [businessState.business?.slug, isInitialRender])

  const openBatchImageUploader = () => {
    setBatchImageFormOpen(true)
  }

  return (
    <>
      <CategoryProductsContainer>
        <HeaderContainer>
          <HeaderTitleContainer>
            {isCollapse && (
              <IconButton
                color='black'
                onClick={() => handleMenuCollapse(false)}
              >
                <MenuIcon />
              </IconButton>
            )}
            <div>
              {!selectedBusiness && businessState.loading ? (
                <h1><Skeleton width={200} height={30} /></h1>
              ) : (
                <>
                  <BusinessSelector>
                    <BusinessNameWrapper onClick={() => handleSelectHeader()}>
                      <h1>{selectedBusiness?.name || businessState?.business?.name} &nbsp; <BisDownArrow className={showSelectHeader ? 'rotate-arrow' : ''} /></h1>
                    </BusinessNameWrapper>
                    {showSelectHeader && (
                      <BusinessSelectHeader
                        close={handleClose}
                        isOpen={showSelectHeader}
                        changeBusinessState={changeBusinessState}
                      />
                    )}
                  </BusinessSelector>
                  <Breadcrumb>
                    <span
                      className='business'
                      onClick={() => setOpenSidebar('business_details')}
                    >
                      {selectedBusiness?.name || businessState?.business?.name}
                    </span>
                    <ChevronRight />
                    <span>{categorySelected?.name}</span>
                  </Breadcrumb>
                </>
              )}
            </div>
          </HeaderTitleContainer>
          <ActionsGroup>
            <Button
              borderRadius='8px'
              color='lightPrimary'
              onClick={() => handleOpenCategoryDetails()}
            >
              {t('ADD_CATEGORY', 'Add category')}
            </Button>
            <Button
              borderRadius='8px'
              color='lightPrimary'
              onClick={() => handleProductAdd(true)}
              disabled={businessState?.business?.categories?.length === 0}
            >
              {t('ADD_PRODUCT', 'Add product')}
            </Button>
            <SearchBar
              isCustomLayout
              lazyLoad
              search={searchValue}
              onSearch={handleChangeSearch}
              placeholder={t('SEARCH', 'Search')}
            />
          </ActionsGroup>
        </HeaderContainer>
        <CategoryProductsContent>
          <CategoryListContainer ref={categoryListRef}>
            {
              <BusinessProductsCategories
                {...props}
                businessState={businessState}
                categorySelected={categorySelected}
                onClickCategory={handleChangeCategory}
                featured={featuredProducts}
                handleOpenCategoryDetails={handleOpenCategoryDetails}
                openCategories={openCategories}
                handleUpdateBusinessState={handleUpdateBusinessState}
                setCategorySelected={setCategorySelected}
                categoryListRef={categoryListRef?.current}
              />
            }
          </CategoryListContainer>
          <ProductListContainer>
            <ProductHeader>
              <SingleBusinessCategoryEdit
                {...props}
                category={categorySelected}
                categorySelected={categorySelected}
                handleChangeCategory={handleChangeCategory}
                business={businessState?.business}
                handleOpenCategoryDetails={handleOpenCategoryDetails}
              />
              <ActionIconList>
                {viewMethod === 'spreedsheet' && (
                  <>
                    {width > 767 ? (
                      <Button
                        outline
                        borderRadius='5px'
                        className='batch-image-upload'
                        color='lightPrimary'
                        onClick={() => openBatchImageUploader()}
                      >
                        {t('UPLOAD_IMAGES_BATCH', 'Upload images in batch')}
                      </Button>
                    ) : (
                      <ViewMethodButton className='batch' onClick={() => openBatchImageUploader()}>
                        <RiImageAddFill />
                      </ViewMethodButton>
                    )}
                    <ColumnsAllowWrapper>
                      <ColumnAllowSettingPopover
                        allowColumns={allowSpreadColumns}
                        optionsDefault={spreadColumnOptions}
                        handleChangeAllowColumns={handleChangeAllowSpreadColumns}
                      />
                    </ColumnsAllowWrapper>
                  </>
                )}
                <IconButton
                  color={viewMethod === 'list' ? 'primary' : 'black'}
                  onClick={() => setViewMethod('list')}
                >
                  <BsViewList />
                </IconButton>
                <IconButton
                  color={viewMethod === 'spreedsheet' ? 'primary' : 'black'}
                  onClick={() => setViewMethod('spreedsheet')}
                >
                  <BsTable />
                </IconButton>
              </ActionIconList>
            </ProductHeader>
            <BusinessProductList
              {...props}
              productDetailsId={selectedProduct?.id}
              viewMethod={viewMethod}
              handleOpenProductDetails={handleOpenProductDetails}
              handleParentProductAdd={handleProductAdd}
              isParentProductAdd={openSidebar === 'add_product'}
              allowSpreadColumns={allowSpreadColumns}
            />
          </ProductListContainer>
        </CategoryProductsContent>
      </CategoryProductsContainer>
      {
        openSidebar === 'category_details' && (
          <SideBar
            open={openSidebar === 'category_details'}
            onClose={handleCloseEdit}
          >
            <BusinessProductsCategoyDetails
              {...props}
              onClose={handleCloseEdit}
              category={currentCategory}
              businessState={businessState}
              categorySelected={categorySelected}
            />
          </SideBar>
        )
      }
      {openSidebar === 'product_details' && (
        <ProductDetails
          open={openSidebar === 'product_details'}
          onClose={handleCloseProductDetails}
          product={selectedProduct}
          productId={productId}
          categoryId={categoryId}
          business={businessState?.business}
          handleUpdateBusinessState={handleUpdateBusinessState}
          setFormTaxState={setFormTaxState}
          formTaxState={formTaxState}
          taxes={taxes}
          setTaxes={setTaxes}
          fees={fees}
          setFees={setFees}
        />
      )}
      {openSidebar === 'business_details' && (
        <BusinessDetails
          open={openSidebar === 'business_details'}
          businessId={selectedBusiness?.id || businessState?.business?.id}
          handleSucessRemoveBusiness={() => handleStoresRedirect()}
          // handleSucessUpdateBusiness={handleSucessUpdateBusiness}
          onClose={() => setOpenSidebar(null)}
        />
      )}
      <Modal
        width={width > 1440 ? '40%' : '60%'}
        padding='20px'
        open={batchImageFormOpen}
        onClose={() => setBatchImageFormOpen(false)}
      >
        <BatchImageForm
          {...props}
          onClose={() => setBatchImageFormOpen(false)}
        />
      </Modal>
    </>
  )
}

export const BusinessProductsListing = (props) => {
  const [isInitialRender, setIsInitialRender] = useState(false)

  const businessProductslistingProps = {
    ...props,
    UIComponent: BusinessProductsListingUI,
    isInitialRender,
    handleUpdateInitialRender: (val) => setIsInitialRender(val)
  }
  return (
    <BusinessProductsListingController {...businessProductslistingProps} />
  )
}
