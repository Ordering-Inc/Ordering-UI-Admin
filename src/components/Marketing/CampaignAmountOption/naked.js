import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
// import { useSession } from '../../contexts/SessionContext'
// import { useApi } from '../../contexts/ApiContext'
// import { useLanguage } from '../../contexts/LanguageContext'
// import { useToast, ToastType } from '../../contexts/ToastContext'
import { useSession, useApi, useLanguage, useToast, ToastType } from 'ordering-components-admin'

export const CampaignAmountOption = (props) => {
  const {
    campaignState,
    campaignList,
    UIComponent,
    handleSuccessUpdateCampaign,
    type,
    isAddMode,
    setCampaignState,
    formState
  } = props

  const [, t] = useLanguage()
  const [ordering] = useApi()
  const [{ token }] = useSession()
  const [, { showToast }] = useToast()

  const [ruleFormState, setRuleFormState] = useState({ loading: false, changes: {}, error: null })

  /**
   * Update credential data
   */
  const handleChangeValue = (name, value) => {
    if (name === 'condition') {
      const changes = { ...ruleFormState.changes, [name]: value, value: null }
      setRuleFormState({ ...ruleFormState, changes: changes })
      return
    }
    const changes = { ...ruleFormState.changes, [name]: parseInt(value) }
    setRuleFormState({ ...ruleFormState, changes: changes })
  }

  /**
   * Default fuction for recovery action workflow
   */
  const handleUpdateRule = async () => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setRuleFormState({ ...ruleFormState, loading: true, error: null })
      const changes = { ...ruleFormState?.changes }
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

      const response = await fetch(`${ordering.root}/marketing_campaigns/${campaignState?.campaign.id}/conditions/${ruleFormState.changes.id}`, requestOptions)
      const content = await response.json()

      if (!content.error) {
        setRuleFormState({ ...ruleFormState, loading: false, error: null, changes: {} })
        if (handleSuccessUpdateCampaign) {
          const updatedCampaigns = campaignList?.campaigns.map(_action => {
            if (_action.id === campaignState?.campaign.id) {
              const found = _action.conditions.find(item => item.id === content.result.id)
              let updatedConditions = []
              if (found) {
                updatedConditions = _action.conditions.filter(item => item.id !== content.result.id)
              }
              updatedConditions.push(content.result)
              setCampaignState({ ...campaignState, campaign: { ..._action, conditions: updatedConditions } })
              return {
                ..._action,
                conditions: updatedConditions
              }
            }
            return _action
          })
          handleSuccessUpdateCampaign(updatedCampaigns)
        }
        showToast(ToastType.Success, t('CONDITION_SAVED', 'Condition saved'))
      } else {
        setRuleFormState({
          ...ruleFormState,
          loading: false,
          error: content.result
        })
      }
    } catch (err) {
      setRuleFormState({
        ...ruleFormState,
        loading: false,
        error: err.message
      })
    }
  }

  /**
   * Default fuction for recovery action workflow
   */
  const handleAddRule = async () => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setRuleFormState({ ...ruleFormState, loading: true, error: null })
      const changes = { ...ruleFormState?.changes }
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

      const response = await fetch(`${ordering.root}/marketing_campaigns/${campaignState?.campaign.id}/conditions`, requestOptions)
      const content = await response.json()

      if (!content.error) {
        setRuleFormState({ ...ruleFormState, loading: false, error: null, changes: {} })
        if (handleSuccessUpdateCampaign) {
          const updatedCampaigns = campaignList?.campaigns.map(_action => {
            if (_action.id === campaignState?.campaign.id) {
              const updatedConditions = [..._action.conditions]
              updatedConditions.push(content.result)
              setCampaignState({ ...campaignState, campaign: { ..._action, conditions: updatedConditions } })
              return {
                ..._action,
                conditions: updatedConditions
              }
            }
            return _action
          })
          handleSuccessUpdateCampaign(updatedCampaigns)
        }
        showToast(ToastType.Success, t('CONDITION_SAVED', 'Condition saved'))
      } else {
        setRuleFormState({
          ...ruleFormState,
          loading: false,
          error: content.result
        })
      }
    } catch (err) {
      setRuleFormState({
        ...ruleFormState,
        loading: false,
        error: err.message
      })
    }
  }

  useEffect(() => {
    if (!isAddMode) {
      const selectedRule = campaignState?.campaign?.conditions.find(item => item.type === type)
      setRuleFormState({
        ...ruleFormState,
        changes: {
          ...(selectedRule?.id && { id: selectedRule?.id }),
          ...(selectedRule?.condition && { condition: selectedRule?.condition }),
          ...(selectedRule?.value && { value: selectedRule?.value }),
          type: type
        }
      })
    } else {
      const selectedRule = formState?.changes?.conditions.find(item => item.type === type)
      setRuleFormState({
        ...ruleFormState,
        changes: {
          ...selectedRule
        }
      })
    }
  }, [campaignState?.campaign])

  console.log(ruleFormState)

  return (
    <>
      {
        UIComponent && (
          <UIComponent
            {...props}
            ruleFormState={ruleFormState}
            handleChangeValue={handleChangeValue}
            handleUpdateRule={handleUpdateRule}
            handleAddRule={handleAddRule}
          />
        )
      }
    </>
  )
}

CampaignAmountOption.propTypes = {
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

CampaignAmountOption.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
