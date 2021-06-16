import React, { useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { BusinessTypeFilter as BusinessTypeFilterController, useLanguage } from 'ordering-components-admin'
import { Tabs, Tab } from '../../styles/Tabs'
import { AutoScroll } from '../AutoScroll'
import { TypeContainer } from './styles'

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
        {loading && (
          <Tabs variant='primary'>
            <AutoScroll>
              <Tab className='category' style={styles.wrapperSkeleton}>
                {[...Array(4)].map((_, i) => (
                  <Skeleton id='skeleton' key={i} circle={true} height={150} width={150} />
                ))}
              </Tab>
            </AutoScroll>
          </Tabs>
        )}
        {!loading && !error && types && types.length > 0 && (
          <Tabs variant='primary'>
            <AutoScroll>
              {types.map((type, i) => type.enabled && (
                <Tab
                  key={type.id}
                  active={type.id === currentTypeSelected}
                  className='category'
                  onClick={() => handleChangeCategory(type.id)}
                >
                  {t(`BUSINESS_TYPE_${type.name.replace(/\s/g, '_').toUpperCase()}`, type.name)}
                </Tab>
              ))}
            </AutoScroll>
          </Tabs>
        )}
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
