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

  @media (max-width: 1300px) {
    flex-direction: column;
    row-gap: 30px;
    & > div {
      width: 100%;
    }
  }
`
