import React, { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { useLanguage, LanguageTransTable as LanguageTransTableController } from 'ordering-components-admin'
import Skeleton from 'react-loading-skeleton'
import { Alert, Pagination } from '../../Shared'
import { LinkButton } from '../../../styles'
import { addQueryToUrl } from '../../../utils'

import {
  TranslationTableContainer,
  TranslationTable,
  TableHeader,
  TableBody,
  TransBottomContainer
} from './styles'

const LanguageTransTableUI = (props) => {
  const {
    translationList,
    searchValue,
    handleChangeText,
    creationFormState,
    handleChangeInput,
    handleUpdateClick,
    textEditState
  } = props

  const [, t] = useLanguage()
  const [alertState, setAlertState] = useState({ open: false, content: [] })

  const [isShowCreation, setIsShowCreation] = useState(false)
  const translationCreateRef = useRef(null)

  const query = new URLSearchParams(useLocation().search)
  const defaultPage = query.get('page') || 1
  const defaultPageSize = query.get('pageSize') || 10
  // Change page
  const [currentPage, setCurrentPage] = useState(Number(defaultPage) || 1)
  const [translationPerPage, setTranslationPerPage] = useState(Number(defaultPageSize) || 10)

  // Get current products
  const [currentPages, setCurrentPages] = useState([])
  const [totalPages, setTotalPages] = useState(null)

  let timeout = null

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  const handleChangeValue = (id, key, value) => {
    clearTimeout(timeout)

    timeout = setTimeout(function () {
      handleChangeText(id, key, value)
    }, 750)
  }

  const handleChangePage = (translation) => {
    setCurrentPage(translation)
  }

  const handleChangePageSize = (pageSize) => {
    const expectedPage = Math.ceil(((currentPage - 1) * translationPerPage + 1) / pageSize)
    setCurrentPage(expectedPage)
    setTranslationPerPage(pageSize)
  }

  const handleClickOutside = (e) => {
    if (!isShowCreation) return
    const outsideDropdown = !translationCreateRef.current?.contains(e.target)
    if (outsideDropdown && !e.target.closest('.popup-component')) {
      if (Object.keys(creationFormState?.changes).length > 0 && !creationFormState?.loading) {
        handleUpdateClick()
      } else {
        setIsShowCreation(false)
      }
    }
  }

  useEffect(() => {
    window.addEventListener('click', handleClickOutside)
    return () => window.removeEventListener('click', handleClickOutside)
  }, [isShowCreation, creationFormState])

  useEffect(() => {
    if (translationList?.loading) return
    let translations = []
    if (searchValue) {
      translations = translationList?.translations?.filter(translation => (translation.key?.toLowerCase().includes(searchValue?.toLowerCase()) || translation.text?.toLowerCase().includes(searchValue?.toLowerCase())))
    } else {
      translations = [...translationList?.translations]
    }
    const _totalPages = Math.ceil(translations.length / translationPerPage)
    const indexOfLastPost = currentPage * translationPerPage
    const indexOfFirstPost = indexOfLastPost - translationPerPage
    const _currentProducts = translations.slice(indexOfFirstPost, indexOfLastPost)
    setTotalPages(_totalPages)
    setCurrentPages(_currentProducts)
  }, [translationList, currentPage, translationPerPage, searchValue])

  useEffect(() => {
    if (creationFormState?.result?.error) {
      setAlertState({
        open: true,
        content: creationFormState?.result?.result
      })
    }
  }, [creationFormState?.result])

  useEffect(() => {
    if (searchValue) setCurrentPage(1)
  }, [searchValue])

  useEffect(() => {
    if (!currentPage || !translationPerPage || !totalPages) return
    addQueryToUrl({
      page: currentPage,
      pageSize: translationPerPage
    })
  }, [currentPage, translationPerPage, totalPages])

  return (
    <>
      <TranslationTableContainer>
        <TranslationTable>
          <TableHeader>
            <tr>
              <th>{t('KEY', 'Key')}</th>
              <th>{t('TEXT', 'Text')}</th>
            </tr>
          </TableHeader>
          {
            (translationList?.loading) ? (
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
              currentPages.map(translation => (
                <TableBody key={translation?.id}>
                  <tr>
                    <td>{translation.key}</td>
                    <td>
                      <input
                        type='text'
                        defaultValue={
                          textEditState?.id === translation.id
                            ? textEditState?.text
                            : translation.text
                        }
                        placeholder={t('WRITE_A_TEXT', 'Write a text')}
                        onChange={(e) => handleChangeValue(translation.id, translation.key, e.target.value)}
                      />
                    </td>
                  </tr>
                </TableBody>
              ))
            )
          }
          {
            isShowCreation && (
              <TableBody ref={translationCreateRef}>
                <tr>
                  <td>
                    <input
                      type='text'
                      placeholder={t('KEY', 'Write a key')}
                      defaultValue={creationFormState?.changes?.key}
                      onChange={(e) => handleChangeInput('key', e)}
                    />
                  </td>
                  <td>
                    <input
                      type='text'
                      placeholder={t('WRITE_A_TEXT', 'Write a text')}
                      defaultValue={creationFormState?.changes?.text}
                      onChange={(e) => handleChangeInput('text', e)}
                    />
                  </td>
                </tr>
              </TableBody>
            )
          }
        </TranslationTable>
        {!translationList.loading && (
          <TransBottomContainer>
            <LinkButton onClick={() => setIsShowCreation(true)}>
              {t('ADD_NEW_KEY', 'Add new key')}
            </LinkButton>
            {currentPages?.length > 0 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                handleChangePage={handleChangePage}
                defaultPageSize={translationPerPage}
                handleChangePageSize={handleChangePageSize}
              />
            )}
          </TransBottomContainer>
        )}
      </TranslationTableContainer>
      <Alert
        title={t('TRANSLATIONS', 'Translations')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
    </>
  )
}

export const LanguageTransTable = (props) => {
  const languageTransTableProps = {
    ...props,
    UIComponent: LanguageTransTableUI
  }
  return <LanguageTransTableController {...languageTransTableProps} />
}
