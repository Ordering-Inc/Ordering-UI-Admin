import React, { useState, useEffect } from 'react'
import { useLanguage, PagesList as PagesListController } from 'ordering-components-admin'
import Skeleton from 'react-loading-skeleton'
import { Button, IconButton, Switch } from '../../../styles'
import { Modal, Pagination, SearchBar } from '../../Shared'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import FiMoreVertical from '@meronex/icons/fi/FiMoreVertical'
import { useTheme } from 'styled-components'
import { useInfoShare } from '../../../contexts/InfoShareContext'
import { List as MenuIcon } from 'react-bootstrap-icons'
import { PageForm } from '../PageForm'

import {
  StaticPageListContainer,
  Header,
  HeaderLeft,
  HeaderRight,
  PageListTable,
  PageTbody,
  ActionsContainer,
  EnableWrapper,
  ActionSelectorWrapper,
  PagesBottomContainer,
  AddNewPageButton
} from './styles'

const CmsUI = (props) => {
  const {
    pagesListState,
    handleChangeState,
    handleUpdatePageList,
    handleDeletePage
  } = props

  const [, t] = useLanguage()
  const theme = useTheme()
  const [{ isCollapse }, { handleMenuCollapse }] = useInfoShare()
  const [searchValue, setSearchValue] = useState(null)

  const [openModal, setOpenModal] = useState(false)
  const [curPageId, setCurPageId] = useState(null)

  // Change page
  const [currentPage, setCurrentPage] = useState(1)
  const [pagesPerPage, setPagesPerPage] = useState(10)

  // Get current products
  const [currentPages, setCurrentPages] = useState([])
  const [totalPages, setTotalPages] = useState(null)

  const handleChangePage = (page) => {
    setCurrentPage(page)
  }

  const handleChangePageSize = (pageSize) => {
    const expectedPage = Math.ceil(((currentPage - 1) * pagesPerPage + 1) / pageSize)
    setCurrentPage(expectedPage)
    setPagesPerPage(pageSize)
  }

  const onClickPage = (e, pageId) => {
    const isInvalid = e.target.closest('.page-enabled') || e.target.closest('.page-actions')
    if (isInvalid) return
    handleEditPage(pageId)
  }

  useEffect(() => {
    if (pagesListState.loading) return
    let pages = []
    if (searchValue) {
      pages = pagesListState.pages.filter(page => page.name.toLowerCase().includes(searchValue.toLowerCase()))
    } else {
      pages = [...pagesListState.pages]
    }
    const _totalPages = Math.ceil(pages.length / pagesPerPage)
    const indexOfLastPost = currentPage * pagesPerPage
    const indexOfFirstPost = indexOfLastPost - pagesPerPage
    const _currentProducts = pages.slice(indexOfFirstPost, indexOfLastPost)
    setTotalPages(_totalPages)
    setCurrentPages(_currentProducts)
  }, [pagesListState, currentPage, pagesPerPage, searchValue])

  const handleEditPage = (pageId) => {
    setCurPageId(pageId)
    setOpenModal(true)
  }

  return (
    <>
      <StaticPageListContainer>
        <Header>
          <HeaderLeft>
            {isCollapse && (
              <IconButton
                color='black'
                onClick={() => handleMenuCollapse(false)}
              >
                <MenuIcon />
              </IconButton>
            )}
            <h1>{t('PAGES_MANAGER', 'Static Pages Manager')}</h1>
          </HeaderLeft>
          <HeaderRight>
            <Button
              borderRadius='8px'
              color='lightPrimary'
              onClick={() => handleEditPage(null)}
            >
              {t('ADD_PAGE', 'Add page')}
            </Button>
            <SearchBar
              lazyLoad
              placeholder={t('SEARCH', 'Search')}
              searchValue={searchValue}
              onSearch={val => setSearchValue(val)}
            />
          </HeaderRight>
        </Header>
        <PageListTable>
          <thead>
            <tr>
              <th>{t('STATIC_PAGE', 'Static page')}</th>
              <th>{t('ACTIONS', 'Actions')}</th>
            </tr>
          </thead>
          {pagesListState.loading ? (
            [...Array(pagesPerPage).keys()].map(i => (
              <PageTbody key={i}>
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
              </PageTbody>
            ))
          ) : (
            currentPages.map(page => (
              <PageTbody
                key={page.id}
                onClick={e => onClickPage(e, page.id)}
              >
                <tr>
                  <td>
                    {page?.name}
                  </td>
                  <td>
                    <ActionsContainer>
                      <EnableWrapper className='page-enabled'>
                        <span>{t('ENABLE', 'Enable')}</span>
                        <Switch
                          defaultChecked={page?.enabled}
                          onChange={(enabled) => handleChangeState(page.id, 'enabled', enabled)}
                        />
                      </EnableWrapper>
                      <ActionSelectorWrapper className='page-actions'>
                        <DropdownButton
                          menuAlign={theme?.rtl ? 'left' : 'right'}
                          title={<FiMoreVertical />}
                          id={theme?.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'}
                        >
                          <Dropdown.Item
                            onClick={() => handleEditPage(page.id)}
                          >
                            {t('EDIT', 'Edit')}
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={() => handleDeletePage(page.id)}
                          >
                            {t('DELETE', 'Delete')}
                          </Dropdown.Item>
                        </DropdownButton>
                      </ActionSelectorWrapper>
                    </ActionsContainer>
                  </td>
                </tr>
              </PageTbody>
            ))
          )}
        </PageListTable>
        {!pagesListState.loading && (
          <PagesBottomContainer>
            <AddNewPageButton onClick={() => handleEditPage(null)}>
              {t('ADD_NEW_STATIC_PAGE', 'Add new static page')}
            </AddNewPageButton>
            {currentPages?.length > 0 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                handleChangePage={handleChangePage}
                defaultPageSize={pagesPerPage}
                handleChangePageSize={handleChangePageSize}
              />
            )}
          </PagesBottomContainer>
        )}
      </StaticPageListContainer>
      <Modal
        width='70%'
        open={openModal}
        onClose={() => setOpenModal(false)}
      >
        <PageForm
          pageId={curPageId}
          pageList={pagesListState.pages}
          handleSuccessUpdate={handleUpdatePageList}
          handleCancel={() => setOpenModal(false)}
        />
      </Modal>
    </>
  )
}

export const Cms = (props) => {
  const pageListProps = {
    ...props,
    UIComponent: CmsUI
  }
  return <PagesListController {...pageListProps} />
}
