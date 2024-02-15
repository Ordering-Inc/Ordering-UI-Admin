import React from 'react'
import styled, { css } from 'styled-components'

export const Container = styled.div`
  flex: 1;
  padding: 20px;
  box-sizing: border-box;
  transition: all 0.5s;
  max-height: 100vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
  position: relative;
`
export const SpinnerLoaderWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 100;

  > div {
    height: 100%;
  }
`
export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`
export const HeaderTitleContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  h1 {
    font-size: 20px;
    margin: 0px;
    line-height: 30px;
    font-weight: 700;
  }
  > button {
    ${props => props.theme?.rtl ? css`
      margin-left: 8px;
      margin-right: -8px;
    ` : css`
      margin-right: 8px;
      margin-left: -8px;
    `}

    svg {
      width: 25px;
      height: 25px;
    }
  }
`
export const DriverGroupName = styled.span`
  cursor: pointer;
`
export const DriverGroupSelectorWrapper = styled.div`
  position: relative;
  width: fit-content;
  margin: 3px 0;

  > span {
    font-size: 14px;
    color: ${props => props.theme.colors.secundaryLight};
    &.calendar {
      color: ${props => props.theme.colors.primary};
    }
  }

  > svg {
    margin: 0 10px;
  }
`

export const CalendarHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`
export const CalendarLabelContainer = styled.div`
  display: flex;
  align-items: center;

  span.label {
    font-weight: 600;
    font-size: 16px;
    margin: 0 3px;
    color: ${props => props.theme.colors.headingColor};
  }
  > button {
    > svg {
      width: 16px;
      height: 16px;
    }
  }
`
export const ViewButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  button {
    margin: 0 3px;
  }
`
export const EventContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid ${props => props.theme.colors.gray};
  padding: 2px 5px;
  border-radius: 8px;
  height: 100%;

  > div.info {
    width: calc(100% - 42px);
    p {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    p.name {
      font-size: 12px;
      font-weight: 500;
      line-height: 18px;
      margin: 0;
    }
    p.date {
      font-size: 10px;
      line-height: 15px;
      color: ${props => props.theme.colors.lightGray};
      margin: 0;
    }
  }
`

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: relative;
`

export const EventProfessionalPhoto = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    object-fit: cover;
  }
  svg {
    width: 85%;
    height: 85%;
  }
`

export const Option = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  column-gap: 5px;

  p {
    margin: 0px;
    white-space: nowrap;
    font-size: 14px;
    line-height: 26px;
    color: ${props => props.theme.colors.secundaryContrast};
  }

  ${({ noPadding }) => noPadding && css`
    padding: 0px;
  `}
`

export const DeleteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const OrderStatusTypeSelectWrapper = styled.div`
  position: relative;

  .select {
    font-size: 14px;
    background: ${props => props.theme.colors?.secundary};
    height: 44px;
    border: 1px solid ${props => props.theme.colors?.secundary};
  }

  .list {
    width: 100%;
  }
`

export const DriversGroupFilterWrapper = styled.div`
  > button {
    background: #F8F9FA;
    border-radius: 7.6px;
    padding: 7px 12px;
    font-size: 14px;
    color: #748194;
    border: none;
  }

  @media (min-width: 600px) {
    margin-left: 25px;
    ${props => props.theme.rtl && css`
      margin-right: 25px;
      margin-left: 0;
    `}
  }
`

export const DriversGroupCalendarWrapper = styled(DriversGroupFilterWrapper)`
  position: relative;
  display: flex;
  > button {
    svg {
      font-size: 16px;
      margin-right: 12px;
      ${props => props.theme.rtl && css`
        margin-left: 12px;
        margin-right: 0;
      `}
    }
  }

  @media only screen and (min-width: 374px) and (max-width: 450px) {
    .ordering-calendar {
      right: calc((100vw - 374px) / 2);
    }
  }
`

export const AnalyticsTimeZoneWrapper = styled(DriversGroupFilterWrapper)``

export const UsersConatiner = styled.div`
  margin-top: 20px;
`

export const UserTableWrapper = styled.div`
  overflow: auto;
