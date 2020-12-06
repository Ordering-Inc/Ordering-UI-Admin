import React from 'react'
import { useLanguage, ExportCSV as ExportCSVController } from 'ordering-components'
import { SpinnerLoader } from '../SpinnerLoader'
import { useWindowSize } from '../../hooks/useWindowSize'
import { Button } from '../../styles/Buttons'
import ZoDownload from '@meronex/icons/zo/ZoDownload'

const ExportCSVUI = (props) => {
  const {
    actionStatus,
    handleGetCsvExport
  } = props
  const [, t] = useLanguage()
  const { width } = useWindowSize()

  return (
    <>
      <Button color='primary' borderRadius='6px' withIcon onClick={() => handleGetCsvExport()}>
        {width > 600 && t('CSV', 'CSV')}
        <ZoDownload />
      </Button>

      {actionStatus.loading && (
        <SpinnerLoader primary />
      )}
    </>
  )
}

export const ExportCSV = (props) => {
  const ExportCSVControlProps = {
    ...props,
    UIComponent: ExportCSVUI
  }
  return <ExportCSVController {...ExportCSVControlProps} />
}
