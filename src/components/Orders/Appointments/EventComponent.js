import React from 'react'
import { useUtils, useConfig } from 'ordering-components-admin'
import { PersonFill } from 'react-bootstrap-icons'
import {
  EventContainer,
  EventProfessionalPhoto
} from './styles'

export const EventComponent = (props) => {
  const {
    event
  } = props

  const [{ optimizeImage }] = useUtils()
  const [{ configs }] = useConfig()
  const is24Format = configs?.format_time?.value === '24'

  const getTime = (date) => {
    return is24Format ? moment(date).format('HH:mm') : moment(date).format('HH:mm A')
  }

  return (
    <EventContainer>
      <EventProfessionalPhoto>
        {event?.professional?.photo ? (
          <img src={optimizeImage(event?.professional?.photo, 'h_40,c_limit')} alt='' />
        ) : (
          <PersonFill />
        )}
      </EventProfessionalPhoto>
      <div className='info'>
        <p className='name'>{event?.professional?.name} {event?.professional?.lastname}</p>
        <p className='date'>
          {getTime(event.start)} - {getTime(event.end)}
        </p>
      </div>
    </EventContainer>
  )
}
