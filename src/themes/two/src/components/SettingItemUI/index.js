import React from 'react'
import FiSettings from '@meronex/icons/fi/FiSettings'
import Skeleton from 'react-loading-skeleton'
import {
  SettingItemContainer,
  TitleContainer,
  IconWrapper,
  SettingItemContent,
  Title,
  SettingItemDescription
} from './styles'

export const SettingItemUI = (props) => {
  const {
    category,
    isSkeleton
  } = props

  return (
    <SettingItemContainer>
      <IconWrapper>
        {
          isSkeleton
            ? <Skeleton width={24} height={24} />
            : (category.image ? <img src={category.image} /> : <FiSettings />)
        }
      </IconWrapper>
      <SettingItemContent>
        {
          isSkeleton
            ? <Skeleton />
            : (
              <TitleContainer>
                <Title>{category?.name}</Title>
              </TitleContainer>
            )
        }
        {
          isSkeleton
            ? <Skeleton />
            : (
              <SettingItemDescription>{category?.description}</SettingItemDescription>
            )
        }
      </SettingItemContent>
    </SettingItemContainer>
  )
}
