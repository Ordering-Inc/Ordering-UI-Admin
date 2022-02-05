import React, { useState } from 'react'
import { useLanguage, useUtils, BusinessPromotionList as BusinessPromotionListController } from 'ordering-components-admin'
import FiMoreVertical from '@meronex/icons/fi/FiMoreVertical'
import { LayoutThreeColumns, XLg } from 'react-bootstrap-icons'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import { useTheme } from 'styled-components'
import { Button, IconButton, Switch } from '../../../styles'
import { useWindowSize } from '../../../hooks/useWindowSize'
import { AutoScroll, Confirm, Modal } from '../../Shared'
import { BusinessPromotionGeneralForm } from '../BusinessPromotionGeneralForm'
import { BusinessPromotionCustomFields } from '../BusinessPromotionCustomFields'

import {
  MainContainer,
  BusinessPromotionsContainer,
  Header,
  PromotionsTable,
  ActionsWrapper,
  DropdownWrapper,
  EnableWrapper,
  PromotionItem,
  AddNewPromotionText,
  PromotionEditFormContainer,
  EditHeader,
  CloseButtonWrapper,
  EditTitleHeaderContainer,
  OptionTabsContainer,
  InnerTabsContainer,
  Tab
} from './styles'

const BusinessPromotionListUI = (props) => {
  const {
    business,
    setIsExtendExtraOpen,
    promotionListState,
    handleChangePromotionActiveState,
    handleDeletePromotion,
    handleSuccessUpdate
  } = props

  const [, t] = useLanguage()
  const [{ parseDate }] = useUtils()
  const theme = useTheme()
  const { width } = useWindowSize()

  const [isShowForm, setIsShowForm] = useState(false)
  const [curPromotion, setCurPromotion] = useState(false)
  const [selectedTab, setSelectedTab] = useState('general')
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })

  const handleOpenForm = (promotion) => {
    setCurPromotion(promotion)
    setSelectedTab('general')
    setIsShowForm(true)
    setIsExtendExtraOpen(true)
  }

  const handleCloseForm = () => {
    setIsShowForm(false)
    setCurPromotion(null)
    setIsExtendExtraOpen(false)
  }

  const handleDeleteClick = (id) => {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_COUPON', 'Are you sure that you want to delete this coupon?'),
      handleOnAccept: () => {
        setConfirm({ ...confirm, open: false })
        handleDeletePromotion(id)
      }
    })
  }

  return (
    <MainContainer>
      <BusinessPromotionsContainer>
        <Header>
          <h1>{t('PROMOTIONS', 'Promotions')}</h1>
          <Button
            borderRadius='8px'
            color='lightPrimary'
            onClick={() => handleOpenForm({})}
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
              <th>
                <ActionsWrapper>
                  <span>{t('ACTIONS', 'Actions')}</span>
                  <LayoutThreeColumns />
                </ActionsWrapper>
              </th>
            </tr>
          </thead>
          {promotionListState.promotions.map(promotion => (
            <tbody key={promotion.id}>
              <tr>
                <td>
                  <PromotionItem>
                    {/* <img src={promotion.image || theme.images.dummies?.promotionDummy} alt='promotion' /> */}
                    <span>{promotion?.name}</span>
                  </PromotionItem>
                </td>
                <td>
                  <PromotionItem>{promotion?.type === 1 ? t('DISCOUNT', 'Discount') : t('COUPON', 'Coupon')}</PromotionItem>
                </td>
                <td>
                  <PromotionItem>
                    <div>
                      <p>{parseDate(promotion?.start, { utc: false, outputFormat: 'YYYY-MM-DD' })}</p>
                      <p>{parseDate(promotion?.end, { utc: false, outputFormat: 'YYYY-MM-DD' })}</p>
                    </div>
                  </PromotionItem>
                </td>
                <td>
                  <ActionsWrapper>
                    <EnableWrapper className='business_enable_control'>
                      <span>{t('ENABLE', 'Enable')}</span>
                      <Switch
                        defaultChecked={promotion?.enabled}
                        onChange={enabled => handleChangePromotionActiveState(enabled, promotion?.id)}
                      />
                    </EnableWrapper>
                    <DropdownWrapper>
                      <DropdownButton
                        menuAlign={theme?.rtl ? 'left' : 'right'}
                        title={<FiMoreVertical />}
                        id={theme?.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'}
                      >
                        <Dropdown.Item
                          onClick={() => handleOpenForm(promotion)}
                        >
                          {t('EDIT', 'Edit')}
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => handleDeleteClick(promotion?.id)}>
                          {t('DELETE', 'Delete')}
                        </Dropdown.Item>
                      </DropdownButton>
                    </DropdownWrapper>
                  </ActionsWrapper>
                </td>
              </tr>
            </tbody>
          ))}
        </PromotionsTable>
        <AddNewPromotionText onClick={() => handleOpenForm({})}>
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
              handleChangePromotionActiveState={handleChangePromotionActiveState}
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
                handleChangePromotionActiveState={handleChangePromotionActiveState}
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

      <Confirm
        title={t('WEB_APPNAME', 'Ordering')}
        content={confirm.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={confirm.open}
        onClose={() => setConfirm({ ...confirm, open: false })}
        onCancel={() => setConfirm({ ...confirm, open: false })}
        onAccept={confirm.handleOnAccept}
        closeOnBackdrop={false}
      />
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
    handleChangePromotionActiveState
  } = props

  const [, t] = useLanguage()

  return (
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
              <Switch
                defaultChecked={curPromotion?.enabled}
                onChange={enabled => handleChangePromotionActiveState(enabled, curPromotion?.id)}
              />
            </EditTitleHeaderContainer>
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
