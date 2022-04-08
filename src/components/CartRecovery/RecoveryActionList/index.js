import React, { useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useLanguage } from 'ordering-components-admin'
import { ColumnAllowSettingPopover, Pagination } from '../../Shared'
import { Switch } from '../../../styles'
import { useTheme } from 'styled-components'

import {
  Container,
  Table,
  Tbody,
  SwitchWrapper,
  DragImageWrapper,
  PagesBottomContainer,
  AddNewPageButton
} from './styles'

export const RecoveryActionList = (props) => {
  const {
    recoveryActionList,
    paginationProps,
    setPaginationProps,
    getRecoveryList,
    handleOpenDetail,
    handleUpdateAction,
    selectedAction
  } = props

  const [, t] = useLanguage()
  const theme = useTheme()

  const [openPopover, setOpenPopover] = useState(false)
  const [allowColumns, setAllowColumns] = useState({
    name: true,
    description: true,
    actions: true
  })

  const optionsDefault = [
    {
      value: 'name',
      content: t('NAME', 'Name')
    },
    {
      value: 'description',
      content: t('DESCRIPTION', 'Description')
    },
    {
      value: 'actions',
      content: t('ACTIONS', 'Actions')
    }
  ]

  const handleChangePage = (page) => {
    getRecoveryList(page, paginationProps?.pageSize)
  }

  const handleChangePageSize = (pageSize) => {
    const expectedPage = Math.ceil(paginationProps.from / pageSize)
    setPaginationProps({ ...paginationProps, pageSize: pageSize })
    getRecoveryList(expectedPage, pageSize)
  }

  const handleChangeAllowColumns = (type) => {
    setAllowColumns({
      ...allowColumns,
      [type]: !allowColumns[type]
    })
  }

  const handleClickRecoverAction = (e, action) => {
    const inValid = e.target.closest('.enable_control')
    if (inValid) return
    handleOpenDetail(action)
  }

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th>{t('ACTION', 'Action')}</th>
            {allowColumns?.description && (
              <th>{t('DESCRIPTION', 'Description')}</th>
            )}
            <th className='allow-colums action'>
              <ColumnAllowSettingPopover
                open={openPopover}
                allowColumns={allowColumns}
                optionsDefault={optionsDefault}
                onClick={() => setOpenPopover(!openPopover)}
                onClose={() => setOpenPopover(false)}
                handleChangeAllowColumns={handleChangeAllowColumns}
              />
            </th>
          </tr>
        </thead>
        {recoveryActionList?.loading ? (
          [...Array(8).keys()].map(i => (
            <Tbody key={i}>
              <tr>
                <td className='actionInfo'>
                  <div>
                    <div className='drag-wrapper'>
                      <DragImageWrapper>
                        <Skeleton width={20} height={20} />
                      </DragImageWrapper>
                      <p><Skeleton width={90} /></p>
                    </div>
                  </div>
                </td>
                <td>
                  <Skeleton width={100} height={30} />
                </td>
                <td className='action'>
                  <SwitchWrapper>
                    <p className='recovery-enabled'><Skeleton width={80} /></p>
                    <Skeleton width={40} height={20} />
                  </SwitchWrapper>
                </td>
              </tr>
            </Tbody>
          ))
        ) : (
          recoveryActionList?.actions.map((action, i) => (
            <Tbody
              key={i}
              onClick={(e) => handleClickRecoverAction(e, action)}
              className={`${selectedAction?.id === action.id ? 'active' : ''}`}
            >
              <tr>
                <td className='actionInfo'>
                  <div>
                    <div className='drag-wrapper'>
                      <DragImageWrapper>
                        <img
                          src={theme.images.icons?.sixDots}
                          alt='six dots'
                          draggable
                          // onDragStart={e => handleDragStart(e, product.id)}
                        />
                      </DragImageWrapper>
                      {allowColumns?.name && <p>{action?.name}</p>}
                    </div>
                  </div>
                </td>
                {allowColumns?.description && (
                  <td className='actionInfo'>
                    <div>
                      <div className='description'>
                        <span>{action?.description}</span>
                      </div>
                    </div>
                  </td>
                )}
                <td className='action'>
                  {allowColumns?.actions && (
                    <SwitchWrapper>
                      <p className='recovery-enabled'>{t('ENABLE', 'Enable')}</p>
                      <Switch
                        defaultChecked={action?.enabled}
                        onChange={val => handleUpdateAction(action.id, { enabled: val })}
                        className='enable_control'
                      />
                    </SwitchWrapper>
                  )}
                </td>
              </tr>
            </Tbody>
          ))
        )}
      </Table>

      {!recoveryActionList.loading && (
        <PagesBottomContainer>
          <AddNewPageButton
            onClick={() => handleOpenDetail({})}
          >
            {t('ADD_NEW_RECOVERY_ACTION', 'Add new recovery action')}
          </AddNewPageButton>
          {recoveryActionList?.actions?.length > 0 && (
            <Pagination
              currentPage={paginationProps?.currentPage}
              totalPages={paginationProps?.totalPages}
              handleChangePage={handleChangePage}
              defaultPageSize={paginationProps?.pageSize}
              handleChangePageSize={handleChangePageSize}
            />
          )}
        </PagesBottomContainer>
      )}
    </Container>
  )
}
