import React from 'react'
import { useLanguage } from 'ordering-components'
import {
  OverViewContainer,
  OverViewTitle,
  OverViewItemContent,
  OverViewItem,
  OverViewStatusTitle,
  OverViewStatusValue
} from './styles'

export const OverView = (props) => {
  const [, t] = useLanguage()
  return (
    <OverViewContainer id='overView'>
      <OverViewTitle>
        {t('OVERVIEW', 'overview')}
      </OverViewTitle>
      <OverViewItemContent>
        <OverViewItem>
          <OverViewStatusTitle>
            {t('ORDERS_TODAY', 'orders today')}
          </OverViewStatusTitle>
          <OverViewStatusValue>
            287
          </OverViewStatusValue>
        </OverViewItem>

        <OverViewItem>
          <OverViewStatusTitle>
            {t('PENDING', 'pending')}
          </OverViewStatusTitle>
          <OverViewStatusValue>
            11
          </OverViewStatusValue>
        </OverViewItem>

        <OverViewItem>
          <OverViewStatusTitle>
            {t('IN_PROGRESS', 'in progress')}
          </OverViewStatusTitle>
          <OverViewStatusValue>
            42
          </OverViewStatusValue>
        </OverViewItem>

        <OverViewItem>
          <OverViewStatusTitle>
            {t('COMPLETED', 'completed')}
          </OverViewStatusTitle>
          <OverViewStatusValue>
            123
          </OverViewStatusValue>
        </OverViewItem>

        <OverViewItem>
          <OverViewStatusTitle>
            {t('CANCELLED', 'cancelled')}
          </OverViewStatusTitle>
          <OverViewStatusValue>
            20
          </OverViewStatusValue>
        </OverViewItem>
      </OverViewItemContent>
    </OverViewContainer>
  )
}
