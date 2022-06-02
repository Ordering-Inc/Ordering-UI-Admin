import React, { useState } from 'react'
import { useLanguage, BusinessPlaceList as BusinessPlaceListController } from 'ordering-components-admin'
import Skeleton from 'react-loading-skeleton'
import { Button } from '../../../styles'
import { ChevronRight, CheckSquareFill, Square } from 'react-bootstrap-icons'
import { useWindowSize } from '../../../hooks/useWindowSize'
import { Modal } from '../../Shared'

import {
  Container,
  Header,
  Content,
  AddBtn,
  TableHead,
  CheckWrapper,
  PlaceItemContainer,
  PlaceContainer
} from './styles'
import { BusinessPlace } from '../BusinessPlace'

export const BusinessPlaceListUI = (props) => {
  const {
    placeList,
    setIsExtendExtraOpen,
    business,
    handleSuccessAddPlace,
    handleSuccessUpdatePlace,
    handleSuccessDeletePlace,
    handleChangeEnabled,
    handleMultiChangeEnabled,
    getMultiCheckStatus
  } = props

  const [, t] = useLanguage()
  const { width } = useWindowSize()
  const [openDetail, setOpenDetail] = useState(false)
  const [selectedPlace, setSelectedPlace] = useState(null)

  const handleOpenDetail = (place) => {
    setOpenDetail(true)
    setSelectedPlace(place)
    setIsExtendExtraOpen(true)
  }

  const handleCloseDetail = () => {
    setOpenDetail(false)
    setSelectedPlace(null)
    setIsExtendExtraOpen(false)
  }

  const handleUpdateSelectedPlace = (place) => {
    setSelectedPlace(place)
  }

  const handlePlaceClick = (e, place) => {
    if (e.target.closest('.check-box')) return
    handleOpenDetail(place)
  }

  const handleCheckBoxChange = (place) => {
    handleChangeEnabled(place?.id, { enabled: !place?.enabled })
  }

  return (
    <Container>
      <PlaceContainer>
        <Header>
          <h1>{t('PLACES', 'Places')}</h1>
          <Button
            color='lightPrimary'
            borderRadius='8px'
            onClick={() => handleOpenDetail(null)}
          >
            {t('ADD_PLACES', 'Add places')}
          </Button>
        </Header>
        {placeList?.loading ? (
          <Content>
            {
              [...Array(5).keys()].map(i => (
                <PlaceItemContainer key={i}>
                  <CheckWrapper>
                    <Skeleton width={16} height={16} />
                    <label>
                      <Skeleton width={100} />
                    </label>
                  </CheckWrapper>
                  <Skeleton width={16} height={16} />
                </PlaceItemContainer>
              ))
            }
          </Content>
        ) : (
          <Content>
            {placeList?.places?.length > 0 && (
              <TableHead>
                <CheckWrapper>
                  <span className='check-box' onClick={() => handleMultiChangeEnabled()}>
                    {getMultiCheckStatus() ? <CheckSquareFill className='active' /> : <Square />}
                  </span>
                  <label>{t('PLACES', 'Places')}</label>
                </CheckWrapper>
              </TableHead>
            )}
            {placeList?.places?.map((place, i) => (
              <PlaceItemContainer
                key={i}
                active={selectedPlace?.id === place?.id}
                onClick={(e) => handlePlaceClick(e, place)}
              >
                <CheckWrapper>
                  <span className='check-box' onClick={() => handleCheckBoxChange(place)}>
                    {place?.enabled ? <CheckSquareFill className='active' /> : <Square />}
                  </span>
                  <label>{place?.name}</label>
                </CheckWrapper>
                <ChevronRight />
              </PlaceItemContainer>
            ))}
            <AddBtn onClick={() => handleOpenDetail(null)}>{t('ADD_PLACES', 'Add places')}</AddBtn>
          </Content>
        )}
      </PlaceContainer>
      {width >= 1000 ? (
        <>
          {openDetail && (
            <BusinessPlace
              businessId={business?.id}
              open={openDetail}
              onClose={handleCloseDetail}
              place={selectedPlace}
              handleSuccessAddPlace={handleSuccessAddPlace}
              handleSuccessUpdatePlace={handleSuccessUpdatePlace}
              handleSuccessDeletePlace={handleSuccessDeletePlace}
              handleUpdateSelectedPlace={handleUpdateSelectedPlace}
            />
          )}
        </>
      ) : (
        <>
          {openDetail && (
            <Modal
              width='760px'
              open={openDetail}
              onClose={() => handleCloseDetail()}
            >
              <BusinessPlace
                businessId={business?.id}
                open={openDetail}
                onClose={handleCloseDetail}
                place={selectedPlace}
                handleSuccessAddPlace={handleSuccessAddPlace}
                handleSuccessUpdatePlace={handleSuccessUpdatePlace}
                handleSuccessDeletePlace={handleSuccessDeletePlace}
                handleUpdateSelectedPlace={handleUpdateSelectedPlace}
              />
            </Modal>
          )}
        </>
      )}
    </Container>
  )
}

export const BusinessPlaceList = (props) => {
  const businessPlaceListProps = {
    ...props,
    UIComponent: BusinessPlaceListUI
  }
  return <BusinessPlaceListController {...businessPlaceListProps} />
}
