import React, { useState, useEffect } from 'react'
import { useLanguage, useUtils } from 'ordering-components-admin'
import { ColumnAllowSettingPopover } from '../ColumnAllowSettingPopover'
import Skeleton from 'react-loading-skeleton'
import { Switch } from '../../styles'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { useTheme } from 'styled-components'
import { ThreeDotsVertical, Image as ImageIcon } from 'react-bootstrap-icons'
import { Pagination } from '../Pagination'
import { Confirm } from '../Confirm'

import {
  PromotionListContainer,
  PromotionListTable,
  EnableWrapper,
  WrapperActionSelector,
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
    promotionListState,
    paginationProps,
    getPromotions,
    setPaginationProps,
    selectedPromotion,
    handleOpenDetails,
    dataSelected,
    handleDragStart,
    handleAllowDrop,
    handleDrop,
    handleDragEnd,
    handleEnablePromotion,
    handleDeletePromotion
  } = props

  const [, t] = useLanguage()
  const theme = useTheme()
  const [{ parseDate, optimizeImage }] = useUtils()

  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })
  const [openPopover, setOpenPopover] = useState(false)
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

  const onClickDeletePromotion = (promotionId) => {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_ITEM', 'Are you sure to delete this _item_?').replace('_item_', t('PROMOTION', 'Promotion')),
      handleOnAccept: () => {
        setConfirm({ ...confirm, open: false })
        handleDeletePromotion(promotionId)
      }
    })
  }

  const handleChangePage = (page) => {
    getPromotions(page, paginationProps?.pageSize)
  }

  const handleChangePageSize = (pageSize) => {
    const expectedPage = Math.ceil(paginationProps.from / pageSize)
    setPaginationProps({ ...paginationProps, pageSize: pageSize })
    getPromotions(expectedPage, pageSize)
  }

  const handleClickPromotion = (e, promotion) => {
    const inValid = e.target.closest('.enable_control') || e.target.closest('.promotion_actions')
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
      <PromotionListContainer>
        <PromotionListTable>
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
              {allowColumns?.actions && (
                <th>{t('ACTIONS', 'Actions')}</th>
              )}
              <th>
                <ColumnAllowSettingPopover
                  open={openPopover}
                  allowColumns={allowColumns}
                  optionsDefault={optionsDefault}
                  onClick={() => setOpenPopover(!openPopover)}
                  onClose={() => setOpenPopover(false)}
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
                  {allowColumns?.actions && (
                    <td>
                      <EnableWrapper className='enable_control'>
                        <Skeleton width={60} />
                        <Skeleton width={30} />
                      </EnableWrapper>
                    </td>
                  )}
                  <td><Skeleton width={20} /></td>
                </tr>
              </SinglePromotionTbody>
            ))
          ) : (
            promotionListState.promotions.map(promotion => (
              <SinglePromotionTbody
                key={promotion.id}
                className={(selectedPromotion?.id === promotion.id) ? 'draggable_promotion active' : 'draggable_promotion'}
                onClick={(e) => handleClickPromotion(e, promotion)}
                onDragOver={e => handleAllowDrop(e, promotion.id)}
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
                              onDragStart={e => handleDragStart(e, promotion)}
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
                  {allowColumns?.actions && (
                    <td>
                      <EnableWrapper className='enable_control'>
                        <span>{t('ENABLE', 'Enable')}</span>
                        <Switch
                          defaultChecked={promotion?.enabled}
                          onChange={enabled => handleEnablePromotion(promotion.id, enabled)}
                        />
                      </EnableWrapper>
                    </td>
                  )}
                  <td>
                    <WrapperActionSelector className='promotion_actions'>
                      <DropdownButton
                        menuAlign={theme?.rtl ? 'left' : 'right'}
                        title={<ThreeDotsVertical />}
                        id={theme?.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'}
                      >
                        <Dropdown.Item
                          onClick={(e) => handleClickPromotion(e, promotion)}
                        >
                          {t('EDIT', 'Edit')}
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => onClickDeletePromotion(promotion.id)}
                        >
                          {t('DELETE', 'Delete')}
                        </Dropdown.Item>
                      </DropdownButton>
                    </WrapperActionSelector>
                  </td>
                </tr>
              </SinglePromotionTbody>
            ))
          )}
        </PromotionListTable>
      </PromotionListContainer>
      <PromotionListBottom>
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
      <Confirm
        width='700px'
        title={t('WEB_APPNAME', 'Ordering')}
        content={confirm.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={confirm.open}
        onClose={() => setConfirm({ ...confirm, open: false })}
        onCancel={() => setConfirm({ ...confirm, open: false })}
        onAccept={confirm.handleOnAccept}
        closeOnBackdrop={false}
      />
    </>
  )
}
