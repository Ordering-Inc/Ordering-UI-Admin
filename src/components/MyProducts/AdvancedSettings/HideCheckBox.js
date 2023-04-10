import React, { useState, useEffect } from 'react'
import { useLanguage } from 'ordering-components-admin'
import {
  CheckSquareFill as CheckedIcon,
  Square as UnCheckedIcon
} from 'react-bootstrap-icons'
import { FormControl, HideCheckWrapper } from './styles'

export const HideCheckBox = (props) => {
  const { handleUpdateThemeValue, setting, initialCheck, noLabel } = props
  const [isCheck, setIsCheck] = useState(false)

  const [, t] = useLanguage()

  const handleClick = () => {
    handleUpdateThemeValue(!isCheck, setting?.path)
    setIsCheck(!isCheck)
  }

  useEffect(() => {
    setIsCheck(initialCheck)
  }, [initialCheck])

  return (
    <FormControl>
      {!noLabel && (<label>{setting.name}</label>)}
      <HideCheckWrapper onClick={() => handleClick()}>
        {isCheck ? <CheckedIcon className='active' /> : <UnCheckedIcon />}
        <span>{noLabel ? setting.name : t('HIDDEN', 'Hidden')} </span>
      </HideCheckWrapper>
    </FormControl>
  )
}
