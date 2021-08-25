import React from 'react'
import { useLanguage } from 'ordering-components-admin'

import {
  MainManagerContainer,
  MainManagerTable,
  TableHeader,
  TableBody
} from './styles'
import Skeleton from 'react-loading-skeleton'

export const LanguageMainManager = (props) => {
  const {
    mainTransList,
    translationList
  } = props
  const [, t] = useLanguage()
  console.log(mainTransList)

  return (
    <MainManagerContainer>
      <MainManagerTable>
        <TableHeader>
          <tr>
            <th>{t('NAME', 'Name')}</th>
            <th>{t('TEXT', 'Text')}</th>
          </tr>
        </TableHeader>
        {
          translationList?.loading ? (
            [...Array(5).keys()].map(i => (
              <TableBody key={i}>
                <tr>
                  <td>
                    <Skeleton width={200} height={25} />
                  </td>
                  <td style={{ paddingLeft: '20px', paddingRight: '20px' }}>
                    <Skeleton width={300} height={25} />
                  </td>
                </tr>
              </TableBody>
            ))

          ) : (
            mainTransList?.length > 0 && mainTransList.map((translation, i) => (
              <TableBody key={i}>
                <tr>
                  <td>{t(translation.name, translation.name)}</td>
                  <td>
                    <input
                      type='text'
                      defaultValue={translation.text}
                      placeholder={t('WRITE_A_TEXT', 'Write a text')}
                    />
                  </td>
                </tr>
              </TableBody>
            ))
          )
        }
      </MainManagerTable>
    </MainManagerContainer>
  )
}
