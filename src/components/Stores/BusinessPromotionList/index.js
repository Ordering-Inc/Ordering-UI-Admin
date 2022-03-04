import React, { useEffect, useState } from 'react'
import {
  useLanguage,
  useUtils,
  BusinessPromotionList as BusinessPromotionListController
} from 'ordering-components-admin'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import { useTheme } from 'styled-components'
import { Button, Checkbox, IconButton } from '../../../styles'
import { useWindowSize } from '../../../hooks/useWindowSize'
import { AutoScroll, Confirm, Modal } from '../../Shared'
import { BusinessPromotionGeneralForm } from '../BusinessPromotionGeneralForm'
import { BusinessPromotionCustomFields } from '../BusinessPromotionCustomFields'
import { ChevronRight, ThreeDots, XLg } from 'react-bootstrap-icons'

import {
  MainContainer,
  BusinessPromotionsContainer,
  Header,
  PromotionsTable,
  PromotionTbody,
  ActionSelectorWrapper,
  PromotionTypeItem,
  AddNewPromotionText,
  PromotionEditFormContainer,
  EditHeader,
  CloseButtonWrapper,
  EditTitleHeaderContainer,
  OptionTabsContainer,
  InnerTabsContainer,
  Tab,
  PromotionNameContainer,
  PromotionDateItem
} from './styles'

const BusinessPromotionListUI = (props) => {
  const {
    business,
    setIsExtendExtraOpen,
    promotionListState,
    handleChangePromotionActiveState,
    handleDeletePromotion,
    handleSuccessUpdate,
    isSuccessDeleted,
    setIsSuccessDeleted
  } = props

  const [, t] = useLanguage()
  const [{ parseDate }] = useUtils()
  const theme = useTheme()
  const { width } = useWindowSize()

  const [isShowForm, setIsShowForm] = useState(false)
  const [curPromotion, setCurPromotion] = useState(null)
  const [selectedTab, setSelectedTab] = useState('general')

  const handleOpenForm = (e, promotion) => {
    const inValid = e.target.closest('.promotion-checkbox')
    if (inValid) return
    setCurPromotion(promotion)
    setSelectedTab('general')
    setIsShowForm(true)
    setIsExtendExtraOpen(true)
  }

  const handleCloseForm = () => {
    setIsShowForm(false)
    setCurPromotion(null)
    setIsExtendExtraOpen(false)
    setIsSuccessDeleted(false)
  }

  useEffect(() => {
    if (!isSuccessDeleted) return
    handleCloseForm()
  }, [isSuccessDeleted])

  return (
    <MainContainer>
      <BusinessPromotionsContainer>
        <Header>
          <h1>{t('PROMOTIONS', 'Promotions')}</h1>
          <Button
            borderRadius='8px'
            color='lightPrimary'
            onClick={e => handleOpenForm(e, {})}
          >
            {t('ADD_PROMOTION', 'Add promotion')}
          </Button>
        </Header>
        <PromotionsTable>
          <thead>
            <tr>
              <th>{t('PROMOTIONS', 'Promotions')}</th>
              <th>{t('TYPE', 'Type')}</th>
              <th>{t('DATES_RANGE', 'Date range')}</th>
            </tr>
          </thead>
          {promotionListState.promotions.map(promotion => (
            <PromotionTbody
              key={promotion.id}
              active={promotion.id === curPromotion?.id}
              onClick={(e) => handleOpenForm(e, promotion)}
            >
              <tr>
                <td>
                  <PromotionNameContainer>
                    <Checkbox
                      className='promotion-checkbox'
                      defaultChecked={promotion?.enabled}
                      onChange={e => handleChangePromotionActiveState(e.target.checked, promotion?.id)}
                    />
                    <img src={promotion.image || theme.images.dummies?.promotionDummy} alt='promotion' />
                    <span>{promotion?.name}</span>
                  </PromotionNameContainer>
                </td>
                <td>
                  <PromotionTypeItem>
                    {promotion?.type === 1 ? t('DISCOUNT', 'Discount') : t('COUPON', 'Coupon')}
                  </PromotionTypeItem>
                </td>
                <td>
                  <PromotionDateItem>
                    <div>
                      <p>{parseDate(promotion?.start, { utc: false, outputFormat: 'YYYY-MM-DD' })}</p>
                      <p>{parseDate(promotion?.end, { utc: false, outputFormat: 'YYYY-MM-DD' })}</p>
                    </div>
                    <ChevronRight />
                  </PromotionDateItem>
                </td>
              </tr>
            </PromotionTbody>
          ))}
        </PromotionsTable>
        <AddNewPromotionText onClick={(e) => handleOpenForm(e, {})}>
          {t('ADD_NEW_PROMOTION', 'Add new promotion')}
        </AddNewPromotionText>
      </BusinessPromotionsContainer>
      {isShowForm && (
        <>
          {width >= 1000 ? (
            <BusinessPromotion
              isCloseButtonShow
              curPromotion={curPromotion}
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
              handleCloseForm={handleCloseForm}
              handleDeletePromotion={handleDeletePromotion}
            >
              {selectedTab === 'general' && (
                <BusinessPromotionGeneralForm
                  promotion={curPromotion}
                  business={business}
                  handleCloseAddForm={handleCloseForm}
                  handleSuccessUpdate={handleSuccessUpdate}
                />
              )}
              {selectedTab === 'custom' && (
                <BusinessPromotionCustomFields
                  businessId={business?.id}
                  offerId={curPromotion?.id}
                />
              )}
            </BusinessPromotion>
          ) : (
            <Modal
              width='80%'
              open={isShowForm}
              onClose={() => handleCloseForm()}
            >
              <BusinessPromotion
                curPromotion={curPromotion}
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
                handleCloseForm={handleCloseForm}
                handleDeletePromotion={handleDeletePromotion}
              >
                {selectedTab === 'general' && (
                  <BusinessPromotionGeneralForm
                    promotion={curPromotion}
                    business={business}
                    handleCloseAddForm={handleCloseForm}
                    handleSuccessUpdate={handleSuccessUpdate}
                  />
                )}
                {selectedTab === 'custom' && (
                  <BusinessPromotionCustomFields
                    businessId={business?.id}
                    offerId={curPromotion?.id}
                  />
                )}
              </BusinessPromotion>
            </Modal>
          )}
        </>
      )}
    </MainContainer>
  )
}

