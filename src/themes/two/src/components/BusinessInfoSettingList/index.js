import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { AutoScroll } from '../AutoScroll'
import {
  SettingListConatiner,
  InnerContainer,
  Tab
} from './styles'

export const BusinessInfoSettingList = (props) => {
  const {
    selectedInfoItem,
    handleSelectInfoItem
  } = props
  const [, t] = useLanguage()
  const listOptions = [
    { key: 'owner', content: t('OWNER', 'Owner') },
    { key: 'type', content: t('TYPE', 'Type') },
    { key: 'location', content: t('LOCATION', 'Location') },
    { key: 'description', content: t('DESCRIPTION', 'Description') },
    { key: 'images', content: t('IMAGES', 'Images') },
    { key: 'videos', content: t('VIDEOS', 'Videos') },
    { key: 'custom_fields', content: t('CUSTOM_FIELDS', 'Custom fields') }
  ]
  return (
    <>
      <SettingListConatiner>
        <InnerContainer>
          <AutoScroll innerScroll scrollId='info_list'>
            {listOptions.map(option => (
              <Tab
                key={option.key}
                active={selectedInfoItem === option.key}
                onClick={() => handleSelectInfoItem(option.key)}
              >
                {option.content}
              </Tab>
            ))}
          </AutoScroll>
        </InnerContainer>
      </SettingListConatiner>
    </>
  )
}
