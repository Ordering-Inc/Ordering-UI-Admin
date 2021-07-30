
import React, { useEffect } from 'react'
import { ToastType, useToast } from 'ordering-components-admin'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

import { Container } from './styles'

export const Toast = () => {
  const [toastConfig, { hideToast }] = useToast()

  useEffect(() => {
    if (!toastConfig) {
      return
    }

    switch (toastConfig?.type) {
      case ToastType.Info:
        toast.info(toastConfig?.message)
        break
      case ToastType.Error:
        toast.error(toastConfig?.message)
        break
      case ToastType.Success:
        toast.success(toastConfig?.message)
        break
    }

    hideToast()
  }, [toastConfig])

  return (
    <Container>
      <ToastContainer
        position='bottom-right'
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
      />
    </Container>
  )
}
