import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useLanguage } from 'ordering-components-admin'
import { Upload } from 'react-bootstrap-icons'
import { Button } from '../../../styles'
import { ImportersListing } from '../ImportersListing'
import { SideBar } from '../../Shared'
import { CsvImportButtonWrapper } from './styles'
import { addQueryToUrl, removeQueryToUrl } from '../../../utils'

export const ImportersButton = (props) => {
  const { setOpenSidebar } = props
  const query = new URLSearchParams(useLocation().search)
  const [, t] = useLanguage()
  const [openImporters, setOpenImporters] = useState(false)
  const [extraOpen, setExtraOpen] = useState(false)

  const handleOpenImporters = () => {
    setOpenSidebar && setOpenSidebar('importer')
    setOpenImporters(true)
    addQueryToUrl({ header: 'importers' })
  }

  const handleCloseImporters = () => {
    setOpenImporters(false)
    removeQueryToUrl(['header'])
  }

  useEffect(() => {
    const header = query.get('header')
    if (header === 'importers') {
      setOpenImporters(true)
    }
  }, [])

  return (
    <>
      <CsvImportButtonWrapper>
        <Button
          borderRadius='8px'
          color='lightPrimary'
          onClick={handleOpenImporters}
        >
          {t('IMPORTERS', 'Importers')}
          <Upload />
        </Button>
      </CsvImportButtonWrapper>
      {openImporters && (
        <SideBar
          defaultSideBarWidth={extraOpen ? 1000 : 500}
          moveDistance={extraOpen ? 500 : 20}
          open={openImporters}
          onClose={handleCloseImporters}
          showExpandIcon
        >
          <ImportersListing
            setExtraOpen={setExtraOpen}
          />
        </SideBar>
      )}
    </>
  )
}