`

export const UsersTable = styled.table`
  color: ${props => props.theme.colors?.headingColor};
  overflow: auto;

  td {
    padding: 10px 0;
    font-size: 14px;
    border-right: 1px solid ${props => props.theme.colors.borderColor};
  }

  th {
    padding: 10px 0;
    font-size: 14px;
    white-space: nowrap;
    padding: 0 10px;
    border-right: 1px solid ${props => props.theme.colors.disabled};
    border-left: 1px solid ${props => props.theme.colors.disabled};
    text-align: center;
    &:first-child {
      border-left: none;
      border-right: none;
    }
  }

  thead {
    tr {
      border-bottom: 1px solid ${props => props.theme.colors.disabled};
    }
  }

  tbody {
    border-bottom: 1px solid ${props => props.theme.colors.borderColor};

  }
`

export const UserName = styled.span`
  font-size: 14px;
  font-weight: 600;
  max-width: 190px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: ${props => props.theme.colors.headingColor};
`

export const TimeOptions = styled.div`
  white-space: nowrap;
  font-size: 15px;
`

export const SplitLine = styled.div`
  height: 1px;
  width: 8px;
  margin: 0 8px;
  background-color: ${props => props.theme.colors.disabled};
`

export const SelectWrapper = styled.div`
  border: 1px solid ${props => props.theme.colors.borderColor};
  border-radius: 8px;
  width: 70px;
  display: flex;
  margin-left: 10px;
  justify-content: center;
  .select {
    border: none;
    svg {
      display: none;
    }
    > div {
      padding-left: 13px;
      padding-right: 13px;
      font-size: 13px;
      > div:last-child {
        margin: 0px;
      }
    }
  }

  .list {
    .options {
      > div {
        > div {
          min-width: initial;
        }
      }
    }
  }

  @media (min-width: 450px) {
    width: 95px;
    .select {
      > div {
        font-size: 16px;
      }
    }
  }
`

export const SelectTitleWrappre = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 300px;
`

export const SelectTitle = styled.span``

export const WrapperImage = styled.div`
  max-width: 45px;
  max-height: 45px;
  height: 45px;
  width: 45px;
  min-width: 45px;
  ${({ isSkeleton }) => !isSkeleton && css`
    border: 1px solid #E3E3E3;
  `}
  border-radius: 10px;

  svg {
    width: 100%;
    height: 100%;
    padding: 7px;
    box-sizing: border-box;
    border-radius: 50%;
  }

  ${props => props.theme?.rtl ? css`
    margin-left: 10px;
  ` : css`
    margin-right: 0px;
  `}
`

const ImageStyled = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  object-fit: cover;
  background-position: center;
  border-radius: 8px;
`
export const Image = (props) => {
  return (
    <ImageStyled
      {...props}
      style={{ backgroundImage: `url(${props.bgimage})` }}
    >
      {props.children}
    </ImageStyled>
  )
}

export const UserMainInfo = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  gap: 10px;

  ${props => props.theme?.rtl ? css`
    margin-left: 20px;
    padding-left: 10px;
  ` : css`
    padding: 0px 5px;
  `}

  > div:last-child {
    flex: 1;
  }
`

export const CheckBoxWrapper = styled.div`
  cursor: pointer;
  ${props => props.theme?.rtl ? css`
    margin-left: 10px;
  ` : css`
    margin-right: 10px;
  `}
  svg {
    font-size: 24px;
    color: #B1BCCC;
  }

  ${({ isChecked }) => isChecked && css`
    svg {
      color: ${props => props.theme.colors?.primary};
    }
`}
`

export const DeleteBlock = styled.span`
  color: ${props => props.theme.colors.lightGray};
`

export const DeleteButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  position: absolute;
  bottom: 20px;
  right: 20px;
