import React, { useRef, useState } from 'react'
import { useLanguage, ExamineClick, DragAndDrop, useApi, OrderingWebsite as OrderingWebsiteController } from 'ordering-components-admin'
import { useInfoShare } from '../../../contexts/InfoShareContext'
import { Button, IconButton, Input, TextArea } from '../../../styles'
import {
  List as MenuIcon,
  Image as DumyPhoto,
  CheckSquareFill as CheckedIcon,
  Square as UnCheckedIcon
} from 'react-bootstrap-icons'
import { useTheme } from 'styled-components'
import { Alert, Modal, ImageCrop, ColorPicker } from '../../Shared'
import { ContentForm } from '../ContentForm'
import { bytesConverter } from '../../../utils'
import {
  Container,
  HeaderTitleContainer,
  WebsiteWrapper,
  InfoWrapper,
  MoreSettingsHeader,
  FormWrapper,
  InputFormWrapper,
  FormGroup,
  InnerBlock,
  FormControl,
  ImageFormGroup,
  LogoImage,
  UploadImageIconContainer,
  UploadImageIcon,
  ImgInfoWrapper,
  BackgroundImage,
  CheckBoxWrapper,
  ColorPickerWrapper,
  ContentWrapper
} from './styles'
import Skeleton from 'react-loading-skeleton'

