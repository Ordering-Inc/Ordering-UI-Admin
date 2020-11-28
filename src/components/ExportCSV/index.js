import React from 'react'
// import { CSVLink } from 'react-csv'
import { useLanguage } from 'ordering-components'

import { useWindowSize } from '../../hooks/useWindowSize'
import { Button } from '../../styles/Buttons'
import ZoDownload from '@meronex/icons/zo/ZoDownload'
import { WrapperExportButton } from './styles'

export const ExportCSV = (props) => {
  const [, t] = useLanguage()
  const { width } = useWindowSize()
  return (
    <WrapperExportButton>
      <Button color='primary' borderRadius='6px' withIcon>
        {width > 600 && t('CSV', 'CSV')}
        <ZoDownload />
      </Button>
    </WrapperExportButton>
  )
}
