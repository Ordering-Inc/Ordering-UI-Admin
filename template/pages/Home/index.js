import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { HomePage as HomeController } from '../../../src/components/Home'

export const Home = (props) => {
  return (
    <>
      <HelmetTags page='home' />
      <HomeController {...props} />
    </>
  )
}
