import React, { useEffect, useState } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { Button, Input } from '../../../styles'
import { Alert } from '../../Shared'

import {
  BusinessOrderingChannelsContainer,
  Title,
  BusinessCustomSlugContainer,
  FormControl,
  Label,
  Tabs,
  Tab
} from './styles'
import { BusinessWidgets } from '../BusinessWidgets'

export const BusinessOrderingChannels = (props) => {
  const {
    formState,
    handleUpdateBusinessClick,
    business,
    setFormState
  } = props

  const [, t] = useLanguage()
  const [slug, setSlug] = useState('')
  const [selectedOption, setSelectedOption] = useState('custom_slug')
  const [alertState, setAlertState] = useState({ open: false, content: [], success: false })

  const optionList = [
    { key: 'custom_slug', name: t('CUSTOM_SLUG', 'Custom slug') },
    { key: 'widgets', name: t('WIDGETS', 'Widgets') }
  ]

  const changeCustomslug = () => {
    if (slug === '') {
      setAlertState({
        ...alertState,
        open: true,
        content: [t('SLUG_REQUIRED', 'Slug is required')]
      })
      return
    }
    setFormState({
      ...formState,
      changes: { slug: slug }
    })
  }

  const closeAlert = () => {
    setAlertState({
      ...alertState,
      open: false,
      content: []
    })
  }

  const handleChangeOption = (key) => {
    setSelectedOption(key)
  }

  useEffect(() => {
    if (formState.loading || Object.keys(formState?.changes).length === 0) return
    handleUpdateBusinessClick()
  }, [formState])

  useEffect(() => {
    if (business) setSlug(business?.slug)
  }, [business])

  return (
    <>
      <BusinessOrderingChannelsContainer>
        <Title>{t('EXTENSIONS', 'Extensions')}</Title>
        <Tabs>
          {optionList.map(option => (
            <Tab
              key={option.key}
              active={selectedOption === option.key}
              onClick={() => handleChangeOption(option.key)}
            >
              {option.name}
            </Tab>
          ))}
        </Tabs>
        {selectedOption === 'custom_slug' && (
          <BusinessCustomSlugContainer>
            <FormControl>
              <Label>{t('SLUG', 'Slug')}</Label>
              <Input
                type='text'
                value={slug}
                placeholder={t('SLUG', 'Slug')}
                onChange={(e) => setSlug(e.target.value)}
                onKeyPress={e => {
                  if (e.which === 32) { e.preventDefault() }
                }}
              />
            </FormControl>
            <Button color='primary' onClick={changeCustomslug}>{t('SAVE', 'Save')}</Button>
          </BusinessCustomSlugContainer>
        )}
        {selectedOption === 'widgets' && <BusinessWidgets business={business} />}
      </BusinessOrderingChannelsContainer>
      <Alert
        title={t('EXTENSION', 'Extension')}
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
