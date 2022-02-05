import React, { useState, useEffect } from 'react'
import { useLanguage, ApiKeysList as ApiKeysListController } from 'ordering-components-admin'
import { Button } from '../../../styles'
import Skeleton from 'react-loading-skeleton'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { ThreeDotsVertical } from 'react-bootstrap-icons'
import { useTheme } from 'styled-components'
import { Alert, Confirm } from '../../Shared'

import {
  ApiKeysListContainer,
  Header,
  ApiKeysListTable,
  DropdownButtonWrapper,
  AddNewButton
} from './styles'

const ApiKeysListUI = (props) => {
  const {
    apiKeysList,
    actionState,
    handleDeleteApiKey,
    handleAddApiKey
  } = props

  const [, t] = useLanguage()
  const theme = useTheme()
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })

  const onClickDeleteApiKey = (keyId) => {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_KEY', 'Are you sure to delete this key?'),
      handleOnAccept: () => {
        setConfirm({ ...confirm, open: false })
        handleDeleteApiKey(keyId)
      }
    })
  }

  useEffect(() => {
    if (!actionState?.error) return
    setAlertState({
      open: true,
      content: actionState?.error
    })
  }, [actionState?.error])

  return (
    <>
      <ApiKeysListContainer>
        <Header>
          <h1>{t('KEYS')}</h1>
          <Button
            borderRadius='8px'
            color='lightPrimary'
            onClick={() => handleAddApiKey()}
          >
            {t('ADD_API_KEY', 'Add API Key')}
          </Button>
        </Header>
        <ApiKeysListTable>
          <thead>
            <tr>
              <th>{t('API_KEY', 'Api Key')}</th>
              <td>{t('ACTIONS', 'Actions')}</td>
            </tr>
          </thead>
          {apiKeysList?.loading ? (
            [...Array(10).keys()].map(i => (
              <tbody key={i}>
                <tr>
                  <td><Skeleton width={100} /></td>
                  <td><Skeleton width={20} /></td>
                </tr>
              </tbody>
            ))
          ) : (
            apiKeysList?.keys?.map(apiKey => (
              <tbody key={apiKey.id}>
                <tr>
                  <td>{apiKey?.key}</td>
                  <td>
                    <DropdownButtonWrapper>
                      <DropdownButton
                        menuAlign={theme?.rtl ? 'left' : 'right'}
                        title={<ThreeDotsVertical />}
                        id={theme?.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'}
                      >
                        <Dropdown.Item
                          onClick={() => navigator.clipboard.writeText(apiKey.key)}
                        >
                          {t('COPY_BUTTON', 'Copy')}
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => onClickDeleteApiKey(apiKey.id)}
                        >
                          {t('DELETE', 'Delete')}
                        </Dropdown.Item>
                      </DropdownButton>
                    </DropdownButtonWrapper>
                  </td>
                </tr>
              </tbody>
            ))
          )}
        </ApiKeysListTable>
        <AddNewButton
          onClick={() => handleAddApiKey()}
        >
          {t('ADD_API_KEY', 'Add API Key')}
        </AddNewButton>
      </ApiKeysListContainer>
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
        title={t('WEB_APPNAME', 'Ordering')}
        content={confirm.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={confirm.open}
        onClose={() => setConfirm({ ...confirm, open: false })}
        onCancel={() => setConfirm({ ...confirm, open: false })}
        onAccept={confirm.handleOnAccept}
        closeOnBackdrop={false}
      />
    </>
  )
}

export const ApiKeysList = (props) => {
  const apiKeysProps = {
    ...props,
    UIComponent: ApiKeysListUI
  }

  return <ApiKeysListController {...apiKeysProps} />
}
