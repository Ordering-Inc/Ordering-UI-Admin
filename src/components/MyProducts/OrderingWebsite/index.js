import React, { useRef, useState } from 'react'
import { useLanguage, ExamineClick, DragAndDrop, useApi, OrderingWebsite as OrderingWebsiteController } from 'ordering-components-admin'
import { useInfoShare } from '../../../contexts/InfoShareContext'
import { useLocation } from 'react-router-dom'
import { Button, IconButton, Input, TextArea } from '../../../styles'
import {
  List as MenuIcon,
  Image as DumyPhoto,
  CheckSquareFill as CheckedIcon,
  Square as UnCheckedIcon,
  InfoCircle,
  RecordCircleFill,
  Circle
} from 'react-bootstrap-icons'

import { useTheme } from 'styled-components'
import { Alert, Modal, ImageCrop, ColorPicker } from '../../Shared'
import { ContentForm } from '../ContentForm'
import Skeleton from 'react-loading-skeleton'
import { AdvancedSettings } from '../AdvancedSettings'
import { CustomDomain } from '../CustomDomain'
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
  TemporalDomail,
  ImageFormGroup,
  LogoImage,
  UploadImageIconContainer,
  UploadImageIcon,
  ImgInfoWrapper,
  BackgroundImage,
  CheckBoxWrapper,
  ColorPickerWrapper,
  ContentWrapper,
  WebsiteButtonWrapper,
  TabWrapper,
  Tabs,
  Tab,
  HeaderInfoWrapper,
  InfoContent,
  RadioItem,
  SlugWrapper,
  CustomeDomainDesc
} from './styles'

