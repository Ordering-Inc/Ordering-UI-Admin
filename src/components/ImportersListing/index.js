import React, { useState, useEffect } from 'react'
import { useLanguage, ImporterListing as ImportersListingController } from 'ordering-components-admin'
import { Button } from '../../styles/Buttons'
import { ImportersList } from '../ImportersList'
import { ImporterForm } from '../ImporterForm'
import { ImporterJobForm } from '../ImporterJobForm'
import {
  ImportersListingContainer,
  Header,
  Title,
  ActionButtons,
  NewImporterWrapper,
  ImportCSVForm
} from './styles'

export const ImportersListingUI = (props) => {
  const {
    importerList,
    getImporters,
    paginationDetail,
    paginationProps,
    handleDeleteImporter,
    setExtraOpen,
    handleSuccessAddImporter
  } = props
  const [, t] = useLanguage()
  const [openNewImporter, setOpenNewImporter] = useState(false)
  const [openImportCsv, setOpenImportCsv] = useState(false)
  const [selectedImporter, setSelectedImporter] = useState({})
  const [selectedImporterJob, setSelectedImporterJob] = useState({})

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
            {t('IMPORT', 'Import')}
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
          getImporters={getImporters}
          paginationProps={paginationProps}
          paginationDetail={paginationDetail}
          createImporterJob={createImporterJob}
          addNewImporter={addNewImporter}
          handleDeleteImporter={handleDeleteImporter}
          handleEditImporter={handleEditImporter}
        />
        {openNewImporter && (
          <NewImporterWrapper>
            <ImporterForm
              openNewImporter={openNewImporter}
              selectedImporter={selectedImporter}
              onClose={() => setOpenNewImporter(false)}
              handleSuccessAdd={handleSuccessAddImporter}
            />
          </NewImporterWrapper>
        )}
      </ImportersListingContainer>
      {openImportCsv && (
        <ImportCSVForm>
          <ImporterJobForm
            onClose={() => setOpenImportCsv(false)}
            selectedImporter={selectedImporterJob}
          />
        </ImportCSVForm>
      )}
    </>
  )
}

export const ImportIcon = () => {
  return (
    <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M0.5 9.89999C0.632608 9.89999 0.759785 9.95267 0.853553 10.0464C0.947322 10.1402 1 10.2674 1 10.4V12.9C1 13.1652 1.10536 13.4196 1.29289 13.6071C1.48043 13.7946 1.73478 13.9 2 13.9H14C14.2652 13.9 14.5196 13.7946 14.7071 13.6071C14.8946 13.4196 15 13.1652 15 12.9V10.4C15 10.2674 15.0527 10.1402 15.1464 10.0464C15.2402 9.95267 15.3674 9.89999 15.5 9.89999C15.6326 9.89999 15.7598 9.95267 15.8536 10.0464C15.9473 10.1402 16 10.2674 16 10.4V12.9C16 13.4304 15.7893 13.9391 15.4142 14.3142C15.0391 14.6893 14.5304 14.9 14 14.9H2C1.46957 14.9 0.960859 14.6893 0.585786 14.3142C0.210714 13.9391 0 13.4304 0 12.9V10.4C0 10.2674 0.0526784 10.1402 0.146447 10.0464C0.240215 9.95267 0.367392 9.89999 0.5 9.89999Z' fill='#748194' />
      <path d='M7.64599 1.14601C7.69244 1.09945 7.74761 1.0625 7.80836 1.0373C7.8691 1.01209 7.93422 0.999115 7.99999 0.999115C8.06576 0.999115 8.13088 1.01209 8.19162 1.0373C8.25237 1.0625 8.30755 1.09945 8.35399 1.14601L11.354 4.14601C11.4479 4.2399 11.5006 4.36723 11.5006 4.50001C11.5006 4.63278 11.4479 4.76012 11.354 4.85401C11.2601 4.9479 11.1328 5.00064 11 5.00064C10.8672 5.00064 10.7399 4.9479 10.646 4.85401L8.49999 2.70701V11.5C8.49999 11.6326 8.44731 11.7598 8.35354 11.8536C8.25978 11.9473 8.1326 12 7.99999 12C7.86738 12 7.74021 11.9473 7.64644 11.8536C7.55267 11.7598 7.49999 11.6326 7.49999 11.5V2.70701L5.35399 4.85401C5.3075 4.9005 5.25231 4.93737 5.19157 4.96253C5.13084 4.98769 5.06573 5.00064 4.99999 5.00064C4.93425 5.00064 4.86915 4.98769 4.80841 4.96253C4.74767 4.93737 4.69248 4.9005 4.64599 4.85401C4.5995 4.80752 4.56263 4.75233 4.53747 4.69159C4.51231 4.63085 4.49936 4.56575 4.49936 4.50001C4.49936 4.43426 4.51231 4.36916 4.53747 4.30843C4.56263 4.24769 4.5995 4.1925 4.64599 4.14601L7.64599 1.14601Z' fill='#748194' />
    </svg>
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
