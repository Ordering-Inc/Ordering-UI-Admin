import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { useTheme } from 'styled-components'
import { SideBar } from '../../Shared'
import { BusinessSchedule } from '../BusinessSchedule'
import { BusinessPaymentMethods } from '../BusinessPaymentMethods'
import { BusinessProductsCategoyDetails } from '../BusinessProductsCategoyDetails'
import { BusinessProductAddForm } from '../BusinessProductAddForm'
import { Button } from '../../../styles'

import {
  BusinessScheduleContainer,
  BusinessPaymentMethodsContainer,
  TurtorialEndContainier,
  FirstStoreContainer
} from './styles'

export const WizardBusiness = (props) => {
  const {
    isTutorialMode,
    business,
    openTutorialSidebarState,
    setOpenTutorialSidebarState,
    handleSucessUpdateBusiness
  } = props

  const [, t] = useLanguage()
  const theme = useTheme()

  return (
    <>
      {isTutorialMode && (
        <>
          {openTutorialSidebarState === 'schedule' && (
            <SideBar
              id='business_schedule_detail'
              open={openTutorialSidebarState === 'schedule'}
              onClose={() => setOpenTutorialSidebarState(null)}
            >
              <BusinessScheduleContainer>
                <BusinessSchedule
                  isTutorialMode
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
                  isTutorialMode
                  business={business}
                  handleSuccessUpdate={handleSucessUpdateBusiness}
                  setIsExtendExtraOpen={() => console.log('')}
                  handleTutorialContinue={() => setOpenTutorialSidebarState('new_category')}
                />
              </BusinessPaymentMethodsContainer>
            </SideBar>
          )}

          {openTutorialSidebarState === 'new_category' && (
            <SideBar
              id='business_new_category_form'
              open={openTutorialSidebarState === 'new_category'}
              onClose={() => setOpenTutorialSidebarState(null)}
            >
              <BusinessProductsCategoyDetails
                isTutorialMode
                category={null}
                businessState={{
                  loading: false,
                  business: business
                }}
                handleTutorialSkip={() => setOpenTutorialSidebarState('tutorial_end')}
                handleUpdateBusinessState={val => {
                  handleSucessUpdateBusiness(val)
                  setOpenTutorialSidebarState('new_product')
                }}
              />
            </SideBar>
          )}
          {openTutorialSidebarState === 'new_product' && (
            <SideBar
              id='business_new_product_form'
              open={openTutorialSidebarState === 'new_product'}
              onClose={() => setOpenTutorialSidebarState(null)}
              showExpandIcon
            >
              <BusinessProductAddForm
                isTutorialMode
                business={business}
                setIsAddProduct={() => setOpenTutorialSidebarState('tutorial_end')}
                categorySelected={business?.categories[0]}
                handleTutorialSkip={() => setOpenTutorialSidebarState('tutorial_end')}
              />
            </SideBar>
          )}
          {openTutorialSidebarState === 'tutorial_end' && (
            <SideBar
              open={openTutorialSidebarState === 'tutorial_end'}
              onClose={() => setOpenTutorialSidebarState(null)}
            >
              <TurtorialEndContainier>
                <h1>{t('NEW_STORE', 'New store')}</h1>
                <FirstStoreContainer>
                  <img src={theme.images.tutorials.businessTutorial2} alt='' />
                  <h1>{t('CONGRATULATIONS', 'Congratulations!')}</h1>
                  <p>{t('FIRST_STORE_IS_REDAY', 'Your first store is ready.')}</p>
                  <Button
                    borderRadius='8px'
                    color='primary'
                    onClick={() => setOpenTutorialSidebarState(null)}
                  >
                    {t('GO_TO_STORE_LIST', 'Go to store list')}
                  </Button>
                </FirstStoreContainer>
              </TurtorialEndContainier>
            </SideBar>
          )}
        </>
      )}
    </>
  )
}
