import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { Reports as ReportsController } from '../../../src/components/Reports'

export const AdvancedReports = (props) => {
  return (
    <>
      <HelmetTags page='reports' />
      <ReportsController {...props} />
    </>
  )
}
