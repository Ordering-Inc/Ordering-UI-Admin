import React, { useState, useEffect } from 'react'
import { useLanguage, CampaignUserList as CampaignUserListController } from 'ordering-components-admin'
import Skeleton from 'react-loading-skeleton'
import { Pagination } from '../../Shared'
import {
  Container,
  Title,
  TableContainer,
  Table,
  THead,
  TBody,
  PaginationWrapper
} from './styles'

const CampaignUserListUI = (props) => {
  const {
    userListState
  } = props

  const [, t] = useLanguage()

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

  useEffect(() => {
    if (userListState.loading) return
    let _totalPages
    if (userListState.users.length > 0) {
      _totalPages = Math.ceil(userListState.users.length / pagesPerPage)
    }
    const indexOfLastPost = currentPage * pagesPerPage
    const indexOfFirstPost = indexOfLastPost - pagesPerPage
    const _currentBusinessList = userListState.users.slice(indexOfFirstPost, indexOfLastPost)
    setTotalPages(_totalPages)
    setCurrentPages(_currentBusinessList)
  }, [userListState, currentPage, pagesPerPage])

  return (
    <Container>
      <Title>
        <h1>
          {t('OPENS', 'Opens')}
          {userListState?.loading
            ? <Skeleton width={30} height={16} />
            : <span>{userListState?.users?.length || 0}</span>}
        </h1>
      </Title>
      <TableContainer>
        <Table>
          <THead>
            <tr>
              <th>{t('USER', 'User')}</th>
              <th>{t('EMAIL_ADDRESS', 'Email Address')}</th>
              <th>{t('OPENS', 'Opens')}</th>
            </tr>
          </THead>
          {userListState?.loading && (
            [...Array(8).keys()].map(i => (
              <TBody key={i}>
                <tr>
                  <td><Skeleton width={50} /></td>
                  <td><Skeleton width={50} /></td>
                  <td><Skeleton width={50} /></td>
                </tr>
              </TBody>
            ))
          )}
          {!userListState?.loading && currentPages.map((user, i) => (
            <TBody key={i}>
              <tr>
                <td>{user?.user?.name}</td>
                <td className='underline'>{user?.user?.email}</td>
                <td>{user?.open_at ? 1 : 0}</td>
              </tr>
            </TBody>
          ))}
        </Table>
      </TableContainer>
      <PaginationWrapper>
        {userListState?.users?.length > 0 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            handleChangePage={handleChangePage}
            defaultPageSize={pagesPerPage}
            handleChangePageSize={handleChangePageSize}
          />
        )}
      </PaginationWrapper>
    </Container>
  )
}

export const CampaignUserList = (props) => {
  const campaignUserListProps = {
    ...props,
    UIComponent: CampaignUserListUI
  }
  return <CampaignUserListController {...campaignUserListProps} />
}
