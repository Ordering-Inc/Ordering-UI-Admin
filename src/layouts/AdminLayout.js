import React from 'react'
import { Header } from '../components/Header'
// import { SideMenu } from '../components/SideMenu'
import { LateralMenu } from '../components/LateralMenu'
import {
  AdminMainContainer,
  AdminContent
} from './styles'

export const AdminLayout = (props) => {
  return (
    <>
      <Header />
      <AdminMainContainer>
        <LateralMenu />
        <AdminContent>
          {props.children}
        </AdminContent>
      </AdminMainContainer>
    </>
  )
}
