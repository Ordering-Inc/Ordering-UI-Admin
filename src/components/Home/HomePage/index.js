import React, { useState, useEffect } from 'react'
import { useLanguage, useUtils, useEvent, useSession, Home as HomeController } from 'ordering-components-admin'
import { Line } from 'react-chartjs-2'
import moment from 'moment'
import { IconButton, Button } from '../../../styles/Buttons'
import { useInfoShare } from '../../../contexts/InfoShareContext'
import Skeleton from 'react-loading-skeleton'
import { useWindowSize } from '../../../hooks/useWindowSize'
import { useTheme } from 'styled-components'
import { getCurrentDiffDays } from '../../../utils'
import {
  List as MenuIcon,
  Basket as OrdersIcon,
  Cash as SalesIcon
} from 'react-bootstrap-icons'
import {
  HomeContainer,
  Breadcrumb,
  HeaderContainer,
  WelcomeMsg,
  GuideMsg,
  Reports,
  SalesGraphContainer,
  ChartHeaderContainer,
  OrdersAndSalesWrapper,
  OrdersOrSalesContainer,
  DetailsContent,
  BoxIconContainer,
  ParagraphHeaders,
  AssistanceWidgets,
  AssistanceTitle,
  AssistanceBody,
  WidgeBlock,
  FeedbackWidgets,
  FeedbackContainer,
  ButtonWrapper,
  ProjectStatusContainer,
  ProjectInfoWrapper,
  GreetingText,
  ProjectStatusDescription,
  ProjectCurrentStatus
} from './styles'

