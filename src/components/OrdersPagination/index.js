import React from 'react'
import Prev from '@meronex/icons/md/MdKeyboardArrowLeft'
import Next from '@meronex/icons/md/MdKeyboardArrowRight'
import {
  WrapperPagination,
  PageButton
} from './styles'

export const OrdersPagination = ({ ordersPerPage, totalOrders, currentPage, paginate, prevPaginate, nextPaginate }) => {
  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(totalOrders / ordersPerPage); i++) {
    pageNumbers.push(i)
  }
  return (
    <WrapperPagination>
      <PageButton onClick={() => prevPaginate()}>
        <Prev />
      </PageButton>
      {pageNumbers.map((number, i) => (
        <PageButton onClick={() => paginate(number)} className={`${currentPage === number ? 'active' : null}`} key={i}>
          {number}
        </PageButton>
      ))}
      <PageButton onClick={() => nextPaginate()}>
        <Next />
      </PageButton>
    </WrapperPagination>
  )
}
