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
    handleUpdateCampaign,
    isDisabledFeature
  } = props

  const [, t] = useLanguage()

  const [allowColumns, setAllowColumns] = useState({
    campaign: true,
    contact_type: true,
    audience: true,
    sent_count: true,
    open_count: true,
    unsubscribed_count: true,
    bounced_count: true,
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
    {
      value: 'sent_count',
      content: t('SENT', 'Sent')
    },
    {
      value: 'open_count',
      content: t('OPENS', 'Opens')
    },
    {
      value: 'unsubscribed_count',
      content: t('UNSUBSCRIBED', 'Unsubscribed')
    },
    {
      value: 'bounced_count',
      content: t('BOUNCES', 'Bounces')
    },
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
      <Container isDisabledFeature={isDisabledFeature}>
        <Table isRelative={campaignList?.campaigns?.length > 5}>
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
              {allowColumns?.sent_count && (
                <th>{t('SENT', 'Sent')}</th>
              )}
              {allowColumns?.open_count && (
                <th>{t('OPENS', 'Opens')}</th>
              )}
              {allowColumns?.unsubscribed_count && (
                <th>{t('UNSUBSCRIBED', 'Unsubscribed')}</th>
              )}
              {allowColumns?.bounced_count && (
                <th>{t('BOUNCES', 'Bounces')}</th>
              )}
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
                  {allowColumns?.sent_count && (
                    <td>
                      <Skeleton width={100} height={20} />
                    </td>
                  )}
                  {allowColumns?.open_count && (
                    <td>
                      <Skeleton width={100} height={20} />
                    </td>
                  )}
                  {allowColumns?.unsubscribed_count && (
                    <td>
                      <Skeleton width={100} height={20} />
                    </td>
                  )}
                  {allowColumns?.bounced_count && (
                    <td>
                      <Skeleton width={100} height={20} />
                    </td>
                  )}
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
                  {allowColumns?.sent_count && (
                    <td>{campaign?.sent_count}</td>
                  )}
                  {allowColumns?.open_count && (
                    <td>{campaign?.open_count}</td>
                  )}
                  {allowColumns?.unsubscribed_count && (
                    <td>{campaign?.unsubscribed_count}</td>
                  )}
                  {allowColumns?.bounced_count && (
                    <td>{campaign?.bounced_count}</td>
                  )}
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
            onClick={() => !isDisabledFeature && handleOpenDetail({})}
            isDisabledFeature={isDisabledFeature}
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