const OrderingWebsiteUI = (props) => {
  const {
    themeValues,
    orderingTheme,
    setThemeValues,
    handleUpdateSiteTheme,
    advancedValues,
    setAdvancedValues,
    themesList,
    site,
    setSite
  } = props

  const [, t] = useLanguage()
  const [{ isCollapse }, { handleMenuCollapse }] = useInfoShare()
  const theme = useTheme()
  const [ordering] = useApi()
  const location = useLocation()

  const logoRef = useRef(null)
  const backgroundRef = useRef(null)
  const mobileBackgroundRef = useRef(null)

  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [cropState, setCropState] = useState({ name: null, data: null, open: false })
  const [homePageContent, setHomePageContent] = useState(false)
  const [footerContent, setFooterContent] = useState(false)
  const [selectedSetting, setSelectedSetting] = useState('basic')
  const [isCustomDomain, setIsCustomDomain] = useState(false)

  const settingsList = [
    { key: 'basic', name: t('BASIC_SETTINGS', 'Basic Settings') },
    { key: 'advanced', name: t('ADVANCED_SETTINGS', 'Advanced Settings') }
  ]

  const handleClickImage = (type) => {
    if (type === 'logo') {
      logoRef.current.click()
    }

    if (type === 'homepage_background') {
      backgroundRef.current.click()
    }

    if (type === 'homepage_mobile_background') {
      mobileBackgroundRef.current.click()
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
          {(location.pathname === '/my-products/ordering-website' || location.pathname === '/my-products/customer-app') && (
            <HeaderInfoWrapper>
              <IconButton
                color='primary'
              >
                <InfoCircle />
              </IconButton>
              <InfoContent>
                {t('MY_PRODUCTS_INFO', 'Use the advanced configurations below to customize your products changing the images, colors, available options and others with a few clicks. If you have doubts, please contact our team here:')}
                <a href='https://www.ordering.co/support' rel='noopener noreferrer' target='_blank'>https://www.ordering.co/support</a>
              </InfoContent>
            </HeaderInfoWrapper>
          )}
        </HeaderTitleContainer>
        <WebsiteWrapper>
          <InfoWrapper>
            <h1>{t('ORDERING_WEBSITE', 'Ordering website')}</h1>
            <p>{t('ORDERING_WEBSITE_DESC', 'This product is included in your project by default.')}</p>
            <WebsiteButtonWrapper>
              <Button
                color='primary'
                borderRadius='8px'
                onClick={() => window.open(`https://${ordering?.project}.tryordering.com`, '_blank')}
              >
                {t('VISIT_MY_WEBSITE', 'Visit My Website')}
              </Button>
            </WebsiteButtonWrapper>
          </InfoWrapper>
          <img src={theme.images.myProducts.orderingWebsite} alt='ordering-website' />
        </WebsiteWrapper>
        <MoreSettingsHeader>
          <h2>{t('MORE_SETTINGS_FOR_YOUR', 'More settings for your')} <span>{t('WEBSITE_ORIGINAL', 'website')}</span></h2>
          <p>{t('MORE_SETTINGS_YOUR_WEBSITE_DESC', 'Change background, colors, fonts, style, branding and all the essentials of your brand.')}</p>
          <TabWrapper>
            <Tabs>
              {settingsList.map(setting => (
                <Tab
                  key={setting.key}
                  active={selectedSetting === setting.key}
                  onClick={() => !orderingTheme?.loading && setSelectedSetting(setting.key)}
                >
                  {setting.name}
                </Tab>
              ))}
            </Tabs>
          </TabWrapper>
        </MoreSettingsHeader>
        {selectedSetting === 'basic' && (
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
                    <Skeleton height={20} style={{ width: '100%' }} />
                  ) : (
                    <TemporalDomail>
                      {t('VISIT', 'Visit')}: <a href={`https://${ordering?.project}.tryordering.com`} rel='noopener noreferrer' target='_blank'>https://{ordering?.project}.tryordering.com</a>
                    </TemporalDomail>
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
                    <>
                      {site?.domain && (
                        <>
                          <TemporalDomail isDisabled={site?.ssl_process_status === 'pending'} marginBottom={site?.ssl_process_status === 'ended'}>
                            {t('VISIT', 'Visit')}: <a href={`https://${site?.domain}`} rel='noopener noreferrer' target='_blank'>https://{site?.domain}</a>
                          </TemporalDomail>
                          {site?.ssl_process_status === 'pending' && (
                            <CustomeDomainDesc>{t('ERROR_SITE_CERTIFICATE_PENDING_PROCESS', 'Creating a custom domain is currently being processed.')}</CustomeDomainDesc>
                          )}
                        </>
                      )}
                      {site?.ssl_process_status !== 'pending' && (
                        <Button
                          color='primary'
                          outline
                          borderRadius='8px'
                          onClick={() => setIsCustomDomain(true)}
                        >
                          {site?.domain ? t('REQUEST_CUSTOM_DOMAIN', 'Request custom domain') : t('CHANGE_CUSTOM_DOMAIN', 'Change custom domain')}
                        </Button>
                      )}
                    </>
                  )}
                </FormGroup>
              </InnerBlock>
            </InputFormWrapper>
            <InputFormWrapper>
              <InnerBlock>
                <h4>{t('WEBSITE_THEME', 'Website Theme')}</h4>
                {orderingTheme?.loading ? (
                  <Skeleton height={20} width={150} />
                ) : (
                  <>
                    <RadioItem
                      onClick={() => handleChangeValue('marketplace', 'website_theme', 'type')}
                    >
                      {themeValues?.website_theme?.components?.type === 'marketplace' ? <RecordCircleFill className='active' /> : <Circle />}
                      <span>{t('MARKETPLACE', 'Marketplace')}</span>
                    </RadioItem>

                    <RadioItem
                      onClick={() => handleChangeValue('franchise', 'website_theme', 'type')}
                    >
                      {themeValues?.website_theme?.components?.type === 'franchise' ? <RecordCircleFill className='active' /> : <Circle />}
                      <span>{t('REPORT_HEADER_FRANCHISES', 'Franchise')}</span>
                    </RadioItem>
                    {themeValues?.website_theme?.components?.type === 'franchise' && (
                      <SlugWrapper>
                        <label>{t('FRANCHISE_SLUG', 'Franchise slug')}</label>
                        <Input
                          name='name'
                          placeholder={t('SLUG', 'Slug')}
                          value={themeValues?.website_theme?.components?.franchise_slug || ''}
                          onChange={e => handleChangeValue(e.target.value, 'website_theme', 'franchise_slug')}
                          onKeyPress={e => {
                            if (e.which === 32) { e.preventDefault() }
                          }}
                        />
                      </SlugWrapper>
                    )}

                    <RadioItem
                      onClick={() => handleChangeValue('single_store', 'website_theme', 'type')}
                    >
                      {themeValues?.website_theme?.components?.type === 'single_store' ? <RecordCircleFill className='active' /> : <Circle />}
                      <span>{t('SINGLE_STORE', 'Single Store')}</span>
                    </RadioItem>
                    {themeValues?.website_theme?.components?.type === 'single_store' && (
                      <SlugWrapper>
                        <label>{t('BUSINESS_SLUG', 'Business slug')}</label>
                        <Input
                          name='name'
                          placeholder={t('SLUG', 'Slug')}
                          value={themeValues?.website_theme?.components?.business_slug || ''}
                          onChange={e => handleChangeValue(e.target.value, 'website_theme', 'business_slug')}
                          onKeyPress={e => {
                            if (e.which === 32) { e.preventDefault() }
                          }}
                        />
                      </SlugWrapper>
                    )}
                  </>
                )}
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
                          {themeValues?.images?.components?.logo?.components?.image && <img src={themeValues?.images?.components?.logo?.components?.image} alt='logo image' loading='lazy' />}
                          <UploadImageIconContainer bgimage={themeValues?.images?.components?.logo?.components?.image}>
                            <UploadImageIcon>
                              <DumyPhoto />
                              <span>{t('DRAG_AND_DROP', 'Drag and drop')}</span>
                            </UploadImageIcon>
                          </UploadImageIconContainer>
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
                        childRef={(e) => { backgroundRef.current = e }}
                        accept='image/png, image/jpeg, image/jpg'
                      >
                        <DragAndDrop
                          onDrop={dataTransfer => handleFiles(dataTransfer.files, 'homepage_background')}
                          accept='image/png, image/jpeg, image/jpg'
                          disabled={orderingTheme.loading}
                        >
                          {themeValues?.images?.components?.homepage_background?.components?.image && <img src={themeValues?.images?.components?.homepage_background?.components?.image} alt='backgrond image' loading='lazy' />}
                          <UploadImageIconContainer bgimage={!!themeValues?.images?.components?.homepage_background?.components?.image}>
                            <UploadImageIcon>
                              <DumyPhoto />
                              <span>{t('DRAG_AND_DROP', 'Drag and drop')}</span>
                            </UploadImageIcon>
                          </UploadImageIconContainer>
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
                  <>
                    <Skeleton height={100} style={{ marginBottom: '15px', width: '100%' }} />
                    <Skeleton height={15} count={3} width={150} style={{ display: 'block', marginBottom: '7px' }} />
                  </>
                ) : (
                  <ImageFormGroup>
                    <BackgroundImage
                      onClick={() => handleClickImage('homepage_mobile_background')}
                    >
                      <ExamineClick
                        onFiles={files => handleFiles(files, 'homepage_mobile_background')}
                        childRef={(e) => { mobileBackgroundRef.current = e }}
                        accept='image/png, image/jpeg, image/jpg'
                      >
                        <DragAndDrop
                          onDrop={dataTransfer => handleFiles(dataTransfer.files, 'homepage_mobile_background')}
                          accept='image/png, image/jpeg, image/jpg'
                          disabled={orderingTheme.loading}
                        >
                          {themeValues?.images?.components?.homepage_mobile_background?.components?.image && <img src={themeValues?.images?.components?.homepage_mobile_background?.components?.image} alt='backgrond image' loading='lazy' />}
                          <UploadImageIconContainer bgimage={!!themeValues?.images?.components?.homepage_mobile_background?.components?.image}>
                            <UploadImageIcon>
                              <DumyPhoto />
                              <span>{t('DRAG_AND_DROP', 'Drag and drop')}</span>
                            </UploadImageIcon>
                          </UploadImageIconContainer>
                        </DragAndDrop>
                      </ExamineClick>
                    </BackgroundImage>
                    <ImgInfoWrapper>
                      <h4>{t('HOMEPAGE_MOBILE_BACKGROUND', 'Homepage mobile background')}</h4>
                      <p>1440 x 770 px</p>
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
        )}
        {selectedSetting === 'advanced' && !orderingTheme?.loading && (
          <AdvancedSettings
            themesList={themesList}
            advancedValues={advancedValues}
            setAdvancedValues={setAdvancedValues}
            handleUpdateSiteTheme={handleUpdateSiteTheme}
          />
        )}
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
      <Modal
        width='700px'
        height='80vh'
        padding='30px'
        title={t('IMAGE_CROP', 'Image crop')}
        open={cropState?.open}
        onRemove={() => setCropState({ ...cropState, open: false })}
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
      <Modal
        width='70%'
        open={isCustomDomain}
        onClose={() => setIsCustomDomain(false)}
      >
        <CustomDomain
          site={site}
          onClose={() => setIsCustomDomain(false)}
          setSite={setSite}
        />
      </Modal>
    </>
  )
}

export const OrderingWebsite = (props) => {
  const orderingWebsiteProps = {
    ...props,
    UIComponent: OrderingWebsiteUI,
    appId: 'website'
  }
  return <OrderingWebsiteController {...orderingWebsiteProps} />
}
