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
  const [pagination, setPagination] = useState({
    currentPage: 1,
    pageSize: 5,
    totalItems: null,
    totalPages: null
  })

  const handleChangePage = (page) => {
    setPagination({
      ...pagination,
      currentPage: page
    })
  }

  const handleChangePageSize = (pageSize) => {
    const expectedPage = Math.ceil(((pagination?.currentPage - 1) * pagination?.pageSize + 1) / pageSize)
    setPagination({
      ...pagination,
      currentPage: expectedPage,
      pageSize,
      totalPages: Math.ceil(adminsMultiOptionList?.length / pageSize)
    })
  }

  useEffect(() => {
    if (!adminsList?.loading && adminsList?.admins?.length > 0) {
      let _adminList
      if (searchValue) {
        _adminList = adminsList?.admins?.filter(admin => (admin.name + admin.lastname).toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))
      } else {
        _adminList = adminsList?.admins
      }
      const _adminsOptionListTemp = _adminList?.map((admin, i) => {
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
    }
  }, [adminsList, defaultValue, searchValue])

  useEffect(() => {
    if (adminsMultiOptionList?.length) {
      setPagination(prevPagination => ({
        ...prevPagination,
        totalItems: adminsMultiOptionList?.length,
        totalPages: Math.ceil(adminsMultiOptionList?.length / prevPagination.pageSize)
      }))
    }
  }, [adminsMultiOptionList])

  return (
    <>
      {!adminsList?.loading ? (
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
          isHidePagecontrol
          pagination={pagination}
          handleChangePage={handleChangePage}
          handleChangePageSize={handleChangePageSize}
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
