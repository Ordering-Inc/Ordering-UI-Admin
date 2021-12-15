import React, { useEffect, useState, useRef } from 'react'
import Skeleton from 'react-loading-skeleton'
import BisDownArrow from '@meronex/icons/bi/BisDownArrow'
import { useWindowSize } from '../../hooks/useWindowSize'
import RiImageAddFill from '@meronex/icons/ri/RiImageAddFill'
import {
  useLanguage,
  BusinessProductsListing as BusinessProductsListingController
} from 'ordering-components-admin'
import { BusinessProductsCategoyDetails } from '../BusinessProductsCategoyDetails'
import { SearchBar } from '../SearchBar'
import BsViewList from '@meronex/icons/bs/BsViewList'
import BsTable from '@meronex/icons/bs/BsTable'
import { BusinessProductsCategories } from '../BusinessProductsCategories'
import { BusinessProductList } from '../BusinessProductList'
import { ProductDetails } from '../ProductDetails'
import { SingleBusinessCategoryEdit } from '../SingleBusinessCategoryEdit'
import { BusinessSelectHeader } from '../BusinessSelectHeader'
import { List as MenuIcon } from 'react-bootstrap-icons'
import { Button, IconButton } from '../../styles/Buttons'
import { useInfoShare } from '../../contexts/InfoShareContext'
import { BatchImageForm } from '../BatchImageForm'
import { Modal } from '../Modal'
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
  BusinessSelector
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
    slug,
    categoryId,
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
  const [categoryToEdit, setCategoryToEdit] = useState({ open: false, category: null })
  const [openProductDetails, setOpenProductDetails] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isProductAdd, setIsProductAdd] = useState(false)
  const [showSelectHeader, setShowSelectHeader] = useState(false)
  const [businessName, setBusinessName] = useState(null)
  const categoryListRef = useRef()
  const [batchImageFormOpen, setBatchImageFormOpen] = useState(false)

  const handleOpenCategoryDetails = (category = null) => {
    if (category && category?.id !== null) {
      setCategorySelected(category)
      setCategoryToEdit({
        open: true,
        category: { ...category }
      })
    } else {
      setCategoryToEdit({
        open: true,
        category: null
      })
    }
  }

  const handleCloseEdit = () => {
    onProductRedirect && onProductRedirect({
      slug: slug,
      category: null,
      product: null
    })
    setCategoryToEdit({
      open: false,
      category: null
    })
  }

  const handleOpenProductDetails = (product) => {
    setSelectedProduct(product)
    setOpenProductDetails(true)
  }

  const handleCloseProductDetails = () => {
    setOpenProductDetails(false)
  }

  const handleProductAdd = (status) => {
    if (viewMethod !== 'list') return
    setIsProductAdd(status)
  }

  const handleSelectHeader = () => {
    setShowSelectHeader(!showSelectHeader)
  }

  const handleClose = () => {
    setShowSelectHeader(false)
  }

  const changBusinessState = (business) => {
    handleClose()
    setBusinessName(business?.name)
    setCategorySelected(null)
    setBusinessSlug(business?.slug)
  }

  const onDeleteCategoey = (categoryId) => {
    if (categoryToEdit.open && categoryToEdit.category?.id === categoryId) {
      handleCloseEdit()
    }
  }

  useEffect(() => {
    if (categoryId) {
      setCategoryToEdit({
        ...categoryToEdit,
        open: true
      })
    }
  }, [categoryId])

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
            {!businessName && businessState.loading ? (
              <h1><Skeleton width={200} height={30} /></h1>
            ) : (
              <BusinessSelector>
                <BusinessNameWrapper onClick={() => handleSelectHeader()}>
                  <h1>{businessName || businessState?.business?.name} &nbsp; <BisDownArrow className={showSelectHeader ? 'rotate-arrow' : ''} /></h1>
                </BusinessNameWrapper>
                {showSelectHeader && (
                  <BusinessSelectHeader close={handleClose} isOpen={showSelectHeader} changBusinessState={changBusinessState} />
                )}
              </BusinessSelector>
            )}
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
                onClose={onDeleteCategoey}
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
                        {t('UPLOAD_IMAGE_BATCH', 'Upload images in batch')}
                      </Button>
                    ) : (
                      <ViewMethodButton className='batch' onClick={() => openBatchImageUploader()}>
                        <RiImageAddFill />
                      </ViewMethodButton>
                    )}
                  </>
                )}
                <ViewMethodButton
                  active={viewMethod === 'list'}
                  onClick={() => setViewMethod('list')}
                >
                  <BsViewList />
                </ViewMethodButton>
                <ViewMethodButton
                  active={viewMethod === 'spreedsheet'}
                  onClick={() => setViewMethod('spreedsheet')}
                >
                  <BsTable />
                </ViewMethodButton>
              </ActionIconList>
            </ProductHeader>
            <BusinessProductList
              {...props}
              productDetailsId={selectedProduct?.id}
              viewMethod={viewMethod}
              handleOpenProductDetails={handleOpenProductDetails}
              handleParentProductAdd={handleProductAdd}
              isParentProductAdd={isProductAdd}
            />
          </ProductListContainer>
        </CategoryProductsContent>
      </CategoryProductsContainer>
      {
        categoryToEdit?.open && (
          <BusinessProductsCategoyDetails
            {...props}
            open={categoryToEdit?.open}
            onClose={handleCloseEdit}
            category={categoryToEdit?.category}
            businessState={businessState}
            categorySelected={categorySelected}
          />
        )
      }
      {openProductDetails && (
        <ProductDetails
          open={openProductDetails}
          onClose={handleCloseProductDetails}
          product={selectedProduct}
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
