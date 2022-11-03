import React, { useState, useEffect } from 'react'
import { useLanguage, useSession, useUtils, Sessions as SessionsController } from 'ordering-components-admin'
import Skeleton from 'react-loading-skeleton'
import moment from 'moment'
import { Button } from '../../../styles'
import { Confirm, Alert, Modal } from '../../Shared'
import { X as Close, ArrowRight } from 'react-bootstrap-icons'
import {
  Container,
  NoSessionsContainer,
  NoMessage,
  SessionItem,
  SessionsWrapper,
  DurationWrapper,
  SeessionDelete,
  MoreInfoWrapper
} from './styles'

export const SessionsUI = (props) => {
  const {
    sessionsList,
    actionState,
    handleDeleteSession,
    handleDeleteAllSessions
  } = props

  const [, t] = useLanguage()
  const [{ user }] = useSession()
  const [{ parseDate }] = useUtils()

  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [isMoreInfo, setIsMoreInfo] = useState(false)

  const onDeleteSession = (session) => {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_SESSION', 'Are you sure to delete this session?'),
      handleOnAccept: () => {
        handleDeleteSession(session)
        setConfirm({ ...confirm, open: false })
      }
    })
  }

  const onDeleteAllSessions = (isOldUser, deleteCurrent) => {
    setConfirm({
      open: true,
      content:
        isOldUser
          ? t('QUESTION_ENABLE_ALL_SESSIONS', 'Are you sure to enable all sessions?')
          : deleteCurrent
            ? t('QUESTION_DELETE_ALL_SESSIONS', 'Are you sure that you want to delete all sessions?')
            : t('QUESTION_DELETE_ALL_SESSIONS_EXCEPT_CURRENT', 'Are you sure that you want to delete all sessions except current?'),
      handleOnAccept: () => {
        handleDeleteAllSessions(deleteCurrent)
        setConfirm({ ...confirm, open: false })
      }
    })
  }

  useEffect(() => {
    if (actionState.error) {
      setAlertState({
        open: true,
        content: actionState.error
      })
    }
  }, [actionState.error])

  return (
    <>
      <Container>
        <h2>{t('SESSIONS', 'Sessions')}</h2>
        {user?.session_strategy === 'jwt_session' ? (
          <>
            {sessionsList.loading ? (
              [...Array(5).keys()].map(i => (
                <SessionItem key={i}>
                  <Skeleton width={200} height={16} />
                  <Skeleton width={16} height={16} />
                </SessionItem>
              ))
            ) : (
              sessionsList.sessions.length > 0 ? (
                <SessionsWrapper>
                  {sessionsList.sessions.sort((a, b) => moment(b?.created_at).valueOf() - moment(a?.created_at).valueOf()).slice(0, 2).map(session => (
                    <SessionItem key={session.id}>
                      <DurationWrapper>
                        <p>{parseDate(session.created_at, { outputFormat: 'MM/DD/YY · hh:mm A' })}</p>
                        <span>-</span>
                        <p>{parseDate(session.valid_thru, { outputFormat: 'MM/DD/YY · hh:mm A' })}</p>
                      </DurationWrapper>
                      {session.current && (
                        <p className='current'>({t('CURRENT', 'Current')})</p>
                      )}
                      <SeessionDelete
                        onClick={() => onDeleteSession(session)}
                      >
                        <Close />
                      </SeessionDelete>
                    </SessionItem>
                  ))}
                  <MoreInfoWrapper>
                    <span onClick={() => setIsMoreInfo(true)}>
                      {t('MORE_INFO', 'More info')}
                      <ArrowRight />
                    </span>
                  </MoreInfoWrapper>
                </SessionsWrapper>
              ) : (
                <NoMessage>
                  {t('YOU_DONT_HAVE_ANY_SESSIONS', 'You don\'t have any sessions')}
                </NoMessage>
              )
            )}
          </>
        ) : (
          <NoSessionsContainer>
            <NoMessage>
              {t('YOU_DONT_HAVE_ENABLED_THE_SESSIONS', 'You don\'t have enabled the sessions, please active them to have a better control of your sessions.')}
            </NoMessage>
            <Button
              color='primary'
              onClick={() => onDeleteAllSessions(true, false)}
            >
              {t('ACTIVE_SESSIONS', 'Active sessions')}
            </Button>
          </NoSessionsContainer>
        )}
      </Container>
      <Confirm
        title={t('WEB_APPNAME', 'Ordering')}
        content={confirm.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={confirm.open}
        onClose={() => setConfirm({ ...confirm, open: false })}
        onCancel={() => setConfirm({ ...confirm, open: false })}
        onAccept={confirm.handleOnAccept}
        closeOnBackdrop={false}
      />
      <Alert
        title={t('WEB_APPNAME', 'Ordering')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => setAlertState({ open: false, content: [] })}
        onAccept={() => setAlertState({ open: false, content: [] })}
        closeOnBackdrop={false}
      />
      <Modal
        width='760px'
        height='80vh'
        padding='30px'
        title={t('SESSIONS', 'Sessions')}
        open={isMoreInfo}
        onClose={() => setIsMoreInfo(false)}
      >
        <>
          {sessionsList.sessions.sort((a, b) => moment(b?.created_at).valueOf() - moment(a?.created_at).valueOf()).map(session => (
            <SessionItem key={session.id}>
              <DurationWrapper>
                <p>{parseDate(session.created_at)}</p>
                <span>-</span>
                <p>{parseDate(session.valid_thru)}</p>
              </DurationWrapper>
              {session.current && (
                <p className='current'>({t('CURRENT', 'Current')})</p>
              )}
              <SeessionDelete
                onClick={() => onDeleteSession(session)}
              >
                <Close />
              </SeessionDelete>
            </SessionItem>
          ))}
        </>
      </Modal>
    </>
  )
}

export const Sessions = (props) => {
  const sessionsProps = {
    ...props,
    UIComponent: SessionsUI
  }
  return <SessionsController {...sessionsProps} />
}
