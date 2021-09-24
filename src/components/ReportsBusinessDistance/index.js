import React from 'react'
import { ReportsBusinessDistance as ReportsBusinessDistanceController } from './naked'
import { useLanguage } from 'ordering-components-admin'
import { Button } from '../../styles/Buttons'
import { AnalyticsCalendar } from '../AnalyticsCalendar'
import { Download } from 'react-bootstrap-icons'
import {
  ReportsDistanceContainer,
  Title,
  ButtonActionList,
  BrandBusinessWrapper,
  CalendarWrapper,
  DistancePerBrandWrapper,
  DistanceTitleBlock,
  DistanceTable,
  Thead,
  Tbody,
  Tfoot,
  DistanceBarChartWrapper
} from './styles'

const ReportsBusinessDistanceUI = (props) => {
  const [, t] = useLanguage()

  const handleChangeDate = (date1, date2) => {
    console.log(date1, date2)
  }

  const defaultValue = { from: '', to: '' }

  return (
    <ReportsDistanceContainer>
      <Title>{t('DISTANCE', 'Distance')}</Title>
      <ButtonActionList>
        <BrandBusinessWrapper>
          <Button>{t('BRAND', 'Brand')}(All)</Button>
          <Button>{t('BUSINESS', 'Business')}(All)</Button>
        </BrandBusinessWrapper>
        <CalendarWrapper>
          <AnalyticsCalendar
            handleChangeDate={handleChangeDate}
            defaultValue={defaultValue}
          />
          <AnalyticsCalendar
            handleChangeDate={handleChangeDate}
            defaultValue={defaultValue}
          />
        </CalendarWrapper>
      </ButtonActionList>
      <DistancePerBrandWrapper>
        <DistanceTitleBlock>
          <h2>{t('DISTANCE_PER_BRAND', 'Distance per brand')}</h2>
          <Download />
        </DistanceTitleBlock>
        <DistanceTable>
          <Thead>
            <tr>
              <th>BRAND</th>
              <th>
                <p>20 - 25 May, 2021</p>
                <p>ESTIMATE DISTANCE (KM)</p>
              </th>
              <th>
                <p>20 - 25 May, 2021</p>
                <p>ESTIMATE DISTANCE (KM)</p>
              </th>
            </tr>
          </Thead>
          <Tbody>
            <tr>
              <td>Burger King</td>
              <td>
                <p>1.47</p>
              </td>
              <td>
                <p>1.41</p>
              </td>
            </tr>
          </Tbody>
          <Tbody>
            <tr>
              <td>Burger King</td>
              <td>
                <p>1.47</p>
              </td>
              <td>
                <p>1.41</p>
              </td>
            </tr>
          </Tbody>
          <Tbody>
            <tr>
              <td>Burger King</td>
              <td>
                <p>1.47</p>
              </td>
              <td>
                <p>1.41</p>
              </td>
            </tr>
          </Tbody>
          <Tbody>
            <tr>
              <td>Burger King</td>
              <td>
                <p>1.47</p>
              </td>
              <td>
                <p>1.41</p>
              </td>
            </tr>
          </Tbody>
          <Tbody>
            <tr>
              <td>Burger King</td>
              <td>
                <p>1.47</p>
              </td>
              <td>
                <p>1.41</p>
              </td>
            </tr>
          </Tbody>
          <Tbody>
            <tr>
              <td>Burger King</td>
              <td>
                <p>1.47</p>
              </td>
              <td>
                <p>1.41</p>
              </td>
            </tr>
          </Tbody>
          <Tbody>
            <tr>
              <td>Burger King</td>
              <td>
                <p>1.47</p>
              </td>
              <td>
                <p>1.41</p>
              </td>
            </tr>
          </Tbody>
          <Tfoot>
            <tr>
              <td>Grand Total</td>
              <td>1.51</td>
              <td>1.78</td>
            </tr>
          </Tfoot>
        </DistanceTable>
        <DistanceBarChartWrapper>
          bar chart
        </DistanceBarChartWrapper>
      </DistancePerBrandWrapper>
    </ReportsDistanceContainer>
  )
}

export const ReportsBusinessDistance = (props) => {
  const reportsBusinessDistanceProps = {
    ...props,
    UIComponent: ReportsBusinessDistanceUI
  }
  return <ReportsBusinessDistanceController {...reportsBusinessDistanceProps} />
}
