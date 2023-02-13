import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { CustomProject as CustomProjectController } from '../../../src/components/MyProducts'

export const CustomProject = (props) => {
  return (
    <>
      <HelmetTags page='custom_project' />
      <CustomProjectController {...props} />
    </>
  )
}
