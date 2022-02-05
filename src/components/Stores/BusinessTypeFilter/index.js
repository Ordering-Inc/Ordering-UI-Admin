import React, { useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import { BusinessTypeFilter as BusinessTypeFilterController, useLanguage } from 'ordering-components-admin'
import { Button } from '../../../styles'
import { DragScroll } from '../../Shared'
import { TypeContainer } from './styles'

const BusinessTypeFilterUI = (props) => {
  const {
    typesState,
    currentTypeSelected,
    handleChangeBusinessType,
    setBusinessTypes
  } = props
  const { loading, error, types } = typesState
  const [, t] = useLanguage()

  const handleChangeCategory = (category) => {
    handleChangeBusinessType && handleChangeBusinessType(category)
  }
  useEffect(() => {
    if (loading) return
    setBusinessTypes(types)
  }, [types])

  return (
    <>
      <TypeContainer id='container' isSkeleton={loading}>
        {loading && (
          <DragScroll>
            {[...Array(6)].map((_, i) => (
              <Skeleton key={i} height={30} width={100} style={{ margin: '0 5px' }} />
            ))}
          </DragScroll>
        )}
        {!loading && !error && types && types.length > 0 && (
          <DragScroll>
            {types.map((type, i) => type.enabled && (
              <Button
                key={type.id}
                color={type.id === currentTypeSelected ? 'primary' : 'secundaryDark'}
                onClick={() => handleChangeCategory(type.id)}
              >
                {t(`BUSINESS_TYPE_${type.name.replace(/\s/g, '_').toUpperCase()}`, type.name)}
              </Button>
            ))}
          </DragScroll>
        )}
      </TypeContainer>
    </>
  )
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
