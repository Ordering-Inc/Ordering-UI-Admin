import styled from 'styled-components'

export const FilterGroupListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 50px;

  & > div {
    width: 47%;

    & > div {
      &: first-child {
        height: 65px;
      }
    }
  }

  @media (max-width: 576px) {
    flex-direction: column;
    row-gap: 30px;
    & > div {
      width: 100%;
    }
  }
`
