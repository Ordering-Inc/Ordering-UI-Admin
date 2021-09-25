import React, { useRef, useState } from 'react'
import { ReportsBusinessDistance as ReportsBusinessDistanceController } from './naked'
import { useLanguage } from 'ordering-components-admin'
import { Button } from '../../styles/Buttons'
import { AnalyticsCalendar } from '../AnalyticsCalendar'
import { Download } from 'react-bootstrap-icons'
import { Bar } from 'react-chartjs-2'
import { lighten } from 'polished'
import { Modal } from '../Modal'
import { AnalyticsBusinessFilter } from '../AnalyticsBusinessFilter'
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
  Tfoot
} from './styles'

const ReportsBusinessDistanceUI = (props) => {
  const {
    filterList,
    handleChangeFilterList,
    averageDistanceList
  } = props

  const [, t] = useLanguage()
  const barChartRef = useRef(null)
  const [isBusinessFilter, setIsBusinessFilter] = useState(false)

  const handleChangeDate = (date1, date2) => {
    handleChangeFilterList({ ...filterList, from: date1, to: date2 })
  }

  const generateChartValues = () => {
    if (averageDistanceList?.distances?.header?.rows[0]?.length > 0) {
      const chartValues = []
      for (let i = 0; i < averageDistanceList?.distances?.header?.rows[0]?.length - 1; i++) {
        const values = averageDistanceList?.distances?.body?.rows?.reduce((prev, cur) => [...prev, cur[i + 2].value], [])
        chartValues.push([...values])
      }
      return chartValues
    }
  }

  const generateChartLabels = () => {
    let labels = []
    if (averageDistanceList?.distances?.header?.rows[0]?.length > 0) {
      labels = [...averageDistanceList?.distances?.body?.rows?.reduce((prev, cur) => [...prev, cur[1].value], [])]
    }
    return labels
  }

  const generateDataSets = () => {
    const chartValues = generateChartValues()
    const chartData = []
    chartValues && chartValues.forEach((value, i) => {
      chartData.push({
        label: averageDistanceList?.distances?.header?.rows[0][i + 1].value ?? '',
        data: value,
        fill: true,
        borderColor: lighten(i / 10, '#2C7BE5'),
        backgroundColor: lighten(i / 10, '#2C7BE5'),
        borderWidth: 2,
        borderRadius: 16
      })
    })
    return chartData
  }

  const data = {
    labels: generateChartLabels(),
    datasets: generateDataSets()
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          drawBorder: false,
          display: false
        },
        ticks: {
          font: {
            size: 12,
            color: '#B1BCCC'
          }
        }
      },
      y: {
        grid: {
          drawBorder: false
        },
        ticks: {
          font: {
            size: 12,
            color: '#B1BCCC'
          }
        }
      }
    },
    plugins: {
      legend: {
        position: 'bottom',
        borderRadius: 7.6
      }
    },
    pointRadius: 0
  }

  return (
    <ReportsDistanceContainer>
      <Title>{t('DISTANCE', 'Distance')}</Title>
      <ButtonActionList>
        <BrandBusinessWrapper>
          <Button>{t('BRAND', 'Brand')}(All)</Button>
          <Button
            onClick={() => setIsBusinessFilter(true)}
          >
            {t('BUSINESS', 'Business')} ({filterList?.businessIds ? filterList?.businessIds.length : t('ALL', 'All')})
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
        <DistanceTitleBlock>
          <h2>{t('DISTANCE_PER_BRAND', 'Distance per brand')}</h2>
          <Download />
        </DistanceTitleBlock>
        <DistanceTable>
          {
            averageDistanceList?.distances?.header?.rows.length > 0 && (
              <Thead>
                {
                  averageDistanceList?.distances?.header?.rows.map((tr, i) => (
                    <tr key={i}>
                      {tr?.map((th, j) => (
                        <th key={j} colSpan={th.colspan}>{th.value}</th>
                      ))}
                    </tr>
                  ))
                }
              </Thead>
            )
          }
          {
            averageDistanceList?.distances?.body?.rows.length > 0 && averageDistanceList?.distances?.body?.rows.map((tbody, i) => (
              <Tbody key={i}>
                <tr>
                  {tbody.map((td, j) => (
                    <td key={j} colSpan={td.colspan}>{td.value}</td>
                  ))}
                </tr>
              </Tbody>
            ))
          }
          {
            averageDistanceList?.distances?.footer?.rows.length > 0 && (
              <Tfoot>
                {
                  averageDistanceList?.distances?.footer?.rows.map((tr, i) => (
                    <tr key={i}>
                      {tr?.map((td, j) => (
                        <td key={j} colSpan={td.colspan}>{td.value}</td>
                      ))}
                    </tr>
                  ))
                }
              </Tfoot>
            )
          }
        </DistanceTable>
      </DistancePerBrandWrapper>
      <DistancePerBrandWrapper>
        <DistanceTitleBlock>
          <h2>{t('DISTANCE_PER_BRAND', 'Distance per brand')}</h2>
          <Download />
        </DistanceTitleBlock>
        <div>
          <Bar data={data} options={options} ref={barChartRef} />
        </div>
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
          {...props} onClose={() => setIsBusinessFilter(false)}
        />
      </Modal>
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
