import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import Tour from 'reactour'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { Stars } from 'react-bootstrap-icons'

import {
  HelperContent
} from './styles'

export const WizardDelivery = (props) => {
  const {
    isTourOpen,
    setIsTourOpen,
    currentStep
  } = props

  const [, t] = useLanguage()

  const tourSteps = [
    {
      selector: '[data-tour="tour_add"]',
      content: (goTo) => (
        <HelperContent>
          <span>1.</span>
          <p>{t('TOUR_REGISTER_DRIVER', 'First, let’s register a driver')}</p>
        </HelperContent>
      ),
      position: 'bottom'
    },
    {
      selector: '[data-tour="tour_fill"]',
      content: () => (
        <HelperContent>
          <span>2.</span>
          <p>{t('TOUR_FILL_DRIVER_MAIN_INFORMATION', 'Fill in the main information to register the driver')}</p>
        </HelperContent>
      ),
      position: 'left'
    },
    {
      selector: '[data-tour="tour_add"]',
      content: () => (
        <HelperContent>
          <span>3.</span>
          <p>{t('TOUR_REGISTER_DRIVER_MANAGER', 'Now, you have to register a driver manager')}</p>
        </HelperContent>
      ),
      position: 'bottom'
    },
    {
      selector: '[data-tour="tour_fill"]',
      content: () => (
        <HelperContent>
          <span>4.</span>
          <p>{t('TOUR_FILL_DRIVER_MANAGER_MAIN_INFORMATION', 'Fill in the main information to register the driver manager')}</p>
        </HelperContent>
      ),
      position: 'left'
    },
    {
      selector: '[data-tour="tour_add_group"]',
      content: () => (
        <HelperContent>
          <span>5.</span>
          <p>{t('TOUR_CREATE_DRIVER_GROUP', 'Click here to create a driver group')}</p>
        </HelperContent>
      ),
      position: 'bottom'
    },
    {
      selector: '[data-tour="tour_fill_group"]',
      content: () => (
        <HelperContent>
          <span>6.</span>
          <p>{t('TOUR_FILL_DRIVER_GROUP_MAIN_INFORMATION', 'Fill in the main information to configure your new driver group')}</p>
        </HelperContent>
      ),
      position: 'left'
    },
    {
      selector: '[data-tour="tour_select_business"]',
      content: () => (
        <HelperContent>
          <span>7.</span>
          <p>{t('TOUR_SELECT_BUSINESS_FOR_DRIVER_GROUP', 'Select the business who belong to the driver group')}</p>
        </HelperContent>
      ),
      position: 'left'
    },
    {
      selector: '[data-tour="tour_delivery_completed"]',
      content: () => (
        <HelperContent>
          <Stars />
          <p>
            <span>{t('THATS_IT', 'THAT’S IT')}!!</span> {t('TOUR_CONFIGURED_DELIVERY_SYSTEM', 'You configured your first Delivery system')}
          </p>
        </HelperContent>
      ),
      position: 'bottom'
    }
  ]

  return (
    <Tour
      steps={tourSteps}
      isOpen={isTourOpen}
      onRequestClose={() => setIsTourOpen(false)}
      maskClassName='mask'
      className='helper'
      rounded={8}
      onAfterOpen={target => disableBodyScroll(target)}
      onBeforeClose={target => enableBodyScroll(target)}
      showNavigation={false}
      showCloseButton={false}
      disableFocusLock
      startAt={currentStep}
      goToStep={currentStep}

      // maskSpace={0}
      // nextStep={() => handleTourNextClick()}
      // prevStep={() => handleTourPrevClick()}
      // getCurrentStep={curr => console.log(curr, 'step')}
      // prevButton={null}
      // disableDotsNavigation
      // accentColor=''
      // badgeContent=''
      // nextButton='next'
    />
  )
}
