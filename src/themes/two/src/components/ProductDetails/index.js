import React, { useState, useEffect } from 'react'
import { ProductMainDetails } from '../ProductMainDetails'
import { useWindowSize } from '../../../../../hooks/useWindowSize'

import {
  Container
} from './styles'
export const ProductDetails = (props) => {
  const {
    open,
    business,
    onClose,
    product
  } = props
  const { width } = useWindowSize()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [extraOpen, setExtraOpen] = useState(false)
  const [isExtendExtraOpen, setIsExtendExtraOpen] = useState(false)

  const actionSidebar = (value) => {
    setIsMenuOpen(value)

    if (!value) {
      props.onClose()
    }
  }

  const toggleMainContent = () => {
    if (isMenuOpen) {
      if (width <= 500) {
        document.getElementById('product_details').style.width = '100vw'
      } else {
        if (extraOpen && width >= 1000) {
          document.getElementById('product_details').style.width = '1000px'
        } else {
          document.getElementById('product_details').style.width = '500px'
        }
      }
    }
  }
  useEffect(() => {
    if (width > 1000) {
      setIsExtendExtraOpen(false)
    }
    toggleMainContent()
  }, [width])

  useEffect(() => {
    if (!open) return
    actionSidebar(true)
  }, [open])

  useEffect(() => {
    if (width < 1000) return
    if (extraOpen) {
      document.getElementById('product_details').style.width = '1000px'
    } else {
      toggleMainContent()
    }
  }, [extraOpen])

  useEffect(() => {
    setExtraOpen(false)
    setIsExtendExtraOpen(false)
  }, [product])

  return (
    <Container id='product_details'>
      <ProductMainDetails
        {...props}
        actionSidebar={actionSidebar}
      />
    </Container>
  )
}
