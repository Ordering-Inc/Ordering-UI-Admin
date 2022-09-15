import React, { useState, useEffect } from 'react'
import { useLanguage, useConfig } from 'ordering-components-admin'
import { Upload } from 'react-bootstrap-icons'
import { Button } from '../../../styles'
import { ImportersListing } from '../ImportersListing'
import { SideBar } from '../../Shared'
import { CsvImportButtonWrapper } from './styles'

export const ImportersButton = (props) => {
  const [, t] = useLanguage()
  const [{ configs }] = useConfig()
  const [openImporters, setOpenImporters] = useState(false)
  const [disabledImporter, setDisabledImporter] = useState(true) // false means enabled
  const [extraOpen, setExtraOpen] = useState(false)

  useEffect(() => {
    if (configs && Object.keys(configs).length > 0) {
      const _disabledImporter = !Object.keys(configs).includes('massive_importer')
      setDisabledImporter(_disabledImporter)
    }
  }, [configs])

  return (
    <>
      <CsvImportButtonWrapper
        disabledFeature={disabledImporter}
        title={disabledImporter ? t('PACKAGE_DOSE_NOT_INCLUDE_FUNCTIONS', 'Your package does not include this function') : ''}
      >
        <Button
          borderRadius='8px'
          color='lightPrimary'
          onClick={() => setOpenImporters(true)}
        >
          {t('IMPORTERS', 'Importers')}
          <Upload />
        </Button>
      </CsvImportButtonWrapper>
      {openImporters && (
        <SideBar
          defaultSideBarWidth={extraOpen ? 1000 : 500}
          moveDistance={extraOpen ? 500 : 0}
          open={openImporters}
          onClose={() => setOpenImporters(false)}
        >
          <ImportersListing
            setExtraOpen={setExtraOpen}
          />
        </SideBar>
      )}
    </>
  )
}
