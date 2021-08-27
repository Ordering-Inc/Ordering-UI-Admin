import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { LanguageManager as LanguageManagerController } from '../../../src/themes/two/src/components/LanguageManager'

export const LanguageManager = (props) => {
  return (
    <>
      <HelmetTags page='language' />
      <LanguageManagerController {...props} />
    </>
  )
}
