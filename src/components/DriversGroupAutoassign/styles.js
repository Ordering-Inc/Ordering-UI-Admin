import styled, { css } from 'styled-components'

export const AutoassignContainer = styled.div`
  width: 100%;
  padding: 20px;

  h1 {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 30px;
  }
`

export const AutoassignItem = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    white-space: nowrap;
    font-size: 12px;
    margin-top: 10px;
    color: ${props => props.theme.colors.lightGray};
  }
  ${({ active }) => active && css`
    p {
      color: ${props => props.theme.colors.headingColor};
    }
    > div {
      background-color: ${props => props.theme.colors.primary};
    }
  `}

  ${props => props.theme?.rtl ? css`
    margin-left: 20px;
  ` : css`
    margin-right: 20px;
  `}
`

export const IconImage = styled.div`
  -webkit-mask: url(${({ url }) => url}) no-repeat center;
  mask: url(${({ url }) => url}) no-repeat center;
  width: 95px;
  height: 95px;
  background-color: ${props => props.theme.colors.borderColor};
`

export const CustomItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0px 10px;

  ${({ active }) => active && css`
    svg {
      color: ${props => props.theme.colors.primary};
    }

    p {
      color: ${props => props.theme.colors.headingColor};
    }
  `}
`

export const ForcedAssignSettingWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;

  p {
    margin-bottom: 0px;
    font-size: 14px;
    ${props => props.theme?.rtl ? css`
      margin-right: 15px;
    ` : css`
      margin-left: 15px;
    `}
  }
`

export const MaxDistanceCustomerContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 35px;

  > div:first-child {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 12px;

    p {
      margin-bottom: 0px;
      &:first-child {
        font-size: 14px;
      }
      &:not(:first-child) {
        font-size: 12px;
        color: ${props => props.theme.colors.lightGray};
      }
    }
  }
`

export const RowGroupContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  > div {
    width: calc(50% - 10px);
  }
`

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;

  span {
    font-size: 14px;
    ${props => props.theme?.rtl ? css`
      margin-right: 15px;
    ` : css`
      margin-left: 15px;
    `}
  }
`

export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;

  label {
    font-size: 14px;
    margin-bottom: 12px;
  }

  ${({ isPink }) => isPink && css`
    input {
      &:focus {
        border-color: #ff0095;
      }
    }
  `}
  ${({ isGreen }) => isGreen && css`
    input {
      &:focus {
        border-color: #0b720b;
      }
    }
  `}
  ${({ isBlue }) => isBlue && css`
    input {
      &:focus {
        border-color: ${props => props.theme.colors.primary};
      }
    }
  `}
`

export const InputsGroup = styled.div`
  display: flex;
  align-items: center;
  input {
    width: 75px;
  }

  strong {
    margin: 0 20px;
  }
`

export const AreaWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 70%;
  margin: auto 0;
`

export const LargeArea = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid ${props => props.theme.colors.borderColor};
  border-radius: 50%;
  position: absolute;

  ${({ active }) => active && css`
    border-color: #ff0095;
  `}
`

export const MediumArea = styled.div`
  width: 70%;
  height: 70%;
  border: 1px solid ${props => props.theme.colors.borderColor};
  border-radius: 50%;
  position: absolute;
  ${({ active }) => active && css`
    border-color: #0b720b;
  `}
`

export const SmallArea = styled.div`
  width: 40%;
  height: 40%;
  border: 1px solid ${props => props.theme.colors.borderColor};
  border-radius: 50%;
  position: absolute;
  ${({ active }) => active && css`
    border-color: ${props => props.theme.colors.primary};
  `}
`
