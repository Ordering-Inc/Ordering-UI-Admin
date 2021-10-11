import React, { useRef, useEffect } from 'react'
import { useLanguage, BusinessMenuShare as BusinessMenuShareController } from 'ordering-components-admin'
import RiCheckboxBlankLine from '@meronex/icons/ri/RiCheckboxBlankLine'
import RiCheckboxFill from '@meronex/icons/ri/RiCheckboxFill'
import { Share } from 'react-bootstrap-icons'
import { Button } from '../../styles/Buttons'
import Skeleton from 'react-loading-skeleton'
import { SpinnerLoader } from '../SpinnerLoader'

import {
  HeaderItem,
  PopoverBody,
  PopoverList,
  AllowItem,
  WrapperSpinnerLoader
} from './styles'

const BusinessMenuShareUI = (props) => {
  const {
    open,
    menu,
    businessId,
    businessesState,
    actionState,
    handleShareBusinessMenuClick
  } = props
  const [, t] = useLanguage()
  const referenceElement = useRef()
  const popperElement = useRef()

  const handleClickOutside = (e) => {
    if (!open) return
    const outsidePopover = !popperElement.current?.contains(e.target)
    const outsidePopoverMenu = !referenceElement.current?.contains(e.target)
    if (outsidePopover && outsidePopoverMenu) {
      props.onClose && props.onClose()
    }
  }

  const handleKeyDown = (e) => {
    if (e.keyCode === 27) {
      props.onClose && props.onClose()
    }
  }

  const isCheckedBusiness = (id) => {
    if (Object.keys(menu).length === 0) return false
    const found = menu?.businesses.find(business => business?.id === id)
    return found
  }

  const isCheckedAllBusiness = () => {
    return businessesState?.businesses?.length === menu?.businesses?.length
  }

  useEffect(() => {
    window.addEventListener('mouseup', handleClickOutside)
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('mouseup', handleClickOutside)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  return (
    <div style={{ position: 'relative' }}>
      <HeaderItem
        ref={referenceElement}
      >
        <Button
          color='secundary'
          borderRadius='5px'
          onClick={props.onClick}
          disabled={Object.keys(menu).length === 0}
        >
          <Share />
        </Button>
      </HeaderItem>
      {open && (
        <PopoverBody ref={popperElement}>
          {actionState.loading && (
            <WrapperSpinnerLoader>
              <SpinnerLoader />
            </WrapperSpinnerLoader>
          )}
          <p>{t('SHARED_WITH', 'Share with')}</p>
          <PopoverList>
            {businessesState.loading ? (
              [...Array(10).keys()].map(i => (
                <AllowItem
                  key={i}
                >
                  <Skeleton width={20} height={20} />
                  <span>
                    <Skeleton width={150} />
                  </span>
                </AllowItem>
              ))
            ) : (
              <>
                <AllowItem
                  isChecked={isCheckedAllBusiness()}
                  onClick={() => handleShareBusinessMenuClick()}
                >
                  {isCheckedAllBusiness() ? (
                    <RiCheckboxFill />
                  ) : (
                    <RiCheckboxBlankLine />
                  )}
                  <span>
                    {t('ALL', 'All')}
                  </span>
                </AllowItem>
                {businessesState.businesses.map(business => (
                  <React.Fragment key={business.id}>
                    {business.id !== businessId && (
                      <AllowItem
                        isChecked={isCheckedBusiness(business.id)}
                        onClick={() => handleShareBusinessMenuClick(business.id)}
                      >
                        {isCheckedBusiness(business.id) ? (
                          <RiCheckboxFill />
                        ) : (
                          <RiCheckboxBlankLine />
                        )}
                        <span>
                          {business?.name}
                        </span>
                      </AllowItem>
                    )}
                  </React.Fragment>
                ))}
              </>
            )}
          </PopoverList>
        </PopoverBody>
      )}
    </div>
  )
}

export const BusinessMenuShare = (props) => {
  const businessMenuShareProps = {
    ...props,
    UIComponent: BusinessMenuShareUI
  }
  return (
    <BusinessMenuShareController {...businessMenuShareProps} />
  )
}
