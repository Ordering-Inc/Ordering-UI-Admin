import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useLanguage, GiftCardsList as GiftCardsListController } from 'ordering-components-admin'
import Skeleton from 'react-loading-skeleton'
import { useInfoShare } from '../../../contexts/InfoShareContext'
import { List as MenuIcon } from 'react-bootstrap-icons'
import { IconButton } from '../../../styles'
import { Pagination, SearchBar } from '../../Shared'
import { addQueryToUrl } from '../../../utils'

import {
  Container,
  HeaderContainer,
  HeaderTitle,
  TabsWrapper,
  Tab,
  GiftCardsTableWrapper,
  GiftCardRow,
  UserInfoContainer,
  PaginationWarpper,
  ActionsWrapper
} from './styles'

const GiftCardsListingUI = (props) => {
  const {
    giftCards,
    paginationProps,
    activeStatus,
    setActiveStatus,
    getGiftCards,
    searchValue,
    onSearch,
    isUseQuery
  } = props

  const [, t] = useLanguage()
  const [{ isCollapse }, { handleMenuCollapse }] = useInfoShare()

  const query = new URLSearchParams(useLocation().search)
  const defaultStatus = query.get('status')

  const handleChangePage = (page) => {
    getGiftCards(page, paginationProps.pageSize)
  }

  const handleChangePageSize = (pageSize) => {
    const expectedPage = Math.ceil(paginationProps.from / pageSize)
    getGiftCards(expectedPage, pageSize)
  }

  const handleChangeStatus = (status) => {
    setActiveStatus(status)
    if (isUseQuery) {
      addQueryToUrl({ status: status })
    }
  }

  useEffect(() => {
    if (!isUseQuery) return
    if (defaultStatus) {
      setActiveStatus(defaultStatus)
      return
    }
    addQueryToUrl({ status: 'pending' })
  }, [])

  useEffect(() => {
    if (!isUseQuery || !paginationProps?.currentPage || !paginationProps?.pageSize || !paginationProps?.totalPages) return
    addQueryToUrl({
      page: paginationProps.currentPage,
      pageSize: paginationProps.pageSize
    })
  }, [paginationProps?.currentPage, paginationProps?.pageSize, paginationProps?.totalPages])

  return (
    <Container>
      <HeaderContainer>
        <HeaderTitle>
          {isCollapse && (
            <IconButton
              color='black'
              onClick={() => handleMenuCollapse(false)}
            >
              <MenuIcon />
            </IconButton>
          )}
          <h1>{t('GIFT_CARD_MANAGER', 'Gift card manager')}</h1>
        </HeaderTitle>
        <ActionsWrapper>
          <SearchBar
            isCustomLayout
            lazyLoad
            onSearch={onSearch}
            search={searchValue}
            placeholder={t('SEARCH', 'Search')}
          />
        </ActionsWrapper>
      </HeaderContainer>
      <TabsWrapper>
        <Tab
          active={activeStatus === 'pending'}
          onClick={() => handleChangeStatus('pending')}
        >
          {t('ORDER_PENDING', 'Pending')}
        </Tab>
        <Tab
          active={activeStatus === 'activated'}
          onClick={() => handleChangeStatus('activated')}
        >
          {t('REDEEMED', 'Redeemed')}
        </Tab>
      </TabsWrapper>
      <GiftCardsTableWrapper>
        <table>
          <thead>
            <tr>
              <th>{t('ID', 'ID')}</th>
              <th>{t('PURCHASED_BY', 'Purchased by')}</th>
              <th>{t('REDEEMED_BY', 'Redeemed by')}</th>
              <th>{t('PURCHASED_DATE', 'Purchased date')}</th>
              <th>{t('REDEEMED_DATE', 'Redeemed date')}</th>
            </tr>
          </thead>
          {giftCards.loading ? (
            [...Array(10).keys()].map(i => (
              <GiftCardRow key={i}>
                <tr>
                  <td><Skeleton width={20} /></td>
                  <td>
                    <UserInfoContainer>
                      <Skeleton width={38} height={38} />
                      <div>
                        <p className='name'><Skeleton width={100} /></p>
                        <p className='phone'><Skeleton width={80} /></p>
                      </div>
                    </UserInfoContainer>
                  </td>
                  <td>
                    <UserInfoContainer>
                      <Skeleton width={38} height={38} />
                      <div>
                        <p className='name'><Skeleton width={100} /></p>
                        <p className='phone'><Skeleton width={80} /></p>
                      </div>
                    </UserInfoContainer>
                  </td>
                  <td><Skeleton width={100} /></td>
                  <td><Skeleton width={100} /></td>
                </tr>
              </GiftCardRow>
            ))
          ) : (
            giftCards.list.map(card => (
              <GiftCardRow key={card.id}>
                <tr>
                  <td>{card.id}</td>
                  <td>
                    <UserInfoContainer>
                      <img src={card.author?.photo} alt='' />
                      <div>
                        <p className='name'>{card.author?.name} {card.author?.lastname}</p>
                        <p className='phone'>{card.author?.cellphone}</p>
                      </div>
                    </UserInfoContainer>
                  </td>
                  <td>
                    {card.activater && (
                      <UserInfoContainer>
                        <img src={card.activater?.photo} alt='' />
                        <div>
                          <p className='name'>{card.activater?.name} {card.activater?.lastname}</p>
                          <p className='phone'>{card.activater?.cellphone}</p>
                        </div>
                      </UserInfoContainer>
                    )}
                  </td>
                  <td>{card.created_at}</td>
                  <td>{card.activated_at}</td>
                </tr>
              </GiftCardRow>
            ))
          )}
        </table>
      </GiftCardsTableWrapper>
      <PaginationWarpper>
        <Pagination
          currentPage={paginationProps.currentPage}
          totalPages={paginationProps.totalPages}
          handleChangePage={handleChangePage}
          defaultPageSize={paginationProps.pageSize}
          handleChangePageSize={handleChangePageSize}
        />
      </PaginationWarpper>
    </Container>
  )
}

export const GiftCardsListing = (props) => {
  const query = new URLSearchParams(useLocation().search)
  const defaultStatus = query.get('status')
  const defaultPage = query.get('page') || 1
  const defaultPageSize = query.get('pageSize') || 10
  const giftCardsProps = {
    ...props,
    UIComponent: GiftCardsListingUI,
    isSearchById: true,
    isSearchByAuthorName: true,
    isSearchByAuthorEmail: true,
    isSearchByAuthorPhone: true,
    defaultStatus: defaultStatus,
    paginationSettings: {
      initialPage: Number(defaultPage),
      pageSize: Number(defaultPageSize)
    }
  }
  return <GiftCardsListController {...giftCardsProps} />
}
