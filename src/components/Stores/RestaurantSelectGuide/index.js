import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useLanguage, useConfig, GoogleAutocompleteInput } from 'ordering-components-admin'
import { Select } from '../../../styles/Select/FirstSelect'
import { ArrowRight, Image } from 'react-bootstrap-icons'
import { Button } from '../../../styles'
import {
  Container,
  SelectWrapper,
  Option,
  ButtonWrapper,
  SearchWrapper,
  EmptyData
} from './styles'

export const RestaurantSelectGuide = (props) => {
  const {
    setBusiness,
    businessListState,
    setStep,
    onClose,
    handleImport,
    handleChangeAddress,
    orderingBusiness,
    business
  } = props

  const [, t] = useLanguage()
  const [options, setOptions] = useState([])
  const [{ configs }] = useConfig()

  const googleMapsApiKey = configs?.google_maps_api_key?.value

  const handleSubmit = () => {
    setStep(3)
    handleImport()
  }

  const handleSelectBusiness = (id) => {
    const _business = businessListState.businesses?.find(item => item._id === id)
    setBusiness(_business)
  }

  useEffect(() => {
    const _options = businessListState.businesses?.map(item => {
      return {
        value: item._id,
        content: (
          <Option>
            {item?.logo_photos[0]
              ? <img src={item.logo_photos[0]} alt='' />
              : <Image />}
            {item.name}
          </Option>)
      }
    })
    setOptions(_options)
  }, [businessListState?.businesses])

  return (
    <Container>
      <h2>{t('SELECT_YOUR_RESTAURANT_FROM_THIS_LIST', 'Select your restaurant from this list.')}</h2>
      <SearchWrapper>
        <label>{t('ADDRESS', 'Address')}</label>
        <GoogleAutocompleteInput
          name='address'
          className='input-autocomplete'
          apiKey={googleMapsApiKey}
          placeholder={t('ADDRESS', 'Address')}
          onChangeAddress={(e) => {
            handleChangeAddress(e)
          }}
          defaultValue={orderingBusiness?.address ?? ''}
          autoComplete='new-password'
          countryCode={configs?.country_autocomplete?.value || '*'}
        />
      </SearchWrapper>
      {businessListState.loading && (
        <SelectWrapper>
          <label>
            <Skeleton height={15} width={100} />
          </label>
          <Skeleton height={44} />
        </SelectWrapper>
      )}
      {!businessListState.loading && (
        <>
          {!businessListState.error ? (
            <>
              {options?.length > 0 && (
                <SelectWrapper>
                  <label>{t('SELECT_YOUR_RESTAURANT', 'Select your restaurant')}</label>
                  <Select
                    options={options}
                    className='select'
                    defaultValue={business?._id || ''}
                    placeholder={t('SELECT_BUSINESS', 'Select a Business')}
                    onChange={(value) => handleSelectBusiness(value)}
                    searchBarIsCustomLayout
                    searchBarIsNotLazyLoad
                  />
                </SelectWrapper>
              )}
              {options.length === 0 && (
                <EmptyData>
                  {t('NO_RESULT', 'There are no results')}
                </EmptyData>
              )}
            </>
          ) : (
            <>
              <EmptyData>
                {businessListState.error && typeof businessListState.error === 'string' && businessListState.error}
                {businessListState.error && typeof businessListState.error === 'object' && Array.isArray(businessListState.error) && (
                  <ul>
                    {businessListState.error.map((item, i) => (
                      <React.Fragment key={i}>
                        {Array.isArray(item) ? (
                          item.map((err, index) => (
                            typeof err === 'string' && (
                              <li key={index}>{t(err.toUpperCase(), err)}</li>
                            )
                          ))
                        ) : (
                          typeof item === 'string' && <li>{t(item.toUpperCase(), item)}</li>
                        )}
                      </React.Fragment>
                    ))}
                  </ul>
                )}
              </EmptyData>
            </>
          )}
        </>
      )}
      <ButtonWrapper>
        <span onClick={() => onClose()}>{t('SKIP', 'Skip')}</span>
        <Button
          color='primary'
          onClick={handleSubmit}
          disabled={!business?._id}
        >
          {t('CONTINUE', 'Continue')}
          <ArrowRight />
        </Button>
      </ButtonWrapper>
    </Container>
  )
}
