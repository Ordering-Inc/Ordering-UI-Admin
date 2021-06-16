import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { useLanguage, useUtils } from 'ordering-components-admin'
import { convertHoursToMinutes } from '../../../../../utils'

import {
  BusinessListContainer,
  BusinessListTable
} from './styles'

export const BusinessList = (props) => {
  const {
    businessList,
  } = props

  const [, t] = useLanguage()
  const [{ parsePrice, parseDistance }] = useUtils()
  return (
    <BusinessListContainer>
      <BusinessListTable>
        <thead>
          <tr>
            <th>{t('BUSINESS', 'Business')}</th>
            <th colSpan={3}>{t('DETAILS', 'Details')}</th>
            <th>{t('ACTIONS', 'Actions')}</th>
            <th></th>
          </tr>
        </thead>
        {businessList.loading ? (
          [...Array(10).keys()].map(i => (
            <tbody key={i}>
              <tr>
                <td><Skeleton /></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          ))
        ) : (
          businessList?.businesses.map(business => (
            <tbody key={business.id}>
              <tr>
                <td>
                  {business?.name}
                  {business?.address}
                </td>
                <td>
                  {parsePrice(business?.delivery_price)}
                </td>
                <td>
                  {parseDistance(business?.distance)}
                </td>
                <td>
                  {convertHoursToMinutes(business?.delivery_time)}
                </td>
                <td>
                </td>
                <td></td>
              </tr>
            </tbody>
          ))
        )}
      </BusinessListTable>
    </BusinessListContainer>
  )
}
