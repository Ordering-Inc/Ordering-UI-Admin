import React, { useState } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { ChevronRight } from 'react-bootstrap-icons'
import { SideBar } from '../../Shared'
import { ImporterForm } from '../ImporterForm'

import {
  MappingListContainer,
  MappingWrapper,
  MappingItem,
  AddNewMappingButton
} from './styles'

export const ChildMapplingList = (props) => {
  const {
    importypeOptions,
    mappingList,
    openMappingDetails,
    setOpenMappingDetails,
    handleUpdateMultipleMapping,
    defaultImporter
  } = props

  const [, t] = useLanguage()
  const [selectedMapping, setSelectedMapping] = useState(null)
  const [selectedIndex, setSelectedIndex] = useState(null)
  const [openAddMapping, setOpenAddMapping] = useState(false)

  const getMappingType = (type) => {
    const found = importypeOptions.find(option => option.sync_name === type)
    return found
  }

  const handleEditMapping = (mapping, index) => {
    setOpenAddMapping(false)
    setOpenMappingDetails(true)
    setSelectedMapping(mapping)
    setSelectedIndex(index)
  }

  const handleOpenAddMapping = () => {
    setOpenMappingDetails(true)
    setSelectedIndex(null)
    setSelectedMapping({})
    setOpenAddMapping(true)
  }

  const handleClose = () => {
    setSelectedIndex(null)
    setSelectedMapping(null)
    setOpenMappingDetails(false)
  }

  const handleUpdateMappingList = (val) => {
    handleClose()
    const _mappingList = [...mappingList]
    const updatedMapping = JSON.parse(val.mapping)
    _mappingList[selectedIndex] = updatedMapping
    handleUpdateMultipleMapping(_mappingList)
  }

  const handleAddMapping = (val) => {
    handleClose()
    const newMapping = JSON.parse(val.mapping)
    const _mappingList = [...mappingList, { ...newMapping, type: val.type }]
    handleUpdateMultipleMapping(_mappingList)
  }

  return (
    <>
      <MappingListContainer>
        {mappingList.length > 0 && (
          <MappingWrapper>
            {mappingList.map((item, index) => (
              <MappingItem
                key={index}
                active={index === selectedIndex}
                onClick={() => handleEditMapping(item, index)}
              >
                <span>{getMappingType(item.type)?.content}</span>
                <ChevronRight />
              </MappingItem>
            ))}
          </MappingWrapper>
        )}
        {!defaultImporter && (
          <AddNewMappingButton
            onClick={() => handleOpenAddMapping()}
          >
            {t('ADD_TYPE_MAPPING', 'Add type mapping')}
          </AddNewMappingButton>
        )}
      </MappingListContainer>
      {openMappingDetails && (
        <SideBar
          isBorderShow
          open={openMappingDetails}
          onClose={handleClose}
        >
          <ImporterForm
            isMapping
            headerTitle={openAddMapping ? t('ADD_MAPPING', 'Add mapping') : t('EDIT_MAPPING', 'Edit mapping')}
            selectedImporter={openAddMapping ? {} : { type: selectedMapping?.type, mapping: selectedMapping }}
            handleCustomEditImporter={handleUpdateMappingList}
            handleCustomAddImporter={handleAddMapping}
            defaultImporter={defaultImporter}
          />
        </SideBar>
      )}
    </>
  )
}
