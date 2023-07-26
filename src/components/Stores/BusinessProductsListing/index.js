import React, { useEffect, useState, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import BisDownArrow from '@meronex/icons/bi/BisDownArrow'
import { useWindowSize } from '../../../hooks/useWindowSize'
import RiImageAddFill from '@meronex/icons/ri/RiImageAddFill'
import {
  useLanguage,
  useApi,
  useConfig,
  BusinessProductsListing as BusinessProductsListingController
} from 'ordering-components-admin'
import { BusinessProductsCategoyDetails } from '../BusinessProductsCategoyDetails'
import BsViewList from '@meronex/icons/bs/BsViewList'
import BsTable from '@meronex/icons/bs/BsTable'
import { List as MenuIcon, ChevronRight, ArrowRepeat } from 'react-bootstrap-icons'
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
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import { ImportersButton } from '../ImportersButton'
import { AddBusinessForm } from '../AddBusinessForm'
import { ProductStep } from '../ProductStep'
import { BusinessAddStore } from '../BusinessAddStore'
import { addQueryToUrl, removeQueryToUrl, checkSiteUrl } from '../../../utils'

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
  ColumnsAllowWrapper,
  ButtonWrapper
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
    setFees,
    getBusiness,
    businessTypes,
    setBusinessTypes,
    categoryState,
    handleUpdateCategoryState,
    siteState
  } = props

  const query = new URLSearchParams(useLocation().search)
  const [, t] = useLanguage()
  const { width } = useWindowSize()
  const [ordering] = useApi()
  const [{ configs }] = useConfig()
  const [{ isCollapse }, { handleMenuCollapse }] = useInfoShare()
  const [viewMethod, setViewMethod] = useState('list')
  const [currentCategory, setCurrentCategory] = useState(null)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [showSelectHeader, setShowSelectHeader] = useState(false)
  const [selectedBusiness, setSelectedBusiness] = useState(null)
  const [productsPerPage, setProductsPerPage] = useState(10)
  const categoryListRef = useRef()
  const [batchImageFormOpen, setBatchImageFormOpen] = useState(false)
  const [openSidebar, setOpenSidebar] = useState(null)
  const [showPopup, setShowPopup] = useState(false)
  const [isAdd, setIsAdd] = useState(false)

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
    },
    {
      value: 'inventoried',
      content: t('INVENTORY', 'Inventory')
    },
    {
      value: 'quantity',
      content: t('QUANTITY', 'Quantity')
    }
  ]
  const handleChangeAllowSpreadColumns = (type) => {
    setAllowSpreadColumns({
      ...allowSpreadColumns,
      [type]: !allowSpreadColumns[type]
    })
  }

  const handleOpenCategoryDetails = (category = null, isInitialRender) => {
    setOpenSidebar(null)
    setSelectedProduct(null)
    setCurrentCategory(category)
    if (category && category?.id !== null) {
      setCategorySelected(category)
      setOpenSidebar('category_details')
      if (!isInitialRender) {
        addQueryToUrl({ category: category.id })
      }
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
    removeQueryToUrl(['category'])
  }

  const handleOpenProductDetails = (product, isInitialRender) => {
    setSelectedProduct(product)
    setOpenSidebar('product_details')
    if (!isInitialRender) {
      onProductRedirect({
        slug: businessState?.business?.slug,
        product: product.id,
        category: product.category_id
      })
    }
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

  const handleOpenSite = () => {
    const storeUrl = siteState?.site?.domain && siteState?.site?.ssl_process_status === 'ended'
      ? `https://${siteState?.site?.domain}/store/${businessState?.business?.slug}`
      : configs?.site_url?.value
        ? `${checkSiteUrl(configs?.site_url?.value)}store/${businessState?.business?.slug}`
        : `https://${ordering.project}.tryordering.com/store/${businessState?.business?.slug}`
    window.open(storeUrl, '_blank')
  }

  const handleOpenAddBusiness = () => {
    setIsAdd(true)
    handleClose()
  }

  useEffect(() => {
    if (slug && !isInitialRender) {
      setOpenSidebar(null)
      setSelectedProduct(null)
      handleUpdateInitialRender(false)
    }
  }, [slug, isInitialRender])

  useEffect(() => {
    if (!slug) {
      setSelectedBusiness(null)
      setOpenSidebar(null)
      handleChangeSearch(null)
      setViewMethod('list')
      setShowSelectHeader(true)
    }
  }, [slug])

  useEffect(() => {
    if (businessState?.business && businessState?.business?.categories?.length === 0) {
      setShowPopup(true)
    }
  }, [businessState?.business])

  useEffect(() => {
    if (businessState.loading) return
    const categoryId = query.get('category')
    const productId = query.get('product')
    if (categoryId && productId) {
      const initCategory = businessState.business?.categories?.find(category => category.id === Number(categoryId))
      const initProduct = initCategory?.products?.find(product => product.id === Number(productId))
      if (initCategory) handleChangeCategory(null, initCategory)
      if (initProduct) {
        handleOpenProductDetails(initProduct, true)
      }
    } else if (categoryId && !productId) {
      const initCategory = businessState.business?.categories?.find(category => category.id === Number(categoryId))
      if (initCategory) {
        handleChangeCategory(null, initCategory)
        handleOpenCategoryDetails(initCategory, true)
      }
    } else {
      businessState?.business?.categories && setCategorySelected(businessState?.business?.categories[0])
    }
  }, [businessState.loading])

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
              {!selectedBusiness && !businessState.business ? (
                <h1><Skeleton width={200} height={30} /></h1>
              ) : (
                <>
                  <BusinessSelector>
                    <BusinessNameWrapper onClick={() => handleSelectHeader()}>
                      <h1>{selectedBusiness?.name || businessState?.business?.name || t('SELECT_BUSINESS', 'Select a business')} &nbsp; <BisDownArrow className={showSelectHeader ? 'rotate-arrow' : ''} /></h1>
                    </BusinessNameWrapper>
                    {showSelectHeader && (
                      <BusinessSelectHeader
                        close={handleClose}
                        isOpen={showSelectHeader}
                        changeBusinessState={changeBusinessState}
                        noActiveStatusCondition
                        handleOpenAddBusiness={handleOpenAddBusiness}
                      />
                    )}
                  </BusinessSelector>
                  {slug && (
                    <Breadcrumb>
                      <span
                        className='business'
                        onClick={() => {
                          addQueryToUrl({ id: businessState?.business?.id })
                          setOpenSidebar('business_details')
                        }}
                      >
                        {selectedBusiness?.name || businessState?.business?.name}
                      </span>
                      <ChevronRight />
                      <span>{categorySelected?.name}</span>
                    </Breadcrumb>
                  )}
                </>
              )}
            </div>
          </HeaderTitleContainer>
          {slug && (
            <ActionsGroup>
              <Button
                color='lightPrimary'
                borderRadius='8px'
                onClick={() => getBusiness()}
                className={businessState.loading ? 'loading' : ''}
              >
                {t('REFRESH', 'Refresh')}
                <ArrowRepeat size={16} style={{ marginLeft: 5 }} />
              </Button>
              <ImportersButton customClass='importerGroup' setOpenSidebar={setOpenSidebar} />
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
                customClass='searchBar'
              />
            </ActionsGroup>
          )}
        </HeaderContainer>
        {slug && (
          <ButtonWrapper>
            <Button
              color='primary'
              outline
              borderRadius='8px'
              onClick={handleOpenSite}
            >
              {t('STORE_WEBSITE', 'Store website')}
            </Button>
          </ButtonWrapper>
        )}
        {slug && (
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
                  setCurrentCategory={setCurrentCategory}
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
                  <OverlayTrigger
                    placement='top'
                    overlay={
                      <Tooltip>
                        {t('SPREADSHEET', 'Spreadsheet')}
                      </Tooltip>
                    }
                  >
                    <IconButton
                      color={viewMethod === 'spreedsheet' ? 'primary' : 'black'}
                      className='tour_btn'
                      onClick={() => setViewMethod('spreedsheet')}
                    >
                      <BsTable />
                    </IconButton>
                  </OverlayTrigger>
                </ActionIconList>
              </ProductHeader>
              <BusinessProductList
                {...props}
                categorySelected={categorySelected}
                productDetailsId={selectedProduct?.id}
                viewMethod={viewMethod}
                handleOpenProductDetails={handleOpenProductDetails}
                handleParentProductAdd={handleProductAdd}
                isParentProductAdd={openSidebar === 'add_product'}
                allowSpreadColumns={allowSpreadColumns}
                productsPerPage={productsPerPage}
                setProductsPerPage={setProductsPerPage}
              />
            </ProductListContainer>
          </CategoryProductsContent>
        )}
      </CategoryProductsContainer>
      {
        openSidebar === 'category_details' && (
          <SideBar
            open={openSidebar === 'category_details'}
            onClose={handleCloseEdit}
            sidebarId='editCategory'
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
          categoryState={categoryState}
          handleUpdateCategoryState={handleUpdateCategoryState}
        />
      )}
      {openSidebar === 'business_details' && (
        <BusinessDetails
          open={openSidebar === 'business_details'}
          businessId={selectedBusiness?.id || businessState?.business?.id}
          handleSucessRemoveBusiness={() => handleStoresRedirect()}
          // handleSucessUpdateBusiness={handleSucessUpdateBusiness}
          onClose={() => setOpenSidebar(null)}
          businessTypes={businessTypes}
          setBusinessTypes={setBusinessTypes}
        />
      )}
      {openSidebar === 'add_business' && (
        <SideBar
          open={openSidebar === 'add_business'}
          onClose={() => setOpenSidebar(null)}
        >
          <AddBusinessForm
            handleSucessAddBusiness={() => setOpenSidebar(false)}
          />
        </SideBar>
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
      <Modal
        width='769px'
        padding='25px'
        open={showPopup}
        onClose={() => setShowPopup(false)}
      >
        <ProductStep
          onClose={() => setShowPopup(false)}
          orderingBusiness={businessState?.business}
          getBusiness={getBusiness}
          handleOpenCategoryDetails={handleOpenCategoryDetails}
        />
      </Modal>
      <Modal
        width='769px'
        padding='30px'
        open={isAdd}
        onClose={() => setIsAdd(false)}
      >
        <BusinessAddStore />
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
