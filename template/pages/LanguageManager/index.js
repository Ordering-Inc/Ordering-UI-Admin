import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { LanguageManager as LanguageManagerController } from '../../../src/components/Settings'

export const LanguageManager = (props) => {
  return (
    <>
      <HelmetTags page='language' />
      <LanguageManagerController {...props} />
    </>
  )
}
