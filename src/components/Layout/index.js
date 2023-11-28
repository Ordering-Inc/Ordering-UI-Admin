import React from 'react'

export const Layout = (props) => {
  return (
    <div className='d-flex' style={{ maxWidth: '100vw', width: '100vw', paddingTop: props.pt ?? 0 }}>
      {props.children}
    </div>
  )
}
