import React from 'react'
import { useLanguage, useSession } from 'ordering-components-admin'
import { DragScroll } from '../../Shared'
import {
  SettingListConatiner,
  Tab
} from './styles'

export const BusinessInfoSettingList = (props) => {
  const {
    selectedInfoItem,
    handleSelectInfoItem
  } = props
  const [, t] = useLanguage()
  const [{ user }] = useSession()

  const listOptions = [
    { key: 'information', content: t('INFORMATION', 'Information') },
    { key: 'owner', content: t('OWNER_ID', 'Owner') },
    { key: 'categories', content: t('CATEGORIES', 'Categories') },
    { key: 'location', content: t('LOCATION', 'Location') },
    { key: 'images', content: t('IMAGES', 'Images') },
    { key: 'videos', content: t('VIDEOS', 'Videos') },
    { key: 'seo_options', content: t('SEO_OPTIONS', 'SEO Options') }
  ]
  return (
    <>
      <SettingListConatiner>
        <DragScroll>
          {listOptions.map(option => (
            !(user?.level === 2 && option.key === 'owner') && (
              <Tab
                key={option.key}
                active={selectedInfoItem === option.key}
                onClick={() => handleSelectInfoItem(option.key)}
              >
                {option.content}
              </Tab>
            )
          ))}
        </DragScroll>
      </SettingListConatiner>
    </>
  )
}
