import styled, { css } from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  height: 100%;
`

export const ZoneContainer = styled.div`
  flex: 1;
  @media (min-width: 576px) {
    padding: 20px;
  }
`

export const Header = styled.div`
  display: flex;
  h1 {
    font-size: 24px;
    color: ${props => props.theme.colors.headingColor};
  }

  svg {
    cursor: pointer;
    color: ${props => props.theme.colors.primary};
    font-size: 24px;
    ${props => props.theme?.rtl ? css`
      margin-right: 10px;
    ` : css`
      margin-left: 10px;
    `}
  }
`

export const DeliveryZonesContainer = styled.div`
  width: 100%;
  > div:first-child {
    > div {
      font-weight: 600;
    }
  }
`

export const DeliveryZoneWrapper = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #E9ECEF;
  > div {
    color: ${props => props.theme.colors.headingColor};
    font-size: 14px;
    padding: 10px 0;
    >input{
      width: 100%;
      color: ${props => props.theme.colors.headingColor};
      border: 1px dashed ${props => props.theme.colors.lightGray};
      outline: none;
      &::placeholder,
      &::-webkit-input-placeholder {
        color: #c9c9c9;
      }
      &:focus {
        border: 1px dashed ${props => props.theme.colors.primary};
      }
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    input[type=number] {
      -moz-appearance: textfield;
    }
  }
`

export const DeliveryZoneFormWrapper = styled.form`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #E9ECEF;
  > div {
    color: ${props => props.theme.colors.headingColor};
    font-size: 14px;
    padding: 10px 0;
    >input{
      width: 100%;
      color: ${props => props.theme.colors.headingColor};
      border: 1px dashed ${props => props.theme.colors.lightGray};
      outline: none;
      &::placeholder,
      &::-webkit-input-placeholder {
        color: #c9c9c9;
      }
      &:focus {
        border: 1px dashed ${props => props.theme.colors.primary};
      }
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    input[type=number] {
      -moz-appearance: textfield;
    }
  }
`

export const ZoneName = styled.div`
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  ${props => props.theme?.rtl ? css`
    margin-left: 5px;
  ` : css`
    margin-right: 5px;
  `}
`
export const ZoneMin = styled.div`
  width: 60px;
  ${props => props.theme?.rtl ? css`
    margin-left: 5px;
  ` : css`
    margin-right: 5px;
  `}
`
export const ZonePrice = styled.div`
  width: 60px;
  ${props => props.theme?.rtl ? css`
    margin-left: 5px;
  ` : css`
    margin-right: 5px;
  `}
`
export const ZoneActions = styled.div`
  ${({ disabled }) => disabled && css`
     pointer-events: none;
  `}
  width: 140px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const EnableWrapper = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;

  span {
    font-size: 14px;

    ${props => props.theme?.rtl ? css`
      padding-left: 10px;
    ` : css`
      padding-right: 10px;
    `}
  }
`

export const DropDownWrapper = styled.div`
  ${({ disabled }) => disabled && css`
     pointer-events: none;
  `}
  button {
    background: #F8F9FA !important;
    border: none;
    padding: 0px;
    svg {
      color: ${props => props.theme.colors.headingColor};
    }

    &:after {
      display: none;
    }
  }

  > div {
    > div {
      border: 1px solid #E9ECEF;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
      border-radius: 8px;
      a:last-child {
        color: #E63757;
      }
    }
  }
`

export const ActionsWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const AddDeliveryZoneButton = styled.div`
  color: ${props => props.theme.colors.lightGray};
  font-size: 14px;
  padding: 10px 0;
  cursor: pointer;
  width: fit-content;
`

export const AddButton = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;
  outline: unset;
  svg {
    font-size: 20px;
    color: ${props => props.theme.colors.primary};
  }

  span {
    font-size: 14px;
    color: ${props => props.theme.colors.headingColor};
  }
`
