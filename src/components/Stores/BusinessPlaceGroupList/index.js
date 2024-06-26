import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useLanguage, BusinessPlaceGroupList as BusinessPlaceGroupListController } from 'ordering-components-admin'
import Skeleton from 'react-loading-skeleton'
import { Button, LinkButton } from '../../../styles'
import { ChevronRight, CheckSquareFill, Square } from 'react-bootstrap-icons'
import { useWindowSize } from '../../../hooks/useWindowSize'
import { BusinessPlaceGroup } from '../BusinessPlaceGroup'
import { Modal } from '../../Shared'
import { addQueryToUrl, removeQueryToUrl } from '../../../utils'

import {
  Container,
  Header,
  Content,
  AddBtnWrapper,
  TableHead,
  CheckWrapper,
  PlaceItemContainer,
  PlaceContainer
} from './styles'

export const BusinessPlaceGroupListUI = (props) => {
  const {
    placeGroupList,
    setIsExtendExtraOpen,
    business,
    handleSuccessAddPlaceGroup,
    handleSuccessUpdatePlaceGroup,
    handleSuccessDeletePlaceGroup,
    handleChangeEnabled,
    handleMultiChangeEnabled,
    getMultiCheckStatus
  } = props

  const query = new URLSearchParams(useLocation().search)
  const [, t] = useLanguage()
  const { width } = useWindowSize()
  const [openDetail, setOpenDetail] = useState(false)
  const [selectedPlace, setSelectedPlace] = useState(null)

  const handleOpenDetail = (placeGroup) => {
    setOpenDetail(true)
    setSelectedPlace(placeGroup)
    setIsExtendExtraOpen(true)
  }

  const handleCloseDetail = () => {
    setOpenDetail(false)
    setSelectedPlace(null)
    setIsExtendExtraOpen(false)
    removeQueryToUrl(['place_group'])
  }

  const handleUpdateSelectedPlaceGroup = (placeGroup) => {
    setSelectedPlace(placeGroup)
  }

  const handlePlaceClick = (e, placeGroup, isInitialRender) => {
    if (e?.target?.closest('.check-box')) return
    handleOpenDetail(placeGroup)
    if (!isInitialRender) {
      addQueryToUrl({ place_group: placeGroup.id })
    }
  }

  const handleCheckBoxChange = (placeGroup) => {
    handleChangeEnabled(placeGroup?.id, { enabled: !placeGroup?.enabled })
  }

  useEffect(() => {
    if (placeGroupList?.loading) return
    const placeGroupId = query.get('place_group')
    if (placeGroupId) {
      const initPlaceGroup = placeGroupList?.placeGroups?.find(placeGroup => placeGroup.id === Number(placeGroupId))
      if (initPlaceGroup) {
        handlePlaceClick(null, initPlaceGroup, true)
      }
    }
  }, [placeGroupList?.loading])

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
        {placeGroupList?.loading ? (
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
            {placeGroupList?.placeGroups?.length > 0 && (
              <TableHead>
                <CheckWrapper>
                  <span className='check-box' onClick={() => handleMultiChangeEnabled()}>
                    {getMultiCheckStatus() ? <CheckSquareFill className='active' /> : <Square />}
                  </span>
                  <label>{t('PLACES', 'Places')}</label>
                </CheckWrapper>
              </TableHead>
            )}
            {placeGroupList?.placeGroups?.map((placeGroup, i) => (
              <PlaceItemContainer
                key={i}
                active={selectedPlace?.id === placeGroup?.id}
                onClick={(e) => handlePlaceClick(e, placeGroup)}
              >
                <CheckWrapper>
                  <span className='check-box' onClick={() => handleCheckBoxChange(placeGroup)}>
                    {placeGroup?.enabled ? <CheckSquareFill className='active' /> : <Square />}
                  </span>
                  <label>{placeGroup?.name}</label>
                </CheckWrapper>
                <ChevronRight />
              </PlaceItemContainer>
            ))}
            <AddBtnWrapper>
              <LinkButton onClick={() => handleOpenDetail(null)}>{t('ADD_PLACES', 'Add places')}</LinkButton>
            </AddBtnWrapper>
          </Content>
        )}
      </PlaceContainer>
      {width >= 1000 ? (
        <>
          {openDetail && (
            <BusinessPlaceGroup
              businessId={business?.id}
              open={openDetail}
              onClose={handleCloseDetail}
              placeGroup={selectedPlace}
              handleSuccessAddPlaceGroup={handleSuccessAddPlaceGroup}
              handleSuccessUpdatePlaceGroup={handleSuccessUpdatePlaceGroup}
              handleSuccessDeletePlaceGroup={handleSuccessDeletePlaceGroup}
              handleUpdateSelectedPlaceGroup={handleUpdateSelectedPlaceGroup}
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
              <BusinessPlaceGroup
                businessId={business?.id}
                open={openDetail}
                onClose={handleCloseDetail}
                placeGroup={selectedPlace}
                handleSuccessAddPlaceGroup={handleSuccessAddPlaceGroup}
                handleSuccessUpdatePlaceGroup={handleSuccessUpdatePlaceGroup}
                handleSuccessDeletePlaceGroup={handleSuccessDeletePlaceGroup}
                handleUpdateSelectedPlaceGroup={handleUpdateSelectedPlaceGroup}
              />
            </Modal>
          )}
        </>
      )}
    </Container>
  )
}

export const BusinessPlaceGroupList = (props) => {
  const businessPlaceListProps = {
    ...props,
    UIComponent: BusinessPlaceGroupListUI
  }
  return <BusinessPlaceGroupListController {...businessPlaceListProps} />
}
