import React, { useEffect, useState } from 'react'
import { useLanguage, DriverGroupSetting as DriverGroupSettingController } from 'ordering-components-admin'
import Skeleton from 'react-loading-skeleton'
import { Alert, SearchBar, Confirm } from '../../Shared'
import { Button } from '../../../styles'
import MdCheckBoxOutlineBlank from '@meronex/icons/md/MdCheckBoxOutlineBlank'
import MdCheckBox from '@meronex/icons/md/MdCheckBox'

import {
  Container,
  DriverGroupListContainer,
  DriverGroupItem,
  CheckboxWrapper,
  ButtonGroup
} from './styles'

const DriverGroupSettingUI = (props) => {
  const {
    isDriverManager,
    includedGroupIds,
    driversGroupsState,
    actionState,
    handleCheckboxClick,
    handleSelectAllDriver
  } = props

  const [, t] = useLanguage()
  const [searchValue, setSearchValue] = useState(null)
  const [filteredGroups, setFilteredGroups] = useState([])
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })

  const handleBatchSelector = (isSelectAll) => {
    setConfirm({
      open: true,
      content: isSelectAll ? t('QUESTION_SELECT_ALL', 'Are you sure that you want to select all?') : t('QUESTION_SELECT_NONE', 'Are you sure that you want to select none?'),
      handleOnAccept: () => {
        setConfirm({ ...confirm, open: false })
        handleSelectAllDriver && handleSelectAllDriver(isSelectAll)
      }
    })
  }

  useEffect(() => {
    if (driversGroupsState.loading) return
    let _filteredGroups = []
    if (searchValue) {
      _filteredGroups = driversGroupsState.groups.filter(group => group?.name?.toLowerCase().includes(searchValue?.toLowerCase()))
    } else {
      _filteredGroups = [...driversGroupsState.groups]
    }
    setFilteredGroups(_filteredGroups)
  }, [driversGroupsState, searchValue])

  useEffect(() => {
    if (!actionState?.error) return
    setAlertState({
      open: true,
      content: actionState?.error
    })
  }, [actionState?.error])

  return (
    <Container>
      <SearchBar
        lazyLoad
        isCustomLayout
        placeholder={t('SEARCH', 'Search')}
        search={searchValue}
        onSearch={val => setSearchValue(val)}
      />
      {isDriverManager && (
        <ButtonGroup>
          <Button
            type='button'
            color='secundaryDark'
            onClick={() => (handleBatchSelector(true))}
          >
            {t('SELECT_ALL', 'Select all')}
          </Button>
          <Button
            type='button'
            color='secundaryDark'
            onClick={() => (handleBatchSelector(false))}
          >
            {t('SELECT_NONE', 'Select none')}
          </Button>
        </ButtonGroup>
      )}
      <DriverGroupListContainer>
        {driversGroupsState.loading ? (
          [...Array(10).keys()].map(i => (
            <DriverGroupItem key={i}>
              <Skeleton width={20} height={20} />
              <Skeleton width={100} />
            </DriverGroupItem>
          ))
        ) : (
          filteredGroups.map(group => (
            <DriverGroupItem
              key={group.id}
              onClick={() => handleCheckboxClick(group.id)}
            >
              <CheckboxWrapper
                active={includedGroupIds.includes(group.id)}
              >
                {includedGroupIds.includes(group.id) ? (
                  <MdCheckBox />
                ) : (
                  <MdCheckBoxOutlineBlank />
                )}
              </CheckboxWrapper>
              <span>{group?.name}</span>
            </DriverGroupItem>
          ))
        )}
      </DriverGroupListContainer>
      <Alert
        title={t('WEB_APPNAME', 'Ordering')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => setAlertState({ open: false, content: [] })}
        onAccept={() => setAlertState({ open: false, content: [] })}
        closeOnBackdrop={false}
      />
      <Confirm
        title={t('DRIVER_GROUP', 'Driver Group')}
        content={confirm.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={confirm.open}
        onClose={() => setConfirm({ ...confirm, open: false })}
        onCancel={() => setConfirm({ ...confirm, open: false })}
        onAccept={confirm.handleOnAccept}
        closeOnBackdrop={false}
      />
    </Container>
  )
}

export const DriverGroupSetting = (props) => {
  const driversGroupSettingProps = {
    ...props,
    UIComponent: DriverGroupSettingUI
  }
  return <DriverGroupSettingController {...driversGroupSettingProps} />
}
