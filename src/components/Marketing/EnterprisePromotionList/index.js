import React, { useState, useEffect } from 'react'
import { useLanguage, useUtils } from 'ordering-components-admin'
import Skeleton from 'react-loading-skeleton'
import { useTheme } from 'styled-components'
import { Image as ImageIcon } from 'react-bootstrap-icons'
import { ColumnAllowSettingPopover, Pagination } from '../../Shared'
import { Switch } from '../../../styles'

import {
  PromotionListContainer,
  PromotionListTable,
  EnableWrapper,
  DragableContainer,
  DragImageWrapper,
  WrapperImage,
  Image,
  VerticalLine,
  PromotionDateRanageWrapper,
  PromotionTypeWrapper,
  PromotionHow,
  PromotionListBottom,
  AddNewButton,
  WrapperPagination,
  SinglePromotionTbody,
  DummyImageWrapper
} from './styles'

export const EnterprisePromotionList = (props) => {
  const {
    eventDisabled,

    promotionListState,
    paginationProps,
    getPromotions,
    selectedPromotion,
    handleOpenDetails,
    dataSelected,
    handleDragStart,
    handleAllowDrop,
    handleDrop,
    handleDragEnd,
    handleEnablePromotion
  } = props

  const [, t] = useLanguage()
  const theme = useTheme()
  const [{ parseDate, optimizeImage }] = useUtils()

  const [allowColumns, setAllowColumns] = useState({
    promotions: true,
    promotionType: true,
    how: true,
    dateRange: true,
    actions: true
  })

  const optionsDefault = [
    { value: 'promotions', content: t('PROMOTIONS', 'Promotions') },
    { value: 'promotionType', content: t('PROMOTION_TYPE', 'Promotion type') },
    { value: 'how', content: t('QUESTION_HOW', 'How?') },
    { value: 'dateRange', content: t('DATE_RANGE', 'Date Range') },
    { value: 'actions', content: t('ACTIONS', 'Actions') }
  ]

  const handleChangeAllowColumns = (type) => {
    setAllowColumns({
      ...allowColumns,
      [type]: !allowColumns[type]
    })
  }

  const getPromotionType = (type) => {
    const promotionTypes = [
      { type: 1, content: t('MOBILE_FRONT_SUB_TOTAL', 'Subtotal') },
      { type: 2, content: t('DELIVERY_FEE', 'Delivery fee') },
      { type: 3, content: t('BUSINESS_SERVICE_FEE', 'Service fee') }
    ]
    const found = promotionTypes.find(item => item.type === type)
    if (found) {
      return found.content
    } else {
      return type
    }
  }

  const handleChangePage = (page) => {
    getPromotions(page, paginationProps?.pageSize)
  }

  const handleChangePageSize = (pageSize) => {
    const expectedPage = Math.ceil(paginationProps.from / pageSize)
    getPromotions(expectedPage, pageSize)
  }

  const handleClickPromotion = (e, promotion) => {
    const inValid = e.target.closest('.enable_control')
    if (inValid) return
    handleOpenDetails(promotion)
  }

  useEffect(() => {
    if (promotionListState.loading || promotionListState.promotions.length > 0 || paginationProps.totalPages <= 1) return
    if (paginationProps.currentPage !== paginationProps.totalPages) {
      handleChangePage(paginationProps.currentPage)
    } else {
      handleChangePage(paginationProps.currentPage - 1)
    }
  }, [promotionListState.promotions, paginationProps])

  return (
    <>
      <PromotionListContainer eventDisabled={eventDisabled}>
        <PromotionListTable
          noFixedHeader={!promotionListState.loading && promotionListState.promotions?.length < 4}
        >
          <thead>
            <tr>
              {allowColumns?.promotions && (
                <th className='promotion'>{t('PROMOTIONS', 'Promotions')}</th>
              )}
              {allowColumns?.promotionType && (
                <th>{t('PROMOTION_TYPES', 'Promotion types')}</th>
              )}
              {allowColumns?.how && (
                <th>{t('QUESTION_HOW', 'How?')}</th>
              )}
              {allowColumns?.dateRange && (
                <th className='date_range'>{t('DATE_RANGE', 'Date Range')}</th>
              )}
              <th>
                <ColumnAllowSettingPopover
                  allowColumns={allowColumns}
                  optionsDefault={optionsDefault}
                  handleChangeAllowColumns={handleChangeAllowColumns}
                />
              </th>
            </tr>
          </thead>
          {promotionListState?.loading ? (
            [...Array(10).keys()].map(i => (
              <SinglePromotionTbody key={i}>
                <tr>
                  {allowColumns?.promotions && (
                    <td className='promotion'>
                      <DragableContainer>
                        <div>
                          <DragImageWrapper>
                            <Skeleton width={10} height={20} />
                          </DragImageWrapper>
                          <WrapperImage isSkeleton>
                            <Skeleton width={40} height={40} />
                          </WrapperImage>
                          <Skeleton width={100} />
                        </div>
                      </DragableContainer>
                    </td>
                  )}
                  {allowColumns?.promotionType && (
                    <td><Skeleton width={80} /></td>
                  )}
                  {allowColumns?.how && (
                    <td><Skeleton width={100} /></td>
                  )}
                  {allowColumns?.dateRange && (
                    <td className='date_range'>
                      <PromotionDateRanageWrapper>
                        <div>
                          <p><Skeleton width={70} /></p>
                          <p><Skeleton width={70} /></p>
                        </div>
                      </PromotionDateRanageWrapper>
                    </td>
                  )}
                  <td>
                    {allowColumns?.actions && (
                      <EnableWrapper className='enable_control'>
                        <Skeleton width={60} />
                        <Skeleton width={30} />
                      </EnableWrapper>
                    )}
                  </td>
                </tr>
              </SinglePromotionTbody>
            ))
          ) : (
            promotionListState.promotions.map(promotion => (
              <SinglePromotionTbody
                key={promotion.id}
                className={(selectedPromotion?.id === promotion.id) ? 'draggable_promotion active' : 'draggable_promotion'}
                onClick={(e) => handleClickPromotion(e, promotion)}
                onDragOver={e => handleAllowDrop?.(e, promotion.id)}
                onDrop={e => handleDrop(e, promotion)}
                onDragEnd={e => handleDragEnd(e)}
                isAccept={dataSelected && dataSelected === promotion?.id}
              >
                <tr>
                  {allowColumns?.promotions && (
                    <td className='promotion'>
                      <DragableContainer>
                        <div>
                          <DragImageWrapper>
                            <img
                              src={theme.images.icons?.sixDots}
                              alt='six dots'
                              draggable
                              onDragStart={e => handleDragStart?.(e, promotion)}
                            />
                          </DragImageWrapper>
                          <WrapperImage>
                            {promotion?.image ? (
                              <Image bgimage={optimizeImage(promotion?.image, 'h_50,c_limit')} />
                            ) : (
                              <DummyImageWrapper>
                                <ImageIcon />
                              </DummyImageWrapper>
                            )}
                          </WrapperImage>
                          <span>{promotion?.name}</span>
                        </div>
                        <VerticalLine />
                      </DragableContainer>
                    </td>
                  )}
                  {allowColumns?.promotionType && (
                    <td>
                      <PromotionTypeWrapper>
                        <span>{getPromotionType(promotion?.target)}</span>
                        <VerticalLine />
                      </PromotionTypeWrapper>
                    </td>
                  )}
                  {allowColumns?.how && (
                    <td>
                      <PromotionHow>
                        <span>
                          {promotion?.type === 1
                            ? promotion?.auto ? t('AUTOMATIC_DISCOUNT', 'Automatic discount') : t('DISCOUNT', 'discount')
                            : promotion?.auto ? t('AUTOMATIC_COUPON', 'Automatic coupon') : t('COUPON', 'Coupon')}
                        </span>
                        <VerticalLine />
                      </PromotionHow>
                    </td>
                  )}
                  {allowColumns?.dateRange && (
                    <td className='date_range'>
                      <PromotionDateRanageWrapper>
                        <div>
                          <p>{parseDate(promotion?.start, { utc: false, outputFormat: 'YYYY-MM-DD' })}</p>
                          <p>{parseDate(promotion?.end, { utc: false, outputFormat: 'YYYY-MM-DD' })}</p>
                        </div>
                        <VerticalLine />
                      </PromotionDateRanageWrapper>
                    </td>
                  )}
                  <td>
                    {allowColumns?.actions && (
                      <EnableWrapper className='enable_control'>
                        <span>{t('ENABLE', 'Enable')}</span>
                        <Switch
                          defaultChecked={promotion?.enabled}
                          onChange={enabled => handleEnablePromotion(promotion.id, enabled)}
                        />
                      </EnableWrapper>
                    )}
                  </td>
                </tr>
              </SinglePromotionTbody>
            ))
          )}
        </PromotionListTable>
      </PromotionListContainer>
      <PromotionListBottom eventDisabled={eventDisabled}>
        <AddNewButton
          onClick={() => handleOpenDetails({})}
        >
          {t('ADD_NEW_PROMOTION', 'Add new promotion')}
        </AddNewButton>
        {promotionListState?.promotions.length > 0 && (
          <WrapperPagination>
            <Pagination
              currentPage={paginationProps?.currentPage}
              totalPages={paginationProps?.totalPages}
              handleChangePage={handleChangePage}
              handleChangePageSize={handleChangePageSize}
            />
          </WrapperPagination>
        )}
      </PromotionListBottom>
    </>
  )
}
