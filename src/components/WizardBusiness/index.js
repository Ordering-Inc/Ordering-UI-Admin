import React from 'react'
import { BusinessSchedule } from '../BusinessSchedule'
import { BusinessPaymentMethods } from '../BusinessPaymentMethods'
import { SideBar } from '../SideBar'

import {
  BusinessScheduleContainer,
  BusinessPaymentMethodsContainer
} from './styles'

export const WizardBusiness = (props) => {
  const {
    isFirstVisited,
    business,
    openTutorialSidebarState,
    setOpenTutorialSidebarState,
    handleSucessUpdateBusiness
  } = props

  return (
    <>
      {isFirstVisited && (
        <>
          {openTutorialSidebarState === 'schedule' && (
            <SideBar
              id='business_schedule_detail'
              open={openTutorialSidebarState === 'schedule'}
              onClose={() => setOpenTutorialSidebarState(null)}
            >
              <BusinessScheduleContainer>
                <BusinessSchedule
                  isFirstVisited
                  business={business}
                  handleSuccessUpdate={result => {
                    handleSucessUpdateBusiness(result)
                    setOpenTutorialSidebarState('payments')
                  }}
                  handleTutorialSkip={() => setOpenTutorialSidebarState('payments')}
                />
              </BusinessScheduleContainer>
            </SideBar>
          )}
          {openTutorialSidebarState === 'payments' && (
            <SideBar
              id='business_payments_detail'
              open={openTutorialSidebarState === 'payments'}
              onClose={() => setOpenTutorialSidebarState(null)}
            >
              <BusinessPaymentMethodsContainer>
                <BusinessPaymentMethods
                  isFirstVisited
                  business={business}
                  handleSuccessUpdate={handleSucessUpdateBusiness}
                  setIsExtendExtraOpen={() => console.log('')}
                  handleTutorialContinue={() => setOpenTutorialSidebarState('')}
                />
              </BusinessPaymentMethodsContainer>
            </SideBar>
          )}
        </>
      )}
    </>
  )
}
