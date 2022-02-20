import React, { useEffect, useRef, useState } from 'react'
import styled, { css } from 'styled-components'
import { useToast, ToastType } from 'ordering-components-admin'

const ToastContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  .toast-bar {
    background-color: ${({ backgroundColor }) => backgroundColor};
    color: #fff;
    text-align: center;
    border-radius: 2px;
    padding: 16px;
    position: fixed;
    z-index: 9999;
    bottom: 30px;
    border-radius: 8px;
    opacity: 1;

    ${props => props.theme?.rtl ? css`
      left: 30px;
    ` : css`
      right: 30px;
    `}

    font-size: 14px;
    min-width: 200px;
    max-width: 200px;
    @media(min-width: 380px){
      font-size: 16px;
      min-width: 250px;
      max-width: initial;
    }
  }
`

export const Toast = () => {
  const [toastConfig, { hideToast }] = useToast()
  const toastRef = useRef()

  const [timeoutState, setTimeoutState] = useState(null)

  useEffect(() => {
    if (!toastConfig && !toastRef.current) return
    const container = document.getElementById('toast-container')
    const oldToast = document.querySelector('.toast-bar')
    clearTimeout(timeoutState)
    if (oldToast) {
      container.removeChild(oldToast)
    }
    const toast = document.createElement('div')
    toast.classList.add('toast-bar')
    toast.innerHTML = message
    container.appendChild(toast)

    const timeout = setTimeout(() => {
      toast.remove()
      hideToast()
    }, [duration])
    setTimeoutState(timeout)
  }, [toastConfig])

  if (!toastConfig) {
    return null
  }

  const { type, message, duration } = toastConfig

  let backgroundColor = '#6ba4ff'

  switch (type) {
    case ToastType.Info:
      backgroundColor = '#6ba4ff'
      break
    case ToastType.Error:
      backgroundColor = '#D83520'
      break
    case ToastType.Success:
      backgroundColor = '#73bd24'
      break
  }

  return (
    <ToastContainer
      backgroundColor={backgroundColor}
      ref={toastRef}
      id='toast-container'
    />
  )
}
