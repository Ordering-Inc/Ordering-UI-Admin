import React from 'react'
import AiFillSetting from '@meronex/icons/ai/AiFillSetting'
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
    isSkeleton,
    active
  } = props

  return (
    <SettingItemContainer active={!isSkeleton && active}>
      <IconWrapper>
        {
          isSkeleton
            ? <Skeleton width={24} height={24} />
            : (category.image ? <img src={category.image} /> : <AiFillSetting />)
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
            ? <Skeleton height={50} />
            : (
              <SettingItemDescription>{category?.description}</SettingItemDescription>
            )
        }
      </SettingItemContent>
    </SettingItemContainer>
  )
}
