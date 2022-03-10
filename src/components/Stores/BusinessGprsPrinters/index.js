import React, { useEffect, useState } from 'react'
import { useLanguage, useApi, BusinessGprsPrinters as BusinessGprsPrintersController } from 'ordering-components-admin'
import { Switch, TextArea } from '../../../styles'
import { Select } from '../../../styles/Select'

import {
  BusinessGprsPrintersContainer,
  SwitchboxWrapper,
  FormControl,
  Label,
  SelectWrapper,
  SectionTitle
} from './styles'
import Skeleton from 'react-loading-skeleton'

const BusinessGprsPrintersUI = (props) => {
  const {
    business,
    formState,
    setFormState,
    printersListState
  } = props

  const [, t] = useLanguage()
  const [ordering] = useApi()
  const [printers, setPrinters] = useState([])
  const filePath = `${ordering.root.replace('https', 'http')}/business/${business?.id}/queue.txt`
  const filePathConfirm = `${ordering.root.replace('https', 'http')}/business/${business?.id}/queue/confirm`

  const changePrinter = (name, value) => {
    setFormState({
      ...formState,
      changes: { [name]: value }
    })
  }

  useEffect(() => {
    if (printersListState?.printers?.length === 0) return
    const _printers = []
    for (const printer of printersListState?.printers) {
      _printers.push({
        value: printer.id,
        content: printer.model
      })
    }
    setPrinters(_printers)
  }, [printersListState?.printers])

  return (
    <BusinessGprsPrintersContainer>
      <SectionTitle>{t('GPRS_PRINTERS', 'Gprs printers')}</SectionTitle>
      <SwitchboxWrapper>
        <span>{t('ACCEPT_GPRS_PRINTER', 'Accept GPRS printer')}</span>
        <Switch
          defaultChecked={business?.use_printer}
          onChange={checked => changePrinter('use_printer', checked)}
        />
      </SwitchboxWrapper>
      <FormControl>
        <Label>{t('PRINTER_MODEL', 'Printer model')}</Label>
        {printersListState?.loading && (
          <Skeleton />
        )}
        {!printersListState?.loading && printers?.length > 0 && (
          <SelectWrapper>
            <Select
              defaultValue={business?.printer_id ?? ''}
              options={printers}
              onChange={(value) => changePrinter('printer_id', value)}
              placeholder={t('SELECT_PRINTER')}
              notAsync
            />
          </SelectWrapper>
        )}
      </FormControl>
      {business?.printer_id && business?.use_printer && (
        <FormControl>
          <Label>{t('GPRS_QUEUE_PATH')}</Label>
          <TextArea
            type='text'
            defaultValue={filePath}
            placeholder={t('GPRS_QUEUE_PATH')}
            readOnly
          />
        </FormControl>
      )}
      {business?.printer_id && business?.use_printer && (
        <FormControl>
          <Label>{t('GPRS_QUEUE_PATH_CONFIRM')}</Label>
          <TextArea
            type='text'
            defaultValue={filePathConfirm}
            placeholder={t('GPRS_QUEUE_PATH_CONFIRM')}
            readOnly
          />
        </FormControl>
      )}

    </BusinessGprsPrintersContainer>
  )
}

export const BusinessGprsPrinters = (props) => {
  const businessGprsPrintersProps = {
    ...props,
    UIComponent: BusinessGprsPrintersUI
  }
  return <BusinessGprsPrintersController {...businessGprsPrintersProps} />
}
