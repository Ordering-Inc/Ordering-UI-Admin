import React, { useState, useEffect, useRef } from 'react'
import { useUtils, useLanguage, useSession, Messages as MessagesController } from 'ordering-components-admin'
import { useForm } from 'react-hook-form'
import { useTheme } from 'styled-components'
import Skeleton from 'react-loading-skeleton'
import HiOutlineArrowLeft from '@meronex/icons/hi/HiOutlineArrowLeft'
import AiOutlineInfoCircle from '@meronex/icons/ai/AiOutlineInfoCircle'
import {
  MessagesContainer,
  WrapperContainer,
  BackActions,
  HeaderProfile,
  WrapperHeader,
  Image,
  Chat,
  BubbleCustomer,
  MessageCustomer,
  MyName,
  PartnerName,
  MessageBusiness,
  BubbleBusines,
  SkeletonBubbleCustomer,
  SkeletonBubbleBusiness,
  ChatImage,
  TimeofSent,
  SendForm,
  Send,
  WrapperSendInput,
  SendImage,
  MessageConsole,
  BubbleConsole,
  WrapperDeleteImage,
  WrapperSendMessageButton,
  HeaderOnline,
  WrapperHitoryHeader,
  TabItem,
  SkeletonHitory,
  WrapperLogistics,
  WrapperLogisticInformation,
  HeaderInfo,
  SearchAndDetailControlContainer,
  MessagesSearch,
  OrderDetailIconButton
} from './styles'
import { Image as ImageWithFallback } from '../Image'
import { Input } from '../../styles/Inputs'
import { Button } from '../../styles/Buttons'
import BsCardImage from '@meronex/icons/bs/BsCardImage'
import IosSend from '@meronex/icons/ios/IosSend'
import RiUser2Fill from '@meronex/icons/ri/RiUser2Fill'
import FaUserAlt from '@meronex/icons/fa/FaUserAlt'
import BisBusiness from '@meronex/icons/bi/BisBusiness'
import { Alert } from '../Confirm'
import { Logistics } from '../Logistics'
import { LogisticInformation } from '../LogisticInformation'
export const MessagesUI = (props) => {
  const {
    order,
    messages,
    handleSend,
    image,
    message,
    sendMessage,
    setImage,
    setMessage,
    setCanRead,
    // customer,
    // business,
    // driver,
    history,
    messageDashboardView,
    handleMessageOrderDetail,
    handleReadMessages,
    handleSetMessageType
  } = props

  const [, t] = useLanguage()
  const theme = useTheme()
  const { handleSubmit, register, errors } = useForm()
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [load, setLoad] = useState(0)
  const [{ user }] = useSession()
  const [{ parseDate, getTimeAgo }] = useUtils()
  const buttonRef = useRef(null)
  const [messageLevel, setMessageLevel] = useState(null)
  const [tabActive, setTabActive] = useState({ orderHistory: true, logistics: false, logistic_information: false })
  const [messageSearchValue, setMessageSearchValue] = useState('')
  const [filteredMessages, setFilteredMessages] = useState([])
  const [driverNoneCase, setDriverNoneCase] = useState(false)

  const [business, setBusiness] = useState(props.business)
  const [customer, setCustomer] = useState(props.customer)
  const [driver, setDriver] = useState(props.driver)

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setAlertState({
        open: true,
        content: Object.values(errors).map(error => error.message)
      })
    }
  }, [errors])

  useEffect(() => {
    setMessageSearchValue('')
  }, [order.id])

  useEffect(() => {
    if (!sendMessage.loading && sendMessage?.error) {
      setAlertState({
        open: true,
        content: sendMessage.error || [t('ERROR')]
      })
    }
    if (sendMessage.loading) {
      clearInputs()
    }
  }, [sendMessage])

  useEffect(() => {
    if (history) return
    if (load < 3) {
      const chat = document.getElementById('chat')
      chat.scrollTop = chat.scrollHeight
    }
  }, [load])

  useEffect(() => {
    if (history) return
    const chat = document.getElementById('chat')
    chat.scrollTop = chat.scrollHeight
  }, [messages.messages.length, filteredMessages])

  useEffect(() => {
    if (history) return
    setTimeout(() => {
      const chat = document.getElementById('chat')
      chat.scrollTop = chat.scrollHeight
    }, 10)
  }, [customer, business, driver])

  const onChangeMessage = (e) => {
    setMessage(e.target.value)
  }

  const removeImage = (e) => {
    setImage(null)
  }

  const onChangeImage = e => {
    const files = e.target.files[0]
    const reader = new window.FileReader()
    reader.readAsDataURL(files)
    reader.onload = () => {
      setImage(reader.result)
      buttonRef.current.focus()
    }
    reader.onerror = error => {
      console.log(error)
    }
  }

  const getStatus = (status) => {
    switch (status) {
      case 0:
        return 'Pending order'
      case 1:
        return 'Completed by admin'
      case 2:
        return 'Reject by admin'
      case 3:
        return 'Driver arrived by business'
      case 4:
        return 'Ready for pickup'
      case 5:
        return 'Reject by business'
      case 6:
        return 'Reject by driver'
      case 7:
        return 'Accepted by business'
      case 8:
        return 'Accepted by driver'
      case 9:
        return 'Pickup completed by driver'
      case 10:
        return 'Pickup failed by driver'
      case 11:
        return 'Delivery completed by driver'
      case 12:
        return 'Delivery failed by driver'
      default:
        return status
    }
  }

  const getLevel = (level) => {
    switch (level) {
      case 0:
        return 'admin'
      case 2:
        return 'business'
      case 4:
        return 'driver'
      case 3:
        return 'customer'
    }
  }

  const clearInputs = () => {
    const input = document.getElementById('message')
    if (input) {
      input.value = ''
    }
    removeImage()
    setMessage('')
  }

  const onSubmit = (values) => {
    handleSend()
  }

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  const unreadMessageControl = () => {
    if (messages.loading || messages.messages.length === 0) return
    if (messages.messages[messages.messages.length - 1].read) return
    handleReadMessages(messages.messages[messages.messages.length - 1].id)
  }

  useEffect(() => {
    if (messages.loading) return
    const _filteredMessages = messages.messages.filter(message => {
      if (message.type === 2) {
        return message.comment.toLocaleLowerCase().includes(messageSearchValue.toLocaleLowerCase())
      }
      return true
    })
    setFilteredMessages(_filteredMessages)
  }, [messages, messageSearchValue])

  useEffect(() => {
    if (customer) {
      setMessageLevel(3)
      setCanRead({ business: false, administrator: true, driver: false, customer: true })
    }
    if (business || driverNoneCase) {
      setMessageLevel(2)
      setCanRead({ business: true, administrator: true, driver: false, customer: false })
    }
    if (driver && !driverNoneCase) {
      setMessageLevel(4)
      setCanRead({ business: false, administrator: true, driver: true, customer: false })
    }
  }, [customer, business, driver, driverNoneCase])

  useEffect(() => {
    if (driver && order?.driver_id === null) {
      setDriverNoneCase(true)
    } else {
      setDriverNoneCase(false)
    }
  }, [order?.driver_id, driver])

  useEffect(() => {
    if (props.business) {
      setBusiness(true)
      setCustomer(false)
      setDriver(false)
    }
    if (props.customer) {
      setBusiness(false)
      setCustomer(true)
      setDriver(false)
    }
    if (props.driver) {
      setBusiness(false)
      setCustomer(false)
      setDriver(true)
    }
  }, [props.business, props.customer, props.driver])

  useEffect(() => {
    if (messages.loading || (props.business || props.customer || props.driver || history)) return
    const _messages = messages.messages.filter(_message => (_message.type !== 1 && _message.type !== 0 && _message?.author?.level !== 0))
    if (_messages.length > 0) {
      const level = _messages[_messages.length - 1].author?.level
      if (level === 2) {
        setBusiness(true)
        setCustomer(false)
        setDriver(false)
        handleSetMessageType('business')
      }
      if (level === 3) {
        setBusiness(false)
        setCustomer(true)
        setDriver(false)
        handleSetMessageType('customer')
      }
      if (level === 4) {
        setBusiness(false)
        setCustomer(false)
        setDriver(true)
        handleSetMessageType('driver')
      }
    } else {
      setBusiness(true)
      setCustomer(false)
      setDriver(false)
      handleSetMessageType('business')
    }
  }, [messages.loading])

  return (
    <MessagesContainer>
      <WrapperContainer>
        {(!history && !messageDashboardView) && (
          <BackActions>
            <a onClick={() => props.onClose()}>
              <HiOutlineArrowLeft />
            </a>
          </BackActions>
        )}
        <HeaderProfile>
          <WrapperHeader
            messageDashboardView={messageDashboardView}
            historyView={history}
          >
            <HeaderInfo>
              {!history && (
                <Image>
                  {
                    customer && (
                      <ImageWithFallback
                        src={order.customer?.photo}
                        fallback={<FaUserAlt />}
                      />
                    )
                  }
                  {
                    (business || driverNoneCase) && (
                      <ImageWithFallback
                        src={order.business?.logo}
                        fallback={<BisBusiness />}
                      />
                    )
                  }
                  {
                    driver && !driverNoneCase && (
                      <ImageWithFallback
                        src={order.driver?.photo}
                        fallback={<RiUser2Fill />}
                      />
                    )
                  }
                </Image>
              )}
              {customer && (
                <HeaderOnline>
                  <h1>{order?.customer?.name} {order?.customer?.lastname}</h1>
                  {!messageDashboardView ? (
                    <span>{t('ONLINE', 'Online')}</span>
                  ) : (
                    <span>{t('ORDER_NO', 'Order No')}. {order.id}</span>
                  )}
                </HeaderOnline>
              )}
              {(business || driverNoneCase) && (
                <HeaderOnline>
                  <h1>{order.business?.name}</h1>
                  {!messageDashboardView ? (
                    <span>{t('ONLINE', 'Online')}</span>
                  ) : (
                    <span>{t('ORDER_NO', 'Order No')}. {order.id}</span>
                  )}
                </HeaderOnline>
              )}
              {driver && !driverNoneCase && (
                <HeaderOnline>
                  <h1>{order.driver?.name}</h1>
                  {!messageDashboardView ? (
                    <span>{t('ONLINE', 'Online')}</span>
                  ) : (
                    <span>{t('ORDER_NO', 'Order No')}. {order.id}</span>
                  )}
                </HeaderOnline>
              )}
              {history && (
                <WrapperHitoryHeader>
                  <TabItem active={tabActive.orderHistory} onClick={() => setTabActive({ orderHistory: true, logistics: false, logistic_information: false })}>
                    {t('ORDER_HISTORY', 'Order History')}
                  </TabItem>
                  <TabItem active={tabActive.logistics} onClick={() => setTabActive({ orderHistory: false, logistics: true, logistic_information: false })}>
                    {t('LOGISTICS', 'Logistics')}
                  </TabItem>
                  <TabItem active={tabActive.logistic_information} onClick={() => setTabActive({ orderHistory: false, logistics: false, logistic_information: true })}>
                    {t('LOGISTIC_INFORMATION', 'Logistic information')}
                  </TabItem>
                </WrapperHitoryHeader>
              )}
            </HeaderInfo>
            {messageDashboardView && (
              <SearchAndDetailControlContainer>
                <MessagesSearch>
                  <img src={theme?.images?.icons?.search} alt='search' />
                  <input
                    type='text'
                    name='search'
                    placeholder='Search'
                    value={messageSearchValue}
                    onChange={(e) => setMessageSearchValue(e.target.value)}
                  />
                </MessagesSearch>
                <OrderDetailIconButton onClick={() => handleMessageOrderDetail(true)}>
                  <AiOutlineInfoCircle />
                </OrderDetailIconButton>
              </SearchAndDetailControlContainer>
            )}
          </WrapperHeader>
        </HeaderProfile>
        <Chat id='chat'>
          {
            messages.loading && (
              <>
                {!history ? (
                  <>
                    <MessageBusiness>
                      <SkeletonBubbleBusiness>
                        <Skeleton width={200} height={100} />
                      </SkeletonBubbleBusiness>
                    </MessageBusiness>
                    <MessageCustomer>
                      <SkeletonBubbleCustomer>
                        <Skeleton width={250} height={100} />
                      </SkeletonBubbleCustomer>
                    </MessageCustomer>
                    <MessageBusiness>
                      <SkeletonBubbleBusiness>
                        <Skeleton width={150} height={100} />
                      </SkeletonBubbleBusiness>
                    </MessageBusiness>
                    <MessageCustomer>
                      <SkeletonBubbleCustomer>
                        <Skeleton width={200} height={100} />
                      </SkeletonBubbleCustomer>
                    </MessageCustomer>
                  </>
                ) : (
                  <>
                    {[...Array(5)].map((item, i) =>
                      <SkeletonHitory key={i}>
                        <Skeleton width={400} height={50} />
                        <Skeleton width={300} height={50} />
                        <Skeleton width={380} height={50} />
                        <Skeleton width={200} height={50} />
                        <Skeleton width={450} height={50} />
                      </SkeletonHitory>
                    )}
                  </>
                )}
              </>
            )
          }
          {
            !messages.loading && (
              <>
                {!tabActive.logistic_information && (
                  <MessageConsole>
                    <BubbleConsole>
                      {t('ORDER_PLACED_FOR', 'Order placed for')} {' '}
                      <strong>{parseDate(order.created_at)}</strong> {' '}
                      {t('VIA', 'via')} <strong>{order.app_id}</strong>{' '}
                      <TimeofSent>{getTimeAgo(order.created_at)}</TimeofSent>
                    </BubbleConsole>
                  </MessageConsole>
                )}
                {history && (
                  <>
                    {tabActive.logistics && (
                      <WrapperLogistics>
                        <Logistics orderId={order.id} />
                      </WrapperLogistics>
                    )}
                    {tabActive.logistic_information && (
                      <WrapperLogisticInformation>
                        <LogisticInformation orderId={order.id} />
                      </WrapperLogisticInformation>
                    )}
                  </>
                )}
                {filteredMessages.length > 0 && filteredMessages.map((message) => (
                  <React.Fragment key={message.id}>
                    {history && tabActive.orderHistory && (
                      <>
                        {message.type === 1 && (
                          <MessageConsole key={message.id} style={{ display: `${tabActive.orderHistory ? 'inline-flex' : 'none'}` }}>
                            {message.change?.attribute !== 'driver_id' ? (
                              <BubbleConsole>
                                {t('ORDER', 'Order')} {' '}
                                <strong>{message.change.attribute}</strong> {}
                                {t('CHANGED_FROM', 'Changed from')} {' '}
                                {message.change.old !== null && (
                                  <>
                                    <strong>{getStatus(parseInt(message.change.old, 10))}</strong> {' '}
                                  </>
                                )}
                                <> {t('TO', 'to')} {' '} <strong>{getStatus(parseInt(message.change.new, 10))}</strong> </>
                                <TimeofSent>{getTimeAgo(message.created_at)}</TimeofSent>
                              </BubbleConsole>
                            ) : (
                              <BubbleConsole>
                                <strong>{message.driver?.name} {' '} {message.driver?.lastname && message.driver.lastname}</strong>
                                {t('WAS_ASSIGNED_AS_DRIVER', 'was assigned as driver')}
                                {message.comment && (<><br /> {message.comment.length}</>)}
                                <TimeofSent>{getTimeAgo(message.created_at)}</TimeofSent>
                              </BubbleConsole>
                            )}
                          </MessageConsole>
                        )}
                      </>
                    )}
                    {!history && (message?.author?.level === 0 || message?.author?.level === messageLevel) && (
                      <>
                        {message.type === 1 && (
                          <MessageConsole key={message.id}>
                            {message.change?.attribute !== 'driver_id' ? (
                              <BubbleConsole>
                                {t('ORDER', 'Order')} {' '}
                                <strong>{message.change.attribute}</strong> {}
                                {t('CHANGED_FROM', 'Changed from')} {' '}
                                {message.change.old !== null && (
                                  <>
                                    <strong>{t(getStatus(parseInt(message.change.old, 10)))}</strong> {' '}
                                  </>
                                )}
                                <> {t('TO', 'to')} {' '} <strong>{t(getStatus(parseInt(message.change.new, 10)))}</strong> </>
                                <TimeofSent>{getTimeAgo(message.created_at)}</TimeofSent>
                              </BubbleConsole>
                            ) : (
                              <BubbleConsole>
                                <strong>{message.driver?.name} {' '} {message.driver?.lastname && message.driver.lastname}</strong>
                                {t('WAS_ASSIGNED_AS_DRIVER', 'was assigned as driver')}
                                {message.comment && (<><br /> {message.comment.length}</>)}
                                <TimeofSent>{getTimeAgo(message.created_at)}</TimeofSent>
                              </BubbleConsole>
                            )}
                          </MessageConsole>
                        )}
                        {message.type === 2 && user.id === message.author_id && (
                          <MessageCustomer>
                            {customer && message.can_see.includes(3) && (
                              <>
                                <BubbleCustomer>
                                  <strong><MyName>{message?.author?.name} ({getLevel(message?.author?.level)})</MyName></strong>
                                  {message.comment}
                                  <TimeofSent>{getTimeAgo(message.created_at)}</TimeofSent>
                                </BubbleCustomer>
                              </>
                            )}
                            {(business || driverNoneCase) && message.can_see.includes(2) && (
                              <>
                                <BubbleCustomer>
                                  <strong><MyName>{message?.author?.name} ({getLevel(message?.author?.level)})</MyName></strong>
                                  {message.comment}
                                  <TimeofSent>{getTimeAgo(message.created_at)}</TimeofSent>
                                </BubbleCustomer>
                              </>
                            )}
                            {driver && !driverNoneCase && message.can_see.includes(4) && (
                              <>
                                <BubbleCustomer>
                                  <strong><MyName>{message?.author?.name} ({getLevel(message?.author?.level)})</MyName></strong>
                                  {message.comment}
                                  <TimeofSent>{getTimeAgo(message.created_at)}</TimeofSent>
                                </BubbleCustomer>
                              </>
                            )}

                          </MessageCustomer>
                        )}
                        {message.type === 3 && user.id === message.author_id && (
                          <MessageCustomer>
                            {customer && message.can_see.includes(3) && (
                              <>
                                <BubbleCustomer name='image'>
                                  <strong><MyName>{message?.author?.name} ({getLevel(message?.author?.level)})</MyName></strong>
                                  <ChatImage><img src={message.source} onLoad={() => setLoad(load + 1)} alt='chat-image' /></ChatImage>
                                  {message.comment && (
                                    <>
                                      {message.comment}
                                    </>
                                  )}
                                  <TimeofSent>{getTimeAgo(message.created_at)}</TimeofSent>
                                </BubbleCustomer>
                              </>
                            )}
                            {(business || driverNoneCase) && message.can_see.includes(2) && (
                              <>
                                <BubbleCustomer name='image'>
                                  <strong><MyName>{message?.author?.name} ({getLevel(message?.author?.level)})</MyName></strong>
                                  <ChatImage><img src={message.source} onLoad={() => setLoad(load + 1)} alt='chat-image' /></ChatImage>
                                  {message.comment && (
                                    <>
                                      {message.comment}
                                    </>
                                  )}
                                  <TimeofSent>{getTimeAgo(message.created_at)}</TimeofSent>
                                </BubbleCustomer>
                              </>
                            )}
                            {driver && !driverNoneCase && message.can_see.includes(4) && (
                              <>
                                <BubbleCustomer name='image'>
                                  <strong><MyName>{message?.author?.name} ({getLevel(message?.author?.level)})</MyName></strong>
                                  <ChatImage><img src={message.source} onLoad={() => setLoad(load + 1)} alt='chat-image' /></ChatImage>
                                  {message.comment && (
                                    <>
                                      {message.comment}
                                    </>
                                  )}
                                  <TimeofSent>{getTimeAgo(message.created_at)}</TimeofSent>
                                </BubbleCustomer>
                              </>
                            )}
                          </MessageCustomer>
                        )}
                        {message.type === 2 && user.id !== message.author_id && (
                          <MessageBusiness>
                            {customer && message.can_see.includes(3) && (
                              <>
                                <BubbleBusines>
                                  <strong><PartnerName>{message?.author?.name} ({getLevel(message?.author?.level)})</PartnerName></strong>
                                  {message.comment}
                                  <TimeofSent>{getTimeAgo(message.created_at)}</TimeofSent>
                                </BubbleBusines>
                              </>
                            )}
                            {(business || driverNoneCase) && message.can_see.includes(2) && (
                              <>
                                <BubbleBusines>
                                  <strong><PartnerName>{message?.author?.name} ({getLevel(message?.author?.level)})</PartnerName></strong>
                                  {message.comment}
                                  <TimeofSent>{getTimeAgo(message.created_at)}</TimeofSent>
                                </BubbleBusines>
                              </>
                            )}
                            {driver && !driverNoneCase && message.can_see.includes(4) && (
                              <>
                                <BubbleBusines>
                                  <strong><PartnerName>{message?.author?.name} ({getLevel(message?.author?.level)})</PartnerName></strong>
                                  {message.comment}
                                  <TimeofSent>{getTimeAgo(message.created_at)}</TimeofSent>
                                </BubbleBusines>
                              </>
                            )}
                          </MessageBusiness>
                        )}
                        {message.type === 3 && user.id !== message.author_id && (
                          <MessageBusiness>
                            {customer && message.can_see.includes(3) && (
                              <>
                                <BubbleBusines name='image'>
                                  <strong><PartnerName>{message?.author?.name} ({getLevel(message?.author?.level)})</PartnerName></strong>
                                  <ChatImage><img src={message.source} onLoad={() => setLoad(load + 1)} alt='chat-image' /></ChatImage>
                                  {message.comment && (
                                    <>
                                      {message.comment}
                                    </>
                                  )}
                                  <TimeofSent>{getTimeAgo(message.created_at)}</TimeofSent>
                                </BubbleBusines>
                              </>
                            )}
                            {(business || driverNoneCase) && message.can_see.includes(2) && (
                              <>
                                <BubbleBusines name='image'>
                                  <strong><PartnerName>{message?.author?.name} ({getLevel(message?.author?.level)})</PartnerName></strong>
                                  <ChatImage><img src={message.source} onLoad={() => setLoad(load + 1)} alt='chat-image' /></ChatImage>
                                  {message.comment && (
                                    <>
                                      {message.comment}
                                    </>
                                  )}
                                  <TimeofSent>{getTimeAgo(message.created_at)}</TimeofSent>
                                </BubbleBusines>
                              </>
                            )}
                            {driver && !driverNoneCase && message.can_see.includes(4) && (
                              <>
                                <BubbleBusines name='image'>
                                  <strong><PartnerName>{message?.author?.name} ({getLevel(message?.author?.level)})</PartnerName></strong>
                                  <ChatImage><img src={message.source} onLoad={() => setLoad(load + 1)} alt='chat-image' /></ChatImage>
                                  {message.comment && (
                                    <>
                                      {message.comment}
                                    </>
                                  )}
                                  <TimeofSent>{getTimeAgo(message.created_at)}</TimeofSent>
                                </BubbleBusines>
                              </>
                            )}
                          </MessageBusiness>
                        )}
                      </>
                    )}
                  </React.Fragment>
                ))}
              </>
            )
          }
        </Chat>

        {!history && (
          <SendForm>
            <Send onSubmit={handleSubmit(onSubmit)} noValidate messageDashboardView={messageDashboardView}>
              <WrapperSendInput>
                <Input
                  placeholder={t('WRITE_A_MESSAGE', 'Write a message...')}
                  onChange={onChangeMessage}
                  onFocus={unreadMessageControl}
                  name='message'
                  id='message'
                  ref={register({
                    required: !image
                  })}
                />
                {!image && (
                  <SendImage htmlFor='chat_image'>
                    <input
                      type='file'
                      name='image'
                      id='chat_image'
                      accept='image/png,image/jpg,image/jpeg'
                      onChange={onChangeImage}
                    />
                    <BsCardImage />
                  </SendImage>
                )}
                {image && (
                  <WrapperDeleteImage>
                    <Button
                      circle
                      onClick={removeImage}
                      type='reset'
                    >
                      {t('X', 'X')}
                    </Button>
                  </WrapperDeleteImage>
                )}
              </WrapperSendInput>
              <WrapperSendMessageButton>
                <Button
                  color='darkBlue'
                  type='submit'
                  disabled={sendMessage.loading || (message === '' && !image) || messages.loading}
                  ref={buttonRef}
                >
                  <IosSend />
                  {sendMessage.loading ? (
                    <span>
                      {t('SENDING_MESSAGE', 'Sending...')}
                    </span>
                  )
                    : (
                      <span>
                        {t('SEND', 'send')}
                      </span>)}
                </Button>
              </WrapperSendMessageButton>
            </Send>
          </SendForm>
        )}
        <Alert
          title={t('ERROR', 'error')}
          content={alertState.content}
          acceptText={t('ACCEPT')}
          open={alertState.open}
          onClose={() => closeAlert()}
          onAccept={() => closeAlert()}
          closeOnBackdrop={false}
        />
      </WrapperContainer>
    </MessagesContainer>
  )
}

export const Messages = (props) => {
  const MessagesProps = {
    ...props,
    asDashboard: true,
    UIComponent: MessagesUI
  }
  return <MessagesController {...MessagesProps} />
}
