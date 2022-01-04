import React, { useState, useEffect } from 'react'
import { useLanguage, PluginList as PluginListController } from 'ordering-components-admin'
import { Button, IconButton } from '../../styles/Buttons'
import { SearchBar } from '../SearchBar'
import Skeleton from 'react-loading-skeleton'
import { Pagination } from '../Pagination'
import FiMoreVertical from '@meronex/icons/fi/FiMoreVertical'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { PlusCircleFill } from 'react-bootstrap-icons'
import { useTheme } from 'styled-components'
import { Switch } from '../../styles/Switch'
import { Alert, Confirm } from '../Confirm'

import {
  PluginListContainer,
  Header,
  PluginsTable,
  PluginTbody,
  PagesBottomContainer,
  AddNewPageButton,
  ActionsContainer,
  EnableWrapper,
  ActionSelectorWrapper
} from './styles'

const PluginListUI = (props) => {
  const {
    pluginListState,
    isAddMode,
    setIsAddMode,
    setNewUrl,
    handleAddNewPlugin,
    actionState,
    handleDeletePlugin,
    handleUpdatePlugin
  } = props
  const [, t] = useLanguage()
  const theme = useTheme()
  const [searchValue, setSearchValue] = useState(null)

  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })

  // Change page
  const [currentPage, setCurrentPage] = useState(1)
  const [pluginsPerPage, setPluginsPerPage] = useState(10)

  // Get current plugins
  const [currentPlugins, setCurrentPlugins] = useState([])
  const [totalPages, setTotalPages] = useState(null)

  const handleChangePage = (page) => {
    setCurrentPage(page)
  }

  const handleChangePageSize = (pageSize) => {
    const expectedPage = Math.ceil(((currentPage - 1) * pluginsPerPage + 1) / pageSize)
    setCurrentPage(expectedPage)
    setPluginsPerPage(pageSize)
  }

  const onClickDeletePlugin = (id) => {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_PLUGIN', 'Are you sure to delete this plugin?'),
      handleOnAccept: () => {
        setConfirm({ ...confirm, open: false })
        handleDeletePlugin(id)
      }
    })
  }

  useEffect(() => {
    if (pluginListState.loading) return
    let _totalPages
    let plugins = []
    if (searchValue) {
      plugins = pluginListState.plugins.filter(plugin => plugin.name.toLowerCase().includes(searchValue.toLowerCase()))
    } else {
      plugins = [...pluginListState.plugins]
    }
    if (plugins.length > 0) {
      _totalPages = Math.ceil(plugins.length / pluginsPerPage)
    }
    const indexOfLastPost = currentPage * pluginsPerPage
    const indexOfFirstPost = indexOfLastPost - pluginsPerPage
    const _currentPlugins = plugins.slice(indexOfFirstPost, indexOfLastPost)
    setTotalPages(_totalPages)
    setCurrentPlugins(_currentPlugins)
  }, [pluginListState, currentPage, pluginsPerPage, searchValue])

  useEffect(() => {
    if (!actionState?.error) return
    setAlertState({
      open: true,
      content: actionState?.error
    })
  }, [actionState?.error])

  return (
    <>
      <PluginListContainer>
        <Header>
          <h1>{t('PLUGINS', 'Plugins')}</h1>
          <Button
            borderRadius='8px'
            color='lightPrimary'
            onClick={() => setIsAddMode(true)}
          >
            {t('ADD_PLUGIN', 'Add plugin')}
          </Button>
        </Header>
        <SearchBar
          isCustomLayout
          lazyLoad
          placeholder={t('SEARCH', 'Search')}
          search={searchValue}
          onSearch={val => setSearchValue(val)}
        />
        <PluginsTable>
          <thead>
            <tr>
              <th>{t('PLUGINS', 'Plugins')}</th>
              <th>{t('ACTIONS', 'Actions')}</th>
            </tr>
          </thead>
          {pluginListState.loading ? (
            [...Array(pluginsPerPage).keys()].map(i => (
              <PluginTbody key={i}>
                <tr>
                  <td><Skeleton width={100} /></td>
                  <td>
                    <ActionsContainer>
                      <EnableWrapper>
                        <Skeleton width={50} />
                      </EnableWrapper>
                      <ActionSelectorWrapper>
                        <Skeleton width={15} />
                      </ActionSelectorWrapper>
                    </ActionsContainer>
                  </td>
                </tr>
              </PluginTbody>
            ))
          ) : (
            currentPlugins.map(plugin => (
              <PluginTbody key={plugin.id}>
                <tr>
                  <td>{plugin?.name} ({plugin?.hooks.length} {t('HOOKS', 'Hooks')})</td>
                  <td>
                    <ActionsContainer>
                      <EnableWrapper>
                        <span>{t('ENABLE', 'Enable')}</span>
                        <Switch
                          defaultChecked={plugin?.enabled}
                          onChange={enabled => handleUpdatePlugin(plugin.id, { enabled: enabled })}
                        />
                      </EnableWrapper>
                      <ActionSelectorWrapper>
                        <DropdownButton
                          menuAlign={theme?.rtl ? 'left' : 'right'}
                          title={<FiMoreVertical />}
                          id={theme?.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'}
                        >
                          <Dropdown.Item
                            onClick={() => handleUpdatePlugin(plugin.id, { root: plugin.root })}
                          >
                            {t('UPDATE', 'Update')}
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={() => onClickDeletePlugin(plugin.id)}
                          >
                            {t('DELETE', 'Delete')}
                          </Dropdown.Item>
                        </DropdownButton>
                      </ActionSelectorWrapper>
                    </ActionsContainer>
                  </td>
                </tr>
              </PluginTbody>
            ))
          )}
          {isAddMode && (
            <PluginTbody isAddMode>
              <tr>
                <td>
                  <input
                    onChange={e => setNewUrl(e.target.value)}
                    placeholder={t('URL', 'Url')}
                  />
                </td>
                <td>
                  <IconButton
                    color='primary'
                    onClick={() => handleAddNewPlugin()}
                  >
                    <PlusCircleFill />
                  </IconButton>
                </td>
              </tr>
            </PluginTbody>
          )}
        </PluginsTable>
        {!pluginListState.loading && (
          <PagesBottomContainer>
            <AddNewPageButton
              onClick={() => setIsAddMode(true)}
            >
              {t('ADD_NEW_PLUGIN ', 'Add new plugin')}
            </AddNewPageButton>
            {currentPlugins?.length > 0 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                handleChangePage={handleChangePage}
                defaultPageSize={pluginsPerPage}
                handleChangePageSize={handleChangePageSize}
              />
            )}
          </PagesBottomContainer>
        )}
      </PluginListContainer>
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

export const PluginList = (props) => {
  const pluginListProps = {
    ...props,
    UIComponent: PluginListUI
  }
  return <PluginListController {...pluginListProps} />
}