`

export const InfoBlock = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  display: flex;
  flex-direction: column;

  span {
    margin: 5px 0 0 0;
    font-size: 12px;
    color: ${props => props.theme.colors.lightGray};
    text-overflow: ellipsis;
    overflow: hidden;
  }
  span.bold {
    margin: 0px;
    font-size: 14px;
    font-weight: 600;
    color: ${props => props.theme.colors.headingColor};
  }
`
export const UserTypeWrapper = styled.div`
  ${props => props.theme?.rtl ? css`
    border-left: 1px solid ${props => props.theme.colors.borderColor};
    margin-left: 20px;
  ` : css`
    border-right: 1px solid ${props => props.theme.colors.borderColor};
    margin-right: 20px;
  `}
  > div {
    display: flex;

    .select {
      border: none;
      padding: 0px;

      > div {
        padding: 0px;
      }
    }

    .list {
      .options {
        border: 1px solid #E9ECEF;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
        border-radius: 8px;
      }
    }
  }
  > p {
    margin: 5px 0 0 0;
    font-size: 12px;
    color: ${props => props.theme.colors.lightGray};
  }
`

export const UserEnableWrapper = styled.div`
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
export const WrapperPagination = styled.div`
  display: flex;
  align-items: center;
`

export const UsersBottomContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 38px;
`

export const VerifiedItem = styled.span`
  font-size: 10px;
  background-color: ${props => props.theme.colors.lightGreen};
  padding: 3px 10px;
  border-radius: 50px;
  color: ${props => props.theme.colors.green};
  display: flex;
  align-items: center;

  svg {
    font-size: 12px;
    ${props => props.theme?.rtl ? css`
      margin-left: 3px;
    ` : css`
      margin-right: 3px;
    `}
  }
`
export const VerifiedItemsContainer = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;

  ${props => props.theme?.rtl ? css`
    left: 10px;
  ` : css`
    right: 10px;
  `}

  > span {
    &:not(:first-child) {
      margin-top: 5px;
    }
  }
`
export const UserIdWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
`
export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  > div {
    &:not(:first-child) {
      ${props => props.theme?.rtl ? css`
        margin-right: 25px;
      ` : css`
        margin-left: 25px;
      `}
    }
  }
`

export const UsersListingContainer = styled.div`
  flex: 1;
  padding: 20px;
  box-sizing: border-box;
  transition: all 0.5s;
  max-height: 100vh;
  overflow: auto;

  @media print {
    display: none;
  }
`

export const ButtonWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 70%;
  top: 11px;
  z-index: 80;

  ${props => (props.rowPosition || props.rowPosition === 0) && css`
  left: ${(props.rowPosition * props.cellWidth + 285)}px;
  `}
`

export const StackedBlock = styled.div`
  border: 1px solid #B1BCCC;
  border-radius: 6px;
  padding: 6px;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 3px 4px rgba(238,250,255);
  }
`

export const Block = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 70%;
  border: 1px solid #B1BCCC;
  border-radius: 6px;
  min-height: 40px;
  padding: 5px 10px;
  background-color: #FFF;
  cursor: pointer;
  top: 11px;
  z-index: 80;
  ${props => props.innerWidth && css`
    width: ${props.innerWidth}px;
  `}
  ${props => (props.rowPosition || props.rowPosition === 0) && css`
    left: ${(props.rowPosition * props.cellWidth + 249 + (props.cellPosition === 0 ? 0 : props.cellSections * props.cellPosition))}px;
  `}

  &:hover {
    box-shadow: 0px 0px 3px 4px rgba(238,250,255);
    z-index: 90;
  }

  p {
    margin: 0px;
    font-size: 12px;
    color: #B1BCCC;
  }
`

export const EmptyBlock = styled.div`
  height: 100%;
  min-height: 50px;
  cursor: pointer;
`

export const UserRow = styled.tr`
  position: relative;

  td {
    max-width: 214.2px;
  }
`

export const HoursHeader = styled.th`
  max-width: 86px;
  min-width: 86px;
`

export const ThId = styled.th`
  max-width: 34.6px;
  min-width: 34.6px;
`

export const ThName = styled.th`
  max-width: 214.2px;
  min-width: 214.2px;
`

export const WeekHeader = styled.th`
  max-width: 160px;
  min-width: 160px;

  span {
    text-transform: uppercase;
    font-weight: 300;
  }

  h4 {
    font-weight: bold;
  }
