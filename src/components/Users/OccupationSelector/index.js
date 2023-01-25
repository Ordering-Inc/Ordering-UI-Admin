import React, { useState, useEffect } from 'react'
import { useLanguage, OccupationSelector as OccupationSelectorController } from 'ordering-components-admin'
import { Select } from '../../../styles/Select'
import { SelectWrapper, Option } from './styles'

const OccupationSelectorUI = (props) => {
  const {
    occupationId,
    occupations,
    handleChangeOccupation,
    handleAddOccupation,
    actionState
  } = props

  const [, t] = useLanguage()
  const [options, setOptions] = useState([])
  const [searchValue, setSearchValue] = useState('')

  const highlightTextConverter = (text) => {
    if (!searchValue) return text
    const startIndex = text.toLowerCase().indexOf(searchValue.toLowerCase())
    const endIndex = text.toLowerCase().indexOf(searchValue.toLowerCase()) + searchValue.length
    const result = <span>{text.substring(0, startIndex)}<b>{text.substring(startIndex, endIndex)}</b>{text.substring(endIndex, text.length)}</span>
    return result
  }

  useEffect(() => {
    if (!occupations.length) return
    const _occupationList = occupations.filter(item => item.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())).map(occupation => {
      return {
        value: occupation.id,
        content: highlightTextConverter(occupation.name),
        showOnSelected: occupation.name
      }
    })
    setOptions(_occupationList)
  }, [occupations, searchValue])

  return (
    <SelectWrapper>
      <Select
        placeholder={<Option>{actionState.loading ? t('LOADING', '') : t('SELECT_OCCUPATION', 'Select occupation')}</Option>}
        defaultValue={actionState.loading ? null : occupationId}
        options={options}
        onChange={handleChangeOccupation}

        isShowSearchBar
        searchBarIsCustomLayout
        searchBarIsNotLazyLoad
        searchBarPlaceholder={t('SEARCH', 'Search')}
        searchValue={searchValue}
        handleChangeSearch={val => setSearchValue(val)}

        isShowCustomOption={!!searchValue}
        customOptionTitle={<>+ {t('CREATE_OCCUPATION_FOR', 'Create occuption for')} '{searchValue}'</>}
        handleCustomOptionClick={() => {
          handleAddOccupation({ name: searchValue })
          setSearchValue('')
        }}
      />
    </SelectWrapper>
  )
}

export const OccupationSelector = (props) => {
  const occupationSelectorProps = {
    ...props,
    UIComponent: OccupationSelectorUI
  }
  return <OccupationSelectorController {...occupationSelectorProps} />
}
