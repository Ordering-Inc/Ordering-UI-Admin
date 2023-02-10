import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { useLanguage, useConfig, BusinessWalletsList as BusinessWalletsListController } from 'ordering-components-admin'
import Skeleton from 'react-loading-skeleton'
import { ChevronRight } from 'react-bootstrap-icons'
import { SideBar } from '../../Shared'
import { Select } from '../../../styles/Select/FirstSelect'

import {
  WalletsListContainer,
  WalletOption,
  WalletName,
  Option,
  DetailsContainer
} from './styles'

const BusinessWalletsListUI = (props) => {
  const {
    loyaltyPlanState,
    walletsListState,
    setIsExtendExtraOpen,
    setIsOpenWalletDetails,
    isClose,
    handleClosePaymethodDetails,
    handleUpdateWallet
  } = props

  const history = useHistory()
  const query = new URLSearchParams(useLocation().search)
  const [, t] = useLanguage()
  const [{ configs }] = useConfig()
  const [isOpenDetails, setIsOpenDetails] = useState(false)
  const [currentConfig, setCurrentConfig] = useState(null)
  const [options, setOptions] = useState(null)
  const isWalletCashEnabled = configs?.wallet_cash_enabled?.value === '1'
  const isWalletPointsEnabled = configs?.wallet_credit_point_enabled?.value === '1'

  const walletsEnabled = {
    wallet_cash_enabled: isWalletCashEnabled,
    wallet_credit_point_enabled: isWalletPointsEnabled && loyaltyPlanState.created
  }

  const walletsLangs = {
    wallet_cash_enabled: t('WALLET_CASH_ENABLED', 'Wallet cash enabled'),
    wallet_credit_point_enabled: t('WALLET_CREDIT_POINT_ENABLED', 'Wallet credit point enabled')
  }

  const handleOpenWallet = (config, isInitialRender) => {
    setIsOpenWalletDetails(true)
    handleClosePaymethodDetails()
    setCurrentConfig(config)
    setIsExtendExtraOpen(true)
    setIsOpenDetails(true)
    if (!isInitialRender) {
      const businessId = query.get('id')
      const section = query.get('section')
      history.replace(`${location.pathname}?id=${businessId}&section=${section}&wallet=${config.id}`)
    }
  }
  const handleCloseWallet = () => {
    setIsOpenWalletDetails(false)
    setIsOpenDetails(false)
    setIsExtendExtraOpen(false)
    setCurrentConfig(null)
    const businessId = query.get('id')
    const section = query.get('section')
    history.replace(`${location.pathname}?id=${businessId}&section=${section}`)
  }

  useEffect(() => {
    if (!isOpenDetails || !currentConfig?.options) return
    const selectedTypes = currentConfig.options?.map(item => {
      return { value: item.value, content: <Option>{t(item.text.toUpperCase())}</Option> }
    })
    setOptions(selectedTypes)
  }, [currentConfig, isOpenDetails])

  useEffect(() => {
    if (!isClose) return
    setIsOpenWalletDetails(false)
    setIsOpenDetails(false)
    setCurrentConfig(null)
  }, [isClose])

  useEffect(() => {
    if (loyaltyPlanState.loading || walletsListState.loading) return
    const walletId = query.get('wallet')
    if (walletId) {
      const initWallet = walletsListState.wallets.find(wallet => wallet.id === Number(walletId))
      if (initWallet) {
        handleOpenWallet(initWallet, true)
      }
    }
  }, [loyaltyPlanState.loading, walletsListState.loading])

  return (
    <>
      {(loyaltyPlanState.loading || walletsListState.loading) ? (
        <WalletsListContainer>
          <Skeleton height={30} />
        </WalletsListContainer>
      ) : (
        <>
          {walletsListState.wallets.length > 0 && (walletsEnabled.wallet_cash_enabled || walletsEnabled.wallet_credit_point_enabled) && (
            <WalletsListContainer>
              <h2>{t('WALLETS', 'Wallets')}</h2>
              {walletsListState.wallets.filter(config => walletsEnabled[config.key]).map(config => (
                <WalletOption
                  key={config.id}
                  active={config.id === currentConfig?.id}
                  onClick={() => handleOpenWallet(config)}
                >
                  <WalletName>{walletsLangs[config.key]}</WalletName>
                  <ChevronRight />
                </WalletOption>
              ))}
            </WalletsListContainer>
          )}
        </>
      )}
      {isOpenDetails && (
        <SideBar
          isBorderShow
          open={isOpenDetails}
          onClose={handleCloseWallet}
        >
          <DetailsContainer>
            <h2>{currentConfig?.name}</h2>
            {currentConfig?.type === 2 && options && (
              <Select
                defaultValue={currentConfig?.value}
                options={options}
                onChange={(typeValue) => handleUpdateWallet(currentConfig?.id, { value: typeValue })}
                placeholder={t('SELECT_A_OPTION', 'Select a option')}
              />
            )}
          </DetailsContainer>
        </SideBar>
      )}
    </>
  )
}

export const BusinessWalletsList = (props) => {
  const businessWalletsListProps = {
    ...props,
    UIComponent: BusinessWalletsListUI
  }
  return <BusinessWalletsListController {...businessWalletsListProps} />
}
