import React from 'react'
import { BusinessInfoSettingList } from '../BusinessInfoSettingList'
import {
  InfoConatiner
} from './styles'

export const BusinessInfoSetting = (props) => {
  return (
    <InfoConatiner>
      <BusinessInfoSettingList />
    </InfoConatiner>
  )
}