const HomeUI = (props) => {
  const {
    projectStatus,
    ordersList,
    todaySalelsList,
    monthSalesList,
    getCurrentDateRange
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()
  const [{ isCollapse }, { handleMenuCollapse }] = useInfoShare()
  const [timeAxes, setTimeAxes] = useState([])
  const [events] = useEvent()
  const { width } = useWindowSize()
  const [{ parsePrice }] = useUtils()
  const [sessionState] = useSession()

  const project = {
    active: {
      description: t('ORDERING_GUIDE_MSG', 'Our guide helps you to configure your Ordering products.'),
      status: t('PROJECT_ACTIVE', 'Project Active'),
      image: theme.images.project.active
    },
    past_due: {
      description: t('PROJECT_PAST_DUE_PAYMENT', 'Your account will be suspended in the next _days_ days due to your billing status, please check it to avoid any issues.'),
      status: t('PROJECT_PAST_DUE_PAYMENT', 'Project Past Due Payment'),
      image: theme.images.project.pastDuePayment
    }
  }

  const goToLink = (location) => {
    if (location === 'sales') {
      window.open('https://www.ordering.co/ordering-sales', '_blank')
    }
    if (location === 'tech') {
      window.open('https://support.ordering.co', '_blank')
    }
    if (location === 'canny') {
      window.open('https://feedback.ordering.co', '_blank')
    }
  }

  const generateData = () => {
    const values = []
    timeAxes.forEach(function (axe) {
      const index = monthSalesList?.sales?.findIndex(history => {
        return axe === history?.time
      })
      if (index !== -1) {
        values.push({ x: monthSalesList?.sales[index]?.time, y: monthSalesList?.sales[index]?.sales })
      } else {
        values.push({ x: axe, y: 0 })
      }
    })
    return values
  }

  const handleGoToPage = (data) => {
    events.emit('go_to_page', data)
  }

  const updateTimeAxes = () => {
    var unitdate = getTimeAxes(getCurrentDateRange()).time.unit
    var maxdate = moment(getTimeAxes(getCurrentDateRange()).time.max).endOf(unitdate)
    var mindate = moment(getTimeAxes(getCurrentDateRange()).time.min).startOf(unitdate)
    var curDate = mindate
    var newTimeAxes = []
    var adder = 'd'
    switch (unitdate) {
      case 'day': adder = 'd'
        break
      case 'month': adder = 'M'
        break
      case 'year': adder = 'y'
        break
      case 'hour': adder = 'h'
        break
      default: break
    }
    do {
      newTimeAxes.push(moment(curDate._d.getTime()).format('YYYY-MM-DD HH:mm:ss'))
      curDate = curDate.clone().add(1, adder)
    }
    while (curDate <= maxdate)
    setTimeAxes(newTimeAxes)
  }

  const getTimeAxes = (lapse) => {
    const xAxes = {
      type: 'time',
      grid: {
        display: false
      },
      time: {
        stepSize: 1,
        displayFormats: {
          hour: 'LT'
        }
      },
      ticks: {
        fontSize: 12,
        fontColor: '#CED4DA'
      }
    }

    xAxes.time.unit = 'day'
    xAxes.time.min = moment().subtract(30, 'days').format('YYYY-MM-DD')
    xAxes.time.max = moment().format('YYYY-MM-DD')
    return xAxes
  }

  const defaultData = {
    datasets: [
      {
        data: generateData(),
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: '#2C7BE5',
        tension: 0.4,
        borderWidth: 3
      }
    ]
  }

  const options = {
    scales: {
      x: getTimeAxes(),
      y: {
        beginAtZero: true,
        grid: {
          drawBorder: false
        },
        ticks: {
          font: {
            size: 11,
            color: '#CED4DA'
          }
        }
      }
    },
    plugins: {
      legend: {
        display: false
      }
    },
    pointRadius: 0
  }

  const getTotalSales = () => {
    let data = 0
    for (const sale of monthSalesList?.sales) {
      data += sale.sales
    }

    return parsePrice(data, { separator: '.' })
  }

  useEffect(() => {
    updateTimeAxes()
  }, [])

  return (
    <HomeContainer>
      <Breadcrumb>
        {isCollapse && (
          <IconButton
            color='black'
            onClick={() => handleMenuCollapse(false)}
          >
            <MenuIcon />
          </IconButton>
        )}
        <h1>{t('HOME', 'Home')}</h1>
      </Breadcrumb>

      {projectStatus.loading && (
        <HeaderContainer>
          <Skeleton height={150} />
        </HeaderContainer>
      )}

      {!projectStatus.loading && (
        <>
          {!projectStatus.project?.current_status ? (
            <HeaderContainer>
              <WelcomeMsg>{t('WELCOME_TO_ORDERING', 'Welcome to Ordering')}!</WelcomeMsg>
              <GuideMsg>{t('ORDERING_GUIDE_MSG', 'Our guide helps you to configure your Ordering products.')}</GuideMsg>
            </HeaderContainer>
          ) : (
            <ProjectStatusContainer>
              <ProjectInfoWrapper>
                <GreetingText>{t('WELCOME', 'Welcome')} {sessionState?.user?.name}!</GreetingText>
                <ProjectStatusDescription>
                  {
                    (projectStatus.project?.current_status_until && projectStatus.project?.current_status === 'past_due')
                      ? project[projectStatus.project?.current_status]?.description.replace('_days_', getCurrentDiffDays(projectStatus.project?.current_status_until))
                      : project[projectStatus.project?.current_status]?.description
                  }
                </ProjectStatusDescription>
                <ProjectCurrentStatus
                  isActive={projectStatus.project?.current_status === 'active'}
                >
                  {project[projectStatus.project?.current_status]?.status}
                </ProjectCurrentStatus>
              </ProjectInfoWrapper>
              <img src={project[projectStatus.project?.current_status]?.image} alt='' />
            </ProjectStatusContainer>
          )}
        </>
      )}

      <ParagraphHeaders>
        <p>{t('REPORTS', 'Reports')}</p>
        <Button
          color='lightPrimary'
          onClick={() => handleGoToPage({ page: 'business_analytics' })}
        >
          {t('SEE_MORE_REPORTS', 'See more reports')}
        </Button>
      </ParagraphHeaders>
      <Reports>
        <SalesGraphContainer>
          <ChartHeaderContainer>
            <p>{t('THIS_MONTH_SALES', 'This month sales')}</p>
            {
              monthSalesList?.loading ? <Skeleton width={70} height={30} /> : <h3>{getTotalSales()}</h3>
            }
          </ChartHeaderContainer>
          {
            monthSalesList?.loading ? <Skeleton height={150} /> : <Line data={defaultData} options={options} height={width > 1400 ? '106px' : ''} />
          }
        </SalesGraphContainer>
        <OrdersAndSalesWrapper>
          <OrdersOrSalesContainer>
            <DetailsContent>
              <p>{t('TODAY_ORDERS', 'Today Orders')}</p>
              {
                ordersList?.loading ? <Skeleton width={70} height={30} /> : <h2>{ordersList?.orders}</h2>
              }
            </DetailsContent>
            <BoxIconContainer>
              <OrdersIcon />
            </BoxIconContainer>
          </OrdersOrSalesContainer>
          <OrdersOrSalesContainer>
            <DetailsContent>
              <p>{t('TODAY_SALES', 'Today Sales')}</p>
              {
                todaySalelsList?.loading ? <Skeleton width={70} height={30} /> : <h2>{parsePrice(todaySalelsList?.sales, { separator: '.' })}</h2>
              }
            </DetailsContent>
            <BoxIconContainer isSales>
              <SalesIcon />
            </BoxIconContainer>
          </OrdersOrSalesContainer>
        </OrdersAndSalesWrapper>
      </Reports>
      {sessionState?.user?.level !== 2 && (
        <>
          <ParagraphHeaders>
            <p>{t('SUPPORT', 'Support')}</p>
          </ParagraphHeaders>
          <AssistanceWidgets>
            <AssistanceTitle>
              <h1>{t('SUPPORT_TITLE_START', 'Which kind of')}{' '}
                <span>{t('SUPPORT_TITLE_END', 'assistance do you need?')}</span>
              </h1>
              <p>{t('ASSIST_SUB_TITILE', 'Choose the asistance you are looking for in the buttons below.')}</p>
            </AssistanceTitle>
            <AssistanceBody>
              <WidgeBlock>
                <h3>{t('CONTACT_SALES_TEAM', 'Contact our Sales Team')}</h3>
                <p>{t('CONTACT_SALES_SUB_TITLE', 'Ask about pricing, custom work, budget and more money talk')}</p>
                <Button outline color='primary' onClick={() => goToLink('sales')}>{t('SALES_CONTACT', 'Sales Contact')}</Button>
              </WidgeBlock>
              <WidgeBlock>
                <h3>{t('CONTACT_SUPPORT_TEAM', 'Contact our Support Team')}</h3>
                <p>{t('CONTACT_SUPPORT_SUB_TITLE', 'Ask about your ordering installation, products and features')}</p>
                <Button outline color='primary' onClick={() => goToLink('tech')}>{t('TECH_SUPPORT', 'Tech Support')}</Button>
              </WidgeBlock>
            </AssistanceBody>
          </AssistanceWidgets>
        </>
      )}
      {sessionState?.user?.level === 0 && (
        <FeedbackWidgets>
          <ParagraphHeaders>
            <p>{t('FEEDBACK', 'Feedback')}</p>
          </ParagraphHeaders>
          <FeedbackContainer>
            <h2>{t('SHARE_WITH_US_YOUR_IDEAS', 'Share with us your ideas')}</h2>
            <p className='center'>{t('FEEDBACK_DESCRIPTION', 'Do you think our functionalities can be improved or do you want to see a new feature?')}</p>
            <p>{t('SHARE_US_YOUR_COMMENTS', 'Share us your comments')}</p>
            <ButtonWrapper>
              <Button outline color='primary' onClick={() => goToLink('canny')}>{t('REQUESTS', 'Requests')}</Button>
            </ButtonWrapper>
          </FeedbackContainer>
        </FeedbackWidgets>
      )}
    </HomeContainer>
  )
}

export const HomePage = (props) => {
  const homeProps = {
    ...props,
    UIComponent: HomeUI
  }

  return <HomeController {...homeProps} />
}
