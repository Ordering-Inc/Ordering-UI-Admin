import React, { useEffect, useState } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { useTheme } from 'styled-components'
import { MultiSelect } from '../../../styles/MultiSelect'

import {
  Option,
  OptionContent,
  DriverNameContainer,
  WrapperDriverImage,
  DriverImage,
  DriverName,
  PlaceholderTitle
} from './styles'

export const AdminsSelector = (props) => {
  const {
    adminsList,
    defaultValue,
    small,
    padding,
    handleChangeAdmin,
    filterValues
  } = props

  const [, t] = useLanguage()
  const theme = useTheme()
  const [adminsMultiOptionList, setAdminsMultiOptionList] = useState([])
  const [searchValue, setSearchValue] = useState(null)
  const adminsLoading = [{ value: 'default', content: <Option small={small}>{t('LOADING', 'loading')}...</Option> }]
  const Placeholder = <PlaceholderTitle>{t('SELECT_ADMINISTRATOR', 'Select the administrator')}</PlaceholderTitle>

  useEffect(() => {
    const _adminsOptionList = [
      {
        value: 'default',
        content: <Option padding='0px'><span>{t('SELECT_ADMINISTRATOR', 'Select the administrator')}</span></Option>,
        color: 'primary',
        showDisable: true
      }
    ]
    if (adminsList && !adminsList.loading) {
      let _adminList
      if (searchValue) {
        _adminList = adminsList.admins.filter(admin => (admin.name + admin.lastname).toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))
      } else {
        _adminList = adminsList.admins
      }
      const _adminsOptionListTemp = _adminList.map((admin, i) => {
        return {
          value: admin.id,
          showDisable: true,
          content: (
            <Option small={small} padding={padding}>
              <WrapperDriverImage small={small} className='driver-photo'>
                <DriverImage bgimage={admin.photo || theme.images.icons?.noDriver} small={small} />
              </WrapperDriverImage>
              <OptionContent>
                <DriverNameContainer className='driver-info'>
                  <DriverName small={small}>{admin?.name} {admin?.lastname}</DriverName>
                </DriverNameContainer>
              </OptionContent>
            </Option>
          )
        }
      })

      setAdminsMultiOptionList(_adminsOptionListTemp)

      for (const option of _adminsOptionListTemp) {
        _adminsOptionList.push(option)
      }
    }
  }, [adminsList, defaultValue, searchValue])

  return (
    <>
      {adminsList && !adminsList.loading ? (
        <MultiSelect
          defaultValue={filterValues.administratorIds}
          placeholder={Placeholder}
          options={adminsMultiOptionList}
          optionInnerMargin='10px'
          optionInnerMaxHeight='150px'
          onChange={(admin) => handleChangeAdmin(admin)}
          isShowSearchBar
          searchBarIsCustomLayout
          searchBarIsNotLazyLoad
          searchValue={searchValue}
          handleChangeSearch={(val) => setSearchValue(val)}
        />
      ) : (
        <MultiSelect
          defaultValue='default'
          options={adminsLoading}
          optionInnerMargin='10px'
          optionInnerMaxHeight='150px'
          className='driver-select'
          isShowSearchBar
          searchBarIsCustomLayout
          searchBarIsNotLazyLoad
          searchValue={searchValue}
          handleChangeSearch={(val) => setSearchValue(val)}
        />
      )}
    </>
  )
}

