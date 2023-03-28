import React, { useEffect, useState } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { RecordCircleFill, Circle } from 'react-bootstrap-icons'
import { Select } from '../../../styles/Select/FirstSelect'
import {
  FormControl,
  Option,
  SelectWrapper,
  FontWeightListWrapper,
  FontWeightItem
} from './styles'

export const FontStyleGroup = (props) => {
  const { isBody, fonts, path, handleUpdateThemeValue } = props
  const [, t] = useLanguage()

  const [weights, setWeights] = useState([])
  const [font, setFont] = useState('Poppins')

  const fontFamilyList = [
    { value: 'Poppins', content: <Option>{t('POPPINS', 'Poppins')}</Option> },
    { value: 'Lobster', content: <Option>{t('LOBSTER', 'Lobster')}</Option> },
    { value: 'Raleway', content: <Option>{t('RALEWAY', 'Raleway')}</Option> }
  ]

  const fontWeightList = [
    { value: 100, name: '100 - Thin' },
    { value: 200, name: '200 - Extra Light (Ultra Light)' },
    { value: 300, name: '300 - Light' },
    { value: 400, name: '400 - Normal' },
    { value: 500, name: '500 - Medium' },
    { value: 600, name: '600 - Semi Bold (Demi Bold)' },
    { value: 700, name: '700 - Bold' },
    { value: 800, name: '800 - Extra Bold (Ultra Bold)' },
    { value: 900, name: '900 - Black (Heavy)' }
  ]

  const handleChangeWeights = (value) => {
    handleUpdateThemeValue([value], [path, 'weights'].join('.'))
    setWeights([value])
  }

  const handleUpdateFont = (value) => {
    handleUpdateThemeValue(value, [path, 'name'].join('.'))
    setFont(value)
  }

  useEffect(() => {
    setWeights(fonts?.weights)
    setFont(fonts?.name)
  }, [JSON.stringify(fonts)])

  return (
    <>
      <FormControl>
        <label>{t('FONT', 'Font')}</label>
        <SelectWrapper>
          <Select
            options={fontFamilyList}
            className='select'
            defaultValue={font}
            placeholder={t('SELECT_OPTION', 'Select an option')}
            onChange={(value) => handleUpdateFont(value)}
          />
        </SelectWrapper>
      </FormControl>
      <FormControl>
        <label>
          {isBody ? t('FONT_SPECIAL_WEIGHTS', 'Font special weights') : t('FONT_PRIMARY_WEIGHTS', 'Font primary weights')}
        </label>
        <FontWeightListWrapper>
          {fontWeightList.map(weight => (
            <FontWeightItem key={weight.value} onClick={() => handleChangeWeights(weight?.value)}>
              {weights?.includes(weight.value) ? <RecordCircleFill className='active' /> : <Circle />}
              <span>{weight.name}</span>
            </FontWeightItem>
          ))}
        </FontWeightListWrapper>
      </FormControl>
    </>
  )
}
