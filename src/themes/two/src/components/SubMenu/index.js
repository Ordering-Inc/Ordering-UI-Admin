import React from 'react'
import MdcArrowLeft from '@meronex/icons/mdc/MdcArrowLeft'
import { useLocation } from 'react-router-dom'

import {
  SubMenuContainer,
  Item
} from './styles'

export const SubMenu = (props) => {
  const {
    items,
    handleGoToPage,
    onClose
  } = props
  const location = useLocation()

  return (
    <SubMenuContainer>
      <div
        className='d-flex align-items-center'
        onClick={() => onClose('orders')}
      >
        <MdcArrowLeft />
        <span>
          {items.menu}
        </span>
      </div>
      <div>
        {items.submenus.map(item => (
          <Item
            key={item.id}
            active={location.pathname === `/${item.pageName}`}
            onClick={() => handleGoToPage({ page: item.pageName })}
          >
            {item.title}
          </Item>
        ))}
      </div>
    </SubMenuContainer>
  )
}
