import React, { useState, useEffect } from 'react'
import { LanguageTransTable as LanguageTransTableController } from './naked'
import { useLanguage } from 'ordering-components-admin'
import Skeleton from 'react-loading-skeleton'
import { Pagination } from '../Pagination'

import {
  TranslationTableContainer,
  TranslationTable,
  TableHeader,
  TableBody,
  TransBottomContainer,
  AddNewTransButton
} from './styles'

const LanguageTransTableUI = (props) => {
  const {
    translationList,
    searchValue
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

  const handleNewTranslation = () => {
    console.log('this is new translation')
  }

  useEffect(() => {
    if (translationList.loading) return
    let pages = []
    if (searchValue) {
      pages = translationList.translations.filter(page => page.name.toLowerCase().includes(searchValue.toLowerCase()))
    } else {
      pages = [...translationList.translations]
    }
    const _totalPages = Math.ceil(pages.length / pagesPerPage)
    const indexOfLastPost = currentPage * pagesPerPage
    const indexOfFirstPost = indexOfLastPost - pagesPerPage
    const _currentProducts = pages.slice(indexOfFirstPost, indexOfLastPost)
    setTotalPages(_totalPages)
    setCurrentPages(_currentProducts)
  }, [translationList, currentPage, pagesPerPage, searchValue])

  return (
    <TranslationTableContainer>
      <TranslationTable>
        <TableHeader>
          <tr>
            <th>{t('KEY', 'Key')}</th>
            <th>{t('TEXT', 'Text')}</th>
          </tr>
        </TableHeader>
        {
          translationList?.loading ? (
            [...Array(5).keys()].map(i => (
              <TableBody key={i}>
                <tr>
                  <td>
                    <Skeleton width={200} height={25} />
                  </td>
                  <td style={{ paddingLeft: '20px', paddingRight: '20px' }}>
                    <Skeleton width={300} height={25} />
                  </td>
                </tr>
              </TableBody>
            ))
          ) : (
            currentPages.map((translation, i) => (
              <TableBody key={i}>
                <tr>
                  <td>{translation.key}</td>
                  <td>
                    <input
                      type='text'
                      defaultValue={translation.text}
                      placeholder={t('WRITE_A_TEXT', 'Write a text')}
                    />
                  </td>
                </tr>
              </TableBody>
            ))
          )
        }
      </TranslationTable>
      {!translationList.loading && (
        <TransBottomContainer>
          <AddNewTransButton onClick={handleNewTranslation}>
            {t('ADD_NEW_KEY', 'Add new key')}
          </AddNewTransButton>
          {currentPages?.length > 0 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              handleChangePage={handleChangePage}
              defaultPageSize={pagesPerPage}
              handleChangePageSize={handleChangePageSize}
            />
          )}
        </TransBottomContainer>
      )}
    </TranslationTableContainer>
  )
}

export const LanguageTransTable = (props) => {
  const languageTransTableProps = {
    ...props,
    UIComponent: LanguageTransTableUI
  }
  return <LanguageTransTableController {...languageTransTableProps} />
}
