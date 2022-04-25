import React, { useState } from 'react'
import {
  useLanguage,
  BusinessSharedMenuProducts as BusinessSharedMenuProductsController
} from 'ordering-components-admin'
import { Checkbox } from '../../../styles'
import { Modal, SearchBar, SideBar } from '../../Shared'
import { BusinessSharedMenuProductDetails } from '../BusinessSharedMenuProductDetails'
import { useWindowSize } from '../../../hooks/useWindowSize'
import { ChevronRight } from 'react-bootstrap-icons'

import {
  MenuProductsContainer,
  SearchBarWrapper,
  ProductListWrapper,
  ProductItem
} from './styles'

const BusinessSharedMenuProductsUI = (props) => {
  const {
    menuState,
    business,
    handleUpdateBusinessSharedMenuProduct,
    setIsOpenSharedProduct,
    handleChangeInput
  } = props

  const [, t] = useLanguage()
  const { width } = useWindowSize()
  const [searchValue, setSearchValue] = useState('')
  const [currentProduct, setCurrentProduct] = useState(null)
  const [isOpenDetails, setIsOpenDetails] = useState(false)

  const handleOpenProduct = (e, product) => {
    const isInvalid = e.target.closest('.product_checkbox')
    if (isInvalid) return
    setIsOpenSharedProduct(true)
    setCurrentProduct(product)
    setIsOpenDetails(true)
  }

  const handleCloseSidebar = () => {
    setIsOpenDetails(false)
    setCurrentProduct(null)
    setIsOpenSharedProduct(false)
  }

  return (
    <>
      <MenuProductsContainer>
        <SearchBarWrapper>
          <SearchBar
            placeholder={t('SEARCH', 'Search')}
            isCustomLayout
            search={searchValue}
            onSearch={val => setSearchValue(val?.toLowerCase())}
          />
        </SearchBarWrapper>
        <ProductListWrapper>
          {menuState.menu.products.filter(product => product.name??.toLowerCase().includes(searchValue)).map((product, index) => (
            <ProductItem
              key={product.id}
              isBorderTop={index === 0}
              onClick={e => handleOpenProduct(e, product)}
              active={product.id === currentProduct?.id}
            >
              <Checkbox
                className='product_checkbox'
                defaultChecked={product.enabled}
                onChange={e => handleUpdateBusinessSharedMenuProduct(product.id, { enabled: e.target.checked })}
              />
              <span>{product.name}</span>
              <ChevronRight />
            </ProductItem>
          ))}
        </ProductListWrapper>
      </MenuProductsContainer>

      {width >= 1000 ? (
        <>
          {isOpenDetails && (
            <SideBar
              isBorderShow
              sidebarId='shared_product_details'
              open={isOpenDetails}
              onClose={() => handleCloseSidebar()}
            >
              <BusinessSharedMenuProductDetails
                business={business}
                menu={menuState.menu}
                product={currentProduct}
                handleChangeInput={handleChangeInput}
              />
            </SideBar>
          )}
        </>
      ) : (
        <Modal
          width='80%'
          open={isOpenDetails}
          onClose={() => handleCloseSidebar()}
        >
          <BusinessSharedMenuProductDetails
            business={business}
            menu={menuState.menu}
            product={currentProduct}
            handleChangeInput={handleChangeInput}
          />
        </Modal>
      )}
    </>
  )
}

export const BusinessSharedMenuProducts = (props) => {
  const businessSharedMenuProductsProps = {
    ...props,
    UIComponent: BusinessSharedMenuProductsUI
  }
  return <BusinessSharedMenuProductsController {...businessSharedMenuProductsProps} />
}
