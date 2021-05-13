import React from 'react'
import { Header } from '../components/Header'
// import { SideMenu } from '../components/SideMenu'
import { LateralMenu } from '../components/LateralMenu'
import {
  AdminMainContainer
} from './styles'

export const AdminLayout = (props) => {
  return (
    <>
      <Header />
      <AdminMainContainer>
        <LateralMenu />
        {props.children}
      </AdminMainContainer>
    </>
  )
}
