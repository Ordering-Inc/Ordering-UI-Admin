import React, { useState, useEffect, useRef } from 'react'
import { useUtils, useLanguage, useSession, Messages as MessagesController } from 'ordering-components-admin'
import { useForm } from 'react-hook-form'
import { useTheme } from 'styled-components'
import Skeleton from 'react-loading-skeleton'
import AiOutlineInfoCircle from '@meronex/icons/ai/AiOutlineInfoCircle'
import MdClose from '@meronex/icons/md/MdClose'

import {
  MessagesContainer,
  WrapperContainer,
  HeaderProfile,
  WrapperHeader,
  ImageContainer,
  Chat,
  BubbleCustomer,
  MessageCustomer,
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
  OrderNumber,
  WrapperHitoryHeader,
  TabItem,
  SkeletonHitory,
  WrapperLogistics,
  WrapperLogisticInformation,
  HeaderInfo,
  SearchAndDetailControlContainer,
  MessagesSearch,
  OrderDetailIconButton,
  ChatHeader,
  ChatContactInfoContainer,
  InfoBlock,
  SendToContainer,
  MessageSender,
  QuickMessageWrapper
} from './styles'
import { Image as ImageWithFallback } from '../../components/Image'
import { Input } from '../../styles/Inputs'
import { Button } from '../../styles/Buttons'
import BsCardImage from '@meronex/icons/bs/BsCardImage'
import IosSend from '@meronex/icons/ios/IosSend'
import RiUser2Fill from '@meronex/icons/ri/RiUser2Fill'
import FaUserAlt from '@meronex/icons/fa/FaUserAlt'
import BisBusiness from '@meronex/icons/bi/BisBusiness'
import { Alert } from '../Confirm'
import { Logistics } from '../Logistics'
import { OrderLogisticInformation } from '../OrderLogisticInformation'
export const MessagesUI = (props) => {
  const {
    isChat,
    order,
    messages,
    handleSend,
    image,
    message,
    sendMessage,
    setImage,
    setMessage,
    canRead,
    setCanRead,
    history,
    messageDashboardView,
    handleMessageOrderDetail,
    handleReadMessages
  } = props

  const [, t] = useLanguage()
  const theme = useTheme()
  const { handleSubmit, register, setValue, errors } = useForm()
  const [{ user }] = useSession()
  const [{ parseDate, getTimeAgo }] = useUtils()
  const buttonRef = useRef(null)

  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [tabActive, setTabActive] = useState({ orderHistory: true, logistics: false, logistic_information: false })
  const [messageSearchValue, setMessageSearchValue] = useState('')
  const [filteredMessages, setFilteredMessages] = useState([])
  const [load, setLoad] = useState(0)
  const [messageList, setMessageList] = useState([])

  const adminMessageList = [
    { key: 'message_1', text: t('ADMIN_MESSAGE_1', 'admin_message_1') },
    { key: 'message_2', text: t('ADMIN_MESSAGE_2', 'admin_message_2') },
    { key: 'message_3', text: t('ADMIN_MESSAGE_3', 'admin_message_3') },
    { key: 'message_4', text: t('ADMIN_MESSAGE_4', 'admin_message_4') }
  ]

  const storeMessageList = [
    { key: 'message_1', text: t('STORE_MESSAGE_1', 'store_message_1') },
    { key: 'message_2', text: t('STORE_MESSAGE_2', 'store_message_2') },
    { key: 'message_3', text: t('STORE_MESSAGE_3', 'store_message_3') },
    { key: 'message_4', text: t('STORE_MESSAGE_4', 'store_message_4') }
  ]

  const handleClickQuickMessage = (msg) => {
    const quickMsg = message ? `${message} ${msg}` : msg
    setValue('message', quickMsg)
    setMessage(quickMsg)
  }

  useEffect(() => {
    if (user.level === 0) setMessageList(adminMessageList)
    else if (user.level === 2) setMessageList(storeMessageList)
    else setMessageList([])
  }, [user])

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
  }, [isChat])

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
        return t('PENDING', 'Pending')
      case 1:
        return t('COMPLETED_BY_ADMIN', 'Completed by admin')
      case 2:
        return t('REJECTED_BY_ADMIN', 'Rejected by admin')
      case 3:
        return t('DRIVER_ARRIVED_BY_BUSINESS', 'Driver arrived by business')
      case 4:
        return t('READY_FOR_PICKUP', 'Ready for pickup')
      case 5:
        return t('REJECT_BY_BUSINESS', 'Reject by business')
      case 6:
        return t('REJECT_BY_DRIVER', 'Reject by driver')
      case 7:
        return t('ACCEPTED_BY_BUSINESS', 'Accepted by Business')
      case 8:
        return t('ACCEPTED_BY_DRIVER', 'Accepted by Driver')
      case 9:
        return t('PICKUP_COMPLETED_BY_DRIVER', 'Pickup completed by driver')
      case 10:
        return t('PICKUP_FAILED_BY_DRIVER', 'Pickup failed by driver')
      case 11:
        return t('DELIVERY_COMPLETED_BY_DRIVER', 'Delivery completed by driver')
      case 12:
        return t('DELIVERY_FAILED_BY_DRIVER', 'Delivery failed by driver')
      case 13:
        return t('PREORDER', 'Preorder')
      case 14:
        return t('ORDER_NOT_READY', 'Order not ready')
      case 15:
        return t('PICKUP_COMPLETED_BY_CUSTOMER', 'Pickup completed by customer')
      case 16:
        return t('CANCELLED_BY_CUSTOMER', 'Cancelled by customer')
      case 17:
        return t('NOT_PICKED_BY_CUSTOMER', 'Not picked by customer')
      case 18:
        return t('DRIVER_ALMOST_ARRIVED_TO_BUSINESS', 'Driver almost arrived to business')
      case 19:
        return t('DRIVER_ALMOST_ARRIVED_TO_CUSTOMER', 'Driver almost arrived to customer')
      case 20:
        return t('CUSTOMER_ALMOST_ARRIVED_TO_BUSINESS', 'Customer almost arrived to business')
      case 21:
        return t('CUSTOMER_ARRIVED_TO_BUSINESS', 'Customer arrived to business')
      default:
        return status
    }
  }

  const getLevel = (level) => {
    switch (level) {
      case 0:
        return t('ADMIN', 'Admin')
      case 1:
        return t('CITY_MANAGER', 'City Manager')
      case 2:
        return t('BUSINESS', 'Business')
      case 3:
        return t('CUSTOMER', 'Customer')
      case 4:
        return t('DRIVER', 'Driver')
      case 5:
        return t('DRIVER_MANAGER', 'Driver Manager')
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
    if (!isChat) return
    if (order?.driver) {
      setCanRead({ administrator: true, business: true, customer: true, driver: true })
    } else {
      setCanRead({ administrator: true, business: true, customer: true, driver: false })
    }
  }, [isChat, order])

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

  return (
    <MessagesContainer>
      <WrapperContainer>
        <HeaderProfile>
          <WrapperHeader
            messageDashboardView={messageDashboardView}
            historyView={history}
          >
            <HeaderInfo>
              {isChat && (
                <ChatHeader>
                  <OrderNumber>
                    {t('INVOICE_ORDER_NO', 'Order No')} {order.id}
                  </OrderNumber>
                  <ImageContainer>
                    {user?.level !== 2 && (
                      <ImageWithFallback
                        src={order.business?.logo}
                        fallback={<BisBusiness />}
                      />
                    )}
                    <ImageWithFallback
                      src={order.customer?.photo}
                      fallback={<FaUserAlt />}
                    />
                    {order?.driver && (
                      <ImageWithFallback
                        src={order.driver?.photo}
                        fallback={<RiUser2Fill />}
                      />
                    )}
                  </ImageContainer>
                </ChatHeader>
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
                        <OrderLogisticInformation orderId={order.id} />
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
                                <strong>{t(message.change.attribute)}</strong> {' '}
                                {t('CHANGED_FROM', 'Changed from')} {' '}
                                {message.change.old !== null && (
                                  <>
                                    <strong>{getStatus(parseInt(message.change.old, 10))}</strong> {' '}
                                  </>
                                )}
                                <>
                                  {t('TO', 'to')} {' '}
                                  <strong>{message.change.old === null && message.change.attribute === 'delivery_in' ? 'null' : t(getStatus(parseInt(message.change.new, 10)))}</strong>
                                  {message?.change?.comment ? `\n'${message?.change?.comment}'` : ''}
                                </>
                                <TimeofSent>{getTimeAgo(message.created_at)}</TimeofSent>
                              </BubbleConsole>
                            ) : (
                              <BubbleConsole>
                                <>
                                  {message.change.new !== null ? (
                                    <>
                                      <strong>{message.driver?.name} {' '} {message.driver?.lastname && message.driver.lastname}</strong>
                                      {t('WAS_ASSIGNED_AS_DRIVER', 'was assigned as driver')}
                                      {message.comment && (<><br /> {message.comment.length}</>)}
                                    </>
                                  ) : (
                                    <>
                                      {t('DRIVER_UNASSIGNED', 'The driver was unnasigned')}
                                    </>
                                  )}
                                </>
                                <TimeofSent>{getTimeAgo(message.created_at)}</TimeofSent>
                              </BubbleConsole>
                            )}
                          </MessageConsole>
                        )}
                      </>
                    )}
                    {isChat && (
                      <>
                        {message.type === 1 && message.change?.attribute !== 'comment' && (
                          <MessageConsole key={message.id}>
                            {message.change?.attribute !== 'driver_id' ? (
                              <BubbleConsole>
                                {t('ORDER', 'Order')} {' '}
                                <strong>{t(message.change.attribute)}</strong> {' '}
                                {t('CHANGED_FROM', 'Changed from')} {' '}
                                {message.change.old !== null && (
                                  <>
                                    <strong>{t(getStatus(parseInt(message.change.old, 10)))}</strong> {' '}
                                  </>
                                )}
                                <>
                                  {t('TO', 'to')} {' '}
                                  <strong>{message.change.old === null && message.change.attribute === 'delivery_in' ? 'null' : t(getStatus(parseInt(message.change.new, 10)))}</strong>
                                  {message?.change?.comment ? `\n'${message?.change?.comment}'` : ''}
                                </>
                                <TimeofSent>{getTimeAgo(message.created_at)}</TimeofSent>
                              </BubbleConsole>
                            ) : (
                              <BubbleConsole>
                                <>
                                  {message.change.new !== null ? (
                                    <>
                                      <strong>{message.driver?.name} {' '} {message.driver?.lastname && message.driver.lastname}</strong>
                                      {t('WAS_ASSIGNED_AS_DRIVER', 'was assigned as driver')}
                                      {message.comment && (<><br /> {message.comment.length}</>)}
                                    </>
                                  ) : (
                                    <>
                                      {t('DRIVER_UNASSIGNED', 'The driver was unnasigned')}
                                    </>
                                  )}
                                </>
                                <TimeofSent>{getTimeAgo(message.created_at)}</TimeofSent>
                              </BubbleConsole>
                            )}
                          </MessageConsole>
                        )}
                        {message.type === 2 && user.id === message.author_id && (
                          <MessageCustomer>
                            <BubbleCustomer>
                              <MessageSender>{message.author.name} ({order.customer_id === message.author.id ? getLevel(3) : getLevel(message.author.level)})</MessageSender>
                              {message.comment}
                              <TimeofSent>{getTimeAgo(message.created_at)}</TimeofSent>
                            </BubbleCustomer>
                            <SendToContainer>
                              <p>{t('SEND_TO', 'Send to')}:</p>
                              <ImageContainer isCircle>
                                {message.can_see.includes(2) && (
                                  <ImageWithFallback
                                    src={order.business?.logo}
                                    fallback={<BisBusiness />}
                                  />
                                )}
                                {message.can_see.includes(3) && (
                                  <ImageWithFallback
                                    src={order.customer?.photo}
                                    fallback={<FaUserAlt />}
                                  />
                                )}
                                {message.can_see.includes(4) && (
                                  <>
                                    {order?.driver && (
                                      <ImageWithFallback
                                        src={order.driver?.photo}
                                        fallback={<RiUser2Fill />}
                                      />
                                    )}
                                  </>
                                )}
                              </ImageContainer>
                            </SendToContainer>
                          </MessageCustomer>
                        )}
                        {message.type === 3 && user.id === message.author_id && (
                          <MessageCustomer>
                            <BubbleCustomer name='image'>
                              <MessageSender>{message.author.name} ({order.customer_id === message.author.id ? getLevel(3) : getLevel(message.author.level)})</MessageSender>
                              <ChatImage><img src={message.source} onLoad={() => setLoad(load + 1)} alt='chat-image' /></ChatImage>
                              {message.comment && (
                                <>
                                  {message.comment}
                                </>
                              )}
                              <TimeofSent>{getTimeAgo(message.created_at)}</TimeofSent>
                            </BubbleCustomer>
                            <SendToContainer>
                              <p>{t('SEND_TO', 'Send to')}:</p>
                              <ImageContainer isCircle>
                                {message.can_see.includes(2) && (
                                  <ImageWithFallback
                                    src={order.business?.logo}
                                    fallback={<BisBusiness />}
                                  />
                                )}
                                {message.can_see.includes(3) && (
                                  <ImageWithFallback
                                    src={order.customer?.photo}
                                    fallback={<FaUserAlt />}
                                  />
                                )}
                                {message.can_see.includes(4) && (
                                  <>
                                    {order?.driver && (
                                      <ImageWithFallback
                                        src={order.driver?.photo}
                                        fallback={<RiUser2Fill />}
                                      />
                                    )}
                                  </>
                                )}
                              </ImageContainer>
                            </SendToContainer>
                          </MessageCustomer>
                        )}
                        {message.type === 2 && user.id !== message.author_id && (
                          <MessageBusiness>
                            <BubbleBusines>
                              <MessageSender>{message.author.name} ({order.customer_id === message.author.id ? getLevel(3) : getLevel(message.author.level)})</MessageSender>
                              {message.comment}
                              <TimeofSent>{getTimeAgo(message.created_at)}</TimeofSent>
                            </BubbleBusines>
                            <SendToContainer isReceived>
                              <p>{t('SEND_TO', 'Send to')}:</p>
                              <ImageContainer isCircle isReceived>
                                {message.can_see.includes(2) && (
                                  <ImageWithFallback
                                    src={order.business?.logo}
                                    fallback={<BisBusiness />}
                                  />
                                )}
                                {message.can_see.includes(3) && (
                                  <ImageWithFallback
                                    src={order.customer?.photo}
                                    fallback={<FaUserAlt />}
                                  />
                                )}
                                {message.can_see.includes(4) && (
                                  <>
                                    {order?.driver && (
                                      <ImageWithFallback
                                        src={order.driver?.photo}
                                        fallback={<RiUser2Fill />}
                                      />
                                    )}
                                  </>
                                )}
                              </ImageContainer>
                            </SendToContainer>
                          </MessageBusiness>
                        )}
                        {message.type === 3 && user.id !== message.author_id && (
                          <MessageBusiness>
                            <MessageSender>{message.author.name} ({order.customer_id === message.author.id ? getLevel(3) : getLevel(message.author.level)})</MessageSender>
                            <BubbleBusines name='image'>
                              <ChatImage><img src={message.source} onLoad={() => setLoad(load + 1)} alt='chat-image' /></ChatImage>
                              {message.comment && (
                                <>
                                  {message.comment}
                                </>
                              )}
                              <TimeofSent>{getTimeAgo(message.created_at)}</TimeofSent>
                            </BubbleBusines>
                            <SendToContainer isReceived>
                              <p>{t('SEND_TO', 'Send to')}:</p>
                              <ImageContainer isCircle isReceived>
                                {message.can_see.includes(2) && (
                                  <ImageWithFallback
                                    src={order.business?.logo}
                                    fallback={<BisBusiness />}
                                  />
                                )}
                                {message.can_see.includes(3) && (
                                  <ImageWithFallback
                                    src={order.customer?.photo}
                                    fallback={<FaUserAlt />}
                                  />
                                )}
                                {message.can_see.includes(4) && (
                                  <>
                                    {order?.driver && (
                                      <ImageWithFallback
                                        src={order.driver?.photo}
                                        fallback={<RiUser2Fill />}
                                      />
                                    )}
                                  </>
                                )}
                              </ImageContainer>
                            </SendToContainer>
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
            <ImageContainer>
              {user?.level !== 2 && (
                <ChatContactInfoContainer
                  disabled={!canRead?.business}
                  onClick={() => setCanRead({ ...canRead, business: !canRead?.business })}
                >
                  <ImageWithFallback
                    src={order.business?.logo}
                    fallback={<BisBusiness />}
                  />
                  <InfoBlock>
                    <p>{order.business?.name}</p>
                    <p>{t('BUSINESS', 'Business')}</p>
                  </InfoBlock>
                </ChatContactInfoContainer>
              )}
              <ChatContactInfoContainer
                disabled={!canRead?.customer}
                onClick={() => setCanRead({ ...canRead, customer: !canRead?.customer })}
              >
                <ImageWithFallback
                  src={order.customer?.photo}
                  fallback={<FaUserAlt />}
                />
                <InfoBlock>
                  <p>{order.customer?.name} {order.customer?.lastname}</p>
                  <p>{t('CUSTOMER', 'Customer')}</p>
                </InfoBlock>
              </ChatContactInfoContainer>
              {order?.driver && (
                <ChatContactInfoContainer
                  disabled={!canRead?.driver}
                  onClick={() => setCanRead({ ...canRead, driver: !canRead?.driver })}
                >
                  <ImageWithFallback
                    src={order.driver?.photo}
                    fallback={<RiUser2Fill />}
                  />
                  <InfoBlock>
                    <p>{order.driver?.name} {order.driver?.lastname}</p>
                    <p>{t('DRIVER', 'Driver')}</p>
                  </InfoBlock>
                </ChatContactInfoContainer>
              )}
            </ImageContainer>
            {messageList.length > 0 && (
              <QuickMessageWrapper>
                {messageList.map((quickMessage, i) => (
                  <Button
                    key={i}
                    color='secundaryDark'
                    onClick={() => handleClickQuickMessage(quickMessage.text)}
                  >
                    {quickMessage.text}
                  </Button>
                ))}
              </QuickMessageWrapper>
            )}

            <Send onSubmit={handleSubmit(onSubmit)} noValidate>
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
                  autoComplete='off'
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
                      <MdClose />
                    </Button>
                    <img
                      src={image}
                      loading='lazy'
                    />
                  </WrapperDeleteImage>
                )}
              </WrapperSendInput>
              <WrapperSendMessageButton>
                <Button
                  borderRadius='8px'
                  color='primary'
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
