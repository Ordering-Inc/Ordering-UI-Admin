import React, { useRef } from 'react'
import { useLanguage, DragAndDrop, ExamineClick } from 'ordering-components-admin'
import { ProductExtraOptionDetails as ProductExtraOptionDetailsController } from './naked'
import Skeleton from 'react-loading-skeleton'
import BiImage from '@meronex/icons/bi/BiImage'
import { Input } from '../../styles/Inputs'
import { Switch } from '../../styles/Switch'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import { useTheme } from 'styled-components'
import FiMoreVertical from '@meronex/icons/fi/FiMoreVertical'
import { Checkbox } from '../../styles/Checkbox'

import {
  MainContainer,
  OptionContainer,
  OptionImage,
  SkeletonWrapper,
  UploadImageIconContainer,
  UploadImageIcon,
  OptionContent,
  InputWrapper,
  ActionsContainer,
  EnableWrapper,
  DropDownWrapper,
  OptionSettings
} from './styles'

const ProductExtraOptionDetailsUI = (props) => {
  const {
    optionState,
    handleClickImage,
    handleFiles,
    formState
  } = props
  const [, t] = useLanguage()
  const theme = useTheme()
  const optionImageInputRef = useRef(null)
  const ActionIcon = <FiMoreVertical />

  return (
    <MainContainer>
      <h1>{t('PRODUCT_OPTION', 'Product option')}</h1>
      <OptionContainer>
        <OptionImage
          onClick={() => handleClickImage()}
        >
          <ExamineClick
            onFiles={files => handleFiles(files, optionState?.option.id)}
            childRef={(e) => { optionImageInputRef.current = e }}
            accept='image/png, image/jpeg, image/jpg'
            disabled={optionState.loading}
          >
            <DragAndDrop
              onDrop={dataTransfer => handleFiles(dataTransfer.files, optionState?.option.id)}
              accept='image/png, image/jpeg, image/jpg'
              disabled={optionState.loading}
            >
              {optionState.loading
                ? (<SkeletonWrapper><Skeleton /></SkeletonWrapper>)
                : ((!formState.changes?.image || formState.result?.result === 'Network Error' || formState.result.error)
                  ? optionState?.option?.image &&
                    (<img src={optionState?.option?.image} alt='product image' loading='lazy' />)
                  : formState?.changes?.image &&
                    <img src={formState?.changes?.image} alt='product image' loading='lazy' />
                )}
              <UploadImageIconContainer>
                <UploadImageIcon>
                  <BiImage />
                </UploadImageIcon>
              </UploadImageIconContainer>
            </DragAndDrop>
          </ExamineClick>
        </OptionImage>
        <OptionContent>
          <InputWrapper>
            <label>{t('OPTION_NAME', 'Option name')}</label>
            <Input
              name='name'
            />
          </InputWrapper>
          <InputWrapper>
            <label>{t('MIN', 'Min')}</label>
            <Input
              name='min'
            />
          </InputWrapper>
          <InputWrapper>
            <label>{t('MAX', 'Max')}</label>
            <Input
              name='max'
            />
          </InputWrapper>
          <ActionsContainer>
            <EnableWrapper>
              <span>{t('ENABLE', 'Enable')}</span>
              <Switch
                defaultChecked={optionState.option?.enabled}
                // onChange={enabled => handleChangeOptionEnable(enabled, option.id)}
              />
            </EnableWrapper>
            <DropDownWrapper>
              <DropdownButton
                menuAlign={theme?.rtl ? 'left' : 'right'}
                title={ActionIcon}
                id={theme?.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'}
              >
                <Dropdown.Item onClick={() => console.log()}>{t('CUSTOM_FIELDS', 'Custom fields')}</Dropdown.Item>
                <Dropdown.Item onClick={() => console.log()}>{t('DELETE', 'Delete')}</Dropdown.Item>
              </DropdownButton>
            </DropDownWrapper>
          </ActionsContainer>
        </OptionContent>
        <OptionSettings>
          <Checkbox />
        </OptionSettings>
      </OptionContainer>
    </MainContainer>
  )
}

export const ProductExtraOptionDetails = (props) => {
  const productExtraOptionProps = {
    ...props,
    UIComponent: ProductExtraOptionDetailsUI
  }
  return <ProductExtraOptionDetailsController {...productExtraOptionProps} />
}
