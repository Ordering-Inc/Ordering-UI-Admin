import styled from 'styled-components'

export const FilterGroupListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 50px;

  & > div {
    width: 48%;

    & > div {
      &: first-child {
        height: 65px;
      }
    }
  }

  @media (max-width: 1300px) {
    row-gap: 30px;
  }

  @media (max-width: 576px) {
    flex-direction: column;
    row-gap: 30px;
    & > div {
      width: 100%;
    }
  }
`
export const WrapperRow = styled.div`
  display: flex;
  width: 100% !important;
  justify-content: space-between;

  & > div {
    width: 48%;

    & > div {
      &: first-child {
        height: 65px;
      }
    }
  }

  .date-filter-container {
    z-index: 100;
  }

  > input {
    width: 48%;
    height: 65px;
    color: #000;
    box-sizing: border-box;
    padding: 0 20px;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    -moz-appearance: textfield;
  }

  @media (max-width: 1300px) {
    flex-direction: column;
    row-gap: 30px;
    & > div {
      width: 100%;
    }
  }
`
