import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import BisDownArrow from '@meronex/icons/bi/BisDownArrow'
import { useLanguage } from 'ordering-components-admin'
import { BusinessCategoryEdit } from '../BusinessCategoryEdit'
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
import { BusinessProductsListing as BusinessProductsListingController } from './test'
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
    setBusinessState
  } = props

  const [, t] = useLanguage()
  const [{ isCollapse }, { handleMenuCollapse }] = useInfoShare()
  const [viewMethod, setViewMethod] = useState('list')
  const [categoryToEdit, setCategoryToEdit] = useState({ open: false, category: null })
  const [openProductDetails, setOpenProductDetails] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isProductAdd, setIsProductAdd] = useState(false)
  const [showSelectHeader, setShowSelectHeader] = useState(false)
  const [businessName, setBusinessName] = useState(null)

  const handleOpenCategoryDetails = (category = null) => {
    if (category && category?.id !== null) {
      onProductRedirect && onProductRedirect({
        slug: slug,
        category: category?.id,
        product: null
      })
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

  useEffect(() => {
    if (categoryId) {
      setCategoryToEdit({
        ...categoryToEdit,
        open: true
      })
    }
  }, [categoryId])

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
              search={searchValue}
              onSearch={handleChangeSearch}
              placeholder={t('SEARCH', 'Search')}
            />
          </ActionsGroup>
        </HeaderContainer>
        <CategoryProductsContent>
          <CategoryListContainer>
            {
              <BusinessProductsCategories
                {...props}
                businessState={businessState}
                categorySelected={categorySelected}
                onClickCategory={handleChangeCategory}
                featured={featuredProducts}
                handleOpenCategoryDetails={handleOpenCategoryDetails}
                openCategories={openCategories}
                handleUpdateBusinessState={(business) => setBusinessState({ ...businessState, business })}
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
          <BusinessCategoryEdit
            {...props}
            open={categoryToEdit?.open}
            onClose={handleCloseEdit}
            category={categoryToEdit?.category}
            businessState={businessState}
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
        />
      )}
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
