import React, { useState, useEffect } from 'react'
import { useLanguage, BusinessDeviceDetail as BusinessDeviceDetailController } from 'ordering-components-admin'
import { ThreeDots, ArrowsAngleContract, ArrowsAngleExpand, PersonFill } from 'react-bootstrap-icons'
import { Button, IconButton, DefaultSelect, Input } from '../../../styles'
import { Select } from '../../../styles/Select/FirstSelect'
import { useTheme } from 'styled-components'
import { Alert } from '../../Shared'
import {
  Container,
  DetailHeder,
  RightHeader,
  ActionSelectorWrapper,
  ActionButtonWrapper,
  FormControl,
  SelectWrapper,
  Option,
  Logo
} from './styles'
import Skeleton from 'react-loading-skeleton'

const BusinessDeviceDetailUI = (props) => {
  const {
    selectedDevice,
    deleteDevice,
    formState,
    handleChangeFormState,
    businessList,
    updateDevice,
    addDevice
  } = props

  const [, t] = useLanguage()
  const theme = useTheme()

  const [isExpand, setIsExpand] = useState(false)
  const [businessOptions, setBusinessOptions] = useState(null)
  const [ownerOptions, setOwnerOptions] = useState(null)
  const [businessSearchVal, setBusinessSearchVal] = useState('')
  const [userSearchVal, setUserSearchVal] = useState('')
  const [alertState, setAlertState] = useState({ open: false, content: [] })

  const moreOptions = [
    { value: 0, content: t('DELETE', 'Delete') }
  ]

  const expandSideBar = () => {
    const element = document.getElementById('deviceDetails')
    if (!element) return
    if (isExpand) element.style.width = '500px'
    else element.style.width = '100vw'
    setIsExpand(prev => !prev)
  }

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  const handleSubmit = () => {
    const errors = []
    if (formState?.changes?.name !== undefined && !formState?.changes?.name) {
      errors.push(t('VALIDATION_ERROR_REQUIRED', 'Name is required').replace('_attribute_', t('NAME', 'Name')))
    }
    if (errors.length > 0) {
      setAlertState({ open: true, content: errors })
      return
    }
    selectedDevice ? updateDevice(selectedDevice?.id) : addDevice()
  }

  useEffect(() => {
    if (businessList?.loading) return

    const options = businessList?.businesses
      .filter(option => option?.name.toLocaleLowerCase().includes(businessSearchVal.toLocaleLowerCase()))
      .map(business => ({
        value: business?.id,
        content: <Option><Logo src={business?.logo || theme.images?.dummies?.businessLogo} />{business?.name}</Option>
      }))
    setBusinessOptions(options)
  }, [businessSearchVal, businessList])

  useEffect(() => {
    if (!businessList?.loading && (formState?.changes?.business_id || selectedDevice?.business_id)) {
      const owners = businessList?.businesses.find(business => business.id === (formState?.changes?.business_id || selectedDevice?.business_id))?.owners
      if (owners?.length > 0) {
        const options = owners
          .filter(option => option?.name.toLocaleLowerCase().includes(userSearchVal.toLocaleLowerCase()))
          .map(user => ({
            value: user?.id,
            content: <Option>{user?.photo ? <Logo src={user?.photo} /> : <PersonFill />}{user?.name} {user?.lastname}</Option>
          }))
        setOwnerOptions(options)
      }
    }
  }, [userSearchVal, selectedDevice, formState?.changes?.business_id, businessList])

  useEffect(() => {
    if (formState?.result?.error) {
      setAlertState({
        open: true,
        content: formState?.result?.result
      })
    }
  }, [formState?.result])

  return (
    <Container>
      <DetailHeder>
        <div>
          {selectedDevice?.name && <span>{selectedDevice?.name}</span>}
          {!selectedDevice && (
            <span>{t('ADD_NEW_DEVICE', 'Add new device')}</span>
          )}
        </div>
        <RightHeader>
          <IconButton
            color='black'
            onClick={expandSideBar}
          >
            {isExpand ? <ArrowsAngleContract /> : <ArrowsAngleExpand />}
          </IconButton>
          {selectedDevice && (
            <ActionSelectorWrapper>
              <DefaultSelect
                placeholder={<ThreeDots />}
                options={moreOptions}
                onChange={() => deleteDevice()}
              />
            </ActionSelectorWrapper>
          )}
        </RightHeader>
      </DetailHeder>
      <FormControl>
        <label>{t('NAME', 'Name')}</label>
        <Input
          value={formState?.changes?.name ?? selectedDevice?.name}
          onChange={(e) => handleChangeFormState({ name: e.target.value })}
        />
      </FormControl>
      <SelectWrapper>
        <label>{t('BUSINESS', 'Business')}</label>
        {businessList?.loading ? (
          <Skeleton height={44} />
        ) : (
          <Select
            options={businessOptions}
            className='select'
            defaultValue={formState?.changes?.business_id ?? selectedDevice?.business_id}
            placeholder={t('SELECT_OPTION', 'Select an option')}
            onChange={(value) => handleChangeFormState({ business_id: value })}
            isShowSearchBar
            searchBarIsCustomLayout
            searchBarIsNotLazyLoad
            searchValue={businessSearchVal}
            handleChangeSearch={(val) => setBusinessSearchVal(val)}
          />
        )}
      </SelectWrapper>
      {(formState?.changes?.business_id || selectedDevice?.business_id) && (
        <SelectWrapper>
          <label>{t('BUSINESS_OWNER', 'Business owner')}</label>
          {businessList?.loading ? (
            <Skeleton height={44} />
          ) : (
            <Select
              options={ownerOptions}
              className='select'
              defaultValue={formState?.changes?.user_id ?? selectedDevice?.user_id}
              placeholder={t('SELECT_OPTION', 'Select an option')}
              onChange={(value) => handleChangeFormState({ user_id: value })}
              isShowSearchBar
              searchBarIsCustomLayout
              searchBarIsNotLazyLoad
              searchValue={userSearchVal}
              handleChangeSearch={(val) => setUserSearchVal(val)}
            />
          )}
        </SelectWrapper>
      )}

      {selectedDevice && (
        <FormControl>
          <label>{t('DEVICE_CODE', 'Device Code')}</label>
          <Input
            value={formState?.changes?.code ?? selectedDevice?.code}
            onChange={(e) => handleChangeFormState({ code: e.target.value })}
            disabled
          />
        </FormControl>
      )}
      <ActionButtonWrapper>
        <Button
          color='primary'
          onClick={handleSubmit}
        >
          {t('SAVE', 'Save')}
        </Button>
      </ActionButtonWrapper>
      <Alert
        title={t('DEVICES', 'Devices')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
    </Container>
  )
}

export const BusinessDeviceDetail = (props) => {
  const businessDeviceDetailProps = {
    ...props,
    UIComponent: BusinessDeviceDetailUI,
    propsToFetch: ['id', 'name', 'logo', 'owners']
  }
  return <BusinessDeviceDetailController {...businessDeviceDetailProps} />
}
