import React from 'react'
import {
  UserDetails as UserDetailsController,
  useLanguage,
  useSession
} from 'ordering-components-admin'
import FaUserAlt from '@meronex/icons/fa/FaUserAlt'
import { List as MenuIcon } from 'react-bootstrap-icons'
import { IconButton, Button } from '../../../styles'
import { useInfoShare } from '../../../contexts/InfoShareContext'
import { Sessions } from '../Sessions'

import {
  Container,
  HeaderContainer,
  UserInfoContainer,
  UserImage,
  UserInfoWrapper,
  ButtonsGroup
} from './styles'

const ProfilePageUI = (props) => {
  const {
    handleGoogleAccountLink
  } = props

  const [, t] = useLanguage()
  const [{ isCollapse }, { handleMenuCollapse }] = useInfoShare()
  const [{ user }] = useSession()

  return (
    <Container>
      <HeaderContainer>
        {isCollapse && (
          <IconButton
            color='black'
            onClick={() => handleMenuCollapse(false)}
          >
            <MenuIcon />
          </IconButton>
        )}
        <h1>{t('PROFILE', '')}</h1>
      </HeaderContainer>
      <UserInfoContainer>
        <UserImage>
          {user?.photo ? (
            <img src={user?.photo} loading='lazy' alt='' />
          ) : (
            <FaUserAlt />
          )}
        </UserImage>
        <UserInfoWrapper>
          <p className='name'>{user?.name} {user?.lastname}</p>
          <p className='email'>{user?.email}</p>
          {user?.cellphone && <p className='phone'>{user?.cellphone}</p>}
          <ButtonsGroup>
            {user?.level === 8 && (
              <Button
                color='primary'
                borderRadius='8px'
                outline
                onClick={() => handleGoogleAccountLink()}
              >
                {t('GOOGLE_ACCOUNT', 'Google account')}
              </Button>
            )}
          </ButtonsGroup>
        </UserInfoWrapper>
      </UserInfoContainer>
      <Sessions />
    </Container>
  )
}

export const ProfilePage = (props) => {
  const [{ user }] = useSession()
  const profileProps = {
    ...props,
    userId: user?.id,
    UIComponent: ProfilePageUI
  }
  return <UserDetailsController {...profileProps} />
}
