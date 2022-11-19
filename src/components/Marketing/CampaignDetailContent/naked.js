import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
// import { useSession } from '../../contexts/SessionContext'
// import { useApi } from '../../contexts/ApiContext'
// import { useLanguage } from '../../contexts/LanguageContext'
// import { useToast, ToastType } from '../../contexts/ToastContext'
import { useSession, useApi, useLanguage, useToast, ToastType } from 'ordering-components-admin'

export const CampaignDetailContent = (props) => {
  const {
    UIComponent,
    campaignState,
    isAddMode,
    formState: campaignFormState,
    handleChangeItem,
    handleChangeContactData,
    handleSuccessUpdateCampaign,
    campaignList,
    handleChangeParentContact
  } = props

  const [ordering] = useApi()
  const [{ token }] = useSession()
  const [, { showToast }] = useToast()
  const [, t] = useLanguage()

  const [formState, setFormState] = useState({ loading: false, changes: {}, error: null })

  /**
   * Update parameter data
   * @param {string} name parameters to change
   * @param {string} value parameters to change
   */
  const handleChangeType = (name, value) => {
    const changes = { ...formState?.changes, [name]: value }
    setFormState({ ...formState, changes: changes })

    if (isAddMode) {
      handleChangeItem && handleChangeItem(name, value)
    }
  }

  /**
   * Update credential data
   * @param {EventTarget} e Related HTML event
   */
  const handleChangeData = (e) => {
    const contactData = { ...formState.changes?.contact_data, [e.target.name]: e.target.value }
    setFormState({
      ...formState,
      changes: { ...formState.changes, contact_data: contactData }
    })

    if (isAddMode) {
      handleChangeContactData && handleChangeContactData(e)
    }
  }

  /**
 * Update credential data
 */
  const handleChangeContact = (name, value) => {
    const contactData = { ...formState.changes?.contact_data, [name]: value }
    setFormState({
      ...formState,
      changes: { ...formState.changes, contact_data: contactData }
    })

    if (isAddMode) {
      handleChangeParentContact && handleChangeParentContact(name, value)
    }
  }

  /**
   * Default fuction for recovery action workflow
   */
  const handleUpdateContact = async () => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setFormState({ ...formState, loading: true, error: null })

      const changes = { ...formState?.changes }
      for (const key in changes) {
        if ((typeof changes[key] === 'object' && changes[key] !== null) || Array.isArray(changes[key])) {
          changes[key] = JSON.stringify(changes[key])
        }
        delete changes?.contact_type
      }
      const requestOptions = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(changes)
      }

      const response = await fetch(`${ordering.root}/marketing_campaigns/${campaignState?.campaign?.id}`, requestOptions)
      const content = await response.json()

      if (!content.error) {
        setFormState({ ...formState, loading: false, error: null })
        if (handleSuccessUpdateCampaign) {
          const updatedCampaigns = campaignList?.campaigns.filter(_campaign => {
            if (_campaign.id === campaignState?.campaign?.id) {
              Object.assign(_campaign, content.result)
            }
            return true
          })
          handleSuccessUpdateCampaign(updatedCampaigns)
        }
        showToast(ToastType.Success, t('CAMPAIGN_SAVED', 'Campaign saved'))
      } else {
        setFormState({
          ...formState,
          loading: false,
          error: content.result
        })
      }
    } catch (err) {
      setFormState({
        ...formState,
        loading: false,
        error: err.message
      })
    }
  }

  useEffect(() => {
    if (isAddMode) return

    if (campaignState?.campaign && Object.keys(campaignState?.campaign).length > 0) {
      setFormState({
        ...formState,
        changes: {
          contact_type: campaignState?.campaign?.contact_type || '',
          contact_data: campaignState?.campaign?.contact_data || {}
        }
      })
    }
  }, [campaignState?.campaign])

  useEffect(() => {
    if (!isAddMode) return

    if (campaignFormState?.changes && Object.keys(campaignFormState?.changes).length > 0) {
      setFormState({
        ...formState,
        changes: {
          contact_type: campaignFormState?.changes?.contact_type || '',
          contact_data: campaignFormState?.changes?.contact_data || {}
        }
      })
    }
  }, [campaignFormState?.changes])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          contactState={formState}
          handleChangeType={handleChangeType}
          handleChangeData={handleChangeData}
          handleUpdateContact={handleUpdateContact}
          handleChangeContact={handleChangeContact}
        />
      )}
    </>
  )
}

CampaignDetailContent.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Components types before my orders
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after my orders
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before my orders
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after my orders
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

CampaignDetailContent.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
