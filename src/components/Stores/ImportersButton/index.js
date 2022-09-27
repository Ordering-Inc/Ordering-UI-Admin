import React, { useState } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { Upload } from 'react-bootstrap-icons'
import { Button } from '../../../styles'
import { ImportersListing } from '../ImportersListing'
import { SideBar } from '../../Shared'
import { CsvImportButtonWrapper } from './styles'

export const ImportersButton = (props) => {
  const [, t] = useLanguage()
  const [openImporters, setOpenImporters] = useState(false)
  const [extraOpen, setExtraOpen] = useState(false)

  return (
    <>
      <CsvImportButtonWrapper
        disabledFeature={disabledImporter}
        className={props?.customClass || ''}
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
