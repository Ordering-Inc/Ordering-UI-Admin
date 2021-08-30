import React from 'react'

export const Layout = (props) => {
  return (
    <div className='d-flex w-100'>
      {props.children}
    </div>
  )
}
