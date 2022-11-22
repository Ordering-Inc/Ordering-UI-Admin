import styled, { css } from 'styled-components'

export const ZoneContainer = styled.div`
  margin: 30px 0 20px 0;
  @media (min-width: 1000px) {
    max-width: 500px;
  }
`

export const DeliveryZonesTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  thead {
    border-bottom: 1px solid ${props => props.theme.colors.borderColor};
    tr {
      th {
        font-size: 12px;
        font-weight: 700;
        padding: 10px 0;
      }
    }
  }
`

export const DeliveryZonesTableWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 20px;
`

export const CheckSkeleteon = styled.div`
  width: 18px;
  height: 18px;
  margin-right: 5px;
`

export const InfoBlock = styled.div`
  width: 100%;
`

export const ZoneTbody = styled.tbody`
  cursor: pointer;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  tr {
    td {
      font-size: 14px;
      padding: 13px 0;
      &.arrow {
        font-size: 13px;
        color: ${props => props.theme.colors.secundaryLight};
      }
    }
  }
  &:hover {
    background-color: ${props => props.theme.colors.lightPrimary};
  }
  ${({ active }) => active && css`
    background-color: ${props => props.theme.colors.lightPrimary};
    td {
      border-top: 1px solid ${props => props.theme.colors.primary};
      border-bottom: 1px solid ${props => props.theme.colors.primary};
    }
  `}
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
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`
export const CheckboxWrapper = styled.div`
  display: flex;
  ${props => props.theme?.rtl ? css`
    margin-left: 10px;
  ` : css`
    margin-right: 10px;
  `}
`
