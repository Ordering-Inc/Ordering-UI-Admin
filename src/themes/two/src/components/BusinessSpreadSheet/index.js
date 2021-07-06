import React from 'react'
import { HotTable, HotColumn } from '@handsontable/react'
import 'handsontable/dist/handsontable.full.css'
import {
  SpreadSheetContainer
} from './styles'

export const BusinessSpreadSheet = (props) => {
  const {
    headerItems,
    hotTableData
  } = props

  return (
    <SpreadSheetContainer>
      <HotTable
        data={hotTableData}
        width='100vw'
        licenseKey='non-commercial-and-evaluation'
        autoRowSize='false'
        autoColumnSize='false'
        afterChange={(changes) => console.log(changes)}
      >
        {
          headerItems && headerItems.length > 0 && headerItems.map((item, i) => (
            <HotColumn
              key={i}
              title={item.title}
              readOnly={item.readOnly}
              data={item.code}
            />
          ))
        }
      </HotTable>
    </SpreadSheetContainer>
  )
}
