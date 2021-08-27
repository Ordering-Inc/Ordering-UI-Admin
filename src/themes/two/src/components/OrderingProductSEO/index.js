import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import {
  SEOContainer,
  FormGroup,
  FormControl,
  Label
} from './styles'

export const OrderingProductSEO = (props) => {
  const [, t] = useLanguage()

  return (
    <SEOContainer>
      <FormGroup className='row'>
        <FormControl className='col-md-12'>
          <Label>{t('CHECKOUT_URL_TEMPLATE', 'Checkout url template')}</Label>
          <input
            type='text'
            placeholder={t('URL', 'Url')}
          />
        </FormControl>
        <FormControl className='col-md-12'>
          <Label>{t('CART_URL_TEMPLATE', 'Cart url template')}</Label>
          <input
            type='text'
            placeholder={t('URL', 'Url')}
          />
        </FormControl>
        <FormControl className='col-md-12'>
          <Label>{t('PROFILE_URL_TEMPLATE', 'Profile url template')}</Label>
          <input
            type='text'
            placeholder={t('URL', 'Url')}
          />
        </FormControl>
        <FormControl className='col-md-12'>
          <Label>{t('BUSINESS_URL_TEMPLATE', 'Business url template')}</Label>
          <input
            type='text'
            placeholder={t('URL', 'Url')}
          />
        </FormControl>
        <FormControl className='col-md-12'>
          <Label>{t('CATEGORY_URL_TEMPLATE', 'Category url template')}</Label>
          <input
            type='text'
            placeholder={t('URL', 'Url')}
          />
        </FormControl>
        <FormControl className='col-md-12'>
          <Label>{t('PRODUCT_URL_TEMPLATE', 'Product url template')}</Label>
          <input
            type='text'
            placeholder={t('URL', 'Url')}
          />
        </FormControl>
      </FormGroup>
    </SEOContainer>
  )
}
