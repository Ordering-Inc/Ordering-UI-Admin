import React, { useEffect, useState } from 'react'
import { RecordCircleFill, Circle } from 'react-bootstrap-icons'
import {
  FormControl,
  FontWeightListWrapper,
  FontWeightItem
} from '../AdvancedSettings/styles'

export const LayoutStyleGroup = (props) => {
  const { layoutList, layouts, path, handleUpdateThemeValue } = props

  const [layoutType, setLayoutType] = useState([])

  const handleChangeWeights = (value) => {
    handleUpdateThemeValue(value, [path, 'type'].join('.'))
    setLayoutType(value)
  }

  useEffect(() => {
    setLayoutType(layouts?.type)
  }, [JSON.stringify(layouts)])

  return (
    <>
      <FormControl>
        <FontWeightListWrapper>
          {layoutList.map(_layoutType => (
            <FontWeightItem key={_layoutType.value} onClick={() => handleChangeWeights(_layoutType?.value)}>
              {layoutType === _layoutType.value ? <RecordCircleFill className='active' /> : <Circle />}
              <span>{_layoutType.name}</span>
            </FontWeightItem>
          ))}
        </FontWeightListWrapper>
      </FormControl>
    </>
  )
}
