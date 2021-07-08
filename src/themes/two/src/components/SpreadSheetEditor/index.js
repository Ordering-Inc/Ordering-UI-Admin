import React, { useEffect, useRef, useState } from 'react'
import { HotTable, HotColumn } from '@handsontable/react'
import 'handsontable/dist/handsontable.full.css'
import { useLanguage } from 'ordering-components-admin'
import {
  SpreadSheetContainer
} from './styles'

export const SpreadSheetEditor = (props) => {
  const {
    headerItems,
    hotTableData,
    handleItemChange,
    handleRowRemove,
    handleAfterSectionEnd,
    handleoutsideClickDeselects
  } = props
  const [, t] = useLanguage()
  const [cache, setCache] = useState(null)

  const hotTableRef = useRef(null)

  const settings = {
    data: hotTableData,
    licenseKey: 'non-commercial-and-evaluation',
    autoRowSize: false,
    autoColumnSize: false,
    width: '100%',
    height: '100%',
    minSpareRows: 1,
    stretchH: 'all',
    copyPaste: true,
    undo: true,
    contextMenu: {
      items: {
        copy: {
          name: t('SPREADSHEET_COPY')
        },
        remove_row: {
          name: t('SPREADSHEET_REMOVE_ROW')
        },
        paste: {
          key: 'paste',
          name: t('SPREADSHEET_PASTE'),
          disabled: function () {
            return cache
          },
          callback: function () {
            if (hotTableRef?.current?.hotInstance) {
              const hotRef = hotTableRef?.current?.hotInstance
              const plugin = hotRef?.getPlugin('copyPaste')
              // eslint-disable-next-line no-unused-expressions
              hotRef?.listen()
              plugin.paste(cache)
            }
          }
        }
      }
    }
  }

  const handleAfterChange = (changes, accionHanson) => {
    if (hotTableRef?.current?.hotInstance) {
      const hotTableObj = hotTableRef?.current?.hotInstance
      handleItemChange && handleItemChange(changes, accionHanson, hotTableObj)
    }
  }

  const handleBeforeRemoveRow = (index, amount, physicalRows) => {
    if (hotTableRef?.current?.hotInstance) {
      const hotTableObj = hotTableRef?.current?.hotInstance
      handleRowRemove && handleRowRemove(index, amount, physicalRows, hotTableObj)
    }
  }

  const afterSelectionEnd = (row, col, row1, col1) => {
    if (hotTableRef?.current?.hotInstance) {
      const hotTableObj = hotTableRef?.current?.hotInstance
      handleAfterSectionEnd && handleAfterSectionEnd(row, col, row1, col1, hotTableObj)
    }
  }

  const outsideClickDeselects = (event) => {
    if (hotTableRef?.current?.hotInstance) {
      handleoutsideClickDeselects && handleoutsideClickDeselects(event)
    }
  }

  useEffect(() => {
    if (hotTableRef?.current?.hotInstance) {
      const hotTableObj = hotTableRef?.current?.hotInstance
      hotTableObj.loadData(hotTableData)
    }
  }, [hotTableData])
  useEffect(() => {
    const interVal = setInterval(() => {
      if (navigator.clipboard) {
        navigator.clipboard.readText().then(function (clipboardData) {
          if (clipboardData) setCache(clipboardData)
        }).catch(function (e) { })
      }
    }, 500)
    return () => clearInterval(interVal)
  }, [cache])

  return (
    <SpreadSheetContainer>
      <HotTable
        settings={settings}
        afterChange={(changes, accionHanson) => handleAfterChange(changes, accionHanson)}
        ref={hotTableRef}
        beforeRemoveRow={(index, amount, physicalRows) => handleBeforeRemoveRow(index, amount, physicalRows)}
        afterSelectionEnd={(row, col, row1, col1) => afterSelectionEnd(row, col, row1, col1)}
        outsideClickDeselects={(event) => outsideClickDeselects(event)}
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
