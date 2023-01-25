import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { BoxLayout } from '../AdvancedSettings/styles'
import { ImageBox } from '../AdvancedSettings/ImageBox'
import {
  Container,
  ImageGroup,
  ButtonWrapper
} from './styles'
import { Button } from '../../../styles'

export const AppResources = (props) => {
  const {
    handleUpdateSiteTheme,
    advancedValues,
    setAdvancedValues
  } = props

  const [, t] = useLanguage()

  const updateObject = (object, newValue, path) => {
    const stack = path.split('.')
    while (stack.length > 1) {
      object = object[stack.shift()]
    }
    object[stack.shift()] = newValue
  }

  const handleUpdateThemeValue = (value, path) => {
    const _advancedValues = JSON.parse(JSON.stringify(advancedValues))
    updateObject(_advancedValues, value, path)
    setAdvancedValues(_advancedValues)
  }

  return (
    <Container>
      <BoxLayout>
        <h2>{t('ANDROID_SPLASH', 'Android splash')}</h2>
        <h2>{t('PORTRAIT', 'Portrait')}</h2>
        <ImageGroup>
          <ImageBox
            title='ldpi'
            ratio='200 x 320 px'
            photo={advancedValues?.android?.components?.portrait?.dimensions?.idpi?.image}
            path='android.components.portrait.dimensions.idpi.image'
            handleChangePhoto={handleUpdateThemeValue}
          />
          <ImageBox
            title='xhdpi'
            ratio='720 x 1280 px'
            photo={advancedValues?.android?.components?.portrait?.dimensions?.xhdpi?.image}
            path='android.components.portrait.dimensions.xhdpi.image'
            handleChangePhoto={handleUpdateThemeValue}
          />
          <ImageBox
            title='xxhdpi/hdpi'
            ratio='960 x 1600 px'
            photo={advancedValues?.android?.components?.portrait?.dimensions?.xxhdpi?.image}
            path='android.components.portrait.dimensions.xxhdpi.image'
            handleChangePhoto={handleUpdateThemeValue}
          />
          <ImageBox
            title='xxxhdpi/mdpi'
            ratio='1280 x 1920 px'
            photo={advancedValues?.android?.components?.portrait?.dimensions?.xxxhdpi?.image}
            path='android.components.portrait.dimensions.xxxhdpi.image'
            handleChangePhoto={handleUpdateThemeValue}
          />
        </ImageGroup>
        <h2>{t('LANDSCAPE', 'Landscape')}</h2>
        <ImageGroup>
          <ImageBox
            title='ldpi'
            ratio='200 x 320 px'
            photo={advancedValues?.android?.components?.landscape?.dimensions?.idpi?.image}
            path='android.components.landscape.dimensions.idpi.image'
            handleChangePhoto={handleUpdateThemeValue}
          />
          <ImageBox
            title='xhdpi'
            ratio='720 x 1280 px'
            photo={advancedValues?.android?.components?.landscape?.dimensions?.xhdpi?.image}
            path='android.components.landscape.dimensions.xhdpi.image'
            handleChangePhoto={handleUpdateThemeValue}
          />
          <ImageBox
            title='xxhdpi/hdpi'
            ratio='960 x 1600 px'
            photo={advancedValues?.android?.components?.landscape?.dimensions?.xxhdpi?.image}
            path='android.components.landscape.dimensions.xxhdpi.image'
            handleChangePhoto={handleUpdateThemeValue}
          />
          <ImageBox
            title='xxxhdpi/mdpi'
            ratio='1280 x 1920 px'
            photo={advancedValues?.android?.components?.landscape?.dimensions?.xxxhdpi?.image}
            path='android.components.landscape.dimensions.xxxhdpi.image'
            handleChangePhoto={handleUpdateThemeValue}
          />
        </ImageGroup>
      </BoxLayout>
      <BoxLayout>
        <h2>{t('iOS_SPLASH', 'iOS splash')}</h2>
        <h2>{t('PORTRAIT', 'Portrait')}</h2>
        <ImageGroup>
          <ImageBox
            title='Ipad'
            ratio='1536 x 2048 px'
            photo={advancedValues?.ios?.components?.portrait?.dimensions?.ipad?.image}
            path='ios.components.portrait.dimensions.ipad.image'
            handleChangePhoto={handleUpdateThemeValue}
          />
          <ImageBox
            title='Iphone 3/4'
            ratio='640 x 960 px'
            photo={advancedValues?.ios?.components?.portrait?.dimensions?.iphone?.image}
            path='ios.components.portrait.dimensions.iphone.image'
            handleChangePhoto={handleUpdateThemeValue}
          />
          <ImageBox
            title='Iphone 5/6 plus'
            ratio='640 x 960 px'
            photo={advancedValues?.ios?.components?.portrait?.dimensions?.iphone_plus?.image}
            path='ios.components.portrait.dimensions.iphone_plus.image'
            handleChangePhoto={handleUpdateThemeValue}
          />
        </ImageGroup>
        <h2>{t('LANDSCAPE', 'Landscape')}</h2>
        <ImageGroup>
          <ImageBox
            title='Ipad'
            ratio='2048 x 1536 px'
            photo={advancedValues?.ios?.components?.landscape?.dimensions?.ipad?.image}
            path='ios.components.landscape.dimensions.ipad.image'
            handleChangePhoto={handleUpdateThemeValue}
          />
          <ImageBox
            title='Iphone'
            ratio='2208 x 1242 px'
            photo={advancedValues?.ios?.components?.landscape?.dimensions?.iphone?.image}
            path='ios.components.landscape.dimensions.iphone.image'
            handleChangePhoto={handleUpdateThemeValue}
          />
        </ImageGroup>
        <h2>{t('ANY', 'Any')}</h2>
        <ImageGroup>
          <ImageBox
            title={t('ANY', 'Any')}
            ratio='2732 x 2732 px'
            photo={advancedValues?.ios?.components?.any?.image}
            path='ios.components.any.image'
            handleChangePhoto={handleUpdateThemeValue}
          />
        </ImageGroup>
      </BoxLayout>
      <ButtonWrapper>
        <Button
          color='primary'
          borderRadius='8px'
          onClick={() => handleUpdateSiteTheme(true)}
        >
          {t('SAVE', 'Save')}
        </Button>
      </ButtonWrapper>
    </Container>
  )
}