const OrderingWebsiteUI = (props) => {
  const {
    themeValues,
    orderingTheme,
    setThemeValues,
    handleUpdateSiteTheme
  } = props

  const [, t] = useLanguage()
  const [{ isCollapse }, { handleMenuCollapse }] = useInfoShare()
  const theme = useTheme()
  const [ordering] = useApi()

  const logoRef = useRef(null)
  const backgrooundRef = useRef(null)

  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [cropState, setCropState] = useState({ name: null, data: null, open: false })
  const [homePageContent, setHomePageContent] = useState(false)
  const [footerContent, setFooterContent] = useState(false)

  const handleClickImage = (type) => {
    if (type === 'logo') {
      logoRef.current.click()
    }

    if (type === 'homepage_background') {
      backgrooundRef.current.click()
    }
  }

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  const handleChangePhoto = (croppedImg) => {
    handleChangeValue(croppedImg, 'images', `${cropState?.name}.components.image`)
    setCropState({ name: null, data: null, open: false })
  }

  const handleFiles = (files, name) => {
    if (files.length === 1) {
      const type = files[0].type.split('/')[0]
      if (type !== 'image') {
        setAlertState({
          open: true,
          content: [t('ERROR_ONLY_IMAGES', 'Only images can be accepted')]
        })
        return
      }

      if (bytesConverter(files[0]?.size) > 2048) {
        setAlertState({
          open: true,
          content: [t('IMAGE_MAXIMUM_SIZE', 'The maximum image size is 2 megabytes')]
        })
        return
      }
      const reader = new window.FileReader()
      reader.readAsDataURL(files[0])
      reader.onload = () => {
        setCropState({ name: name, data: reader.result, open: true })
      }
      reader.onerror = error => console.log(error)
    }
  }

  const updateObject = (object, newValue, path) => {
    const stack = path.split('.')
    while (stack.length > 1) {
      object = object[stack.shift()]
    }
    object[stack.shift()] = newValue
  }

  const handleChangeValue = (value, section, block) => {
    const _themeValues = JSON.parse(JSON.stringify(themeValues))
    const path = [section, 'components', block].join('.')
    updateObject(_themeValues, value, path)
    setThemeValues(_themeValues)
  }

  const handleChangeSiteSettings = (e) => {
    handleChangeValue(e.target.value, 'website_settings', `values.${e.target.name}`)
  }

  const handleChangeContent = (type, content) => {
    handleChangeValue(content, 'theme_settings', `values.${type}`)
  }

  return (
    <>
      <Container>
        <HeaderTitleContainer>
          {isCollapse && (
            <IconButton
              color='black'
              onClick={() => handleMenuCollapse(false)}
            >
              <MenuIcon />
            </IconButton>
          )}
          <h1>{t('MY_PRODUCTS', 'My products')}</h1>
        </HeaderTitleContainer>
        <WebsiteWrapper>
          <InfoWrapper>
            <h1>{t('ORDERING_WEBSITE', 'Ordering website')}</h1>
            <p>{t('ORDERING_WEBSITE_DESC', 'This product is included in your project by default.')}</p>
          </InfoWrapper>
          <img src={theme.images.myProducts.orderingWebsite} alt='ordering-website' />
        </WebsiteWrapper>
        <MoreSettingsHeader>
          <h2>{t('MORE_SETTINGS_FOR_YOUR', 'More settings for your')} <span>{t('WEBSITE_ORIGINAL', 'website')}</span></h2>
          <p>{t('MORE_SETTINGS_YOUR_WEBSITE_DESC', 'Change background, colors, fonts, style, branding and all the essentials of your brand.')}</p>
        </MoreSettingsHeader>
        <FormWrapper>
          <InputFormWrapper>
            <InnerBlock>
              <h4>{t('WEBSITE_SETTINGS', 'Website settings')}</h4>
              <FormGroup>
                <label>
                  {orderingTheme?.loading ? (
                    <Skeleton height={20} width={150} />
                  ) : (
                    <>
                      {t('NAME', 'Name')}
                    </>
                  )}
                </label>
                {orderingTheme?.loading ? (
                  <Skeleton height={40} style={{ width: '100%' }} />
                ) : (
                  <Input
                    name='name'
                    placeholder={t('SOURCE_DEMO_WEBSITE', 'Source demo website')}
                    value={themeValues?.website_settings?.components?.values?.name || ''}
                    onChange={handleChangeSiteSettings}
                  />
                )}
              </FormGroup>
              <FormGroup>
                <label>
                  {orderingTheme?.loading ? (
                    <Skeleton height={20} width={150} />
                  ) : (
                    <>
                      {t('DESCRIPTION', 'Decription')}
                    </>
                  )}
                </label>
                {orderingTheme?.loading ? (
                  <Skeleton height={65} style={{ width: '100%' }} />
                ) : (
                  <TextArea
                    name='description'
                    placeholder={t('DESCRIPTION', 'Decription')}
                    value={themeValues?.website_settings?.components?.values?.description || ''}
                    onChange={handleChangeSiteSettings}
                  />
                )}
              </FormGroup>
              <FormGroup>
                <label>
                  {orderingTheme?.loading ? (
                    <Skeleton height={20} width={150} />
                  ) : (
                    <>
                      {t('TEMPORAL_DOMAIN', 'Temporal domain')}
                    </>
                  )}
                </label>
                {orderingTheme?.loading ? (
                  <Skeleton height={40} style={{ width: '100%' }} />
                ) : (
                  <FormControl>
                    <div className='before'>https://</div>
                    <Input
                      name='default_domain'
                      placeholder={t('NAME', 'Name')}
                      disabled
                      defaultValue={ordering.project}
                    />
                    <div className='after'>.tryordering.com</div>
                  </FormControl>
                )}
              </FormGroup>
              <FormGroup>
                <label>
                  {orderingTheme?.loading ? (
                    <Skeleton height={20} width={150} />
                  ) : (
                    <>
                      {t('CUSTOM_DOMAIN', 'Custom domain')}
                    </>
                  )}
                </label>
                {orderingTheme?.loading ? (
                  <Skeleton height={40} style={{ width: '100%' }} />
                ) : (
                  <Button
                    color='primary'
                    outline
                    borderRadius='8px'
                    onClick={() => window.open('https://www.ordering.co/custom-domain-change', '_blank')}
                  >
                    {t('REQUEST_CUSTOM_DOMAIN', 'Request custom domain')}
                  </Button>
                )}
              </FormGroup>
            </InnerBlock>
          </InputFormWrapper>
          <InputFormWrapper>
            <h4>{t('IMAGES', 'Images')}</h4>
            <InnerBlock>
              {orderingTheme?.loading ? (
                <>
                  <Skeleton height={100} width={100} style={{ marginBottom: '15px' }} />
                  <Skeleton height={15} count={3} width={150} style={{ display: 'block', marginBottom: '7px' }} />
                </>
              ) : (
                <ImageFormGroup>
                  <LogoImage
                    onClick={() => handleClickImage('logo')}
                  >
                    <ExamineClick
                      onFiles={files => handleFiles(files, 'logo')}
                      childRef={(e) => { logoRef.current = e }}
                      accept='image/png, image/jpeg, image/jpg'
                    >
                      <DragAndDrop
                        onDrop={dataTransfer => handleFiles(dataTransfer.files, 'logo')}
                        accept='image/png, image/jpeg, image/jpg'
                        disabled={orderingTheme.loading}
                      >
                        {themeValues?.images?.components?.logo?.components?.image
                          ? <img src={themeValues?.images?.components?.logo?.components?.image} alt='logo image' loading='lazy' />
                          : (
                            <UploadImageIconContainer>
                              <UploadImageIcon>
                                <DumyPhoto />
                                <span>{t('DRAG_AND_DROP', 'Drag and drop')}</span>
                              </UploadImageIcon>
                            </UploadImageIconContainer>
                          )}
                      </DragAndDrop>
                    </ExamineClick>
                  </LogoImage>
                  <ImgInfoWrapper>
                    <h4>{t('HEADER_LOGO', 'Header logo')}</h4>
                    <p>900 x 200 px</p>
                    <p>{t('FORMAT', 'Format')}: PNG</p>
                  </ImgInfoWrapper>
                </ImageFormGroup>
              )}
              {orderingTheme?.loading ? (
                <>
                  <Skeleton height={100} style={{ marginBottom: '15px', width: '100%' }} />
                  <Skeleton height={15} count={3} width={150} style={{ display: 'block', marginBottom: '7px' }} />
                </>
              ) : (
                <ImageFormGroup>
                  <BackgroundImage
                    onClick={() => handleClickImage('homepage_background')}
                  >
                    <ExamineClick
                      onFiles={files => handleFiles(files, 'homepage_background')}
                      childRef={(e) => { backgrooundRef.current = e }}
                      accept='image/png, image/jpeg, image/jpg'
                    >
                      <DragAndDrop
                        onDrop={dataTransfer => handleFiles(dataTransfer.files, 'homepage_background')}
                        accept='image/png, image/jpeg, image/jpg'
                        disabled={orderingTheme.loading}
                      >
                        {themeValues?.images?.components?.homepage_background?.components?.image
                          ? <img src={themeValues?.images?.components?.homepage_background?.components?.image} alt='backgrond image' loading='lazy' />
                          : (
                            <UploadImageIconContainer>
                              <UploadImageIcon>
                                <DumyPhoto />
                                <span>{t('DRAG_AND_DROP', 'Drag and drop')}</span>
                              </UploadImageIcon>
                            </UploadImageIconContainer>
                          )}
                      </DragAndDrop>
                    </ExamineClick>
                  </BackgroundImage>
                  <ImgInfoWrapper>
                    <h4>{t('HOMEPAGE_BACKGROUND', 'Homepage background')}</h4>
                    <p>1920 x 1280 px</p>
                    <p>{t('FORMAT', 'Format')}: PNG</p>
                  </ImgInfoWrapper>
                </ImageFormGroup>
              )}
              {orderingTheme?.loading ? (
                <Skeleton width={200} height={20} />
              ) : (
                <CheckBoxWrapper
                  onClick={() => handleChangeValue(!themeValues?.images?.components?.homepage_image_fullscreen, 'images', 'homepage_image_fullscreen')}
                >
                  {themeValues?.images?.components?.homepage_image_fullscreen ? (
                    <CheckedIcon className='active' />
                  ) : (
                    <UnCheckedIcon />
                  )}
                  <span>{t('HOMEPAGE_IMAGE_FULLSCREEN', 'Homepage  image fullscreen')}</span>
                </CheckBoxWrapper>
              )}
            </InnerBlock>
          </InputFormWrapper>
          {!orderingTheme?.loading && (
            <InputFormWrapper>
              <h4>{t('THEME_SETTINGS', 'Theme Settings')}</h4>
              <InnerBlock>
                <ColorPickerWrapper>
                  <div>
                    <p>{t('PRIMARY_COLOR_BUTTONS', 'Primary Color for Buttons')}</p>
                    <ColorPicker
                      defaultColor={themeValues?.theme_settings?.components?.style?.primary_btn_color}
                      onChangeColor={(color) => handleChangeValue(color, 'theme_settings', 'style.primary_btn_color')}
                    />
                  </div>
                  <div>
                    <p>{t('PRIMARY_COLOR_LINKS', 'Primary Color for Links')}</p>
                    <ColorPicker
                      defaultColor={themeValues?.theme_settings?.components?.style?.primary_link_color}
                      onChangeColor={(color) => handleChangeValue(color, 'theme_settings', 'style.primary_link_color')}
                    />
                  </div>
                </ColorPickerWrapper>
                <ContentWrapper>
                  <div>
                    <p>{t('HOMEPAGE_CONTENT', 'Homepage Content')}</p>
                    <Button
                      color='primary'
                      borderRadius='8px'
                      outline
                      onClick={() => setHomePageContent(true)}
                    >
                      {t('HOMEPAGE_CONTENT', 'Homepage content')}
                    </Button>
                  </div>
                  <div>
                    <p>{t('FOOTER_CONTENT', 'Footer Content')}</p>
                    <Button
                      color='primary'
                      borderRadius='8px'
                      outline
                      onClick={() => setFooterContent(true)}
                    >
                      {t('FOOTER_CONTENT', 'Footer content')}
                    </Button>
                  </div>
                </ContentWrapper>
              </InnerBlock>
            </InputFormWrapper>
          )}

          <Button
            color='primary'
            borderRadius='8px'
            onClick={() => handleUpdateSiteTheme()}
            disabled={orderingTheme?.loading}
          >
            {t('SAVE', 'Save')}
          </Button>
        </FormWrapper>
      </Container>
      <Alert
        title={t('BUSINESS', 'Business')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
      <Modal
        width='700px'
        height='80vh'
        padding='30px'
        title={t('IMAGE_CROP', 'Image crop')}
        open={cropState?.open}
        onClose={() => setCropState({ ...cropState, open: false })}
      >
        <ImageCrop
          photo={cropState?.data}
          handleChangePhoto={handleChangePhoto}
        />
      </Modal>
      <Modal
        width='70%'
        open={homePageContent}
        onClose={() => setHomePageContent(false)}
      >
        <ContentForm
          title={t('HOME_PAGE_CONTENT', 'Home Page Content')}
          content={themeValues?.theme_settings?.components?.values?.homepage_content}
          onClose={() => setHomePageContent(false)}
          handleChangeContent={handleChangeContent}
          type='homepage_content'
        />
      </Modal>
      <Modal
        width='70%'
        open={footerContent}
        onClose={() => setFooterContent(false)}
      >
        <ContentForm
          title={t('FOOTER', 'Footer')}
          content={themeValues?.theme_settings?.components?.values?.footer_content}
          onClose={() => setFooterContent(false)}
          handleChangeContent={handleChangeContent}
          type='footer_content'
        />
      </Modal>
    </>
  )
}

export const OrderingWebsite = (props) => {
  const orderingWebsiteProps = {
    ...props,
    UIComponent: OrderingWebsiteUI,
    appId: 'orderingwebreact'
  }
  return <OrderingWebsiteController {...orderingWebsiteProps} />
}
