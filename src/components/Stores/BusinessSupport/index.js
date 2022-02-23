import React from 'react'
import { useLanguage, useUtils } from 'ordering-components-admin'
import { Button } from '../../../styles'
import FaUserAlt from '@meronex/icons/fa/FaUserAlt'
import BsDot from '@meronex/icons/bs/BsDot'

import {
  BusinessSupportContainer,
  BusinessOwnersContainer,
  BusinessOwnerInfo,
  WrapperImage,
  Image
} from './styles'

export const BusinessSupport = (props) => {
  const {
    businessState
  } = props
  const [, t] = useLanguage()
  const [{ getTimeAgo }] = useUtils()
  return (
    <BusinessSupportContainer>
      <h1>{t('PRODUCT_DETAILS', 'Product details')}</h1>
      <BusinessOwnersContainer>
        {businessState?.business?.owners?.map(owner => (
          <BusinessOwnerInfo key={owner.id}>
            <WrapperImage>
              {owner?.photo ? (
                <Image bgimage={owner?.photo} />
              ) : (
                <FaUserAlt />
              )}
            </WrapperImage>
            <div className='info'>
              <p>{owner?.name} {owner?.lastname}</p>
              <p>{getTimeAgo(owner?.updated_at, { utc: false })} <BsDot /> {t('UPDATED', 'Updated')}</p>
            </div>
          </BusinessOwnerInfo>
        ))}
        <Button
          color='primary'
        >
          {t('UNFOLLOW', 'Unfollow')}
        </Button>
      </BusinessOwnersContainer>
    </BusinessSupportContainer>
  )
}
