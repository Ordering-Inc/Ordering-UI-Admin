import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { useEvent } from 'ordering-components-admin'
import { BasicSettings as BasicSettingsController } from '../../../src/themes/two/src/components/BasicSettings'

export const BasicSettings = (props) => {
  const [events] = useEvent()
  const basicSettingsProps = {
    ...props,
    onBasicSettingsRedirect: (categoryId) => {
      if (!categoryId) {
        return events.emit('go_to_page', { page: 'basicSettings', replace: true })
      }
      return events.emit('go_to_page', { page: 'basicSettings', search: `?category=${categoryId}` })
    }
  }
  return (
    <>
      <HelmetTags page='basicSettings' />
      <BasicSettingsController {...basicSettingsProps} />
    </>
  )
}