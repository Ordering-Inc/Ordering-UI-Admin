import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { Button } from '../../../styles/Buttons'
import MdClose from '@meronex/icons/ios/MdClose'

import {
  Container
} from './styles'

export const DriversBusyStatusFilter = (props) => {
  const {
    driversSubfilter,
    handleChangeDriversSubFilter
  } = props
  const [, t] = useLanguage()
  return (
    <Container>
      <Button
        color={driversSubfilter.busy ? 'primary' : 'secundary'}
        onClick={() => handleChangeDriversSubFilter({ ...driversSubfilter, busy: !driversSubfilter.busy })}
      >
        {t('BUSY', 'Busy')}
        {driversSubfilter.busy && <MdClose />}
      </Button>
      <Button
        color={driversSubfilter.notBusy ? 'primary' : 'secundary'}
        onClick={() => handleChangeDriversSubFilter({ ...driversSubfilter, notBusy: !driversSubfilter.notBusy })}
      >
        {t('NOT_BUSY', 'Not busy')}
        {driversSubfilter.notBusy && <MdClose />}
      </Button>
    </Container>
  )
}
