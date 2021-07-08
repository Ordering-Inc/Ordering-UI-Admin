import React, { useState, useEffect, useRef } from 'react'
import { useLanguage, DragAndDrop, ExamineClick } from 'ordering-components-admin'
import { ProductExtraOptions as ProductExtraOptionsController } from './naked'
import { useWindowSize } from '../../../../../hooks/useWindowSize'
import MdcClose from '@meronex/icons/mdc/MdcClose'
import { Switch } from '../../styles/Switch'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import { useTheme } from 'styled-components'
import FiMoreVertical from '@meronex/icons/fi/FiMoreVertical'
import BiImage from '@meronex/icons/bi/BiImage'
import { bytesConverter } from '../../../../../utils'
import { Alert } from '../Confirm'
import Skeleton from 'react-loading-skeleton'

import {
  MainContainer,
  OptionsContainer,
  Header,
  OptionsTable,
  OptionNameContainer,
  OptionImage,
  UploadImageIconContainer,
  SkeletonWrapper,
  ActionsContainer,
  EnableWrapper,
  DropDownWrapper
} from './styles'

const ProductExtraOptionsUI = (props) => {
  const {
    open,
    onClose,
    extraState,
    formState,
    handlechangeImage,
    handleChangeInput
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()
  const { width } = useWindowSize()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const optionImageInputRef = useRef(null)
  const ActionIcon = <FiMoreVertical />
  const [alertState, setAlertState] = useState({ open: false, content: [] })

  const handleClickImage = () => {
    optionImageInputRef.current.click()
  }

  const handleFiles = (files) => {
    if (files.length === 1) {
      const type = files[0].type.split('/')[0]
      if (type !== 'image') {
        setAlertState({
          open: true,
          content: [t('ERROR_ONLY_IMAGES', 'Only images can be accepted')]
        })
        return
      }

      if (bytesConverter(files[0]?.size) > 2048) {
        setAlertState({
          open: true,
          content: [t('IMAGE_MAXIMUM_SIZE', 'The maximum image size is 2 megabytes')]
        })
        return
      }
      handlechangeImage(files[0])
    }
  }

  const actionSidebar = (value) => {
    if (!value) {
      onClose()
    }
    setIsMenuOpen(value)
    document.getElementById('extra_options').style.width = value
      ? width > 1000 ? '500px' : '100%'
      : '0'
  }

  useEffect(() => {
    if (isMenuOpen) {
      if (width < 1000) {
        document.getElementById('extra_options').style.width = '100%'
      } else {
        document.getElementById('extra_options').style.width = '500px'
      }
    }
  }, [width])

  useEffect(() => {
    if (!open) return
    actionSidebar(true)
  }, [open])

  return (
    <MainContainer id='extra_options'>
      <OptionsContainer>
        <Header>
          <h1>{t('OPTIONS', 'Options')}</h1>
          <MdcClose
            onClick={() => onClose()}
          />
        </Header>
        <OptionsTable>
          <thead>
            <tr>
              <th>{t('NAME', 'Name')}</th>
              <th>{t('MIN', 'Min')}</th>
              <th>{t('MAX', 'Max')}</th>
              <th>{t('ACTIONS', 'Actions')}</th>
            </tr>
          </thead>
          {extraState.extra?.options.map(option => (
            <tbody key={option.id}>
              <tr>
                <td>
                  <OptionNameContainer>
                    <OptionImage
                      onClick={() => handleClickImage()}
                    >
                      <ExamineClick
                        onFiles={files => handleFiles(files)}
                        childRef={(e) => { optionImageInputRef.current = e }}
                        accept='image/png, image/jpeg, image/jpg'
                        disabled={formState.loading}
                      >
                        <DragAndDrop
                          onDrop={dataTransfer => handleFiles(dataTransfer.files)}
                          accept='image/png, image/jpeg, image/jpg'
                          disabled={formState.loading}
                        >
                          {formState.loading
                            ? (<SkeletonWrapper><Skeleton /></SkeletonWrapper>)
                            : ((!formState.changes?.image || formState.result?.result === 'Network Error' || formState.result.error)
                              ? option?.image &&
                                (<img src={option?.image} alt='product image' loading='lazy' />)
                              : formState?.changes?.image &&
                                <img src={formState?.changes?.image} alt='product image' loading='lazy' />
                            )}
                          <UploadImageIconContainer>
                            <BiImage />
                          </UploadImageIconContainer>
                        </DragAndDrop>
                      </ExamineClick>
                    </OptionImage>
                    <input
                      name='name'
                      defaultValue={option.name}
                      onChange={(e) => handleChangeInput(e, option.id)}
                    />
                  </OptionNameContainer>
                </td>
                <td>
                  <input
                    name='min'
                    value={option.min}
                    onChange={(e) => handleChangeInput(e, option.id)}
                  />
                </td>
                <td>
                  <input
                    name='max'
                    value={option.max}
                    onChange={(e) => handleChangeInput(e, option.id)}
                  />
                </td>
                <td>
                  <ActionsContainer>
                    <EnableWrapper>
                      <span>{t('ENABLE', 'Enable')}</span>
                      <Switch
                        defaultChecked
                      />
                    </EnableWrapper>
                    <DropDownWrapper>
                      <DropdownButton
                        menuAlign={theme?.rtl ? 'left' : 'right'}
                        title={ActionIcon}
                        id={theme?.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'}
                      >
                        <Dropdown.Item>{t('EDIT', 'Edit')}</Dropdown.Item>
                        <Dropdown.Item onClick={() => console.log()}>{t('CUSTOM_FIELDS', 'Custom fields')}</Dropdown.Item>
                        <Dropdown.Item>{t('DELETE', 'Delete')}</Dropdown.Item>
                      </DropdownButton>
                    </DropDownWrapper>
                  </ActionsContainer>
                </td>
              </tr>
            </tbody>
          ))}
        </OptionsTable>
      </OptionsContainer>
      <Alert
        title={t('ORDERING', 'Ordering')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => setAlertState({ open: false, content: [] })}
        onAccept={() => setAlertState({ open: false, content: [] })}
        closeOnBackdrop={false}
      />
    </MainContainer>
  )
}

export const ProductExtraOptions = (props) => {
  const productExtraOptionsProps = {
    ...props,
    UIComponent: ProductExtraOptionsUI
  }
  return <ProductExtraOptionsController {...productExtraOptionsProps} />
}
