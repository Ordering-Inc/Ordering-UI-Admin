import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import {
  useLanguage,
  BusinessProductsCategoyDetails as BusinessProductsCategoyDetailsController
} from 'ordering-components-admin'
import { BusinessCategoryInfoSettingList } from '../BusinessCategoryInfoSettingList'
import { BusinessProductsCategoyInfo } from '../BusinessProductsCategoyInfo'
import { SeoOptions } from '../SeoOptions'
import { useWindowSize } from '../../hooks/useWindowSize'
import { Alert, Confirm } from '../Confirm'
import { IconButton, Switch } from '../../styles'
import { XLg, ThreeDots } from 'react-bootstrap-icons'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import { useTheme } from 'styled-components'

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
    open,
    onClose,
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
    handleDeleteCategory
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()

  const { width } = useWindowSize()

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })
  const [selectedInfoItem, setSelctedInfoItem] = useState('information')

  const actionSidebar = (value) => {
    setIsMenuOpen(value)
  }

  const handleClose = () => {
    onClose()
    setIsMenuOpen(false)
  }

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  const handleDeleteClick = () => {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_PRODUCT', 'Are you sure that you want to delete this product?'),
      handleOnAccept: () => {
        handleDeleteCategory()
        setConfirm({ ...confirm, open: false })
      }
    })
  }

  useEffect(() => {
    if (formState?.result?.error) {
      setAlertState({
        open: true,
        content: formState?.result?.result
      })
    }
  }, [formState?.result])

  const toggleMainContent = () => {
    if (isMenuOpen) {
      if (width <= 500) {
        document.getElementById('editCategory').style.width = '100vw'
      } else {
        document.getElementById('editCategory').style.width = '500px'
      }
    }
  }

  useEffect(() => {
    toggleMainContent()
  }, [width])

  useEffect(() => {
    if (!open) return
    actionSidebar(true)
  }, [open])

  return (
    <>
      <Container id='editCategory'>
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
                    {
                      formState?.changes?.name && (
                        <span>{formState?.changes?.name}</span>
                      )
                    }
                    <Switch
                      defaultChecked={formState?.changes?.enabled || false}
                      onChange={(val) => handleChangeCheckBox({ enabled: val })}
                    />
                  </BusinessEnableWrapper>
                  <RightHeader>
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
                    <IconButton
                      color='black'
                      onClick={handleClose}
                    >
                      <XLg />
                    </IconButton>
                  </RightHeader>
                </HeaderContainer>
                <BusinessCategoryInfoSettingList
                  selectedInfoItem={selectedInfoItem}
                  handleSelectInfoItem={setSelctedInfoItem}
                />
                {selectedInfoItem === 'information' && (
                  <BusinessProductsCategoyInfo
                    open={open}
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
                  />
                )}
                {selectedInfoItem === 'seo_options' && (
                  <SeoOptions
                    data={categorySelected}
                    formState={formState}
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
