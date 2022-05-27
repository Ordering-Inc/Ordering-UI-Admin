import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useLanguage, ProfessionalServices as ProfessionalServicesController } from 'ordering-components-admin'
import { SearchBar, Alert } from '../../Shared'
import { ProfessionalCategoryTreeNode } from '../ProfessionalCategoryTreeNode'
import {
  Container,
  TreeNodeWrapper,
  SkeletonItem,
  SkeletonCheckWrapper,
  SearchWrapper,
  Divider
} from './styles'

const ProfessionalServicesUI = (props) => {
  const {
    businessState,
    selectedProductsIds,
    subCategoriesList,
    setSelectedProductsIds,
    selectedProducts,
    setSelectedProducts,
    handleCreateService,
    handleDeleteService,
    actionState
  } = props

  const [, t] = useLanguage()
  const [searchValue, setSearchValue] = useState('')
  const [categories, setCategories] = useState([])
  const [alertState, setAlertState] = useState({ open: false, content: [] })

  const onSearch = (value) => {
    setSearchValue(value)
  }

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  const checkProducts = (node) => {
    let valid = false
    if (node?.products?.length) {
      node.products.forEach(product => {
        if (product?.name?.toLowerCase().includes(searchValue?.toLowerCase())) valid = true
      })
    }
    return valid
  }

  const deepFilter = (nodes) => {
    return nodes.map(node => {
      if (checkProducts(node)) return node
      const children = deepFilter(node.subcategories || [])
      return children.length && { ...node, children }
    }).filter(Boolean)
  }

  useEffect(() => {
    if (!businessState?.business?.categories) return
    const result = deepFilter(businessState?.business?.categories)
    setCategories(result)
  }, [businessState?.business?.categories, searchValue])

  useEffect(() => {
    if (actionState?.result?.error) {
      setAlertState({
        open: true,
        content: actionState?.result?.result
      })
    }
  }, [actionState?.result])

  return (
    <>
      <Container>
        <h1>{t('SERVICES', 'Services')}</h1>
        <SearchWrapper>
          <SearchBar
            search={searchValue}
            isCustomLayout
            lazyLoad
            onSearch={(value) => onSearch(value)}
            placeholder={t('SEARCH', 'Search')}
          />
        </SearchWrapper>
        <TreeNodeWrapper>
          {businessState?.loading ? (
            <>
              {[...Array(10).keys()].map(index => (
                <SkeletonItem key={index}>
                  <SkeletonCheckWrapper>
                    <Skeleton width={18} height={18} />
                    <Skeleton width={120} height={20} style={{ margin: '0px 10px' }} />
                  </SkeletonCheckWrapper>
                  <Skeleton width={18} height={18} />
                </SkeletonItem>
              ))}
            </>
          ) : (
            <>
              {categories.sort((a, b) => a.rank - b.rank).map(category => (
                <ProfessionalCategoryTreeNode
                  key={category.id}
                  index={0}
                  category={category}
                  selectedProductsIds={selectedProductsIds}
                  setSelectedProductsIds={setSelectedProductsIds}
                  selectedProducts={selectedProducts}
                  setSelectedProducts={setSelectedProducts}
                  subCategoriesList={subCategoriesList}
                  handleCreateService={handleCreateService}
                  handleDeleteService={handleDeleteService}
                  searchValue={searchValue}
                />
              ))}
            </>
          )}
          {!businessState?.loading && categories?.length > 0 && <Divider />}
        </TreeNodeWrapper>
      </Container>
      <Alert
        title={t('SERVICES', 'Services')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
    </>
  )
}

export const ProfessionalServices = (props) => {
  const professionalServices = {
    ...props,
    UIComponent: ProfessionalServicesUI,
    propsToFetch: ['id', 'name', 'categories']
  }
  return <ProfessionalServicesController {...professionalServices} />
}
