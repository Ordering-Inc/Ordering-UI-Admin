import React from 'react'
import Skeleton from 'react-loading-skeleton'
import FiMoreVertical from '@meronex/icons/fi/FiMoreVertical'
import { useLanguage } from 'ordering-components-admin'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import { Switch } from '../../../styles'
import { useTheme } from 'styled-components'
import { NotFoundSource } from '../../Shared'

import {
  ImportListContainer,
  ImportersTableWrapper,
  ImportersBottomContainer,
  AddNewImporterButton,
  ImpotersTable,
  UserEnableWrapper,
  WrapperUserActionSelector,
  NotFoundWrapper,
  ImoportTbody
} from './styles'

export const ImportersList = (props) => {
  const {
    importerList,
    createImporterJob,
    addNewImporter,
    handleDeleteImporter,
    selectedImporter,
    setSelectedImporter,
    handleEditImporter,
    isDisabledFeature
  } = props
  const [, t] = useLanguage()
  const theme = useTheme()

  const defaultImporterSlugs = [
    'sync_businesses_default', 'sync_categories_default', 'sync_products_default',
    'sync_extras_default', 'sync_extra_options_default', 'sync_extra_option_suboptions_default',
    'sync_extra_products_default', 'sync_full_menu_default'
  ]

  const handleSelectImporter = (e, importer) => {
    const isInvalid = e.target.closest('.importer_enable_control') || e.target.closest('.importer_action')
    if (isInvalid) return
    setSelectedImporter({})
    createImporterJob(importer)
  }

  return (
    <ImportListContainer isDisabledFeature={isDisabledFeature}>
      <ImportersTableWrapper>
        <ImpotersTable>
          <thead>
            <tr>
              <th>{t('NAME', 'Name')}</th>
              <th colSpan='2'>{t('ACTION', 'Action')}</th>
            </tr>
          </thead>
          {importerList.loading ? (
            [...Array(10).keys()].map(i => (
              <ImoportTbody key={i}>
                <tr>
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
              </ImoportTbody>
            ))
          ) : (
            <>
              {importerList?.importers.length > 0 ? (
                <>
                  {
                    importerList?.importers.map(importer => (
                      <ImoportTbody
                        key={importer?.id}
                        active={importer.id === selectedImporter?.id}
                        onClick={(e) => handleSelectImporter(e, importer)}
                      >
                        <tr>
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
                                {!defaultImporterSlugs.includes(importer?.slug) && (
                                  <Dropdown.Item onClick={() => handleDeleteImporter(importer?.id)}>{t('DELETE', 'Delete')}</Dropdown.Item>
                                )}
                              </DropdownButton>
                            </WrapperUserActionSelector>
                          </td>
                        </tr>
                      </ImoportTbody>
                    ))
                  }
                </>
              ) : (
                <ImoportTbody>
                  <tr>
                    <td colSpan='2'>
                      <NotFoundWrapper>
                        <NotFoundSource content={t('NOT_FOUND_IMPOTERS', "Can't found importers")} />
                      </NotFoundWrapper>
                    </td>
                  </tr>
                </ImoportTbody>
              )}
            </>
          )}
        </ImpotersTable>
      </ImportersTableWrapper>
      <ImportersBottomContainer>
        <AddNewImporterButton onClick={() => addNewImporter()}>
          {t('ADD_NEW_IMPORTER', 'Add new importer')}
        </AddNewImporterButton>
      </ImportersBottomContainer>
    </ImportListContainer>
  )
}
