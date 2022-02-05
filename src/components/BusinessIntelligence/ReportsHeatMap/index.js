import React, { useState, useEffect } from 'react'
import { useLanguage, useConfig, useSession, AdvancedReports as AdvancedReportsController, GoogleMapsMap } from 'ordering-components-admin'
import Skeleton from 'react-loading-skeleton'
import { Button } from '../../../styles'
import { useTheme } from 'styled-components'
import { Alert, Modal } from '../../Shared'
import { AnalyticsBusinessFilter } from '../AnalyticsBusinessFilter'
import { ReportsDriverFilter } from '../ReportsDriverFilter'
import { ReportsBrandFilter } from '../ReportsBrandFilter'
import { AnalyticsCalendar } from '../AnalyticsCalendar'
import { ReportsDriverGroupFilter } from '../ReportsDriverGroupFilter'
import {
  HeatMapContainer,
  Title,
  ButtonActionList,
  BrandBusinessWrapper,
  CalendarWrapper,
  DistancePerBrandWrapper,
  DistanceTitleBlock,
  WrapperMap
} from './styles'

const ReportsHeatMapUI = (props) => {
  const {
    filterList,
    handleChangeFilterList,
    reportData
  } = props

  const [, t] = useLanguage()
  const [configState] = useConfig()
  const [{ user }] = useSession()
  const [isBusinessFilter, setIsBusinessFilter] = useState(false)
  const [isDriverFilter, setIsDriverFilter] = useState(false)
  const [isDriverGroupFilter, setIsDriverGroupFilter] = useState(false)
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [availableDriverIds, setAvailableDriverIds] = useState(null)
  const [isBrandFilter, setIsBrandFilter] = useState(false)
  const [isHeat, setIsHeat] = useState(false)
  const theme = useTheme()

  // const googleMapsApiKey = configs?.google_maps_api_key?.value
  const googleMapsControls = {
    defaultZoom: 15,
    zoomControl: false,
    streetViewControl: false,
    fullscreenControl: false,
    mapTypeId: 'roadmap', // 'roadmap', 'satellite', 'hybrid', 'terrain'
    mapTypeControl: false,
    mapTypeControlOptions: {
      mapTypeIds: ['roadmap', 'satellite']
    }
  }

  const fillStyle = {
    fillColor: '#2C7BE5',
    strokeColor: '#03459E',
    fillOpacity: 0.2,
    strokeWeight: 2,
    editable: false
  }

  const defaultPosition = { lat: 40.77473399999999, lng: -73.9653844 }

  const handleChangeDate = (date1, date2) => {
    handleChangeFilterList({ ...filterList, from: date1, to: date2 })
  }

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  useEffect(() => {
    if (reportData?.error) {
      setAlertState({
        open: true,
        content: reportData?.error
      })
    }
  }, [reportData?.error])

  useEffect(() => {
    setIsHeat(false)
  }, [reportData?.content?.locations])

  return (
    <>
      <HeatMapContainer>
        <Title>{t('HEAT_MAP_WITH', 'Heat map with')}</Title>
        <ButtonActionList>
          <BrandBusinessWrapper>
            <Button
              onClick={() => setIsBrandFilter(true)}
            >
              {t('BRAND', 'Brand')} ({filterList?.franchises_id ? filterList?.franchises_id?.length : t('ALL', 'All')})
            </Button>
            <Button
              onClick={() => setIsBusinessFilter(true)}
            >
              {t('BUSINESS', 'Business')} ({filterList?.businessIds ? filterList?.businessIds.length : t('ALL', 'All')})
            </Button>
            <Button
              onClick={() => setIsDriverGroupFilter(true)}
            >
              {t('DRIVER_GROUP', 'Driver group')} ({filterList?.driver_groups_ids ? filterList?.driver_groups_ids.length : t('ALL', 'All')})
            </Button>
            <Button
              onClick={() => setIsDriverFilter(true)}
            >
              {t('DRIVER', 'Driver')} ({filterList?.drivers_ids ? filterList?.drivers_ids.length : t('ALL', 'All')})
            </Button>
          </BrandBusinessWrapper>
          <CalendarWrapper>
            <AnalyticsCalendar
              handleChangeDate={handleChangeDate}
              defaultValue={filterList}
            />
          </CalendarWrapper>
        </ButtonActionList>
        <DistancePerBrandWrapper>
          <DistanceTitleBlock active={reportData?.content?.locations?.length > 0}>
            <h2>{t('HEAT_MAP_WITH', 'Heat map with')}</h2>
          </DistanceTitleBlock>
          {reportData?.loading ? (
            <Skeleton height={350} />
          ) : (
            <WrapperMap>
              {
                configState?.configs?.google_maps_api_key?.value && (
                  <>
                    <GoogleMapsMap
                      apiKey={configState?.configs?.google_maps_api_key?.value}
                      location={user?.location || defaultPosition}
                      locations={reportData?.content?.locations}
                      data={reportData?.content?.zones}
                      fillStyle={fillStyle}
                      mapControls={googleMapsControls}
                      isHeatMap
                      isHeat={isHeat}
                      markerIcon={theme?.images?.icons?.mapMarker}
                    />
                    <Button
                      borderRadius='7.6px'
                      color='primary'
                      disabled={reportData.loading}
                      onClick={() => setIsHeat(!isHeat)}
                    >
                      {isHeat ? t('GROUPED', 'Grouped') : t('HEATMAP', 'Heatmap')}
                    </Button>
                  </>
                )
              }
            </WrapperMap>
          )}
        </DistancePerBrandWrapper>
        <Modal
          width='50%'
          height='80vh'
          padding='30px'
          title={t('BUSINESSES', 'Businesses')}
          open={isBusinessFilter}
          onClose={() => setIsBusinessFilter(false)}
        >
          <AnalyticsBusinessFilter
            {...props}
            onClose={() => setIsBusinessFilter(false)}
            isFranchise
          />
        </Modal>
        <Modal
          width='50%'
          height='80vh'
          padding='30px'
          title={t('DRIVER', 'Driver')}
          open={isDriverFilter}
          onClose={() => setIsDriverFilter(false)}
        >
          <ReportsDriverFilter
            {...props}
            onClose={() => setIsDriverFilter(false)}
            availableDriverIds={availableDriverIds}
          />
        </Modal>
        <Modal
          width='50%'
          height='80vh'
          padding='30px'
          title={t('DRIVER_GROUP', 'Driver group')}
          open={isDriverGroupFilter}
          onClose={() => setIsDriverGroupFilter(false)}
        >
          <ReportsDriverGroupFilter
            {...props}
            onClose={() => setIsDriverGroupFilter(false)}
            setAvailableDriverIds={setAvailableDriverIds}
          />
        </Modal>
        <Modal
          width='50%'
          height='80vh'
          padding='30px'
          title={t('BRAND', 'Brand')}
          open={isBrandFilter}
          onClose={() => setIsBrandFilter(false)}
        >
          <ReportsBrandFilter
            {...props} onClose={() => setIsBrandFilter(false)}
          />
        </Modal>
      </HeatMapContainer>
      <Alert
        title={t('HEAT_MAP', 'Heat map')}
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

export const ReportsHeatMap = (props) => {
  const reportsHeatMapProps = {
    ...props,
    UIComponent: ReportsHeatMapUI,
    endpoint: 'orders_heat_map'
  }
  return <AdvancedReportsController {...reportsHeatMapProps} />
}
