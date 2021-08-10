import styled, { css } from 'styled-components'

export const Container = styled.div`
  padding: 20px 0;

  > button {
    height: 42px;
    margin-top: 10px;
  }
`

export const PromotionImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: auto;
  }
`

export const Image = styled.div`
  position: relative;
  width: 90px;
  height: 90px;
  border-radius: 8px;
  overflow: hidden;
  background: ${props => props.theme.colors.borderColor};
  cursor: -webkit-grab;
  cursor: grab;
  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.1));
  margin-bottom: 5px;

  img,
  div:first-child {
    width: 100%;
    border-radius: 8px;
    height: 100%;
    border: none;
    overflow: hidden;
  };

  img{
    object-fit: cover;
  }
`

export const Camera = styled.div`
  position: absolute;
  background-color: #FFF;
  border-radius: 8px;
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 7px;
  ${props => props.theme?.rtl ? css`
    left: 7px;
  ` : css`
    right: 7px;
  `}
  svg {
    font-size: 14px;
    color: ${props => props.theme.colors.secundaryContrast};
  }
`

export const UploadImageIcon = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  span {
    margin: 0;
    font-size: 10px;
    color: #ADB5BD;
  }

  svg {
    width: 25px;
    height: 25px;
    color: #ADB5BD;
  }
`

export const SkeletonWrapper = styled.div`
  span{
    height: 100%;
    position: relative;
    top: -2.5px;
  }
`

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`

export const Label = styled.label`
  font-size: 14px;
  margin-bottom: 10px;
`

export const DateRangeWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const CalendarContainer = styled.div`
  position: relative;
  > button {
    height: 42px;
    span {
      ${props => props.theme?.rtl ? css`
        margin-right: 10px;
      ` : css`
        margin-left: 10px;
      `}
    }
  }
`

export const CalendarWrapper = styled.div`
  padding-top: 15px;
  background: #FFFFFF;
  border: 1px solid ${props => props.theme.colors.borderColor};
  box-sizing: border-box;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
  border-radius: 7.6px;
  z-index: 100;
  position: absolute;
  top: 100%;
  width: 300px;
  margin-top: 18px;
  ${props => props.theme?.rtl ? css`
    right: 0px;
  ` : css`
    left: 0px;
  `}

  .DateRangePicker__PaginationArrow:hover {
    background: none;
    > div {
      transition: all 0.3s;
      transform: scale(1.1);
    }
    .DateRangePicker__PaginationArrowIcon--previous {
      border-right: 8px solid ${props => props.theme?.colors.headingColor};
    }
    .DateRangePicker__PaginationArrowIcon--next {
      border-left: 8px solid ${props => props.theme?.colors.headingColor};
    }
  }

  .DateRangePicker__MonthHeader {
    color: #748194;
  }

  table {
    border-collapse: collapse;
    border: none;

    thead {
      th {
        border: none;
      }
    }

    tbody {
      td {
        color: ${props => props.theme.colors.headingColor};
        .DateRangePicker__CalendarHighlight {
          border: 1px solid ${props => props.theme?.colors.primary};
        }
      }
    }

    .DateRangePicker__Date {
      border: none;
    }

    .DateRangePicker__CalendarSelection {
      background: #E9F2FE;
      color: ${props => props.theme.colors.headingColor};
      border: none;
    }

    .DateRangePicker__Date--weekend {
      background-color: #FFFFFF;
    }

    .DateRangePicker__WeekdayHeading abbr[title] {
      color: #909BA9;
    }
  }
`

export const PromotionTypeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 40px 0 25px 0;
  > div {
    &:first-child {
      ${props => props.theme?.rtl ? css`
        margin-left: 20px;
      ` : css`
        margin-right: 20px;
      `}
    }
  }
`

export const PromotionTypeWrapper = styled.div`
  flex: 1;
  cursor: pointer;
  display: flex;
  align-items: center;

  svg {
    color: ${props => props.theme.colors.secundaryLight};

    ${({ active }) => active && css`
      color: ${props => props.theme.colors.primary};
    `}
  }

  span {
    color: ${props => props.theme.colors.headingColor};
    font-size: 14px;
    ${props => props.theme?.rtl ? css`
      margin-right: 10px;
    ` : css`
      margin-left: 10px;
    `}
  }
`

export const DiscountContainer = styled.div`
  display: flex;
  margin-bottom: 30px;

  > div {
    flex: 1;
    display: flex;
    flex-direction: column;

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
        padding-top: 4px;
        padding-bottom: 4px;
        font-size: 14px;
        border: none;
        background-color: ${props => props.theme.colors.secundary};
      }
    }
  }
`

export const MinimumLimitContainer = styled.div`
  display: flex;
  margin-bottom: 30px;

  > div {
    flex: 1;
    display: flex;
    flex-direction: column;

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
    }
  }
`
