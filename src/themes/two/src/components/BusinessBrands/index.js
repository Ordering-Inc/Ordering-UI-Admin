import React, { useState, useEffect } from 'react'
import { useLanguage, BusinessBrands as BusinessBrandsController } from 'ordering-components-admin'
import BiImage from '@meronex/icons/bi/BiImage'
import RiCheckboxBlankLine from '@meronex/icons/ri/RiCheckboxBlankLine'
import RiCheckboxFill from '@meronex/icons/ri/RiCheckboxFill'
import { BusinessBrandForm } from '../BusinessBrandForm'
import Skeleton from 'react-loading-skeleton'
import {
  Container,
  BusinessBrand,
  AddNewBusinessBrandContainer,
  AddNewBusinessBrandTitle,
  DumyLogo
} from './styles'

const BusinessBrandsUI = (props) => {
  const {
    business,
    formState,
    setFormState,
    handleUpdateBusinessClick,
    brandList,
    handleUpdateBrandList
  } = props

  const [, t] = useLanguage()
  const [isAdd, setIsAdd] = useState(false)

  const handleSelectBusinessBrand = (id) => {
    if (business?.franchise_id === id) return
    setFormState({
      ...formState,
      changes: { franchise_id: id }
    })
  }

  const handleSuccessAddBusinessBrand = (result) => {
    setIsAdd(false)
    handleUpdateBrandList([...brandList?.brands, result])
  }

  useEffect(() => {
    if (formState.loading || Object.keys(formState?.changes).length === 0) return
    handleUpdateBusinessClick()
  }, [formState])

  useEffect(() => {
    setFormState({ ...formState, changes: {} })
  }, [])

  return (
    <Container>
      {
        brandList?.loading ? (
          [...Array(5).keys()].map(i => (
            <BusinessBrand
              key={i}
            >
              <Skeleton width={16} height={16} />
              <Skeleton width={32} height={32} style={{ marginLeft: '10px', marginRight: '10px' }} />
              <Skeleton width={100} height={20} />
            </BusinessBrand>
          ))
        ) : (
          brandList?.brands?.length > 0 && brandList?.brands.map((brand, i) => (
            <BusinessBrand
              key={i}
              disabled={formState?.loading}
              isChecked={business?.franchise_id === brand.id}
              onClick={() => handleSelectBusinessBrand(brand.id)}
            >
              {(business?.franchise_id === brand.id) ? (
                <RiCheckboxFill className='fill' />
              ) : (
                <RiCheckboxBlankLine />
              )}
              {
                brand?.logo ? (
                  <img
                    src={brand?.logo}
                    alt={brand?.name?.toLowerCase()}
                    width='30px'
                    height='30px'
                    loading='lazy'
                  />
                ) : (
                  <DumyLogo>
                    <BiImage />
                  </DumyLogo>
                )
              }
              <span>{brand?.name}</span>
            </BusinessBrand>
          ))
        )
      }

      <AddNewBusinessBrandContainer>
        {isAdd ? (
          <BusinessBrandForm
            onClose={() => setIsAdd(false)}
            handleSuccessAddBusinessBrand={handleSuccessAddBusinessBrand}
          />
        ) : (
          <AddNewBusinessBrandTitle
            onClick={() => setIsAdd(true)}
          >
            {t('ADD_NEW_BRAND', 'Add new brand')}
          </AddNewBusinessBrandTitle>
        )}
      </AddNewBusinessBrandContainer>
    </Container>
  )
}

export const BusinessBrands = (props) => {
  const businessBrandsProps = {
    ...props,
    UIComponent: BusinessBrandsUI
  }
  return <BusinessBrandsController {...businessBrandsProps} />
}
