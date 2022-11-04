import React from 'react'
import Skeleton from 'react-loading-skeleton'
import {
  ItemContainer,
  TitleContainer,
  IconWrapper,
  ItemContent,
  Title,
  Description
} from './styles'

export const PostionItemUI = (props) => {
  const {
    isSkeleton,
    active,
    icon,
    title,
    description
  } = props

  return (
    <ItemContainer
      active={!isSkeleton && active}
      onClick={() => props.onClick()}
    >
      <IconWrapper>
        {
          isSkeleton
            ? <Skeleton width={24} height={24} />
            : icon
        }
      </IconWrapper>
      <ItemContent>
        {
          isSkeleton
            ? <Skeleton height={20} style={{ width: '80%', marginBottom: '10px' }} />
            : (
              <TitleContainer>
                <Title>{title}</Title>
              </TitleContainer>
            )
        }
        {
          isSkeleton
            ? (<><Skeleton height={15} /><Skeleton height={15} /></>)
            : (
              <Description>{description}</Description>
            )
        }
      </ItemContent>
    </ItemContainer>
  )
}
