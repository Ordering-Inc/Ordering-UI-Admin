import React, { useState, useEffect } from 'react'
import { useLanguage, ImporterListing as ImportersListingController } from 'ordering-components-admin'
import { InfoCircle } from 'react-bootstrap-icons'
import { Button, IconButton } from '../../../styles'
import { ImportersList } from '../ImportersList'
import { ImporterForm } from '../ImporterForm'
import { ImporterJobForm } from '../ImporterJobForm'
import { ImporterHelpContent } from '../ImporterHelpContent'
import { SideBar, Modal } from '../../Shared'
import {
  ImportersListingContainer,
  Header,
  Title,
  TitleContent,
  ActionButtons
} from './styles'

export const ImportersListingUI = (props) => {
  const {
    importerList,
    paginationDetail,
    handleDeleteImporter,
    setExtraOpen,
    handleSuccessAddImporter,
    handleSuccessUpdateImporter
  } = props
  const [, t] = useLanguage()
  const [openNewImporter, setOpenNewImporter] = useState(false)
  const [openImporterHelp, setOpenImporterHelp] = useState(false)
  const [openImportCsv, setOpenImportCsv] = useState(false)
  const [selectedImporter, setSelectedImporter] = useState({})
  const [selectedImporterJob, setSelectedImporterJob] = useState({})
  const [importJobFormMoveDistance, setImportJobFormMoveDistance] = useState(0)
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

  return (
    <>
      <ImportersListingContainer>
        <Header>
          <Title>
            <TitleContent>{t('IMPORTERS', 'Importers')}</TitleContent>
            <IconButton
              color='primary'
              onClick={() => setOpenImporterHelp(true)}
            >
              <InfoCircle />
            </IconButton>
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
      <Modal
        width='50%'
        height='80vh'
        padding='30px'
        title={t('HOW_TO_IMPORT', 'How to Import?')}
        open={openImporterHelp}
        onClose={() => setOpenImporterHelp(false)}
      >
        <ImporterHelpContent />
      </Modal>
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
