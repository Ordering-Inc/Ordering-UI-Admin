import React, { useContext, useEffect } from 'react'
import { QueryLogin as QueryLoginController, useLanguage } from 'ordering-components-admin'
import { ConfigFileContext } from '../../../contexts/ConfigFileContext'
import { SpinnerLoader } from '../../Shared'

const QueryLoginUI = (props) => {
  const {
    project
  } = props

  const [, t] = useLanguage()
  const [configFile, setConfigFile] = useContext(ConfigFileContext)

  useEffect(() => {
    setConfigFile({
      ...configFile,
      project: project
    })
  }, [project])

  return (
    <SpinnerLoader content={t('LOADING_DELICIOUS_FOOD', 'Loading Ordering Dashboard...')} />
  )
}

export const QueryLogin = (props) => {
  const queryProps = {
    ...props,
    UIComponent: QueryLoginUI,
    allowedLevels: [0, 2, 5]
  }
  return <QueryLoginController {...queryProps} />
}
