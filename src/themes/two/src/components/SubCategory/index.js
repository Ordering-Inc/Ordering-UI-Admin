import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useLanguage, SubCategory as SubCategoryController } from 'ordering-components-admin'
import { SubCategoryMenu } from '../SubCategoryMenu'
import { Button } from '../../../../../styles/Buttons'
import {
  SubCategoryContainer,
  GeneralContainer,
  GeneralTitle,
  GeneralDescription,
  ImageContainer,
  FormContainer,
  FormGroupText,
  FormGroupCheck,
  FormGroupWrapper,
  DropDownContainer,
  DropDownHeader,
  Required,
  DropDownContent,
  Option,
  SkeletonWrapper
} from './styles'
import { Select } from '../../styles/Select/FirstSelect'

export const SubCategoryUI = (props) => {

  const {
    subCategoryState,
    saveConfiguartion
  } = props

  const [, t] = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState('general')
  const [selectTypes, setSelectedTypes] = useState(null)
  const [value, setValue] = useState(null)
  const [isShowBtn, setIsShowBtn] = useState(false)

  const handleChangeCategory = (index) => {
    setSelectedCategory(index)
  }

  const handleConfigChange = (val) => {
    setIsShowBtn(true)
    setValue(val)
  }

  const handleCheckBoxChange = (evt, index) => {
    setIsShowBtn(true)
    if (index) {
      const str = value.split('|')
      const position = str.indexOf(evt.target.name)
      if (position === -1 && evt.target.checked) str.push(evt.target.name)
      if (!evt.target.checked && position > 0) str.splice(position, 0)
      setValue(str.join('|'))
    } else {
      const array = [...value]
      const position = array.indexOf(evt.target.name)
      if (position === -1 && evt.target.checked) array.push(evt.target.name)
      if (!evt.target.checked && position > 0) array.splice(position, 0)
      setValue(array)
    }
  }

  const submitValue = (evt) => {
    evt.preventDefault()
    const changes = { value: value }
    saveConfiguartion(changes)
  }

  useEffect(() => {
    if (!subCategoryState.loading && subCategoryState.subCategory?.type === 2) {
      const _selectedTypes = []
      subCategoryState.subCategory?.options && subCategoryState.subCategory?.options.forEach(item => {
        _selectedTypes.push({ value: item.value, content: <Option>{item.text}</Option> })
      })
      setSelectedTypes(_selectedTypes)
    }
    if (!subCategoryState.loading && subCategoryState.subCategory) setValue(subCategoryState.subCategory?.value)
  }, [subCategoryState])

  const makeArrayBySplit = (string) => {
    const arr = string.split('|')
    return arr
  }

  return (
    <SubCategoryContainer>
      <SubCategoryMenu
        currentMenuSelected={selectedCategory}
        handleChangeMenu={handleChangeCategory}
      />
      {
        subCategoryState.loading && (
          <SkeletonWrapper>
            <Skeleton height={20} width={50} />
            <Skeleton height={40} />
            <Skeleton height={200} width={300} />
            <Skeleton height={30} />
            <Skeleton height={30} />
            <Skeleton height={30} />
            <Skeleton height={30} />
          </SkeletonWrapper>
        )
      }
      {
        !subCategoryState.loading && selectedCategory === 'general' && subCategoryState.subCategory && (
          <GeneralContainer>
            <GeneralTitle>
              <p>{t('GENERAL', 'General')}</p>
            </GeneralTitle>
            <GeneralDescription>{subCategoryState.subCategory.description}</GeneralDescription>
            <ImageContainer />
            <FormContainer>
              {
                subCategoryState.subCategory.type === 1 && (
                  <FormGroupText className="form-group">
                    <label>{t('VALUE', 'Value')}</label>
                    <input type="text" defaultValue={subCategoryState.subCategory.value} onChange={(e) => handleConfigChange(e.target.value)} className="form-control" placeholder='placeholder' />
                  </FormGroupText>
                )
              }
              {
                subCategoryState.subCategory.type === 3 && (
                  makeArrayBySplit(subCategoryState.subCategory?.value).map((item, i) => (
                    <FormGroupWrapper key={i}>
                      <FormGroupCheck className="checkbox">
                        <label>
                          <input type="checkbox" defaultChecked={true} name={item} onChange={(e) => handleCheckBoxChange(e, true)} />
                          {item}
                        </label>
                      </FormGroupCheck>
                    </FormGroupWrapper>
                  ))
                )
              }
              {
                subCategoryState.subCategory.type === 4 && (
                  subCategoryState.subCategory?.value.length > 0 && subCategoryState.subCategory?.value.map((item, i) => (
                    <FormGroupWrapper key={i}>
                      <FormGroupCheck className="checkbox">
                        <label>
                          <input type="checkbox" defaultChecked={true} name={item} onChange={(e) => handleCheckBoxChange(e, false)} />
                          {item}
                        </label>
                      </FormGroupCheck>
                    </FormGroupWrapper>
                  ))
                )
              }

              {
                subCategoryState.subCategory.type === 2 && (
                  <div className='row'>
                    <DropDownContainer className='col-md-6'>
                      <DropDownHeader>
                        <p>DropDown</p>
                        <Required>{t('REQUIRED', 'Required')}</Required>
                      </DropDownHeader>
                      <DropDownContent>
                        <Select
                          defaultValue={subCategoryState.subCategory?.value}
                          options={selectTypes}
                          className='select'
                          onChange={(typeValue) => handleConfigChange(typeValue)}
                        />
                      </DropDownContent>
                    </DropDownContainer>
                  </div>
                )
              }
              {
                isShowBtn && <Button color='primary' onClick={submitValue}>Update</Button>
              }
            </FormContainer>
          </GeneralContainer>
        )
      }
    </SubCategoryContainer>
  )
}

export const SubCategory = (props) => {
  const subCategoryProps = {
    ...props,
    UIComponent: SubCategoryUI
  }
  return <SubCategoryController {...subCategoryProps} />
}
