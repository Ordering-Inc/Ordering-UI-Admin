import React from 'react'
import { useLanguage, DeliveryzoneList as DeliveryzoneListController } from 'ordering-components-admin'
import Skeleton from 'react-loading-skeleton'
import { Button, Checkbox } from '../../../styles'
import { Pagination } from '../../Shared'

import {
  DeliveryzonesContainer,
  DeliveryzonesTable,
  SingleDeliveryzoneTbody,
  ZoneNameWrapper,
  WrapperPagination
} from './styles'

const EnterprisePromotionDeliveryzonesUI = (props) => {
  const {
    deliveryzoneList,
    formState,
    promotionState,
    paginationProps,
    getDeliveryzones,
    setPaginationProps,
    handleChangeItem,
    onClickDone
  } = props

  const [, t] = useLanguage()

  const handleChangePage = (page) => {
    getDeliveryzones(page, paginationProps?.pageSize)
  }
  const handleChangePageSize = (pageSize) => {
    const expectedPage = Math.ceil(paginationProps.from / pageSize)
    setPaginationProps({ ...paginationProps, pageSize: pageSize })
    getDeliveryzones(expectedPage, pageSize)
  }

  const handleChangeDeliveryzone = (checked, zoneId) => {
    let deliveryZones = []
    if (formState.changes?.delivery_zones) {
      deliveryZones = [...formState.changes?.delivery_zones]
    } else {
      if (Array.isArray(promotionState.promotion?.delivery_zones)) {
        deliveryZones = promotionState.promotion?.delivery_zones.reduce((ids, zone) => [...ids, zone.id], [])
      }
    }
    if (checked) {
      deliveryZones.push(zoneId)
    } else {
      deliveryZones = deliveryZones.filter(value => value !== zoneId)
    }
    handleChangeItem({ delivery_zones: deliveryZones })
  }

  const isDefaultChecked = (zoneId) => {
    if (Array.isArray(promotionState.promotion?.delivery_zones)) {
      const found = promotionState.promotion?.delivery_zones.find(zone => zone.id === zoneId)
      if (found) return true
      else return false
    } else return false
  }

  const isChangesChecked = (zoneId) => {
    const found = formState.changes?.delivery_zones.find(value => value === zoneId)
    if (found) return true
    else return false
  }

  return (
    <DeliveryzonesContainer>
      <h1>{t('DELIVERY_ZONE', 'Delivery zones')}</h1>
      <DeliveryzonesTable>
        <thead>
          <tr>
            <th>{t('NAME', 'Name')}</th>
            <th>{t('MIN', 'Min')}</th>
            <th>{t('PRICE', 'Price')}</th>
          </tr>
        </thead>
        {deliveryzoneList.loading ? (
          [...Array(10).keys()].map(i => (
            <SingleDeliveryzoneTbody key={i}>
              <tr>
                <td>
                  <ZoneNameWrapper>
                    <Skeleton width={18} height={15} />
                    <Skeleton className='name' width={100} height={15} />
                  </ZoneNameWrapper>
                </td>
                <td>
                  <Skeleton width={50} height={15} />
                </td>
                <td>
                  <Skeleton width={50} height={15} />
                </td>
              </tr>
            </SingleDeliveryzoneTbody>
          ))
        ) : (
          deliveryzoneList.zones.map(zone => (
            <SingleDeliveryzoneTbody
              key={zone.id}
            >
              <tr>
                <td>
                  <ZoneNameWrapper>
                    <Checkbox
                      checked={
                        formState.changes?.delivery_zones
                          ? isChangesChecked(zone.id)
                          : isDefaultChecked(zone.id)
                      }
                      onChange={(e) => handleChangeDeliveryzone(e.target.checked, zone.id)}
                    />
                    <span className='name'>{zone?.name}</span>
                  </ZoneNameWrapper>
                </td>
                <td>{zone?.minimum}</td>
                <td>{zone?.price}</td>
              </tr>
            </SingleDeliveryzoneTbody>
          ))
        )}
      </DeliveryzonesTable>
      {deliveryzoneList?.zones.length > 0 && (
        <WrapperPagination>
          <Pagination
            currentPage={paginationProps?.currentPage}
            totalPages={paginationProps?.totalPages}
            handleChangePage={handleChangePage}
            handleChangePageSize={handleChangePageSize}
          />
        </WrapperPagination>
      )}
      <Button
        borderRadius='8px'
        color='primary'
        onClick={() => onClickDone()}
      >
        {t('DONE', 'Done')}
      </Button>
    </DeliveryzonesContainer>
  )
}

export const EnterprisePromotionDeliveryzones = (props) => {
  const deliveryzonesProps = {
    ...props,
    UIComponent: EnterprisePromotionDeliveryzonesUI
  }
  return <DeliveryzoneListController {...deliveryzonesProps} />
}
