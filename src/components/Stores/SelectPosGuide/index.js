import React, { useEffect, useState } from 'react'
import { useLanguage, SelectPOS } from 'ordering-components-admin'
import { Select } from '../../../styles/Select/FirstSelect'
import { Button } from '../../../styles'
import { ArrowRight } from 'react-bootstrap-icons'
import { Alert } from '../../Shared'
import { useTheme } from 'styled-components'
import {
  Container,
  SelectPosWrapper,
  Option,
  ButtonWrapper,
  CheckMateAndDeliverectList,
  PosItem
} from './styles'

const SelectPosGuideUI = (props) => {
  const { handleSendMessage, changeFormState, formState } = props

  const theme = useTheme()
  const [, t] = useLanguage()

  const [typeOptions, setTypeOptions] = useState(null)
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [search, setSearch] = useState('')
  const [hasOther, setHasOther] = useState(false)

  const typeList = [
    { value: 'square', content: <Option><img src={theme.images.pos.square} alt='' /><span>{t('SQUARE', 'Square')}</span></Option> },
    { value: 'toast', content: <Option><img src={theme.images.pos.toast} alt='' /><span>{t('TOAST', 'Toast')}</span></Option> },
    { value: 'vectron', content: <Option><img src={theme.images.pos.vectron} alt='' /><span>{t('VECTRON', 'Vectron')}</span></Option> },
    { value: 'clover', content: <Option><img src={theme.images.pos.clover} alt='' /><span>{t('CLOVER', 'Clover')}</span></Option> },
    { value: 'other', content: <Option><span>{t('OTHER', 'Other')}</span></Option> }
  ]

  const checkMateAndDeliverectList = [
    { key: 'par', title: 'PAR Tech - Pixel Point', description: 'POS systems for restaurants', icon: theme.images.pos.par },
    { key: 'el_cheff', title: 'El Cheff', description: 'POS systems for restaurants', icon: theme.images.pos.elCheff },
    { key: 'givex', title: 'Givex', description: 'POS systems for restaurants', icon: theme.images.pos.givex },
    { key: 'ncr_aloha', title: 'NCR Aloha', description: 'POS systems for restaurants', icon: theme.images.pos.ncrAloha },
    { key: 'national_soft', title: 'National Soft', description: 'POS systems for restaurants', icon: theme.images.pos.nationalSoft },
    { key: 'posist', title: 'Posist', description: 'POS systems for restaurants', icon: theme.images.pos.posist },
    { key: 'solution_delivery', title: 'Solutions 4 Delivery', description: 'POS systems for restaurants', icon: theme.images.pos.solutionDelivery },
    { key: 'xetux', title: 'Telnet', description: 'POS systems for restaurants', icon: theme.images.pos.xetux },
    { key: 'vista_entertainment', title: 'Vista Entertainment Solutions', description: 'POS systems for restaurants', icon: theme.images.pos.vistaEntertainment },
    { key: 'soft_restaurant', title: 'SoftRestaurant', description: 'POS systems for restaurants', icon: theme.images.pos.softRestaurant },
    { key: 'telnet', title: 'Telnet', description: 'POS systems for restaurants', icon: theme.images.pos.telnet },
    { key: 'rest_pro', title: 'Rest Pro', description: 'POS systems for restaurants', icon: theme.images.pos.restPro },
    { key: 'infocaja', title: 'Infocaja', description: 'POS systems for restaurants', icon: theme.images.pos.infocaja },
    { key: 'eposNow', title: 'Epos Now', description: 'POS systems for restaurants', icon: theme.images.pos.eposNow },
    { key: 'hippos', title: 'Hippos', description: 'POS systems for restaurants', icon: theme.images.pos.hippos },
    { key: 'light_speed', title: 'Lightspeed', description: 'POS systems for restaurants', icon: theme.images.pos.lightSpeed },
    { key: 'micros_res_3700', title: 'Micros RES 3700', description: 'POS systems for restaurants', icon: theme.images.pos.microsRes },
    { key: 'micros_simphony', title: 'Micros Simphony', description: 'POS systems for restaurants', icon: theme.images.pos.microsSimphony },
    { key: 'prologic_first', title: 'Prologic First', description: 'POS systems for restaurants', icon: theme.images.pos.prologicFirst },
    { key: 'touch_bistro', title: 'TouchBistro', description: 'POS systems for restaurants', icon: theme.images.pos.touchBistro },
    { key: 'revel', title: 'Revel', description: 'POS systems for restaurants', icon: theme.images.pos.revel },
    { key: 'spot_on', title: 'SpotOn', description: 'POS systems for restaurants', icon: theme.images.pos.spotOn },
    { key: 'heart_land', title: 'Heartland', description: 'POS systems for restaurants', icon: theme.images.pos.heartLand },
    { key: 'focus', title: 'Focus', description: 'POS systems for restaurants', icon: theme.images.pos.focus },
    { key: 'speed_line', title: 'SpeedLine', description: 'POS systems for restaurants', icon: theme.images.pos.speedLine },
    { key: 'maitre', title: 'Maitre’D', description: 'POS systems for restaurants', icon: theme.images.pos.maitre },
    { key: 'ncr_silver', title: 'NCR Silver', description: 'POS systems for restaurants', icon: theme.images.pos.ncrSilver },
    { key: 'qu_beyond_pos', title: 'QU Beyond POS', description: 'POS systems for restaurants', icon: theme.images.pos.quBeyondPos },
    { key: 'upserve', title: 'Upserve', description: 'POS systems for restaurants', icon: theme.images.pos.upserve },
    { key: 'diner_ware', title: 'DinerWare', description: 'POS systems for restaurants', icon: theme.images.pos.dinerWare },
    { key: 'digital_dining', title: 'Digital Dining', description: 'POS systems for restaurants', icon: theme.images.pos.digitalDining },
    { key: 'food_tec', title: 'FoodTec', description: 'POS systems for restaurants', icon: theme.images.pos.foodTec },
    { key: 'salido', title: 'Salido', description: 'POS systems for restaurants', icon: theme.images.pos.salido },
    { key: 'cake', title: 'Cake', description: 'POS systems for restaurants', icon: theme.images.pos.cake },
    { key: 'hunger_rush', title: 'HungerRush', description: 'POS systems for restaurants', icon: theme.images.pos.hungerRush },
    { key: 'pixel_point', title: 'PixelPoint', description: 'POS systems for restaurants', icon: theme.images.pos.pixelPoint },
    { key: 'auphan', title: 'Auphan', description: 'POS systems for restaurants', icon: theme.images.pos.auphan },
    { key: 'linga', title: 'Linga', description: 'POS systems for restaurants', icon: theme.images.pos.linga },
    { key: 'one_pos', title: 'OnePOS', description: 'POS systems for restaurants', icon: theme.images.pos.onePos },
    { key: 'edge_serv', title: 'EdgeServ', description: 'POS systems for restaurants', icon: theme.images.pos.edgeServ },
    { key: 'talech', title: 'Talech', description: 'POS systems for restaurants', icon: theme.images.pos.talech },
    { key: 'rezku', title: 'Rezku', description: 'POS systems for restaurants', icon: theme.images.pos.rezku },
    { key: 'north_star', title: 'NorthStar', description: 'POS systems for restaurants', icon: theme.images.pos.northStar },
    { key: 'order_counter', title: 'Order Counter', description: 'POS systems for restaurants', icon: theme.images.pos.orderCounter },
    { key: 'foodics', title: 'Foodics', description: 'POS systems for restaurants', icon: theme.images.pos.foodics },
    { key: 'i_tab_pos', title: 'iTabPOS', description: 'POS systems for restaurants', icon: theme.images.pos.iTabPos },
    { key: 'pos_ist', title: 'POSist', description: 'POS systems for restaurants', icon: theme.images.pos.posIst },
    { key: 'sunami_pos', title: 'Sunami POS', description: 'POS systems for restaurants', icon: theme.images.pos.sunamiPos },
    { key: 'union', title: 'Union', description: 'POS systems for restaurants', icon: theme.images.pos.union },
    { key: 'snappy', title: 'Snappy', description: 'POS systems for restaurants', icon: theme.images.pos.snappy },
    { key: 'four_soft', title: '4Soft', description: 'POS systems for restaurants', icon: theme.images.pos.fourSoft },
    { key: 'super_menu', title: 'Supermenu', description: 'POS systems for restaurants', icon: theme.images.pos.superMenu },
    { key: 'emagine_pos', title: 'EmaginePOS', description: 'POS systems for restaurants', icon: theme.images.pos.emaginePos },
    { key: 'paradise_pos', title: 'ParadisePOS', description: 'POS systems for restaurants', icon: theme.images.pos.paradisePos },
    { key: 'xenial', title: 'Xenial', description: 'POS systems for restaurants', icon: theme.images.pos.xenial },
    { key: 'tids', title: 'Tid3', description: 'POS systems for restaurants', icon: theme.images.pos.tidThree },
    { key: 'ovvi', title: 'Ovvi', description: 'POS systems for restaurants', icon: theme.images.pos.ovvi },
    { key: 'brink_certified', title: 'Brink Certified', description: 'POS systems for restaurants', icon: theme.images.pos.brinkCertified },
    { key: 'rbbt_tech', title: 'Rbbt.Tech', description: 'POS systems for restaurants', icon: theme.images.pos.rbbtTech }
  ]

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  const handleContinue = () => {
    if (!formState?.changes?.pos || (formState?.changes?.pos === 'other' && hasOther)) {
      setAlertState({
        open: true,
        content: t('POS_REQUIRED', 'POS is required')
      })
      return
    }
    if (formState?.changes?.pos === 'other') {
      setHasOther(true)
      return
    }
    handleSendMessage()
  }

  useEffect(() => {
    const options = typeList.filter(option => option?.value.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
    setTypeOptions(options)
  }, [search])

  useEffect(() => {
    if (!formState?.loading && formState?.error) {
      setAlertState({
        open: true,
        content: formState?.error
      })
    }
  }, [formState?.error])

  return (
    <>
      <Container>
        {!hasOther ? (
          <>
            <h2>{t('SELECT_YOUR_POS', 'Select your POS')}</h2>
            <SelectPosWrapper>
              <Select
                options={typeOptions}
                className='select'
                defaultValue={formState?.changes?.pos || ''}
                placeholder={t('SELECT_YOUR_POS', 'Select your POS')}
                onChange={(value) => changeFormState({ pos: value })}
                isShowSearchBar
                searchBarIsCustomLayout
                searchBarIsNotLazyLoad
                searchValue={search}
                handleChangeSearch={(val) => setSearch(val)}
              />
            </SelectPosWrapper>
          </>
        ) : (
          <>
            <h2 className='other'>{t('OTHER', 'Other')}</h2>
            <CheckMateAndDeliverectList>
              {checkMateAndDeliverectList.map((item, idx) => (
                <PosItem
                  key={idx}
                  active={formState?.changes?.pos === item.key}
                  onClick={() => changeFormState({ pos: item.key })}
                >
                  <img src={item.icon} alt='' />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </PosItem>
              ))}
            </CheckMateAndDeliverectList>
          </>
        )}
        <ButtonWrapper hasOther={hasOther}>
          <Button color='primary' onClick={handleContinue}>
            {hasOther ? t('SEND_REQUEST', 'Send Request') : t('CONTINUE', 'Continue')}
            {!hasOther && <ArrowRight />}
          </Button>
        </ButtonWrapper>
      </Container>
      <Alert
        title={t('ORDERING', 'Ordering')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
    </>
  )
}

export const SelectPosGuide = (props) => {
  const selectPosGuideProps = {
    ...props,
    UIComponent: SelectPosGuideUI
  }
  return <SelectPOS {...selectPosGuideProps} />
}
