import React, { useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useLanguage } from 'ordering-components-admin'
import { Switch } from '../../../styles'
import { ColumnAllowSettingPopover, Pagination } from '../../Shared'

import {
  Container,
  Table,
  Tbody,
  PagesBottomContainer,
  AddNewPageButton,
  SwitchWrapper,
  StatusWrapper,
  StatusPoint
} from './styles'

export const CampaignList = (props) => {
  const {
    campaignList,
    getCampaignList,
    paginationProps,
    setPaginationProps,
    handleOpenDetail,
    selectedCampaign,
    handleUpdateCampaign
  } = props

  const [, t] = useLanguage()

  const [allowColumns, setAllowColumns] = useState({
    campaign: true,
    contact_type: true,
    audience: true,
    // sales_general: true,
    // open_rate: true,
    // click_rate: true,
    update: true,
    actions: true
  })

  const optionsDefault = [
    {
      value: 'campaign',
      content: t('CAMPAIGN', 'Campaign')
    },
    {
      value: 'contact_type',
      content: t('CONTACT_TYPE', 'Contact type')
    },
    {
      value: 'audience',
      content: t('AUDIENCE', 'Audience')
    },
    // {
    //   value: 'sales_general',
    //   content: t('SALES_GENERAL', 'Sales general')
    // },
    // {
    //   value: 'open_rate',
    //   content: t('OPEN_RATE', 'Open rate')
    // },
    // {
    //   value: 'click_rate',
    //   content: t('CLICK_RATE', 'Click rate')
    // },
    {
      value: 'update',
      content: t('UPDATE', 'Update')
    },
    {
      value: 'actions',
      content: t('ACTIONS', 'Actions')
    }
  ]

  const checkColor = (status) => {
    const index = status.toLocaleLowerCase()
    if (index === 'ended') return '#00D27A'
    else if (index === 'scheduled') return '#FFC700'
    else if (index === 'draft') return '#E9ECEF'
    else return '#E9ECEF'
  }

  const handleChangeAllowColumns = (type) => {
    setAllowColumns({
      ...allowColumns,
      [type]: !allowColumns[type]
    })
  }

  const handleChangePage = (page) => {
    getCampaignList(page, paginationProps?.pageSize)
  }

  const handleChangePageSize = (pageSize) => {
    const expectedPage = Math.ceil(paginationProps.from / pageSize)
    setPaginationProps({ ...paginationProps, pageSize: pageSize })
    getCampaignList(expectedPage, pageSize)
  }

  const handleClickCampaign = (e, campaign) => {
    const inValid = e.target.closest('.enable_control')
    if (inValid) return
    handleOpenDetail(campaign)
  }

  return (
    <>
      <Container>
        <Table>
          <thead>
            <tr>
              {allowColumns?.campaign && (
                <th>{t('CAMPAIGN', 'Campaign')}</th>
              )}
              {allowColumns?.contact_type && (
                <th>{t('CONTACT_TYPE', 'Contact type')}</th>
              )}
              {allowColumns?.audience && (
                <th>{t('AUDIENCE', 'Audience')}</th>
              )}
              {/* {allowColumns?.sales_general && (
                <th>{t('SALES_GENERAL', 'Sales general')}</th>
              )}
              {allowColumns?.open_rate && (
                <th>{t('OPEN_RATE', 'Open rate')}</th>
              )}
              {allowColumns?.click_rate && (
                <th>{t('CLICK_RATE', 'Click rate')}</th>
              )} */}
              <th className='allow-colums action'>
                <ColumnAllowSettingPopover
                  allowColumns={allowColumns}
                  optionsDefault={optionsDefault}
                  handleChangeAllowColumns={handleChangeAllowColumns}
                  title={t('DISPLAYED_DATA_THE_ORDER', 'Displayed data the order')}
                />
              </th>
            </tr>
          </thead>
          {campaignList?.loading ? (
            [...Array(8).keys()].map(i => (
              <Tbody key={i}>
                <tr>
                  {allowColumns?.campaign && (
                    <td>
                      <Skeleton width={120} height={20} />
                    </td>
                  )}
                  {allowColumns?.contact_type && (
                    <td>
                      <Skeleton width={100} height={20} />
                    </td>
                  )}
                  {allowColumns?.audience && (
                    <td>
                      <Skeleton width={100} height={20} />
                    </td>
                  )}
                  {/* {allowColumns?.sales_general && (
                    <td>
                      <Skeleton width={50} height={20} />
                    </td>
                  )}
                  {allowColumns?.open_rate && (
                    <td>
                      <Skeleton width={50} height={20} />
                    </td>
                  )}
                  {allowColumns?.click_rate && (
                    <td>
                      <Skeleton width={50} height={20} />
                    </td>
                  )} */}
                  <td>
                    <SwitchWrapper>
                      <p className='campaign-enabled'><Skeleton width={80} height={20} /></p>
                      <Skeleton width={40} height={20} />
                    </SwitchWrapper>
                  </td>
                </tr>
              </Tbody>
            ))
          ) : (
            campaignList?.campaigns.map((campaign, i) => (
              <Tbody
                key={i}
                className={selectedCampaign?.id === campaign.id ? 'active' : ''}
                onClick={(e) => handleClickCampaign(e, campaign)}
              >
                <tr>
                  {allowColumns?.campaign && (
                    <td className='right-border'>
                      <div>
                        <p className='bold'>{campaign?.name}</p>
                      </div>
                    </td>
                  )}
                  {allowColumns?.contact_type && (
                    <td>{campaign?.contact_type}</td>
                  )}
                  {allowColumns?.audience && (
                    <td>{campaign?.audience_type}</td>
                  )}
                  {/* {allowColumns?.sales_general && (
                    <td>05</td>
                  )}
                  {allowColumns?.open_rate && (
                    <td>02</td>
                  )}
                  {allowColumns?.click_rate && (
                    <td className='right-border'>
                      <div>
                        <p>02</p>
                      </div>
                    </td>
                  )} */}
                  {(allowColumns?.update || allowColumns?.actions) && (
                    <td>
                      {allowColumns?.actions && campaign?.audience_type === 'dynamic' && (
                        <SwitchWrapper>
                          <p className='campaign-enabled'>{t('ENABLE', 'Enable')}</p>
                          <Switch
                            defaultChecked={campaign?.enabled}
                            onChange={val => handleUpdateCampaign(campaign.id, { enabled: val })}
                            className='enable_control'
                          />
                        </SwitchWrapper>
                      )}
                      {allowColumns?.update && campaign?.audience_type === 'fixed' && (
                        <StatusWrapper>
                          <p>{campaign?.status}</p>
                          <StatusPoint style={{ background: checkColor(campaign?.status) }} />
                        </StatusWrapper>
                      )}
                    </td>
                  )}
                </tr>
              </Tbody>
            ))
          )}
        </Table>
      </Container>
      {!campaignList.loading && (
        <PagesBottomContainer>
          <AddNewPageButton
            onClick={() => handleOpenDetail({})}
          >
            {t('ADD_NEW_CAMPAIGN', 'Add new campaign')}
          </AddNewPageButton>
          {campaignList?.campaigns?.length > 0 && (
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
    </>
  )
}
