import styled, { css } from 'styled-components'

export const DetailsContainer = styled.div`
`
export const FormInput = styled.form`
  > button {
    height: 44px;
    top: 100%;
    position: sticky;
    margin: 30px 0 20px 0;
  }
`
export const FormInnerContainer = styled.div`
`
export const PromotionImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin: 20px auto;

  @media (min-width: 768px){
    width: auto;
  }
`
export const Image = styled.div`
  width: 110px;
  height: 110px;
  border-radius: 8px;
  overflow: hidden;
  cursor: -webkit-grab;
  cursor: grab;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  position: relative;

  img,
  div {
    width: 100%;
    border-radius: 8px;
    height: 100%;
    overflow: hidden;
  };

  img{
    object-fit: cover;
  }
`
export const UploadImageIconContainer = styled.div`
  position: absolute;
  top: 0px;
  background: rgba(0,0,0,0.1);
  padding: 4px;
`

export const UploadImageIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #ADB5BD;
  span {
    font-size: 12px;
  }

  svg {   
    font-size: 25px;
  }
`
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  label {
    font-size: 14px;
    margin-bottom: 10px;
  }
`
export const DateRangeWrapper = styled.div`
  label {
    margin-bottom: 10px;
    font-size: 14px;
  }
`
export const CalendarContainer = styled.div`
  position: relative;
  > button {
    height: 43px;
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
  background: #FFFFFF;
  border: 1px solid ${props => props.theme.colors.borderColor};
  box-sizing: border-box;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
  border-radius: 7.6px;
  z-index: 100;
  position: absolute;
  margin-top: 18px;
  overflow: hidden;
  ${props => props.theme?.rtl ? css`
    right: 0px;
  ` : css`
    left: 0px;
  `}
  .rdrDateRangeWrapper {
    .rdrDateDisplayWrapper {
      background-color: transparent;
    }

    .rdrDateDisplayItem {
      border: 1px solid ${props => props.theme.colors.borderColor};
      box-shadow: none;
    }

    button {
      ${({ notSelected }) => notSelected ? css`
        .rdrStartEdge,
        .rdrEndEdge,
        .rdrInRange {
          color: transparent !important;
        }
      ` : css`
        .rdrStartEdge,
        .rdrEndEdge,
        .rdrInRange {
          color: ${props => props.theme.colors.lightPrimary} !important;
        }
      `}
    }

    .rdrDay:not(.rdrDayPassive) .rdrInRange ~ .rdrDayNumber span, .rdrDay:not(.rdrDayPassive) .rdrStartEdge ~ .rdrDayNumber span, .rdrDay:not(.rdrDayPassive) .rdrEndEdge ~ .rdrDayNumber span, .rdrDay:not(.rdrDayPassive) .rdrSelected ~ .rdrDayNumber span {
      color: ${props => props.theme.colors.headingColor};
    }
  }
`
export const SelectGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;

  > div {
    width: calc(50% - 24px);
  }
`
export const LabelWrapper = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 14px;
    margin-bottom: 10px;
    text-decoration: capitalize;
  }
`
export const OrderPriorityContainer = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;

  label {
    font-size: 14px;
    margin-bottom: 10px;
  }
  .select {
    ${props => props.theme?.rtl ? css`
      margin-left: 2px;
    ` : css`
      margin-right: 2px;
    `}
    font-size: 14px;
    background: ${props => props.theme.colors.secundary};
    border: none;
    > div:first-child {
      padding-top: 5px;
      padding-bottom: 5px;
    }
    .list {
      > div {
        white-space: nowrap;
      }
    }
  }
`
export const StackableContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;

  > span {
    font-size: 14px;
    ${props => props.theme?.rtl ? css`
      margin-left: 10px;
    ` : css`
      margin-right: 10px;
    `}
  }
`
