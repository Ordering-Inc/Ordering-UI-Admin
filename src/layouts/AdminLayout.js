import React from 'react'
import { Header } from '../components/Header'
import { SideMenu } from '../components/SideMenu'
import {
  AdminMainContainer
} from './styles'

export const AdminLayout = (props) => {
  return (
    <>
      <Header />
      <AdminMainContainer>
        <SideMenu />
        {props.children}
      </AdminMainContainer>
    </>
  )
}
