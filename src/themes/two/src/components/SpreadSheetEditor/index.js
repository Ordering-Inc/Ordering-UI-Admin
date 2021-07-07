import React, { useRef } from 'react'
import { HotTable, HotColumn } from '@handsontable/react'
import 'handsontable/dist/handsontable.full.css'
import {
  SpreadSheetContainer
} from './styles'

export const SpreadSheetEditor = (props) => {
  const {
    headerItems,
    hotTableData,
    handleItemChange
  } = props

  const hotTableRef = useRef(null)

  const handleAfterChange = (changes, accionHanson) => {
    if (hotTableRef?.current?.hotInstance) {
      const hotTableObj = hotTableRef?.current?.hotInstance
      handleItemChange && handleItemChange(changes, accionHanson, hotTableObj)
    }
  }

  return (
    <SpreadSheetContainer>
      <HotTable
        data={hotTableData}
        licenseKey='non-commercial-and-evaluation'
        autoRowSize='false'
        autoColumnSize='false'
        afterChange={(changes, accionHanson) => handleAfterChange(changes, accionHanson)}
        width='100%'
        minSpareRows={1}
        ref={hotTableRef}
      >
        {
          headerItems && headerItems.length > 0 && headerItems.map((item, i) => (
            <HotColumn
              key={i}
              title={item.title}
              readOnly={item.readOnly}
              data={item.code}
              type={item.type}
            />
          ))
        }
      </HotTable>
    </SpreadSheetContainer>
  )
}
