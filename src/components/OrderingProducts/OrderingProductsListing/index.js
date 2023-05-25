import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import {
  useLanguage,
  SitesList as SitesListController
} from 'ordering-components-admin'
import { useInfoShare } from '../../../contexts/InfoShareContext'
import { Alert, Pagination, SearchBar, SideBar } from '../../Shared'
import { List as MenuIcon, InfoCircle } from 'react-bootstrap-icons'
import { Button, IconButton, LinkButton } from '../../../styles'
import Skeleton from 'react-loading-skeleton'
import { OrderingProductDetails } from '../OrderingProductDetails'

import {
  OrderingProductsContainer,
  HeaderContainer,
  ActionsGroup,
  HeaderTitleContainer,
  ProductListTable,
  PageTbody,
  PagesBottomContainer,
  ProductListTableWrapper,
  InfoWrapper,
  InfoContent
} from './styles'

const OrderingProductsUI = (props) => {
  const {
    sitesListState,
    searchValue,
    onSearch,
    getSites,
    paginationProps,
    setPaginationProps,
    handleSuccessUpdateSites
  } = props

  const history = useHistory()
  const query = new URLSearchParams(useLocation().search)
  const [, t] = useLanguage()

  const [{ isCollapse }, { handleMenuCollapse }] = useInfoShare()

  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [openDetails, setOpenDetails] = useState(false)
  const [selectedSite, setSelectedSite] = useState(null)

  const handleChangePage = (page) => {
    getSites(page, paginationProps?.pageSize)
  }

  const handleChangePageSize = (pageSize) => {
    const expectedPage = Math.ceil(paginationProps.from / pageSize)
    setPaginationProps({ ...paginationProps, pageSize: pageSize })
    getSites(expectedPage, pageSize)
  }

  const onClickProduct = (product, isInitialRender) => {
    setSelectedSite(product)
    setOpenDetails(true)
    if (product && !isInitialRender) {
      history.replace(`${location.pathname}?id=${product?.id}`)
    }
  }

  const handleCloseDetail = () => {
    setOpenDetails(false)
    setSelectedSite(null)
    history.replace(`${location.pathname}`)
  }

  useEffect(() => {
    if (!sitesListState?.error) return
    setAlertState({
      open: true,
      content: sitesListState?.error
    })
  }, [sitesListState?.error])

  useEffect(() => {
    if (sitesListState.loading) return
    const productId = query.get('id')
    if (productId) {
      const initProduct = sitesListState.sites.find(site => site.id === Number(productId))
      if (initProduct) onClickProduct(initProduct, true)
    }
  }, [sitesListState])

  return (
    <>
      <OrderingProductsContainer>
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
            <h1>{t('ORDERING_PRODUCTS', 'Ordering Products')}</h1>
            <InfoWrapper>
              <IconButton
                color='primary'
              >
                <InfoCircle />
              </IconButton>
              <InfoContent>
                {t('ORDERING_PRODUCTS_INFO', 'Select your site and customize it with our basic configurations in General tab and our advanced configurations in Theme tab.')}
              </InfoContent>
            </InfoWrapper>
          </HeaderTitleContainer>
          <ActionsGroup>
            <Button
              borderRadius='8px'
              color='lightPrimary'
              onClick={() => onClickProduct(null)}
            >
              {t('ADD_PRODUCT', 'Add product')}
            </Button>
            <SearchBar
              lazyLoad
              isCustomLayout
              search={searchValue}
              onSearch={(value) => onSearch(value)}
              placeholder={t('SEARCH', 'Search')}
            />
          </ActionsGroup>
        </HeaderContainer>
        <ProductListTableWrapper>
          <ProductListTable>
            <thead>
              <tr>
                <th className='product'>{t('PRODUCT', 'Product')}</th>
                <th className='description'>{t('DESCRIPTION', 'Description')}</th>
              </tr>
            </thead>
            {sitesListState.loading ? (
              [...Array(paginationProps?.pageSize).keys()].map(i => (
                <PageTbody key={i}>
                  <tr>
                    <td className='product'><Skeleton width={100} /></td>
                    <td className='description'><Skeleton width={150} /></td>
                  </tr>
                </PageTbody>
              ))
            ) : (
              sitesListState.sites.map(product => (
                <PageTbody
                  key={product.id}
                  onClick={() => onClickProduct(product)}
                  active={selectedSite?.id === product.id}
                >
                  <tr>
                    <td className='product'>
                      {product?.name}
                    </td>
                    <td className='description'>
                      {product?.description && (
                        <div>
                          {product?.description}
                        </div>
                      )}
                    </td>
                  </tr>
                </PageTbody>
              ))
            )}
          </ProductListTable>
        </ProductListTableWrapper>

        {!sitesListState.loading && (
          <PagesBottomContainer>
            <LinkButton
              onClick={() => onClickProduct(null)}
            >
              {t('ADD_PRODUCT', 'Add product')}
            </LinkButton>
            {sitesListState?.sites?.length > 0 && (
              <Pagination
                currentPage={paginationProps?.currentPage}
                totalPages={paginationProps?.totalPages}
                handleChangePage={handleChangePage}
                handleChangePageSize={handleChangePageSize}
                defaultPageSize={paginationProps?.pageSize}
              />
            )}
          </PagesBottomContainer>
        )}
      </OrderingProductsContainer>
      {
        openDetails && (
          <SideBar
            sidebarId='product_details'
            defaultSideBarWidth={500}
            moveDistance={0}
            open={openDetails}
            onClose={() => handleCloseDetail()}
          >
            <OrderingProductDetails
              site={selectedSite}
              sitesList={sitesListState.sites}
              handleSuccessUpdateSites={handleSuccessUpdateSites}
              onClose={() => handleCloseDetail()}
            />
          </SideBar>
        )
      }

      <Alert
        title={t('WEB_APPNAME', 'Ordering')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => setAlertState({ open: false, content: [] })}
        onAccept={() => setAlertState({ open: false, content: [] })}
        closeOnBackdrop={false}
      />
    </>
  )
}

export const OrderingProductsListing = (props) => {
  const sitesProps = {
    ...props,
    UIComponent: OrderingProductsUI
  }
  return <SitesListController {...sitesProps} />
}
