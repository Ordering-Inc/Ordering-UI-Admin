import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { DragScroll } from '../DragScroll'
import {
  SettingListConatiner,
  Tab
} from './styles'

export const BusinessCategoryInfoSettingList = (props) => {
  const {
    selectedInfoItem,
    handleSelectInfoItem
  } = props
  const [, t] = useLanguage()

  const listOptions = [
    { key: 'information', content: t('INFORMATION', 'Information') },
    { key: 'seo_options', content: t('SEO_OPTIONS', 'SEO Options') }
  ]
  return (
    <>
      <SettingListConatiner>
        <DragScroll>
          {listOptions.map(option => (
            <Tab
              key={option.key}
              active={selectedInfoItem === option.key}
              onClick={() => handleSelectInfoItem(option.key)}
            >
              {option.content}
            </Tab>
          ))}
        </DragScroll>
      </SettingListConatiner>
    </>
  )
}
