import React from 'react'
import FaUserAlt from '@meronex/icons/fa/FaUserAlt'

import {
  RoundMarker,
  WrapperMapMarker,
  MapMarkerImg
} from './styles'

export const InterActOrderMarker = (props) => {
  const {
    image
  } = props
  return (
    <RoundMarker>
      <WrapperMapMarker>
        {image ? (
          <MapMarkerImg bgimage={image} />
        ) : (
          <FaUserAlt />
        )}
      </WrapperMapMarker>
    </RoundMarker>
  )
}
