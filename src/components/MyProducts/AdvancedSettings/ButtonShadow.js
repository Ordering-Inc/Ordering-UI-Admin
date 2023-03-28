import React, { useMemo, useState, useEffect } from 'react'
import { useLanguage } from 'ordering-components-admin'

import {
  DropShadowWrapper,
  ShadowInfoWrapper,
  DropShadow,
  ShadowInputGroup,
  ShadowInputControl
} from './styles'

export const ButtonShadow = (props) => {
  const { initialValues, handleUpdateThemeValue, path } = props

  const [, t] = useLanguage()
  const [shadow, setShadow] = useState({})

  const shadowValues = useMemo(() => {
    if (!shadow?.x || !shadow?.y || !shadow?.blur || !shadow?.spread) return ''
    return `${shadow?.x}px ${shadow?.y}px ${shadow?.blur}px ${shadow?.spread}px ${shadow?.color}`
  }, [shadow])

  const handleChangeInput = (value, name) => {
    handleUpdateThemeValue(value, [path, name].join('.'))
    setShadow({ ...shadow, [name]: value })
  }

  useEffect(() => {
    if (!initialValues) return
    setShadow(JSON.parse(JSON.stringify(initialValues)))
  }, [initialValues])

  return (
    <DropShadowWrapper>
      <ShadowInfoWrapper>
        <DropShadow
          style={{
            boxShadow: shadowValues
          }}
        />
        <span>{t('DROP_SHADOW', 'Drop shadow')}</span>
      </ShadowInfoWrapper>
      <ShadowInputGroup>
        <ShadowInputControl>
          <span>X</span>
          <input
            value={shadow?.x || ''}
            onKeyPress={(e) => {
              if (!/^[0-9]$/.test(e.key)) {
                e.preventDefault()
              }
            }}
            onChange={(e) => handleChangeInput(e.target.value, 'x')}
          />
        </ShadowInputControl>
        <ShadowInputControl>
          <span>Y</span>
          <input
            value={shadow?.y || ''}
            onChange={(e) => handleChangeInput(e.target.value, 'y')}
            onKeyPress={(e) => {
              if (!/^[0-9]$/.test(e.key)) {
                e.preventDefault()
              }
            }}
          />
        </ShadowInputControl>
        <ShadowInputControl>
          <span>B</span>
          <input
            value={shadow?.blur || ''}
            onChange={(e) => handleChangeInput(e.target.value, 'blur')}
            onKeyPress={(e) => {
              if (!/^[0-9]$/.test(e.key)) {
                e.preventDefault()
              }
            }}
          />
        </ShadowInputControl>
        <ShadowInputControl>
          <span>S</span>
          <input
            value={shadow?.spread || ''}
            onChange={(e) => handleChangeInput(e.target.value, 'spread')}
            onKeyPress={(e) => {
              if (!/^[0-9]$/.test(e.key)) {
                e.preventDefault()
              }
            }}
          />
        </ShadowInputControl>
        <ShadowInputControl>
          <span>C</span>
          <input
            value={shadow?.color || ''}
            onChange={(e) => handleChangeInput(e.target.value, 'color')}
          />
        </ShadowInputControl>
      </ShadowInputGroup>
    </DropShadowWrapper>
  )
}
