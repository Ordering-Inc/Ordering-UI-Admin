import React, { useState } from 'react'
import {
  useLanguage,
  BusinessSharedMenuProducts as BusinessSharedMenuProductsController
} from 'ordering-components-admin'
import { Checkbox } from '../../styles'
import { SearchBar } from '../SearchBar'
import { SideBar } from '../SideBar'
import { BusinessSharedMenuProductDetails } from '../BusinessSharedMenuProductDetails'

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
  const [searchValue, setSearchValue] = useState('')
  const [currentProduct, setCurrentProduct] = useState(null)

  const handleOpenProduct = (e, product) => {
    const isInvalid = e.target.closest('.product_checkbox')
    if (isInvalid) return
    setIsOpenSharedProduct(true)
    setCurrentProduct(product)
  }

  const handleCloseSidebar = () => {
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
            onSearch={val => setSearchValue(val.toLowerCase())}
          />
        </SearchBarWrapper>
        <ProductListWrapper>
          {menuState.menu.products.filter(product => product.name?.toLowerCase().includes(searchValue)).map(product => (
            <ProductItem
              key={product.id}
              onClick={e => handleOpenProduct(e, product)}
            >
              <Checkbox
                className='product_checkbox'
                defaultChecked={product.enabled}
                onChange={e => handleUpdateBusinessSharedMenuProduct(product.id, { enabled: e.target.checked })}
              />
              <span>{product.name}</span>
            </ProductItem>
          ))}
        </ProductListWrapper>
      </MenuProductsContainer>

      {currentProduct && (
        <SideBar
          isBorderShow
          sidebarId='shared_product_details'
          open={currentProduct}
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
  )
}

export const BusinessSharedMenuProducts = (props) => {
  const businessSharedMenuProductsProps = {
    ...props,
    UIComponent: BusinessSharedMenuProductsUI
  }
  return <BusinessSharedMenuProductsController {...businessSharedMenuProductsProps} />
}
