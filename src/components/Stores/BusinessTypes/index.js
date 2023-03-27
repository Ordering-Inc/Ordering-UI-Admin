import React, { useState, useEffect } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { useHistory, useLocation } from 'react-router-dom'
import { Alert, SearchBar, Modal, SideBar } from '../../Shared'
import { ChevronRight, Square, CheckSquareFill } from 'react-bootstrap-icons'
import { useWindowSize } from '../../../hooks/useWindowSize'
import BsCardImage from '@meronex/icons/bs/BsCardImage'

import {
  Container,
  AddNewBusinessTypeContainer,
  AddNewBusinessTypeTitle,
  BusinessTypeContainer,
  BusinessTypeInfoWrapper,
  LogoWrapper,
  CheckBoxWrapper,
  BusinessTypeWrapper,
  ArrowWrapper,
  SearchWrapper,
  Image
} from './styles'
import { BusinessTypeDetail } from '../BusinessTypeDetail'

export const BusinessTypes = (props) => {
  const {
    businessTypes,
    business,
    formState,
    setFormState,
    handleUpdateBusinessClick,
    setBusinessTypes,
    setIsExtendExtraOpen
  } = props

  const history = useHistory()
  const query = new URLSearchParams(useLocation().search)
  const [, t] = useLanguage()
  const { width } = useWindowSize()

  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [selectedBusinessTypes, setSelectedBusinessTypes] = useState([])
  const [searchVal, setSearchVal] = useState('')
  const [filteredBusinessTypes, setFilteredBusinessTypes] = useState([])
  const [selectedBusinessType, setSelectedBusinessType] = useState(null)
  const [isOpenTypeDetail, setIsOpenTypeDetail] = useState(false)

  const handleOpenBusinessTypeDetail = (category, e) => {
    const isInvalid = e?.target?.closest('.business-type-checkbox')
    if (isInvalid) return

    setSelectedBusinessType(category)
    setIsExtendExtraOpen(true)
    setIsOpenTypeDetail(true)

    const businessId = query.get('id')
    const section = query.get('section')
    const tab = query.get('tab')
    history.replace(`${location.pathname}?id=${businessId}&section=${section}&tab=${tab}&business_type=${category?.id}`)
  }

  const handleCloseDetail = () => {
    setIsOpenTypeDetail(false)
    setIsExtendExtraOpen(false)
    setSelectedBusinessType(null)
    const businessId = query.get('id')
    const section = query.get('section')
    const tab = query.get('tab')
    history.replace(`${location.pathname}?id=${businessId}&section=${section}&tab=${tab}`)
  }

  const handleSelectBusinessTypes = (typeId) => {
    let _selectedBusinessTypes = [...selectedBusinessTypes]
    if (selectedBusinessTypes.includes(typeId)) {
      _selectedBusinessTypes = _selectedBusinessTypes.filter(id => id !== typeId)
    } else {
      _selectedBusinessTypes.push(typeId)
    }
    if (_selectedBusinessTypes.length > 0) {
      setSelectedBusinessTypes(_selectedBusinessTypes)
    } else {
      setAlertState({
        open: true,
        content: t('ERROR_TYPES_ITEM_MINIMUM', 'The types must have at least 1 items.')
      })
      return
    }
    setFormState({
      ...formState,
      changes: { types: _selectedBusinessTypes }
    })
  }

  useEffect(() => {
    if (!business?.types) return
    const _selectedBusinessTypes = []
    for (const type of business?.types) {
      _selectedBusinessTypes.push(type.id)
    }
    setSelectedBusinessTypes(_selectedBusinessTypes)
  }, [business])

  useEffect(() => {
    if (formState.loading || Object.keys(formState?.changes).length === 0) return
    handleUpdateBusinessClick()
  }, [formState])

  useEffect(() => {
    setFormState({ ...formState, changes: {} })
  }, [])

  useEffect(() => {
    const updatedBusinessTypes = businessTypes.filter(type => type?.name?.toLowerCase().includes(searchVal?.toLowerCase()))
    setFilteredBusinessTypes([...updatedBusinessTypes])
  }, [businessTypes, searchVal])

  useEffect(() => {
    const businessTypeId = query.get('business_type')
    if (businessTypeId) {
      const initBusinessType = businessTypes.find(type => type.id === Number(businessTypeId))
      setTimeout(() => {
        handleOpenBusinessTypeDetail(initBusinessType)
      }, 500)
    }
  }, [])

  return (
    <Container>
      <SearchWrapper>
        <SearchBar
          search={searchVal}
          isCustomLayout
          lazyLoad
          onSearch={(value) => setSearchVal(value)}
          placeholder={t('SEARCH', 'Search')}
        />
      </SearchWrapper>
      <BusinessTypeWrapper>
        {filteredBusinessTypes.map(category => (
          category?.id && (
            <BusinessTypeContainer
              key={category?.id}
              active={selectedBusinessType?.id === category?.id}
              onClick={(evt) => handleOpenBusinessTypeDetail(category, evt)}
            >
              <BusinessTypeInfoWrapper>
                <CheckBoxWrapper
                  onClick={() => handleSelectBusinessTypes(category.id)}
                  className='business-type-checkbox'
                >
                  {selectedBusinessTypes.includes(category.id) ? <CheckSquareFill className='fill' /> : <Square />}
                </CheckBoxWrapper>
                <LogoWrapper>
                  <Image bgimage={category?.image}>
                    {!category?.image && <BsCardImage />}
                  </Image>
                </LogoWrapper>
                <span>{category?.name}</span>
              </BusinessTypeInfoWrapper>
              <ArrowWrapper>
                <ChevronRight />
              </ArrowWrapper>
            </BusinessTypeContainer>
          )
        ))}
      </BusinessTypeWrapper>

      <AddNewBusinessTypeContainer>
        <AddNewBusinessTypeTitle
          onClick={(evt) => handleOpenBusinessTypeDetail(null, evt)}
        >
          {t('ADD_NEW_BUSINESS_CATEGORY', 'Add new business category')}
        </AddNewBusinessTypeTitle>
      </AddNewBusinessTypeContainer>
      {isOpenTypeDetail && (
        <>
          {width >= 1000 ? (
            <SideBar
              sidebarId='busiiness-type'
              defaultSideBarWidth={500}
              open={isOpenTypeDetail}
              onClose={() => handleCloseDetail()}
              isBorderShow
            >
              <BusinessTypeDetail
                setBusinessTypes={setBusinessTypes}
                businessType={selectedBusinessType}
                onClose={() => handleCloseDetail()}
                businessTypes={businessTypes}
              />
            </SideBar>
          ) : (
            <Modal
              width='80%'
              open={isOpenTypeDetail}
              onClose={() => handleCloseDetail()}
            >
              <BusinessTypeDetail
                setBusinessTypes={setBusinessTypes}
                businessType={selectedBusinessType}
                onClose={() => handleCloseDetail()}
                businessTypes={businessTypes}
              />
            </Modal>
          )}
        </>
      )}
      <Alert
        title={t('WEB_APPNAME', 'Ordering')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => setAlertState({ open: false, content: [] })}
        onAccept={() => setAlertState({ open: false, content: [] })}
        closeOnBackdrop={false}
      />
    </Container>
  )
}
