import React from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { useApi, useEvent } from 'ordering-components-admin'
import { BusinessProductsListing } from '../../../src/components/Stores'
import { HelmetTags } from '../../components/HelmetTags'
import { capitalize } from '../../../src/utils'

export const BusinessProductsList = (props) => {
  const { store } = useParams()
  const [ordering] = useApi()
  const { search } = useLocation()

  let category
  let product

  if (search) {
    const data = search.substring(1).split('&')
    category = data[0]
    product = data[1]
  }

  const categoryId = category && category.split('=')[1]
  const productId = product && product.split('=')[1]
  const [events] = useEvent()

  const businessProductsProps = {
    ...props,
    ordering,
    isSearchByName: true,
    isSearchByDescription: true,
    slug: store,
    categoryId,
    productId,
    handleStoresRedirect: () => {
      events.emit('go_to_page', { page: 'businesses' })
    },
    onProductRedirect: ({ slug, category, product }) => {
      if (!category && !product) {
        return events.emit('go_to_page', { page: 'store', params: { store: slug }, replace: true })
      }
      if (category && !product) {
        return events.emit('go_to_page', {
          page: 'store',
          params: { store: slug },
          search: `?category=${category}`,
          replace: true
        })
      }
      return events.emit('go_to_page', {
        page: 'store',
        params: { store: slug },
        search: `?category=${category}&product=${product}`,
        replace: true
      })
    }
  }

  return (
    <>
      <HelmetTags page='store' helmetTitle={capitalize(store)} />
      <BusinessProductsListing {...businessProductsProps} />
    </>
  )
}
