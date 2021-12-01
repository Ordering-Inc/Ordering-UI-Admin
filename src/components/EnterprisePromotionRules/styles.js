import styled, { css } from 'styled-components'

export const FormInput = styled.form`
  > button {
    height: 44px;
    margin-top: 44px;
    margin-bottom: 30px;
  }
`
export const SectionTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin: 24px 0 18px 0;
`
export const CouponContainer = styled.div`
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};  
`
export const CouponHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  cursor: pointer;

  ${({ active }) => active && css`
    svg {
      color: ${props => props.theme.colors.primary};
    }
  `}

  > span {
    font-size: 14px;
    ${props => props.theme?.rtl ? css`
      margin-right: 13px;
    ` : css`
      margin-left: 13px;
    `}
  }
`
export const ShowInCartContainer = styled.div`
  display: flex;

  ${props => props.theme?.rtl ? css`
    margin-right: 30px;
  ` : css`
    margin-left: 30px;
  `}

  > div {
    p {
      margin: 0;
      &:first-child {
        font-size: 14px;
      }
      &:last-child {
        font-size: 12px;
        color: ${props => props.theme.colors.lightGray};
      }
    }
    ${props => props.theme?.rtl ? css`
      margin-right: 10px;
    ` : css`
      margin-left: 10px;
    `}
  }
`
export const CouponContent = styled.div`
`
export const CouponCodeContainer = styled.div`
  margin-top: 26px;
  margin-bottom: 17px;
  display: flex;
  flex-direction: column;

  ${props => props.theme?.rtl ? css`
    margin-right: 30px;
  ` : css`
    margin-left: 30px;
  `}

  label {
    font-size: 14px;
    margin-bottom: 8px;
  }
`
export const DiscountOption = styled.div`
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  padding: 12px 0;
  cursor: pointer;

  ${({ active }) => active && css`
    svg {
      color: ${props => props.theme.colors.primary};
    }
  `}

  > span {
    font-size: 14px;
    ${props => props.theme?.rtl ? css`
      margin-right: 13px;
    ` : css`
      margin-left: 13px;
    `}
  }
`
export const CondtionItem = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  > span {
    font-size: 14px;
    ${props => props.theme?.rtl ? css`
      margin-right: 13px;
    ` : css`
      margin-left: 13px;
    `}
  }

  ${({ active }) => active && css`
    svg {
      color: ${props => props.theme.colors.primary};
    }
  `}
`
export const Option = styled.div`
  color: ${props => props.theme.colors.secundaryContrast};
  font-size: 14px;
  white-space: nowrap;
`
export const SelectWrapper = styled.div`
  .select {
    width: 100%;
    background: ${props => props.theme.colors.secundary};
    border: none;

    > div:first-child {
      padding-top: 4px;
      padding-bottom: 4px;
    }
  }
`
export const FreeProductSection = styled.div`
  margin-top: 27px;
  > div {
    &:first-child {
      display: flex;
      justify-content: space-between;
      margin-bottom: 18px;
      span {
        &:first-child {
          font-size: 16px;
          font-weight: 600;
        }
        &:last-child {
          cursor: pointer;
          color: ${props => props.theme.colors.primary};
          font-weight: 500;
          font-size: 12px;
        }
      }
    }
    &:last-child {
      display: flex;
      align-items: center;
      span {
        color: ${props => props.theme.colors.secundaryLight};
        ${props => props.theme?.rtl ? css`
          margin-right: 13px;
        ` : css`
          margin-left: 13px;
        `}
      }
    }
  }
`
export const ProductImageWrapper = styled.div`
  border-radius: 8px;
  background: ${props => props.theme.colors.borderColor};
  width: 38px;
  height: 38px;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 16px;
    color: #ADB5BD;
  }
`
export const DiscountContainer = styled.div`
  display: flex;
  margin-top: 30px;

  > div {
    flex: 1;
    display: flex;
    flex-direction: column;

    label {
      font-size: 14px;
      margin-bottom: 12px;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      display: none;
    }
    
    &:first-child {
      ${props => props.theme?.rtl ? css`
        margin-left: 20px;
      ` : css`
        margin-right: 20px;
      `}

      .select {
        background: ${props => props.theme.colors.secundary};
        border: none;

        > div:first-child {
          padding-top: 4px;
          padding-bottom: 4px;
        }
      }
    }
  }
`
