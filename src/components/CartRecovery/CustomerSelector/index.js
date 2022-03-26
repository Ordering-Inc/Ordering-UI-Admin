import React, { useEffect, useState } from 'react'
import {
  useLanguage,
  UsersList as UsersListController
} from 'ordering-components-admin'
import { MultiSelect } from '../../../styles'
import Skeleton from 'react-loading-skeleton'
import {
  Option,
  PlaceholderTitle,
  OptionContent,
  OptionName,
  WrapperBusinessImage,
  BusinessImage
} from './styles'

const CustomerSelectorUI = (props) => {
  const {
    cartFilterValues,
    handleChangeCustomers,
    usersList
  } = props

  const [, t] = useLanguage()
  const [customerTypes, setCustomerTypes] = useState([])

  const Placeholder = <PlaceholderTitle>{t('SELECT_A_CUSTOMER', 'Select a customer')}</PlaceholderTitle>

  useEffect(() => {
    const _businessesOptionList = []
    if (!usersList.loading) {
      const _businessesOption = usersList.users.map((user) => {
        return {
          value: user.id,
          content: (
            <Option>
              <WrapperBusinessImage>
                {user.photo && <BusinessImage bgimage={user.photo} />}
              </WrapperBusinessImage>
              <OptionContent>
                <OptionName>
                  {user.name} {user.lastname}
                </OptionName>
              </OptionContent>
            </Option>
          )
        }
      })

      for (const option of _businessesOption) {
        _businessesOptionList.push(option)
      }
    }
    setCustomerTypes(_businessesOptionList)
  }, [usersList])

  return (
    <>
      {!usersList.loading ? (
        <MultiSelect
          defaultValue={cartFilterValues.customerIds}
          placeholder={Placeholder}
          options={customerTypes}
          optionInnerMargin='10px'
          optionInnerMaxHeight='150px'
          optionBottomBorder
          onChange={(customer) => handleChangeCustomers(customer)}
        />
      ) : (
        <div>
          <Skeleton style={{ width: '100%', height: '44px' }} />
        </div>
      )}
    </>
  )
}

export const CustomerSelector = (props) => {
  const customerSelectorProps = {
    ...props,
    UIComponent: CustomerSelectorUI,
    deafultUserTypesSelected: [3],
    propsToFetch: ['name', 'lastname', 'photo']
  }
  return <UsersListController {...customerSelectorProps} />
}
