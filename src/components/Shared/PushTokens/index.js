import React, { useMemo, useState, useEffect } from 'react'
import { useLanguage, useUtils } from 'ordering-components-admin'
import { Pagination } from '../Pagination'
import {
  Container,
  TableWrapper,
  Table,
  WrapperPagination
} from './styles'

export const PushTokens = (props) => {
  const {
    userId,
    pushTokens
  } = props

  const [, t] = useLanguage()
  const [{ parseDate }] = useUtils()

  const numberPerPage = 10
  const [currentPage, setCurrentPage] = useState(1)
  const [currentPageTokens, setCurrentPageTokens] = useState([])

  const sortedTokens = useMemo(() => {
    const _tokens = [...pushTokens]
    return _tokens.sort((a, b) => b.id - a.id)
  }, [pushTokens])

  const handleChangePage = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  useEffect(() => {
    const indexOfLastPost = currentPage * numberPerPage
    const indexOfFirstPost = indexOfLastPost - numberPerPage
    const _currentProducts = sortedTokens.slice(indexOfFirstPost, indexOfLastPost)
    setCurrentPageTokens(_currentProducts)
  }, [sortedTokens, currentPage])

  useEffect(() => {
    setCurrentPage(1)
  }, [userId])

  return (
    <Container>
      {sortedTokens.length > 0 ? (
        <TableWrapper>
          <Table>
            <thead>
              <tr>
                <th>{t('USER_ID_NUMBER', 'User ID')}</th>
                <th>{t('TOKEN', 'Token')}</th>
                <th>{t('APP', 'App')}</th>
                <th>{t('CREATED_AT', 'Created at')}</th>
                <th>{t('UPDATED_AT', 'Updated at')}</th>
              </tr>
            </thead>
            {currentPageTokens.map(token => (
              <tbody key={token.id}>
                <tr>
                  <td>{token?.user_id}</td>
                  <td>{token?.token}</td>
                  <td>{token?.app}</td>
                  <td>{parseDate(token?.created_at, { utc: false })}</td>
                  <td>{parseDate(token?.updated_at, { utc: false })}</td>
                </tr>
              </tbody>
            ))}
          </Table>
        </TableWrapper>
      ) : (
        <p className='no-data'>{t('NO_DATA', 'No Data')}</p>
      )}

      {sortedTokens?.length > 0 && (
        <WrapperPagination>
          <Pagination
            isHidePagecontrol
            currentPage={currentPage}
            totalPages={Math.ceil(sortedTokens.length / numberPerPage)}
            handleChangePage={handleChangePage}
          />
        </WrapperPagination>
      )}
    </Container>
  )
}
