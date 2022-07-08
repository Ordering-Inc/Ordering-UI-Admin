import React, { useState, useEffect } from 'react'
import { useLanguage, ImporterListing as ImportersListingController } from 'ordering-components-admin'
import { Button } from '../../../styles'
import { ImportersList } from '../ImportersList'
import { ImporterForm } from '../ImporterForm'
import { ImporterJobForm } from '../ImporterJobForm'
import { SideBar } from '../../Shared'
import {
  ImportersListingContainer,
  Header,
  Title,
  ActionButtons
} from './styles'

export const ImportersListingUI = (props) => {
  const {
    defaultSlug,
    importerList,
    paginationDetail,
    handleDeleteImporter,
    setExtraOpen,
    handleSuccessAddImporter,
    handleSuccessUpdateImporter
  } = props
  const [, t] = useLanguage()
  const [openNewImporter, setOpenNewImporter] = useState(false)
  const [openImportCsv, setOpenImportCsv] = useState(false)
  const [selectedImporter, setSelectedImporter] = useState({})
  const [selectedImporterJob, setSelectedImporterJob] = useState({})
  const [importJobFormMoveDistance, setImportJobFormMoveDistance] = useState(0)
  const [isOpenedDefaultImporter, setIsOpenedDefaultImporter] = useState(false)
  const [openMappingDetails, setOpenMappingDetails] = useState(false)

  const addNewImporter = () => {
    setSelectedImporter({})
    setOpenImportCsv(false)
    setOpenNewImporter(true)
    setExtraOpen(true)
  }

  const createImporterJob = (importer) => {
    setSelectedImporterJob(importer)
    setExtraOpen(false)
    setOpenImportCsv(true)
    setOpenNewImporter(false)
  }

  const handleEditImporter = (importer) => {
    if (Object.keys(importer).length > 0) {
      setSelectedImporter(importer)
      setOpenNewImporter(true)
    }
  }

  useEffect(() => {
    setExtraOpen && setExtraOpen(openNewImporter)
  }, [openNewImporter])

  useEffect(() => {
    if (importerList.loading || isOpenedDefaultImporter) return
    const defaultBusinessImporter = importerList?.importers.find(importer => importer.slug === defaultSlug)
    if (defaultBusinessImporter) {
      setIsOpenedDefaultImporter(true)
      handleEditImporter(defaultBusinessImporter)
    }
  }, [importerList, isOpenedDefaultImporter, defaultSlug])

  return (
    <>
      <ImportersListingContainer>
        <Header>
          <Title>
            {t('IMPORTERS', 'Importers')}
          </Title>
          <ActionButtons>
            <Button
              color='lightPrimary'
              borderRadius='5px'
              onClick={() => addNewImporter()}
            >
              {t('ADD_IMPORTER', 'Add importer')}
            </Button>
          </ActionButtons>
        </Header>
        <ImportersList
          importerList={importerList}
          paginationDetail={paginationDetail}
          createImporterJob={createImporterJob}
          addNewImporter={addNewImporter}
          handleDeleteImporter={handleDeleteImporter}
          selectedImporter={selectedImporter}
          setSelectedImporter={setSelectedImporter}
          handleEditImporter={handleEditImporter}
        />
        {openNewImporter && (
          <SideBar
            isBorderShow={!openMappingDetails}
            open={openNewImporter}
            defaultSideBarWidth={openMappingDetails ? 1000 : 500}
            moveDistance={openMappingDetails ? 500 : 0}
            onClose={() => {
              setOpenMappingDetails(false)
              setSelectedImporter({})
              setOpenNewImporter(false)
            }}
          >
            <ImporterForm
              openNewImporter={openNewImporter}
              selectedImporter={selectedImporter}
              handleSuccessAdd={handleSuccessAddImporter}
              handleSuccessUpdateImporter={handleSuccessUpdateImporter}
              openMappingDetails={openMappingDetails}
              setOpenMappingDetails={setOpenMappingDetails}
              onClose={() => {
                setSelectedImporter({})
                setOpenMappingDetails(false)
                setOpenNewImporter(false)
              }}
            />
          </SideBar>
        )}
      </ImportersListingContainer>
      {openImportCsv && (
        <SideBar
          open={openImportCsv}
          onClose={() => {
            setOpenImportCsv(false)
            setImportJobFormMoveDistance(0)
          }}
          defaultSideBarWidth={500 + importJobFormMoveDistance}
          moveDistance={importJobFormMoveDistance}
        >
          <ImporterJobForm
            selectedImporter={selectedImporterJob}
            handleOpenChildForm={() => setImportJobFormMoveDistance(500)}
            handleCloseChildForm={() => setImportJobFormMoveDistance(0)}
            openMappingDetails={openMappingDetails}
            setOpenMappingDetails={setOpenMappingDetails}
            onClose={() => {
              setOpenImportCsv(false)
              setImportJobFormMoveDistance(0)
            }}
          />
        </SideBar>
      )}
    </>
  )
}

export const ImportersListing = (props) => {
  const importersListingProps = {
    ...props,
    UIComponent: ImportersListingUI,
    asDashboard: true
  }

  return (
    <ImportersListingController {...importersListingProps} />
  )
}
