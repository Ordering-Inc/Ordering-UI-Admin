import React from 'react'
import Prev from '@meronex/icons/md/MdKeyboardArrowLeft'
import Next from '@meronex/icons/md/MdKeyboardArrowRight'
import {
  WrapperPagination,
  WrapperPageState,
  PageButton
} from './styles'

export const OrdersPagination = ({ ordersPerPage, totalOrders, currentPage, totalPages, prevPaginate, nextPaginate }) => {
  const indexOfLastOrders = currentPage * ordersPerPage < totalOrders ? currentPage * ordersPerPage : totalOrders
  const indexOfFirstOrders = (currentPage - 1) * ordersPerPage + 1
  return (
    <WrapperPagination>
      <WrapperPageState>
        {indexOfFirstOrders}-{indexOfLastOrders} of {totalOrders}
      </WrapperPageState>
      <PageButton
        disabled={currentPage === 1}
        onClick={() => prevPaginate()}
      >
        <Prev />
      </PageButton>
      <PageButton
        onClick={() => nextPaginate()}
        disabled={currentPage === totalPages || totalPages === 1}
      >
        <Next />
      </PageButton>
    </WrapperPagination>
  )
}
