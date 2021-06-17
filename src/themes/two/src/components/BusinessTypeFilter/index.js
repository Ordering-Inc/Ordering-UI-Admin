import React, { useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { BusinessTypeFilter as BusinessTypeFilterController, useLanguage } from 'ordering-components-admin'
import { Tabs, Tab } from '../../styles/Tabs'
import { AutoScroll } from '../AutoScroll'
import { Button } from '../../styles/Buttons'
import { TypeContainer, InnerContainer } from './styles'

const BusinessTypeFilterUI = (props) => {
  const {
    typesState,
    currentTypeSelected,
    handleChangeBusinessType
  } = props
  const { loading, error, types } = typesState
  const [, t] = useLanguage()

  const handleChangeCategory = (category) => {
    handleChangeBusinessType && handleChangeBusinessType(category)
  }

  return (
    <>
      <TypeContainer id='container'>
        <InnerContainer>
          {loading && (
            <AutoScroll innerScroll scrollId='business_type'>
              {[...Array(6)].map((_, i) => (
                <Skeleton key={i} height={30} width={100} />
              ))}
             </AutoScroll>
          )}
          {!loading && !error && types && types.length > 0 && (
            <AutoScroll innerScroll scrollId='business_type'>
              {types.map((type, i) => type.enabled && (
                <Button
                  key={type.id}
                  color={type.id === currentTypeSelected ? 'primary' : 'secundary'}
                  onClick={() => handleChangeCategory(type.id)}
                >
                  {t(`BUSINESS_TYPE_${type.name.replace(/\s/g, '_').toUpperCase()}`, type.name)}
                </Button>
              ))}
            </AutoScroll>
          )}
        </InnerContainer>
      </TypeContainer>
    </>
  )
}

const styles = {
  wrapperSkeleton: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row'
  }
}

export const BusinessTypeFilter = (props) => {
  const businessTypeFilterProps = {
    ...props,
    UIComponent: BusinessTypeFilterUI,
    defaultBusinessType: props.defaultBusinessType || null,
    onChangeBusinessType: props.handleChangeBusinessType
  }

  return (
    <BusinessTypeFilterController {...businessTypeFilterProps} />
  )
}
