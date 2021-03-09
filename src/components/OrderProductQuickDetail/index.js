import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { useLanguage, useUtils, OrderDetails as OrderDetailsController } from 'ordering-components-admin'
import {
  OrderProductsQuickDetailContainer,
  OrderProductsInner,
  ProductTable,
  ProductImageContainer,
  WrapperProductImage,
  AccordionImage,
  AccordionContent,
  ProductOptionsList,
  ProductComment,
  WrapSkelton
} from './styles'
const OrderProductsQuickDetailUI = (props) => {
  const {
    order,
    loading
  } = props.order

  const [, t] = useLanguage()
  const [{ parsePrice, parseNumber }] = useUtils()

  const getFormattedSubOptionName = ({ quantity, name, position, price }) => {
    if (name !== 'No') {
      const pos = position ? `(${position})` : ''
      return price > 0 ? `${name} ${pos} ${parsePrice(quantity * price)}` : `${name} ${pos}`
    } else {
      return 'No'
    }
  }

  const getProductPrice = (product) => {
    let subOptionPrice = 0
    if (product.options.length > 0) {
      for (const option of product.options) {
        for (const suboption of option.suboptions) {
          subOptionPrice += suboption.quantity * suboption.price
        }
      }
    }

    const price = product.quantity * (product.price + subOptionPrice)
    return parseFloat(price.toFixed(2))
  }

  return (
    <>
      {loading ? (
        <WrapSkelton>
          <ProductTable skeleton='skeleton'>
            <thead>
              <tr>
                <th><Skeleton width={70} /></th>
                <th><Skeleton width={70} /></th>
                <th><Skeleton width={70} /></th>
                <th><Skeleton width={70} /></th>
                <th><Skeleton width={70} /></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Skeleton width={50} height={50} />
                  <Skeleton width={70} />
                </td>
                <td><Skeleton width={70} /></td>
                <td><Skeleton width={70} /></td>
                <td><Skeleton width={70} /></td>
                <td><Skeleton width={70} /></td>
              </tr>
              <tr>
                <td><Skeleton width={50} height={50} /></td>
                <td><Skeleton width={70} /></td>
                <td><Skeleton width={70} /></td>
                <td><Skeleton width={70} /></td>
                <td><Skeleton width={70} /></td>
              </tr>
              <tr className='subFee'>
                <td />
                <td />
                <td />
                <td><Skeleton width={80} /></td>
                <td><Skeleton width={80} /></td>
              </tr>
              <tr className='subFee'>
                <td />
                <td />
                <td />
                <td><Skeleton width={80} /></td>
                <td><Skeleton width={80} /></td>
              </tr>
              <tr className='subFee'>
                <td />
                <td />
                <td />
                <td><Skeleton width={80} /></td>
                <td><Skeleton width={80} /></td>
              </tr>
              <tr className='totalFee'>
                <td />
                <td />
                <td />
                <td><Skeleton width={80} /></td>
                <td><Skeleton width={80} /></td>
              </tr>
            </tbody>
          </ProductTable>
        </WrapSkelton>
      ) : (
        <OrderProductsQuickDetailContainer>
          <OrderProductsInner>
            <ProductTable>
              <thead>
                <tr>
                  <th>{t('NAME', 'Name')}</th>
                  <th>{t('PRICE', 'Price')}</th>
                  <th>{t('QTY', 'QTY')}</th>
                  <th>{t('DISC.', 'Disc.')}</th>
                  <th>{t('Total', 'Total')}</th>
                </tr>
              </thead>

              <tbody>
                {order.products.map((product) => {
                  return (
                    <tr key={product.id}>
                      <td>
                        <ProductImageContainer>
                          <WrapperProductImage>
                            <AccordionImage bgimage={product.images} />
                          </WrapperProductImage>
                          {product.name}
                        </ProductImageContainer>

                        <AccordionContent>
                          {product.ingredients.length > 0 && product.ingredients.some(ingredient => !ingredient.selected) && (
                            <ProductOptionsList>
                              <p>{t('INGREDIENTS', 'Ingredients')}</p>
                              {product.ingredients.map((ingredient) => !ingredient.selected && (
                                <li className='ingredient' key={ingredient.id}>
                                  <span>{t('NO', 'No')} {ingredient.name}</span>
                                </li>
                              ))}
                            </ProductOptionsList>
                          )}
                          {product.options.length > 0 && (
                            <ProductOptionsList>
                              {product.options.map((option, i) => (
                                <li key={i}>
                                  <p>{option.name}</p>
                                  <ProductOptionsList className='suboption'>
                                    {option.suboptions.map(suboption => (
                                      <React.Fragment key={suboption.id}>
                                        <li>
                                          <span>
                                            {getFormattedSubOptionName({
                                              quantity: suboption.quantity,
                                              name: suboption.name,
                                              position: (suboption.position !== 'whole') ? t(suboption.position.toUpperCase(), suboption.position) : '',
                                              price: suboption.price
                                            })}
                                          </span>
                                        </li>
                                      </React.Fragment>
                                    ))}
                                  </ProductOptionsList>
                                </li>
                              ))}
                            </ProductOptionsList>
                          )}
                          {product.comment && (
                            <ProductComment>
                              <p>{t('COMMENT', 'Comment')}</p>
                              <h3>{product.comment}</h3>
                            </ProductComment>
                          )}
                        </AccordionContent>

                      </td>
                      <td>{parsePrice(product?.price)}</td>
                      <td>X {product.quantity}</td>
                      <td>{product.comment}</td>
                      <td>{parsePrice(getProductPrice(product))}</td>
                    </tr>
                  )
                })}

                <tr className='subFee'>
                  <td />
                  <td />
                  <td />
                  <td>{t('SUBTOTAL', 'Subtotal')}</td>
                  <td>
                    {parsePrice(order?.summary?.subtotal)}
                  </td>
                </tr>
                {order?.summary?.discount && (
                  <tr className='subFee'>
                    <td />
                    <td />
                    <td />
                    <td>{t('DISCOUNT', 'Discount')}</td>
                    <td>-{parsePrice(order?.summary?.discount)}</td>
                  </tr>
                )}
                {order?.summary?.tax > 0 && (
                  <tr className='subFee'>
                    <td />
                    <td />
                    <td />
                    <td>{t('TAX', 'Tax')} ({parseNumber(order?.tax)}%)</td>
                    <td>
                      {parsePrice(order?.summary?.tax)}
                    </td>
                  </tr>
                )}
                <tr className='subFee'>
                  <td />
                  <td />
                  <td />
                  <td>{t('DELIVERY_FEE', 'Delivery Fee')}</td>
                  <td>{parsePrice(order?.summary?.delivery_price)}</td>
                </tr>
                {order?.summary?.driver_tip > 0 && (
                  <tr className='subFee'>
                    <td />
                    <td />
                    <td />
                    <td>{t('DRIVER_TIP', 'Driver Tip')}</td>
                    <td>{parsePrice(order?.summary?.driver_tip)}</td>
                  </tr>
                )}
                {order?.summary?.service_fee > 0 && (
                  <tr className='subFee'>
                    <td />
                    <td />
                    <td />
                    <td>{t('SERVICE_FEE', 'Service Fee')} ({parseNumber(order?.service_fee)}%)</td>
                    <td>{parsePrice(order?.summary?.service_fee)}</td>
                  </tr>
                )}
                <tr className='totalFee'>
                  <td />
                  <td />
                  <td />
                  <td>{t('TOTAL', 'Total')}</td>
                  <td>{parsePrice(order?.summary?.total)}</td>
                </tr>
              </tbody>
            </ProductTable>
          </OrderProductsInner>
        </OrderProductsQuickDetailContainer>
      )}
    </>
  )
}

export const OrderProductsQuickDetail = (props) => {
  const orderDetailsProps = {
    ...props,
    asDashboard: true,
    UIComponent: OrderProductsQuickDetailUI
  }

  return (
    <OrderDetailsController {...orderDetailsProps} />
  )
}
