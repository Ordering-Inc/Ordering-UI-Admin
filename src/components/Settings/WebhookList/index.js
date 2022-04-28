import React, { useState, useEffect } from 'react'
import { useLanguage, WebhookList as WebhookListController } from 'ordering-components-admin'
import { Button, IconButton } from '../../../styles'
import { Alert, Confirm, Pagination, SearchBar } from '../../Shared'
import Skeleton from 'react-loading-skeleton'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import FiMoreVertical from '@meronex/icons/fi/FiMoreVertical'
import { useTheme } from 'styled-components'
import { PlusCircleFill } from 'react-bootstrap-icons'
import { WebhookDelaySelector } from '../WebhookDelaySelector'
import { WebhookListSelector } from '../WebhookListSelector'

import {
  WebhookListContainer,
  Header,
  WebhookListTable,
  DropdownButtonWrapper,
  SelectorWrapper,
  PagesBottomContainer,
  AddNewPageButton
} from './styles'

const WebhookListUI = (props) => {
  const {
    webhookListState,
    isAddMode,
    setIsAddMode,
    handleAddNewWebhook,
    handleChangeAddState,
    actionState,
    changesState,
    handleDeleteWebhook
  } = props

  const [, t] = useLanguage()
  const theme = useTheme()

  const [searchValue, setSearchValue] = useState(null)

  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })

  // Change page
  const [currentPage, setCurrentPage] = useState(1)
  const [webhooksPerPage, setWebhooksPerPage] = useState(10)

  // Get current webhooks
  const [currentWebhooks, setCurrentWebhooks] = useState([])
  const [totalPages, setTotalPages] = useState(null)

  const handleChangePage = (page) => {
    setCurrentPage(page)
  }

  const handleChangePageSize = (pageSize) => {
    const expectedPage = Math.ceil(((currentPage - 1) * webhooksPerPage + 1) / pageSize)
    setCurrentPage(expectedPage)
    setWebhooksPerPage(pageSize)
  }

  const onClickDeleteWebhook = (id) => {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_WEBHOOK', 'Are you sure to delete this webhook?'),
      handleOnAccept: () => {
        setConfirm({ ...confirm, open: false })
        handleDeleteWebhook(id)
      }
    })
  }

  useEffect(() => {
    if (webhookListState.loading) return
    let _totalPages
    let webhooks = []
    if (searchValue) {
      webhooks = webhookListState.webhooks.filter(plugin => plugin.name?.toLowerCase().includes(searchValue?.toLowerCase()))
    } else {
      webhooks = [...webhookListState.webhooks]
    }
    if (webhooks.length > 0) {
      _totalPages = Math.ceil(webhooks.length / webhooksPerPage)
    }
    const indexOfLastPost = currentPage * webhooksPerPage
    const indexOfFirstPost = indexOfLastPost - webhooksPerPage
    const _currentWebhooks = webhooks.slice(indexOfFirstPost, indexOfLastPost)
    setTotalPages(_totalPages)
    setCurrentWebhooks(_currentWebhooks)
  }, [webhookListState, currentPage, webhooksPerPage, searchValue])

  useEffect(() => {
    if (!actionState?.error) return
    setAlertState({
      open: true,
      content: actionState?.error
    })
  }, [actionState?.error])

  return (
    <>
      <WebhookListContainer>
        <Header>
          <h1>{t('TITLE_WEBHOOKS', 'Webhooks')}</h1>
          <Button
            borderRadius='8px'
            color='lightPrimary'
            onClick={() => setIsAddMode(true)}
          >
            {t('ADD_NEW_WEBHOOK', 'Add webhook')}
          </Button>
        </Header>
        <SearchBar
          isCustomLayout
          lazyLoad
          placeholder={t('SEARCH', 'Search')}
          search={searchValue}
          onSearch={val => setSearchValue(val)}
        />
        <WebhookListTable>
          <thead>
            <tr>
              <th>{t('HOOK', 'Hook')}</th>
              <th>{t('TRIGGER', 'Trigger')}</th>
              <th>{t('TIME', 'Time')}</th>
              <th>{t('ACTIONS', 'Actions')}</th>
            </tr>
          </thead>
          {webhookListState.loading ? (
            [...Array(10).keys()].map(i => (
              <tbody key={i}>
                <tr>
                  <td><Skeleton width={100} /></td>
                  <td><Skeleton width={50} /></td>
                  <td><Skeleton width={50} /></td>
                  <td><Skeleton width={20} /></td>
                </tr>
              </tbody>
            ))
          ) : (
            currentWebhooks.map(webhook => (
              <tbody key={webhook.id}>
                <tr>
                  <td><div>{webhook.url}</div></td>
                  <td><div>{webhook.hook}</div></td>
                  <td>
                    <div>
                      <SelectorWrapper>
                        <WebhookDelaySelector
                          defaultValue={webhook.delay}
                          handleChangeDelay={delay => console.log(delay)}
                        />
                      </SelectorWrapper>
                    </div>
                  </td>
                  <td>
                    <div>
                      <DropdownButtonWrapper>
                        <DropdownButton
                          menuAlign={theme?.rtl ? 'left' : 'right'}
                          title={<FiMoreVertical />}
                          id={theme?.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'}
                        >
                          <Dropdown.Item
                            onClick={() => onClickDeleteWebhook(webhook.id)}
                          >
                            {t('DELETE', 'Delete')}
                          </Dropdown.Item>
                        </DropdownButton>
                      </DropdownButtonWrapper>
                    </div>
                  </td>
                </tr>
              </tbody>
            ))
          )}
          {isAddMode && (
            <tbody>
              <tr>
                <td>
                  <div>
                    <input
                      value={changesState?.url || ''}
                      onChange={e => handleChangeAddState('url', e.target.value)}
                      placeholder={t('URL', 'Url')}
                    />
                  </div>
                </td>
                <td>
                  <SelectorWrapper>
                    <WebhookListSelector
                      defaultValue={changesState?.hook}
                      handleChangeHook={hook => handleChangeAddState('hook', hook)}
                    />
                  </SelectorWrapper>
                </td>
                <td>
                  <div>
                    <SelectorWrapper>
                      <WebhookDelaySelector
                        defaultValue={changesState?.delay}
                        handleChangeDelay={delay => handleChangeAddState('delay', delay)}
                      />
                    </SelectorWrapper>
                  </div>
                </td>
                <td>
                  <IconButton
                    color='primary'
                    onClick={() => handleAddNewWebhook()}
                  >
                    <PlusCircleFill />
                  </IconButton>
                </td>
              </tr>
            </tbody>
          )}
        </WebhookListTable>
        {!webhookListState.loading && (
          <PagesBottomContainer>
            <AddNewPageButton
              onClick={() => setIsAddMode(true)}
            >
              {t('ADD_NEW_WEBHOOK ', 'Add new webhook')}
            </AddNewPageButton>
            {currentWebhooks?.length > 0 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                handleChangePage={handleChangePage}
                defaultPageSize={webhooksPerPage}
                handleChangePageSize={handleChangePageSize}
              />
            )}
          </PagesBottomContainer>
        )}
      </WebhookListContainer>
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

export const WebhookList = (props) => {
  const webhookListProps = {
    ...props,
    UIComponent: WebhookListUI
  }
  return <WebhookListController {...webhookListProps} />
}
