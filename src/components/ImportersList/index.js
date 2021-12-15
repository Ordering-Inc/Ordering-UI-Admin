import React from 'react'
import Skeleton from 'react-loading-skeleton'
import FiMoreVertical from '@meronex/icons/fi/FiMoreVertical'
import { useLanguage } from 'ordering-components-admin'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import { Switch } from '../../styles/Switch'
import { useTheme } from 'styled-components'
import { Pagination } from '../Pagination'
import { NotFoundSource } from '../NotFoundSource'

import {
  ImportListContainer,
  ImportersTableWrapper,
  ImportersBottomContainer,
  AddNewImporterButton,
  ImpotersTable,
  UserEnableWrapper,
  WrapperUserActionSelector,
  WrapperPagination,
  NotFoundWrapper
} from './styles'

export const ImportersList = (props) => {
  const {
    importerList,
    getImporters,
    paginationProps,
    createImporterJob,
    addNewImporter,
    handleDeleteImporter,
    handleEditImporter
  } = props
  const [, t] = useLanguage()
  const theme = useTheme()

  const handleSelectImporter = (e, importer) => {
    const isInvalid = e.target.closest('.importer_enable_control') || e.target.closest('.importer_action')
    if (isInvalid) return
    createImporterJob(importer)
  }

  const handleChangePage = (page) => {
    getImporters(page, 10)
  }

  const handleChangePageSize = (pageSize) => {
    const expectedPage = Math.ceil(paginationProps.from / pageSize)
    getImporters(expectedPage, pageSize)
  }

  return (
    <ImportListContainer>
      <ImportersTableWrapper>
        <ImpotersTable>
          <thead>
            <tr>
              <th>{t('NAME', 'Name')}</th>
              <th colSpan={2}>{t('ACTION', 'Action')}</th>
            </tr>
          </thead>
          <tbody>
            {importerList.loading ? (
              [...Array(10).keys()].map(i => (
                <tr key={i}>
                  <td>
                    <Skeleton width='90%' height={21} className='importer-name' />
                  </td>
                  <td>
                    <UserEnableWrapper className='importer_enable_control'>
                      <Skeleton width={82} height={21} />
                    </UserEnableWrapper>
                  </td>
                  <td>
                    <Skeleton width={21} height={21} />
                  </td>
                </tr>
              ))
            ) : (
              <>
                {importerList?.importers.length > 0 ? (
                  <>
                    {
                      importerList?.importers.map(importer => (
                        <tr key={importer?.id} onClick={(e) => handleSelectImporter(e, importer)}>
                          <td>
                            <span className='importer-name'>{importer?.name}</span>
                          </td>
                          <td>
                            <UserEnableWrapper className='importer_enable_control'>
                              <span>{t('ENABLE', 'Enable')}</span>
                              <Switch
                                defaultChecked
                              // onChange={enabled => handleChangeActiveUser({ id: user.id, enabled: enabled })}
                              />
                            </UserEnableWrapper>
                          </td>
                          <td>
                            <WrapperUserActionSelector className='importer_action'>
                              <DropdownButton
                                menuAlign={theme?.rtl ? 'left' : 'right'}
                                title={<FiMoreVertical />}
                                id={theme?.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'}
                              >
                                <Dropdown.Item onClick={() => handleEditImporter(importer)}>{t('EDIT', 'Edit')}</Dropdown.Item>
                                <Dropdown.Item onClick={() => handleDeleteImporter(importer?.id)}>{t('DELETE', 'Delete')}</Dropdown.Item>
                              </DropdownButton>
                            </WrapperUserActionSelector>
                          </td>
                        </tr>
                      ))
                    }
                  </>
                ) : (
                  <tr style={{ backgroundColor: '#fff !important' }}>
                    <td colSpan='2'>
                      <NotFoundWrapper>
                        <NotFoundSource content={t('NOT_FOUND_IMPOTERS', "Can't found importers")} />
                      </NotFoundWrapper>
                    </td>
                  </tr>
                )}
              </>

            )}
          </tbody>
        </ImpotersTable>
      </ImportersTableWrapper>
      <ImportersBottomContainer>
        <AddNewImporterButton onClick={() => addNewImporter()}>
          {t('ADD_NEW_IMPORTER', 'Add new importer')}
        </AddNewImporterButton>
        {importerList?.importers.length > 0 && (
          <WrapperPagination>
            <Pagination
              currentPage={paginationProps.currentPage}
              totalPages={paginationProps.totalPages}
              handleChangePage={handleChangePage}
              handleChangePageSize={handleChangePageSize}
              isHidePagecontrol
            />
          </WrapperPagination>
        )}
      </ImportersBottomContainer>
    </ImportListContainer>
  )
}
