import React, { forwardRef } from 'react'
import { getCurrenySymbol, verifyDecimals } from '../../../utils'
import { useUtils, useLanguage, useConfig } from 'ordering-components-admin'
import { PrintContainer, PrintTextContainer, ProductComments, ProdcutCommentsContainer, Products, InfoContainer, InsideInfo2, InsideInfo, PrintProductsContainer, PrintProducts } from './styles'

export const OrderToPrintTicket = forwardRef((props, ref) => {
  const {
    order,
    getOrderStatus
  } = props

  const [, t] = useLanguage()
  const [{ configs }] = useConfig()
  const [{ parseDate, parsePrice, parseNumber }] = useUtils()

  const deliveryStatus = {
    1: t('DELIVERY', 'Delivery'),
    2: t('PICK_UP', 'Pick up'),
    3: t('EAT_IN', 'Eat In'),
    4: t('CURBSIDE', 'Curbside'),
    5: t('DRIVER_THRU', 'Driver thru')
  }

  const getProductPrice = (product) => {
    let subOptionPrice = 0
    if (Array.isArray(product.options)) {
      if (product.options?.length > 0) {
        for (const option of product.options) {
          for (const suboption of option.suboptions) {
            subOptionPrice += suboption.quantity * suboption.price
          }
        }
      }
    }

    const price = product.quantity * (product.price + subOptionPrice)
    return parseFloat(price.toFixed(2))
  }

  const getFormattedSubOptionName = ({ quantity, name, position, price }) => {
    if (name !== 'No') {
      const pos = position && position !== 'whole' ? `(${t(position.toUpperCase(), position)})` : ''
      return pos
        ? `${quantity} x ${name} ${pos} + ${parsePrice(price)}`
        : `${quantity} x ${name} + ${parsePrice(price)}`
    } else {
      return 'No'
    }
  }

  const getSuboptions = (suboptions) => {
    const array = []
    suboptions && suboptions.length > 0 &&
      suboptions.map((suboption) => {
        const string = `${getFormattedSubOptionName(suboption)}`
        array.push(string)
      })

    return array.join('')
  }

  const getIncludedTaxesDiscounts = () => {
    return order?.taxes?.filter(tax => (tax?.type === 1 && tax?.target === 'product'))?.reduce((carry, tax) => carry + (tax?.summary?.tax_after_discount ?? tax?.summary?.tax), 0)
  }

  const getIncludedTaxes = (isDeliveryFee) => {
    if (!order?.taxes) return 0
    if (order?.taxes?.length === 0) {
      return order.tax_type === 1 ? order?.summary?.tax ?? 0 : 0
    } else {
      return order?.taxes.reduce((taxIncluded, tax) => {
        return taxIncluded + (((!isDeliveryFee && tax.type === 1 && tax.target === 'product') || (isDeliveryFee && tax.type === 1 && tax.target === 'delivery_fee')) ? tax.summary?.tax : 0)
      }, 0)
    }
  }

  const getOptions = (options, productComment = '') => {
    const array = []

    options && options.length &&
    options.map((option) => {
      const string =
        `${option.name} ${getSuboptions(option.suboptions)}`
      array.push(string)
    })

    if (productComment) {
      array.push(`${t('COMMENT', 'Comment')}${productComment}`)
    }

    return array
  }

  const percentTip =
  parseInt(configs?.driver_tip_type?.value, 10) === 2 &&
  !parseInt(configs?.driver_tip_use_custom?.value, 10) &&
  verifyDecimals(order?.summary?.driver_tip, parseNumber)

  const customerName = `${order?.customer?.name ?? ''} ${order?.customer?.middle_name ?? ''} ${order?.customer?.lastname ?? ''} ${order?.customer?.second_lastname ?? ''}`?.replace('  ', ' ')?.trim() ?? ''

  return (
    <PrintContainer ref={ref}>
      <h1>{t('ORDER_NO', 'Order No.')} {order.id}</h1>
      <PrintTextContainer>
        {getOrderStatus(order?.status)?.value}
        <br />
        {t('DELIVERY_TYPE', 'Delivery Type')}: {deliveryStatus[order?.delivery_type]}
        <br />
        {t('DELIVERY_DATE', 'Delivery Date')}: {order?.delivery_datetime_utc
          ? parseDate(order?.delivery_datetime_utc)
          : parseDate(order?.delivery_datetime, { utc: false })}
        <br />
        {t('PAYMENT_METHOD')}: {order?.paymethod?.name}
      </PrintTextContainer>

      <h1>{t('CUSTOMER_DETAILS', 'Customer details')}</h1>
      <PrintTextContainer>
        {t('FULL_NAME', 'Full Name')}: {customerName}
        <br />
        {t('EMAIL', 'Email')}: {order?.customer?.email}
        <br />
        {t('MOBILE_PHONE', 'Mobile Phone')}: {order?.customer?.cellphone}
        <br />
        {!!order?.customer?.phone && (
          `${t('MOBILE_PHONE', 'Mobile Phone')}: ${order?.customer?.phone}`)}
        {t('FULL_ADDRESS', 'Full Addres')}: {order?.customer?.address}
        {!!order?.customer?.internal_number && (
          `${t('INTERNAL_NUMBER', 'Internal Number')}: ${order?.customer?.internal_number}`)}
        <br />
        {!!order?.customer?.zipcode && (
        `${t('ZIPCODE', 'Zipcode')}: ${order?.customer.zipcode}`
        )}
      </PrintTextContainer>

      <h1>{t('BUSINESS_DETAILS', 'Business details')}</h1>
      <PrintTextContainer>
        {order?.business?.name}
        <br />
        {order?.business?.email}
        <br />
        {!!order?.business?.cellphone && (
          <>
            {`${t('BUSINESS_PHONE', 'Business cellphone')}: ${order?.business?.cellphone}`}
            <br />
          </>
        )}
        {!!order?.business?.phone && (
          <>
            {`${t('BUSINESS_PHONE', 'Business Phone')}: ${order?.business?.phone}`}
            <br />
          </>
        )}
        {t('ADDRESS', 'Address')}: {order?.business?.address}
        <br />
        {!!order?.business?.address_notes && (
          <>
            {`${t('SPECIAL_ADDRESS', 'Special Address')}: ${order?.business?.address_notes}`}
            <br />
          </>
        )}
      </PrintTextContainer>
      <h1>{t('ORDER_DETAILS', 'Order Details')}</h1>
      <br />
      <PrintProductsContainer>
        {order?.products?.length &&
          order?.products?.map((product, i) =>
            <PrintProducts key={i}>
              <Products>
                <InsideInfo>
                  {`${product?.quantity}x ${product?.name}`}
                </InsideInfo>
                <InsideInfo2>
                  {parsePrice(product?.total ?? getProductPrice(product))}
                </InsideInfo2>
              </Products>
              <ProdcutCommentsContainer>
                {getOptions(product?.options, product?.comment)?.map((option, i) => (
                  <ProductComments key={i}>
                    {option}
                  </ProductComments>
                ))}
              </ProdcutCommentsContainer>
            </PrintProducts>
          )}
      </PrintProductsContainer>
      <br />
      <InfoContainer>
        <InsideInfo>
          {t('SUBTOTAL', 'Subtotal')}
        </InsideInfo>
        <InsideInfo2>
          {parsePrice(((order?.summary?.subtotal ?? order?.subtotal) + getIncludedTaxes()), { currency: getCurrenySymbol(order?.currency) })}
        </InsideInfo2>
      </InfoContainer>

      {(order?.summary?.discount > 0 ?? order?.discount > 0) && order?.offers?.length === 0 && (
        <InfoContainer>
          {order?.offer_type === 1
            ? (
              <InsideInfo>
                {t('DISCOUNT', 'Discount')}{' '}
                {`(${verifyDecimals(order?.offer_rate, parsePrice)}%)`}
              </InsideInfo>
            ) : (
              <InsideInfo>{t('DISCOUNT', 'Discount')}</InsideInfo>
            )}
          <InsideInfo2>- {parsePrice(order?.summary?.discount ?? order?.discount, { currency: getCurrenySymbol(order?.currency) })}</InsideInfo2>
        </InfoContainer>
      )}

      {order?.offers?.length > 0 && order?.offers?.filter(offer => offer?.target === 1)?.map(offer => (
        <InfoContainer key={offer.id}>
          <InsideInfo>
            {t(offer?.name?.toUpperCase()?.replaceAll(' ', '_'), offer.name)}
            {offer.rate_type === 1 && (
              `${' '}${`(${verifyDecimals(offer?.rate, parsePrice)}%)`}`
            )}
          </InsideInfo>
          <InsideInfo2>
            - {parsePrice(offer?.summary?.discount, { currency: getCurrenySymbol(order?.currency) })}
          </InsideInfo2>
        </InfoContainer>))}

      {order?.summary?.subtotal_with_discount > 0 && order?.summary?.discount > 0 && order?.summary?.total >= 0 && (
        <InfoContainer>
          <InsideInfo>{t('SUBTOTAL_WITH_DISCOUNT', 'Subtotal with discount')}</InsideInfo>
          {order?.tax_type === 1
            ? <InsideInfo2>{parsePrice((order?.summary?.subtotal_with_discount + getIncludedTaxesDiscounts() ?? 0), { currency: getCurrenySymbol(order?.currency) })}</InsideInfo2>
            : <InsideInfo2>{parsePrice(order?.summary?.subtotal_with_discount ?? 0, { currency: getCurrenySymbol(order?.currency) })}</InsideInfo2>}
        </InfoContainer>
      )}

      {order?.taxes?.length === 0 && order?.tax_type === 2 && (
        <>
          <InfoContainer>
            <InsideInfo>
              {t('TAX', 'Tax')}
              {' '}
              {`(${verifyDecimals(order?.tax, parseNumber)}%)`}
            </InsideInfo>
            <InsideInfo2>
              {parsePrice(order?.summary?.tax ?? 0, { currency: getCurrenySymbol(order?.currency) })}
            </InsideInfo2>
          </InfoContainer>
        </>
      )}

      {order?.fees?.length === 0 && (
        <InfoContainer>
          <InsideInfo>
            {t('SERVICE_FEE', 'Service fee')}
            {' '}
            {`(${verifyDecimals(order?.service_fee, parseNumber)}%)`}
          </InsideInfo>
          <InsideInfo2>{parsePrice(order?.summary?.service_fee ?? 0, { currency: getCurrenySymbol(order?.currency) })}</InsideInfo2>
        </InfoContainer>
      )}

      {order?.taxes?.length > 0 && order?.taxes?.filter(tax => tax?.type === 2 && tax?.rate !== 0 && tax?.target === 'product').map(tax => (
        <InfoContainer key={tax?.id}>
          <InsideInfo>
            {t(tax?.name?.toUpperCase()?.replaceAll(' ', '_'), tax?.name) || t('INHERIT_FROM_BUSINESS', 'Inherit from business')}
            {' '}
            {`(${verifyDecimals(tax?.rate, parseNumber)}%)`}
          </InsideInfo>
          <InsideInfo2>{parsePrice(tax?.summary?.tax_after_discount ?? tax?.summary?.tax ?? 0, { currency: getCurrenySymbol(order?.currency) })}</InsideInfo2>
        </InfoContainer>
      ))}

      {order?.fees?.length > 0 && order?.fees?.filter(fee => !(fee?.fixed === 0 && fee?.percentage === 0))?.map(fee => (
        <InfoContainer key={fee.id}>
          <InsideInfo>
            {t(fee?.name?.toUpperCase()?.replace(/ /g, '_'), fee?.name) || t('INHERIT_FROM_BUSINESS', 'Inherit from business')}
            ({fee?.fixed > 0 && `${parsePrice(fee?.fixed)} + `}{fee.percentage}%)
          </InsideInfo>
          <InsideInfo2>{parsePrice(fee?.summary?.fixed + (fee?.summary?.percentage_after_discount ?? fee?.summary?.percentage) ?? 0, { currency: getCurrenySymbol(order?.currency) })}</InsideInfo2>
        </InfoContainer>
      ))}

      {order?.offers?.length > 0 && order?.offers?.filter(offer => offer?.target === 3)?.map(offer => (
        <InfoContainer key={offer.id}>
          <InsideInfo>
            {t(offer.name?.toUpperCase()?.replace(/ /g, '_'), offer.name)}
            {offer.rate_type === 1 && (
              `${' '}${`(${verifyDecimals(offer?.rate, parsePrice)}%)`}`
            )}
          </InsideInfo>
          <InsideInfo2>
            - {parsePrice(offer?.summary?.discount, { currency: getCurrenySymbol(order?.currency) })}
          </InsideInfo2>
        </InfoContainer>
      ))}

      {order?.summary?.delivery_price > 0 && (
        <InfoContainer>
          <InsideInfo>
            {t('DELIVERY_FEE', 'Delivery Fee')}
          </InsideInfo>
          <InsideInfo2>
            {parsePrice(order?.summary?.delivery_price + getIncludedTaxes(true), { currency: getCurrenySymbol(order?.currency) })}
          </InsideInfo2>
        </InfoContainer>
      )}

      {order?.taxes?.length > 0 && order?.taxes?.filter(tax => tax?.type === 2 && tax?.rate !== 0 && tax?.target === 'delivery_fee').map(tax => (
        <InfoContainer key={tax?.id}>
          <InsideInfo>
            {t(tax?.name?.toUpperCase()?.replace(/ /g, '_'), tax?.name) || t('INHERIT_FROM_BUSINESS', 'Inherit from business')}
            {' '}{`(${verifyDecimals(tax?.rate, parseNumber)}%)`}
          </InsideInfo>
          <InsideInfo2>{parsePrice(tax?.summary?.tax_after_discount ?? tax?.summary?.tax ?? 0)}</InsideInfo2>
        </InfoContainer>
      ))}

      {order?.offers?.length > 0 && order?.offers?.filter(offer => offer?.target === 2)?.map(offer => (
        <InfoContainer key={offer.id}>
          <InsideInfo>
            {t(offer?.name?.toUpperCase()?.replaceAll(' ', '_'), offer.name)}
            {offer.rate_type === 1 && (
              `${' '}${`(${verifyDecimals(offer?.rate, parsePrice)}%)`}`
            )}
          </InsideInfo>
          <InsideInfo2>
            - {parsePrice(offer?.summary?.discount, { currency: getCurrenySymbol(order?.currency) })}
          </InsideInfo2>
        </InfoContainer>
      ))}

      <InfoContainer>
        <InsideInfo>
          {t('DRIVER_TIP', 'Driver tip')}
          {percentTip ? `(${percentTip}%)` : ''}
        </InsideInfo>
        <InsideInfo2>
          {parsePrice(order?.summary?.driver_tip ?? order?.totalDriverTip, { currency: getCurrenySymbol(order?.currency) })}
        </InsideInfo2>
      </InfoContainer>

      <InfoContainer>
        <InsideInfo>
          {t('TOTAL', 'Total')}
        </InsideInfo>
        <InsideInfo2>
          {parsePrice(order?.summary?.total ?? 0)}
        </InsideInfo2>
      </InfoContainer>
    </PrintContainer>
  )
})

OrderToPrintTicket.displayName = 'OrderToPrintTicket'
