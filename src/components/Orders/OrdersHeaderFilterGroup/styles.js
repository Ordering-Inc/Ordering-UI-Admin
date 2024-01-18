import styled, { css } from 'styled-components'

export const WrapperRow = styled.div`
  display: flex;
  width: 100% !important;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 10px;
  padding-bottom: 0px;

  & > div {
    width: 100%;
    height: 47px;
    max-width: 1000px;
    margin-right: 10px;
    margin-bottom: 20px;
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

  @media (min-width: 992px) {
    flex-direction: row;
  }

  ${({ wrapperWidth, isSelectedOrders }) => wrapperWidth < 992 && css`
      flex-direction: column !important;
      padding: ${!isSelectedOrders && '15px 10px 0 10px'};
  `}
`
export const Option = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: ${props => props.theme.colors.secundaryContrast};
  display: flex;
  align-items: center;
  padding: 5px;
`
