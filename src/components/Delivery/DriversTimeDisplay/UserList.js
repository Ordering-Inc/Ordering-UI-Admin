import React, { useState, useEffect } from 'react'
import { useLanguage, useUtils, useConfig } from 'ordering-components-admin'
import Skeleton from 'react-loading-skeleton'
import FaUserAlt from '@meronex/icons/fa/FaUserAlt'
import { Envelope, Phone } from 'react-bootstrap-icons'
import { Pagination, ConfirmAdmin } from '../../Shared'
import { Button } from '../../../styles'
import { TwelveHours, TwentyFourHours } from '../../../utils'
import moment from 'moment'

import {
  UsersListingContainer,
  UsersConatiner,
  UserTableWrapper,
  UsersTable,
  WrapperImage,
  Image,
  UserMainInfo,
  InfoBlock,
  WrapperPagination,
  UsersBottomContainer,
  VerifiedItemsContainer,
  VerifiedItem,
  UserIdWrapper,
  Block,
  EmptyBlock,
  UserRow,
  HoursHeader,
  UserName,
  WeekHeader,
  ThId,
  ThName,
  ButtonWrapper
} from './styles'

export const DeliveryUsersListing = (props) => {
  const {
    date,
    driversList,
    paginationProps,
    getDrivers,
    handleSelectDriver,
    selectedGroup,
    setStackEventsState
  } = props

  const [, t] = useLanguage()
  const [{ optimizeImage }] = useUtils()
  const [{ configs }] = useConfig()
  const [confirmAdmin, setConfirmAdmin] = useState({ open: false, handleOnConfirm: null })
  const is12hours = configs?.general_hour_format?.value === 'hh:mma'
  const hourFormat = configs?.general_hour_format?.value

  const handleChangePage = (page) => {
    getDrivers(page, 10, selectedGroup?.id)
  }

  const handleChangePageSize = (pageSize) => {
    const expectedPage = Math.ceil(paginationProps.from / pageSize)
    getDrivers(expectedPage, pageSize, selectedGroup?.id)
  }

  const getDatesInRange = (date_range) => {
    const start = moment(date_range[0])
    const end = moment(date_range[1])
    const dates = [];

    let current = start;

    while (current <= end) {
      dates.push(current.format('YYYY-MM-DD'))
      current = current.clone().add(1, 'days')
    }

    return dates;
  }

  const handleHourBlockWidth = (block) => {
    if (!block) return
    let width = 0
    const startHour = moment(block?.start).hour()
    const endHour = moment(block?.end).hour()
    const startMinutes = moment(block?.start).minutes() / 15
    const endMinutes = moment(block?.end).minutes() / 15
    const minutesDiff = startMinutes < endMinutes ? endMinutes - startMinutes : startMinutes - endMinutes
    if (startMinutes !== endMinutes) {
      width = ((startHour === 0 ? (endHour - 1 - startHour) : (endHour - startHour)) * 86) + (minutesDiff * 21.5)
    } else {
      width = (startHour === 0 ? (endHour - 1 - startHour) : (endHour - startHour)) * 86
    }
    return width
  }

  const handleBlockHourToShow = (block, user) => {
    if (!block) return
    return block.start && block.end &&
      <td>
        <Block
          innerWidth={handleHourBlockWidth(block)}
          rowPosition={moment(block?.start).hour()}
          cellPosition={moment(block?.start).minutes() / 15}
          cellWidth={86}
          cellSections={21.5}
          onClick={() => handleSelectDriver(user, block)}
        >
          <UserName>{`${!!user?.name ? user?.name : ''} ${!!user?.lastname ? user?.lastname : ''}`}</UserName>
          <p>{moment(block.start).format(hourFormat)} - {moment(block.end).format(hourFormat)}</p>
        </Block>
      </td>
  }

  const handleBlockWeekToShow = (block, user, allBlocks, blockByDay) => {
    if (!block) return
    return block.start && block.end && (
      blockByDay?.length === 1 ?
        <Block
          innerWidth={106}
          rowPosition={allBlocks.indexOf(moment(block?.start).format('YYYY-MM-DD'))}
          cellPosition={4}
          cellWidth={160}
          cellSections={6.67}
          onClick={() => handleSelectDriver(user, block)}
        >
          <p>{moment(block.start).format(hourFormat)} - {moment(block.end).format(hourFormat)}</p>
        </Block>
        :
        <ButtonWrapper
          rowPosition={allBlocks.indexOf(moment(block?.start).format('YYYY-MM-DD'))}
          cellPosition={moment(block?.start).hour()}
          cellWidth={160}
          cellSections={6.67}
        >
          <Button
            color='lightPrimary'
            borderRadius='8px'
            onClick={() => setStackEventsState({ open: true, events: blockByDay, user: user })}
          >
            {blockByDay?.length} {t('BLOCKS', 'Blocks')}
          </Button>
        </ButtonWrapper>
    )
  }

  const getBlocksByDate = (blocks, _date) => {
    return blocks?.filter(obj => {
      const objDate = moment(obj.start)
      return objDate.date() === moment(_date).date()
    })
  }

  useEffect(() => {
    if (driversList.loading || driversList?.users?.length > 0 || paginationProps.totalPages <= 1) return
    if (paginationProps.currentPage !== paginationProps.totalPages) {
      handleChangePage(paginationProps.currentPage)
    } else {
      handleChangePage(paginationProps.currentPage - 1)
    }
  }, [driversList?.users, paginationProps])

  return (
    <UsersListingContainer>
      <UsersConatiner>
        <UserTableWrapper>
          <UsersTable>
            <thead>
              <tr>
                <ThId>{t('ID', 'ID')}</ThId>
                <ThName>{t('NAME', 'Name')}</ThName>
                {getDatesInRange(date).length === 1 && (is12hours ? TwelveHours : TwentyFourHours).map((hour, i) => (
                  <HoursHeader key={i}>{hour}</HoursHeader>
                ))}
                {getDatesInRange(date).length > 1 && getDatesInRange(date).map((_date, i) => (
                  <WeekHeader key={i}>
                    <span>{moment(_date).format('ddd')}</span>
                    <h4>{moment(_date).date()}</h4>
                  </WeekHeader>
                ))}
              </tr>
            </thead>
            {driversList?.loading ? (
              [...Array(10).keys()].map(i => (
                <tbody key={i}>
                  <tr>
                    <td>
                      <UserIdWrapper>
                        <Skeleton width={40} />
                      </UserIdWrapper>
                    </td>
                    <td>
                      <UserMainInfo>
                        <WrapperImage isSkeleton>
                          <Skeleton width={45} height={45} />
                        </WrapperImage>
                        <InfoBlock>
                          <p className='bold'><Skeleton width={150} /></p>
                          <p><Skeleton width={100} /></p>
                        </InfoBlock>
                      </UserMainInfo>
                    </td>
                  </tr>
                </tbody>
              ))
            ) : (
              driversList?.users?.map((user, i) => (
                <tbody key={i}>
                  <UserRow>
                    <td>
                      <UserIdWrapper>
                        {user?.id}
                      </UserIdWrapper>
                    </td>
                    <td>
                      <UserMainInfo>
                        <WrapperImage>
                          {user?.photo ? (
                            <Image bgimage={optimizeImage(user?.photo, 'h_50,c_limit')} />
                          ) : (
                            <FaUserAlt />
                          )}
                        </WrapperImage>
                        <InfoBlock>
                          <span className='bold'>{`${user.name ?? ''} ${user?.lastname ?? ''}`}</span>
                          <span>{user?.email}</span>
                        </InfoBlock>
                        {(user?.phone_verified || user?.email_verified) && (
                          <VerifiedItemsContainer>
                            {!!user?.phone_verified && (
                              <VerifiedItem>
                                <Phone />
                                {t('VERIFIED', 'Verified')}
                              </VerifiedItem>
                            )}

                            {!!user?.email_verified && (
                              <VerifiedItem>
                                <Envelope />
                                {t('VERIFIED', 'Verified')}
                              </VerifiedItem>
                            )}
                          </VerifiedItemsContainer>
                        )}
                      </UserMainInfo>
                    </td>
                    {getDatesInRange(date)?.length === 1 && (
                      <>
                        {[...Array(24 - user?.delivery_blocks?.length).keys()].map(i => (
                          <td key={i}><EmptyBlock onClick={() => handleSelectDriver(user, null)} /></td>
                        ))}
                        {user?.delivery_blocks?.map((block, j) => (
                          <React.Fragment key={j}>{handleBlockHourToShow(block, user)}</React.Fragment>
                        ))}
                      </>
                    )}
                    {getDatesInRange(date)?.length > 1 && getDatesInRange(date).map((_date, i) => (
                      <React.Fragment key={i}>
                        <td key={i}>
                          {getBlocksByDate(user?.delivery_blocks, _date)?.map((block, j) => {
                            return j === 0 && handleBlockWeekToShow(block, user, getDatesInRange(date), getBlocksByDate(user?.delivery_blocks, _date))
                          })}
                          <EmptyBlock onClick={() => handleSelectDriver(user, null, _date)} />
                        </td>
                      </React.Fragment>
                    ))}
                  </UserRow>
                </tbody>
              ))
            )}
          </UsersTable>
        </UserTableWrapper>
        <UsersBottomContainer>
          {driversList?.users?.length > 0 && (
            <WrapperPagination>
              <Pagination
                currentPage={paginationProps.currentPage}
                totalPages={paginationProps.totalPages}
                handleChangePage={handleChangePage}
                handleChangePageSize={handleChangePageSize}
                defaultPageSize={paginationProps?.pageSize}
              />
            </WrapperPagination>
          )}
        </UsersBottomContainer>
      </UsersConatiner>

      <ConfirmAdmin
        open={confirmAdmin.open}
        onClose={() => setConfirmAdmin({ ...confirmAdmin, open: false })}
        onConfirm={confirmAdmin.handleOnConfirm}
      />
    </UsersListingContainer>
  )
}
