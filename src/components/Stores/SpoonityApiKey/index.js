import React, { useEffect, useState } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { Button, Input } from '../../../styles'
import { Alert } from '../../Shared'

import {
  BusinessOrderingChannelsContainer,
  Title,
  BusinessCustomSlugContainer,
  FormControl,
  Label
} from './styles'

export const SpoonityApiKey = (props) => {
  const {
    spoonityConfig,
    handleUpdateSpoonityKey,
    spoonityKeyState
  } = props

  const [, t] = useLanguage()
  const [spoonityKey, setSpoonityKey] = useState(spoonityConfig?.value)
  const [alertState, setAlertState] = useState({ open: false, content: [], success: false })

  console.log('spoonityKey', spoonityKey)

  const changeSpoonityKey = () => {
    if (spoonityKey === '') {
      setAlertState({
        ...alertState,
        open: true,
        content: [t('SPOONITY_KEY_REQUIRED', 'Spoonity key is required')]
      })
      return
    }
    handleUpdateSpoonityKey(spoonityKey, spoonityConfig.id)
  }

  const closeAlert = () => {
    setAlertState({
      ...alertState,
      open: false,
      content: []
    })
  }

  useEffect(() => {
    if (spoonityKeyState?.key && !spoonityKeyState?.loading) setSpoonityKey(spoonityKey)
  }, [spoonityKeyState?.key, spoonityKeyState?.loading])

  // useEffect(() => {
  //   if (!spoonityKeyState?.key) return
  //   setSpoonityKey(spoonityKeyState?.key)
  // }, [spoonityKeyState?.key])

  return (
    <>
      <BusinessOrderingChannelsContainer>
        <Title>{t('SPOONITY_KEY', 'Spoonity key')}</Title>
        <BusinessCustomSlugContainer>
          <FormControl>
            <Label>{t('API_KEY', 'Api key')}</Label>
            <Input
              type='text'
              value={spoonityKey}
              placeholder={t('SPOONITY_PLACEHOLDER', 'Spoonity key')}
              onChange={(e) => setSpoonityKey(e.target.value)}
              onKeyPress={(e) => {
                if (!/^[0-9a-zA-Z]$/.test(e.key)) {
                  e.preventDefault()
                }
              }}
            />
          </FormControl>
          <Button color='primary' onClick={changeSpoonityKey}>{t('SAVE', 'Save')}</Button>
        </BusinessCustomSlugContainer>
      </BusinessOrderingChannelsContainer>
      <Alert
        title={t('SPOONITY_KEY', 'Spoonity key')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
    </>
  )
}
