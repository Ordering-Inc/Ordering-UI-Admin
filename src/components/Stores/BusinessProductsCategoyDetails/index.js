import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import { useLanguage, BusinessProductsCategoyDetails as BusinessProductsCategoyDetailsController } from 'ordering-components-admin'
import { ArrowsAngleContract, ArrowsAngleExpand, ThreeDots } from 'react-bootstrap-icons'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import { useTheme } from 'styled-components'
import { Alert, Confirm, Modal } from '../../Shared'
import { IconButton, Switch, Button } from '../../../styles'
import { SeoOptions } from '../SeoOptions'
import { useWindowSize } from '../../../hooks/useWindowSize'
import { addQueryToUrl } from '../../../utils'
import { BusinessCategoryInfoSettingList } from '../BusinessCategoryInfoSettingList'
import { BusinessProductsCategoyInfo } from '../BusinessProductsCategoyInfo'
import { SnoozeComponent } from '../SnoozeComponent'

import {
  Container,
  EditCategoryContent,
  HeaderContainer,
  BusinessEnableWrapper,
  CategoryTypeImage,
  BtnWrapper,
  CategoryNameWrapper,
  RightHeader,
  ActionSelectorWrapper
} from './styles'

const BusinessProductsCategoyDetailsUI = (props) => {
  const {
    formState,
    handlechangeImage,
    handleChangeInput,
    handleUpdateClick,
    handleChangeCheckBox,
    businessState,
    category,
    categorySelected,
    parentCategories,
    handleChangeItem,
    isAddMode,
    handleDeleteCategory,
    handleChangeRibbon,
    isTutorialMode,
    handleTutorialSkip
  } = props

  const query = new URLSearchParams(useLocation().search)
  const theme = useTheme()
  const [, t] = useLanguage()
  const { width } = useWindowSize()

  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })
  const [selectedInfoItem, setSelctedInfoItem] = useState('information')
  const [isExpand, setIsExpand] = useState(false)
  const [isCategorySnooze, setIsCategorySnooze] = useState(false)

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  const handleDeleteClick = () => {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_CATEGORY', 'Are you sure that you want to delete this category?'),
      handleOnAccept: () => {
        handleDeleteCategory()
        setConfirm({ ...confirm, open: false })
      }
    })
  }

  const expandSideBar = () => {
    const element = document.getElementById('editCategory')
    if (!element) return

    if (isExpand) element.style.width = '500px'
    else element.style.width = '100vw'
    setIsExpand(prev => !prev)
  }

  useEffect(() => {
    if (formState?.result?.error) {
      setAlertState({
        open: true,
        content: formState?.result?.result
      })
    }
  }, [formState?.result])

  const handleTabClick = (tab, isInitialRender) => {
    setSelctedInfoItem(tab)
    if (!isInitialRender) {
      addQueryToUrl({ tab: tab })
    }
  }

  useEffect(() => {
    const tab = query.get('tab')
    if (tab) {
      handleTabClick(tab, true)
    } else {
      handleTabClick(selectedInfoItem)
    }
  }, [])

  return (
    <>
      <Container>
        <EditCategoryContent>
          {
            businessState.loading ? (
              <>
                <HeaderContainer>
                  <BusinessEnableWrapper className='business_enable_control'>
                    <Skeleton width={100} />
                    <Skeleton width={50} />
                  </BusinessEnableWrapper>
                  <Skeleton width={30} height={30} />
                </HeaderContainer>
                <CategoryTypeImage>
                  <Skeleton width={300} height={300} />
                </CategoryTypeImage>
                <CategoryNameWrapper>
                  <label>
                    <Skeleton width={70} />
                  </label>
                  <Skeleton width={300} />
                </CategoryNameWrapper>
                <BtnWrapper>
                  <Skeleton width={70} height={30} />
                </BtnWrapper>
              </>
            ) : (
              <>
                <HeaderContainer>
                  <BusinessEnableWrapper className='business_enable_control'>
                    {isAddMode ? (
                      <span>{t('NEW_CATEGORY', 'New category')}</span>
                    ) : (
                      <>
                        {formState?.changes?.name && (
                          <span>{formState?.changes?.name}</span>
                        )}
                        <Switch
                          defaultChecked={formState?.changes?.enabled || false}
                          onChange={(val) => handleChangeCheckBox({ enabled: val })}
                        />
                      </>
                    )}
                  </BusinessEnableWrapper>
                  <RightHeader>
                    <ActionSelectorWrapper>
                      <Button
                        className='snooze'
                        color='lightGreen'
                        borderRadius='8px'
                        onClick={() => setIsCategorySnooze(true)}
                      >
                        {t('SNOOZE', 'Snooze')}
                      </Button>
                    </ActionSelectorWrapper>
                    {width > 576 && (
                      <IconButton
                        color='black'
                        onClick={() => expandSideBar()}
                      >
                        {isExpand ? <ArrowsAngleContract /> : <ArrowsAngleExpand />}
                      </IconButton>
                    )}
                    {!isAddMode && (
                      <ActionSelectorWrapper>
                        <DropdownButton
                          className='product_actions'
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
                    )}
                  </RightHeader>
                </HeaderContainer>
                {!isAddMode && (
                  <BusinessCategoryInfoSettingList
                    selectedInfoItem={selectedInfoItem}
                    handleSelectInfoItem={tab => handleTabClick(tab)}
                  />
                )}
                {selectedInfoItem === 'information' && (
                  <BusinessProductsCategoyInfo
                    formState={formState}
                    handlechangeImage={handlechangeImage}
                    handleChangeInput={handleChangeInput}
                    handleUpdateClick={handleUpdateClick}
                    handleChangeCheckBox={handleChangeCheckBox}
                    category={category}
                    categorySelected={categorySelected}
                    parentCategories={parentCategories}
                    handleChangeItem={handleChangeItem}
                    isAddMode={isAddMode}
                    isTutorialMode={isTutorialMode}
                    handleChangeRibbon={handleChangeRibbon}
                    handleTutorialSkip={handleTutorialSkip}
                  />
                )}
                {selectedInfoItem === 'seo_options' && (
                  <SeoOptions
                    data={categorySelected}
                    formState={formState}
                    setFormState={handleChangeItem}
                    handleUpdateClick={handleUpdateClick}
                    handleProductCategoryChangeInput={handleChangeInput}
                    handlechangeImageProductCategory={handlechangeImage}
                    isCategorySeo
                  />
                )}
              </>
            )
          }
        </EditCategoryContent>
      </Container>
      <Modal
        width='85%'
        maxWidth='1000px'
        open={isCategorySnooze}
        onClose={() => setIsCategorySnooze(false)}
        closeOnBackdrop={false}
      >
        <SnoozeComponent
          dataState={categorySelected}
          handleUpdate={handleUpdateClick}
          handleChangeFormState={handleChangeItem}
          formState={formState}
          onClose={() => setIsCategorySnooze(false)}
        />
      </Modal>
      <Alert
        title={t('BUSINESS_TYPE', 'Business type')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
      <Confirm
        title={t('WEB_APPNAME', 'Ordering')}
        width='700px'
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
export const BusinessProductsCategoyDetails = (props) => {
  const businessCategoryEditProps = {
    ...props,
    UIComponent: BusinessProductsCategoyDetailsUI
  }

  return (
    <BusinessProductsCategoyDetailsController {...businessCategoryEditProps} />
  )
}
