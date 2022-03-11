import React, { useEffect, useState } from 'react'
import { useLanguage, BusinessSpreadSheet as BusinessSpreadSheetController } from 'ordering-components-admin'
import { Alert, SpreadSheetEditor } from '../../Shared'
import {
  BusinessSpreadSheetContainer
} from './styles'

const BusinessSpreadSheetUI = (props) => {
  const {
    handleItemChange,
    spreadSheetState,
    handleRowRemove,
    handleAfterSectionEnd,
    handleoutsideClickDeselects,
    allowSpreadColumns
  } = props

  const [, t] = useLanguage()
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [hiddenColumns, setHiddenColumns] = useState([])

  const spreadSheetHeaderItems = [
    { title: t('ID', 'Id'), code: 'id', readOnly: true, type: 'numeric' },
    { title: t('NAME', 'Name'), code: 'name', readOnly: false, type: 'text', editor: false },
    { title: t('DESCRIPTION', 'Description'), code: 'description', readOnly: false, type: 'text' },
    { title: t('PRICE', 'Price'), code: 'price', readOnly: false, type: 'numeric' },
    { title: t('PRODUCT_COST', 'Product cost'), code: 'cost_price', readOnly: false, type: 'numeric' },
    { title: t('INVENTORY', 'Inventory'), code: 'inventoried', readOnly: false, type: 'checkbox' },
    { title: t('QUANTITY', 'Quantity'), code: 'quantity', readOnly: false, type: 'numeric' }
  ]

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  useEffect(() => {
    if (spreadSheetState?.result?.error) {
      setAlertState({
        open: true,
        content: spreadSheetState?.result?.result
      })
    }
  }, [spreadSheetState?.result])

  useEffect(() => {
    let index = 0
    const _hiddenColumns = []
    for (const key in allowSpreadColumns) {
      if (!allowSpreadColumns[key]) {
        _hiddenColumns.push(index)
      }
      index++
    }
    setHiddenColumns(_hiddenColumns)
  }, [allowSpreadColumns])

  return (
    <>
      <BusinessSpreadSheetContainer>
        <SpreadSheetEditor
          {...props}
          isBusinessProducts
          hotTableData={spreadSheetState.products}
          headerItems={spreadSheetHeaderItems}
          handleItemChange={handleItemChange}
          handleRowRemove={handleRowRemove}
          handleAfterSectionEnd={handleAfterSectionEnd}
          handleoutsideClickDeselects={handleoutsideClickDeselects}
          hiddenColumns={hiddenColumns}
          isRemove
        />
      </BusinessSpreadSheetContainer>
      <Alert
        width='700px'
        title={t('PRODUCT EDIT', 'Product Edit')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
    </>
  )
}

export const BusinessSpreadSheet = (props) => {
  const businessSpreadSheetProps = {
    ...props,
    UIComponent: BusinessSpreadSheetUI
  }
  return <BusinessSpreadSheetController {...businessSpreadSheetProps} />
}
