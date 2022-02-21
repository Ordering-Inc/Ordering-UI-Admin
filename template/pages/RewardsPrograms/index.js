import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { RewardsPrograms as RewardsProgramsController } from '../../../src/components/Loyalty'

export const RewardsPrograms = (props) => {
  return (
    <>
      <HelmetTags page='rewards_programs' />
      <RewardsProgramsController {...props} />
    </>
  )
}
