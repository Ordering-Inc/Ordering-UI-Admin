import React, { useEffect } from 'react'
import { useLanguage, useSession } from 'ordering-components-admin'
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
  const { formState, handleChangeInput, changeFormState } = props
  const [{ user }] = useSession()

  const [, t] = useLanguage()
  const theme = useTheme()

  useEffect(() => {
    if (user?.email) changeFormState({ email: user?.email })
  }, [user])

  return (
    <ReceiveOrdersContainer>
      <h2>{t('RECEIVE_ORDERS', 'Receive orders')}</h2>
      <ContentWrapper>
        <FormControl>
          <label>{t('BY_EMAIL', 'By Email')}<sup>*</sup></label>
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
            <a href='https://apps.apple.com/us/app/store-app-2-0/id1608192050' target='_blank' rel='noopener noreferrer'>
              <img src={theme.images.general.appStore} alt='' />
            </a>
            <a href='https://play.google.com/store/apps/details?id=com.ordering.storeappv5&hl=en&gl=US' target='_blank' rel='noopener noreferrer'>
              <img src={theme.images.general.googlePlay} alt='' />
            </a>
          </DownloadIconWrapper>
        </DownloadWrapper>
      </ContentWrapper>
    </ReceiveOrdersContainer>
  )
}
