import React, { useState, useEffect, useRef } from 'react'
import { LanguageTransTable as LanguageTransTableController } from './naked'
import { useLanguage } from 'ordering-components-admin'
import Skeleton from 'react-loading-skeleton'
import { Pagination } from '../Pagination'
import { Alert } from '../Confirm'

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
    searchValue,
    handleChangeText,
    creationFormState,
    handleChangeInput,
    handleUpdateClick
  } = props

  const [, t] = useLanguage()
  const [alertState, setAlertState] = useState({ open: false, content: [] })

  const [isShowCreation, setIsShowCreation] = useState(false)
  const translationCreateRef = useRef(null)

  // Change page
  const [currentPage, setCurrentPage] = useState(1)
  const [translationPerPage, setTranslationPerPage] = useState(10)

  // Get current products
  const [currentPages, setCurrentPages] = useState([])
  const [totalPages, setTotalPages] = useState(null)

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
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
      translations = translationList?.translations?.filter(translation => (translation.key?.toLowerCase().includes(searchValue.toLowerCase()) || translation.text.toLowerCase().includes(searchValue.toLowerCase())))
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
            (translationList?.loading && !creationFormState?.result) ? (
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
                        value={translation.text}
                        placeholder={t('WRITE_A_TEXT', 'Write a text')}
                        onChange={(e) => handleChangeText(translation.id, translation.key, e.target.value)}
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
                      placeholder={t('WRITE_A_KEY', 'Write a key')}
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
            <AddNewTransButton onClick={() => setIsShowCreation(true)}>
              {t('ADD_NEW_KEY', 'Add new key')}
            </AddNewTransButton>
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