const BusinessPromotion = (props) => {
  const {
    isCloseButtonShow,
    curPromotion,
    selectedTab,
    setSelectedTab,
    handleCloseForm,
    handleDeletePromotion
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })

  const handleDeleteClick = (id) => {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_COUPON', 'Are you sure that you want to delete this coupon?'),
      handleOnAccept: () => {
        setConfirm({ ...confirm, open: false })
        handleDeletePromotion(curPromotion?.id)
      }
    })
  }

  return (
    <>
      <PromotionEditFormContainer>
        {isCloseButtonShow && (
          <CloseButtonWrapper>
            <IconButton
              color='black'
              onClick={() => handleCloseForm()}
            >
              <XLg />
            </IconButton>
          </CloseButtonWrapper>
        )}
        {Object.keys(curPromotion).length > 0 && (
          <>
            <EditHeader>
              <EditTitleHeaderContainer>
                <h1>{curPromotion?.name}</h1>
              </EditTitleHeaderContainer>
              <ActionSelectorWrapper>
                <DropdownButton
                  menuAlign={theme?.rtl ? 'left' : 'right'}
                  title={<ThreeDots />}
                  id={theme?.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'}
                >
                  <Dropdown.Item
                    onClick={() => handleDeleteClick()}
                  >
                    {t('DELETE', 'Delete')}
                  </Dropdown.Item>
                </DropdownButton>
              </ActionSelectorWrapper>
            </EditHeader>
            <OptionTabsContainer>
              <InnerTabsContainer>
                <AutoScroll innerScroll scrollId='promotion_edit'>
                  <Tab
                    active={selectedTab === 'general'}
                    onClick={() => setSelectedTab('general')}
                  >
                    {t('GENERAL')}
                  </Tab>
                  <Tab
                    active={selectedTab === 'custom'}
                    onClick={() => setSelectedTab('custom')}
                  >
                    {t('CUSTOM_FIELDS', 'Custom fields')}
                  </Tab>
                </AutoScroll>
              </InnerTabsContainer>
            </OptionTabsContainer>
          </>
        )}

        {props.children}
      </PromotionEditFormContainer>
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

export const BusinessPromotionList = (props) => {
  const businessPromotionsController = {
    ...props,
    UIComponent: BusinessPromotionListUI
  }
  return (
    <BusinessPromotionListController {...businessPromotionsController} />
  )
}
