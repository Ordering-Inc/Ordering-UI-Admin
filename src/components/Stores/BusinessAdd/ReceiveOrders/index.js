import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { useTheme } from 'styled-components'
import { Input } from '../../../../styles'
import {
  ReceiveOrdersContainer,
  FormControl,
  ContentWrapper,
  DownloadWrapper,
  DownloadIconWrapper
} from './styles'

export const ReceiveOrders = (props) => {
  const { formState, handleChangeInput } = props

  const [, t] = useLanguage()
  const theme = useTheme()

  return (
    <ReceiveOrdersContainer>
      <h2>{t('RECEIVE_ORDERS', 'Receive orders')}</h2>
      <ContentWrapper>
        <FormControl>
          <label>{t('BY_EMAIL', 'By Email')}</label>
          <Input
            name='email'
            defaultValue={formState?.changes?.email ?? ''}
            onChange={handleChangeInput}
            placeholder={t('ADD_EMAIL', 'Add email')}
          />
        </FormControl>
        <DownloadWrapper>
          <label>{t('DOWNLOADS_APPS', 'Downloads apps')}</label>
          <DownloadIconWrapper>
            <a href='https://apps.apple.com/us/app/customer-app-2-0/id1607414555' target='_blank' rel='noopener noreferrer'>
              <img src={theme.images.general.appStore} alt='' />
            </a>
            <a href='https://play.google.com/store/apps/details?id=com.ordering.onlineorderingappv5&hl=en&gl=US' target='_blank' rel='noopener noreferrer'>
              <img src={theme.images.general.googlePlay} alt='' />
            </a>
          </DownloadIconWrapper>
        </DownloadWrapper>
      </ContentWrapper>
    </ReceiveOrdersContainer>
  )
}
