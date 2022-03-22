import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
// import { useSession } from '../../contexts/SessionContext'
// import { useApi } from '../../contexts/ApiContext'
// import { useLanguage } from '../../contexts/LanguageContext'
// import { useToast, ToastType } from '../../contexts/ToastContext'
import { useSession, useApi, useLanguage, useToast, ToastType } from 'ordering-components-admin'

export const CampaignDetail = (props) => {
  const {
    campaign,
    campaignList,
    UIComponent,
    handleSuccessUpdateCampaign,
    handleSuccessAddCampaign,
    handleSuccessDeleteCampaign
  } = props

  const [, t] = useLanguage()
  const [ordering] = useApi()
  const [{ token }] = useSession()
  const [, { showToast }] = useToast()

  const [campaignState, setCampaignState] = useState({ campaign: campaign, loading: false, error: null })
  const [formState, setFormState] = useState({ loading: false, changes: {}, error: null })
  const [isAddMode, setIsAddMode] = useState(false)

  /**
   * Clean formState
   */
  const cleanFormState = () => setFormState({ loading: false, changes: {} })

  /**
   * Update credential data
   * @param {EventTarget} e Related HTML event
   */
  const handleChangeInput = (e) => {
    setFormState({
      ...formState,
      changes: { ...formState.changes, [e.target.name]: e.target.value }
    })
  }

  /**
   * Update credential data
   * @param {EventTarget} e Related HTML event
   */
  const handleChangeContactData = (e) => {
    const changes = formState.changes?.contact_data
      ? { ...formState.changes?.contact_data, [e.target.name]: e.target.value }
      : { [e.target.name]: e.target.value }
    setFormState({
      ...formState,
      changes: { ...formState.changes, contact_data: changes }
    })
  }

  /**
   * Update parameter data
   * @param {string} key parameters to change
   * @param {string} value parameters to change
   */
  const handleChangeItem = (key, value) => {
    setFormState({
      ...formState,
      changes: {
        ...formState.changes,
        [key]: value
      }
    })
  }

  /**
   * Method to remove the key of changes
   * @param {String} key
   */
  const handleRemoveKey = (key) => {
    const _changes = { ...formState?.changes }
    delete _changes[key]
    setFormState({
      ...formState,
      changes: _changes
    })
  }

  /**
   * Default fuction for recovery action workflow
   */
  const handleUpdateClick = async () => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setFormState({ ...formState, loading: true, error: null })
      const changes = { ...formState?.changes }
      for (const key in changes) {
        if ((typeof changes[key] === 'object' && changes[key] !== null) || Array.isArray(changes[key])) {
          changes[key] = JSON.stringify(changes[key])
        }
      }
      const requestOptions = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(changes)
      }

      const response = await fetch(`${ordering.root}/marketing_campaigns/${campaign.id}`, requestOptions)
      const content = await response.json()

      if (!content.error) {
        setCampaignState({
          ...campaignState,
          campaign: content.result
        })
        setFormState({ ...formState, loading: false, error: null, changes: {} })
        if (handleSuccessUpdateCampaign) {
          const updatedCampaigns = campaignList?.campaigns.filter(_action => {
            if (_action.id === campaign.id) {
              Object.assign(_action, content.result)
            }
            return true
          })
          handleSuccessUpdateCampaign(updatedCampaigns)
        }
        cleanFormState()
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

  /**
   * Method to add new campaign from API
   */
  const handleAddCampaign = async () => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setFormState({ ...formState, loading: true, error: null })
      const changes = { ...formState?.changes }
      for (const key in changes) {
        if ((typeof changes[key] === 'object' && changes[key] !== null) || Array.isArray(changes[key])) {
          changes[key] = JSON.stringify(changes[key])
        }
      }
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(changes)
      }

      const response = await fetch(`${ordering.root}/marketing_campaigns`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setFormState({ ...formState, loading: false, error: null })
        handleSuccessAddCampaign && handleSuccessAddCampaign(content.result)
        showToast(ToastType.Success, t('CAMPAIGN_ADDED', 'Campaign added'))
        props.onClose && props.onClose()
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

  /**
   * Method to delete a campaign
   */
  const handleDeleteCampaign = async () => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setFormState({ ...formState, loading: true, error: null })
      const requestOptions = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const response = await fetch(`${ordering.root}/marketing_campaigns/${campaign.id}`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        handleSuccessDeleteCampaign && handleSuccessDeleteCampaign(campaign.id)
        showToast(ToastType.Success, t('CAMPAIGN_DELETED', 'Campaign deleted'))
        setFormState({ ...formState, loading: false, error: null })
        props.onClose && props.onClose()
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
    if (Object.keys(campaign).length === 0) {
      setIsAddMode(true)
      setFormState({
        ...formState,
        changes: {
          enabled: true,
          conditions: []
        }
      })
    } else {
      setIsAddMode(false)
      cleanFormState()
    }
    setCampaignState({ ...campaignState, campaign: campaign })
  }, [campaign])

  useEffect(() => {
    console.log(formState.changes)
  }, [formState.changes])

  useEffect(() => {
    if (!formState.changes?.audience_type) return
    if (formState.changes?.audience_type === 'dynamic') {
      const changes = {
        ...formState.changes,
        end_at: formState.changes?.end_at ?? campaign?.end_at ?? moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
      }
      setFormState({ ...formState, changes: changes })
    }
  }, [formState.changes?.audience_type])

  return (
    <>
      {
        UIComponent && (
          <UIComponent
            {...props}
            isAddMode={isAddMode}
            campaignState={campaignState}
            formState={formState}
            handleChangeItem={handleChangeItem}
            handleChangeInput={handleChangeInput}
            handleAddCampaign={handleAddCampaign}
            handleDeleteCampaign={handleDeleteCampaign}
            handleUpdateClick={handleUpdateClick}
            handleRemoveKey={handleRemoveKey}
            handleChangeContactData={handleChangeContactData}
            setCampaignState={setCampaignState}
          />
        )
      }
    </>
  )
}

CampaignDetail.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Components types before enterprise promotion details
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
  * Components types after enterprise promotion details
  * Array of type components, the parent props will pass to these components
  */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
  * Elements before enterprise promotion details
  * Array of HTML/Components elements, these components will not get the parent props
  */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
  * Elements after enterprise promotion details
  * Array of HTML/Components elements, these components will not get the parent props
  */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

CampaignDetail.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
