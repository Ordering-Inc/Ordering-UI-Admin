import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { MessagesListing } from '../../../src/components/MessagesListing'

export const MessagesList = (props) => {
  return (
    <>
      <HelmetTags page='messages' />
      <MessagesListing {...props} />
    </>
  )
}