`

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
  position: relative;
  min-height: 500px;
  .react-datepicker-popper {
    z-index: 1000;
  }

  span {
    font-weight: 600;
  }

  input {
    margin: 5px 0 10px 0;
    border: 1px solid #DEE2E6;
    color: ${props => props.theme.colors.headingColor};
    width: 100%;
    &:focus {
      border: 1px solid #B1BCCC;
    }
  }

  textarea {
    margin-bottom: 10px;
    width: 100%;
  }
`

export const FormControl = styled.div`
  > label {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 10px;
  }
  input {
    width: 100%;
    height: 44px;
  }
`

export const RrulesListWrapper = styled.div`
  display: flex;
  gap: 20px;
`

export const RrulesItem = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 0;
  cursor: pointer;

  svg {
    font-size: 16px;
    color: ${props => props.theme.colors.secundaryLight};
    &.active {
      color: ${props => props.theme.colors.primary};
    }
    margin-right: 10px;
    ${props => props.theme.rtl && css`
      margin-left: 20px;
      margin-right: 0px;
    `}
  }
  span {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
  }
`

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  width: 100%;
  button:nth-child(2){
    margin-left: 10px;
  }
`

export const WeekDayCheckWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  gap: 10px;

  > input {
    ${props => props.theme?.rtl ? css`
      margin-left: 5px;
    ` : css`
      margin-right: 5px;
    `}
  }
  h4 {
    font-size: 12px;
    margin: 0px;
    text-transform: capitalize;
  }
`

export const ShowBreakBlocksWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

export const ChecksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const SelectsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  gap: 20px;
`

export const BlocksWrapper = styled.div`
  display: flex;
  justifyContent: space-between;
  gap: 60px;
`

export const DateBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const DriverMultiSelectorContainer = styled.div`
  > div {
    max-width: 400px;
    min-width: 150px;
  }
`

export const WrapperRow = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 0px;

  & > div {
    height: 55px;
    max-width: 400px;
    margin-right: 10px;
    background-color: ${props => props.theme.colors.secundary};
    border: none;
    font-size: 14px;
    border-radius: 8px;
    > div:first-child {
      height: 100%;
    }
  }

  .order-status-multi-select {
    p {
      padding: 0;
      color: ${props => props.theme.colors.headingColor} !important;
    }
  }

  .date-filter-container {
    z-index: 100;
  }

  input {
    width: 100%;
    height: 47px;
    padding: 10px 25px;
    box-sizing: border-box;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    -moz-appearance: textfield;
  }

  .close {
    right: 8px;
  }

  .external_id {
    @media (max-width: 1200px) {
     flex: auto;
    }
  }

  @media (max-width: 798px) {
    flex-direction: column !important;
    padding: 10px 15px 0 0px;
    & > div {
      margin-top: 15px;
    }
  }

  ${({ isSelectedOrders }) => isSelectedOrders && css`
      flex-direction: column !important;
      padding: ${!isSelectedOrders && '10px 15px 0 0px'};
      & > div {
        margin-top: 15px;
      }
  `}
`

export const WarningMessage = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  z-index: 100;
  bottom: 20px;
  background: ${props => props.theme.colors.warning100};
  border: 1px solid ${props => props.theme.colors.warning};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
  border-radius: 7.6px;
  padding: 0px 15px;
  box-sizing: border-box;
  margin: 10px 0px 0px 0px !important;

  right: 0px;
  ${props => props.theme?.rtl && css`
    left: 0px;
    right: initial;
  `}

  svg {
    font-size: 20px;
    color: ${props => props.theme.colors.warning};
  }

  span {
    font-size: 12px;
    line-height: 18px;
    color: ${props => props.theme.colors.headingColor};
    margin: 0 10px;
    flex: 1;
  }

  a {
    font-size: 12px;
    white-space: nowrap;
  }

  @media (min-width: 768px) {
    padding: 0px 20px;
    font-size: 14px;
    line-height: 24px;
    ${({ isLateralBar }) => isLateralBar ? css`
      right: 0px;
    ` : css`
      right: 0px;
    `}
    ${({ isLateralBar }) => isLateralBar ? css`
      bottom: -25px;
    ` : css`
      bottom: -35px;
    `}
    ${props => props.theme?.rtl && css`
      left: 0px;
      right: initial;
    `}

    span {
      white-space: nowrap;
    }
  }
`
