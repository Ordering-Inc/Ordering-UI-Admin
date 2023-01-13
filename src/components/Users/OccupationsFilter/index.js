import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { useLanguage } from 'ordering-components-admin'
import { DragScroll } from '../../Shared'
import { Button } from '../../../styles'
import {
  Container,
  SkeletonWrapper
} from './styles'

export const OccupationsFilter = (props) => {
  const {
    occupationsState,
    selectedOccupation,
    handleSelectOccupation
  } = props

  const [, t] = useLanguage()

  return (
    <Container>
      {occupationsState.loading ? (
        [...Array(3).keys()].map(i =>
          <SkeletonWrapper key={i}>
            <Skeleton />
          </SkeletonWrapper>
        )
      ) : (
        occupationsState.occupations.length > 0 && (
          <DragScroll>
            <Button
              color={selectedOccupation ? 'secundaryDark' : 'primary'}
              onClick={() => handleSelectOccupation(null)}
            >
              {t('ALL', 'All')}
            </Button>
            {occupationsState.occupations.map(occupation => (
              <Button
                key={occupation.id}
                color={selectedOccupation === occupation.id ? 'primary' : 'secundaryDark'}
                onClick={() => handleSelectOccupation(occupation.id)}
              >
                {occupation.name}
              </Button>
            ))}
          </DragScroll>
        )
      )}
    </Container>
  )
}
